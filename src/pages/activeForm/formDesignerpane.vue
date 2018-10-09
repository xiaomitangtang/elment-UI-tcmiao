<template>
  <div class='target' @drop.stop.prevent="drop" @dragover.prevent.stop >
    <el-form ref="myform" :model="formModel" :rules="formRule" label-position="left">
      <el-row class="myform-el-row" :gutter="5">
        <template v-for="(item ,index) in formItemList">
          <div style="clear: both" v-if="index%layout===0&&openLayout" :key="'formitemclear'+index"></div>
          <el-col class="my-element"  :style="{width:item.settings.handleWidth}"
                  :key="panelName+'col'+index" :span="item.span" :offset="item.offset"  :class="{editItem:edit}"
                  @dragstart.native="formItemDragStart(item,$event)" @dragenter.native="dropToIndex=index"
                  @dblclick.native="formItemClick({index,item})">
            <el-button      v-if="edit" size="mini" type="text" icon="el-icon-circle-close"  class="close-item" @click.stop="delFormItem(index,item)"></el-button>
            <el-form-item   v-if="showformItem" :label="item.label"  :id="item.elId" :label-width="item.labelWidth?(item.labelWidth+'px'):'1px'" :prop="item.key">
              <myElement    :draggable="edit"   :formModel="formModel" :innerdata="item"></myElement>
            </el-form-item>
            <div class="resizeBar" v-if="edit" @click.stop.passive @mousedown.stop.prevent="myelformItemResize($event,item)"  ></div>
      <!--      <div class="changeWidthbtns" v-if="edit" @click.stop.prevent>
              <span @click="changeFormItemWidth(item,'del')" class="el-icon-remove"></span>
              <span @click="changeFormItemWidth(item,'add')" class="el-icon-circle-plus"></span>
            </div>-->
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import formDesignerStatic from "./formDesignerStatic";
export default {
  name: "formDesignerpane",
  props: {
    formItemList: { type: Array, default: () => [] },
    panelName: { type: String }
  },
  data() {
    return {
      showformItem: true,
      formData: {},
      formModalData: { settings: {} },
      nowFormItem: null,
      formItemSettingsValue: formDesignerStatic.formItemSettingsValue,
      dragedItem: null,
      dropToIndex: -1,
      formModel: {},
      formRule: {}
    };
  },
  inject: ["formDedigner"],
  methods: {
    getSettings: formDesignerStatic.getSettings,
    getDefauleVal: formDesignerStatic.getDefauleVal,
    getDefaultRule: formDesignerStatic.getDefaultRule,
    /*    changeFormItemWidth(item, type) {
      if (type === "del") {
        if (item.span < 4) {
          return;
        }
        item.span--;
      } else if (type === "add") {
        if (item.span >= 24) {
          return;
        }
        item.span++;
      }
    },*/
    saveFormStyle(formModalData) {
      if (formModalData.span !== this.nowFormItem.span) {
        formModalData.settings.handleWidth = null;
      }
      if (formModalData.label) {
        formModalData.label = formModalData.label.trim();
      }
      if (formModalData.texts) {
        formModalData.settings.texts = formModalData.texts
          .split("-")
          .slice(0, formModalData.settings.max);
      }
      Object.keys(formModalData).forEach(key => {
        this.nowFormItem[key] = formModalData[key];
      });
    },
    formItemClick({ item }) {
      if (!this.edit) {
        return;
      }
      let temp = Object.assign({}, item);
      temp.settings = Object.assign({}, item.settings);
      this.nowFormItem = item;
      temp.settings = this.getSettings(item);
      this.$emit("formDesignerpaneItemClick", this, temp);
    },
    formItemDragStart(item) {
      if (!this.edit) {
        return;
      }
      this.dragedItem = item;
      this.$emit("setNowFormPaneAndnowFormPaneDragItem", this, this.dragedItem);
    },
    delDragItem() {
      let dragItemIndex = this.formItemList.indexOf(this.dragedItem);
      this.formItemList.splice(dragItemIndex, 1);
      this.dragedItem = null;
      this.dropToIndex = this.formItemList.length - 1;
    },
    dropFromInner() {
      if (this.dragedItem.component === "el-textarea") {
        this.dropToIndex = this.formItemList.length - 1;
      }
      if (this.dragedItem.component === "el-upload") {
        this.dropToIndex = this.findLastToIndex(this.formItemList.length - 1);
      }
      let dragItemIndex = this.formItemList.indexOf(this.dragedItem);
      if (this.dropToIndex + 1 > 0) {
        if (dragItemIndex < this.dropToIndex) {
          this.formItemList.splice(this.dropToIndex + 1, 0, this.dragedItem);
          this.formItemList.splice(dragItemIndex, 1);
        } else if (dragItemIndex > this.dropToIndex) {
          this.formItemList.splice(this.dropToIndex + 1, 0, this.dragedItem);
          this.formItemList.splice(dragItemIndex + 1, 1);
        }
      } else {
        this.formItemList.splice(dragItemIndex, 1);
        this.formItemList.push(this.dragedItem);
      }
      this.dragedItem = null;
    },
    dropFromOuter(com, outDragItem) {
      let tempcom = outDragItem || {
        component: com,
        settings: {},
        span: 24 / this.$store.state.formDesigner.layout,
        label: "",
        key: com + Math.floor(Math.random() * 100000),
        val: "",
        offset: 0,
        isRequire: false,
        dataType: { value: "" },
        labelWidth: 1
      };
      if (com === "el-textarea") {
        this.dropToIndex = -1;
        tempcom.span = 24;
        tempcom.settings = { type: "textarea", rows: 5 };
      }
      if (com === "el-upload") {
        this.dropToIndex = this.findLastToIndex(this.formItemList.length - 1);
      }
      if (this.dropToIndex + 1 > 0) {
        this.formItemList.splice(this.dropToIndex + 1, 0, tempcom);
      } else {
        if (
          this.formItemList.length &&
          this.formItemSettingsValue.mustLastFormItem.indexOf(
            this.formItemList[0].component
          ) + 1
        ) {
          this.formItemList.splice(0, 0, tempcom);
        } else {
          this.formItemList.push(tempcom);
        }
      }
    },
    dropFromPane() {
      this.formDedigner.nowFormPane.delDragItem();
      let outDragItem = this.formDedigner.nowFormPaneDragItem;
      this.dropFromOuter(outDragItem.component, outDragItem);
    },
    drop() {
      if (!this.edit) {
        return;
      }
      let com = this.activeFormDragSrc;
      this.dropToIndex = this.findLastToIndex(this.dropToIndex);
      if (this === this.formDedigner.nowFormPane) {
        // 如果父组件中记录的pane与本身相同，说明是自己内部拖动（包括拖出去又拖回来）
        if (!this.dragedItem) {
          return;
        }
        this.dropFromInner();
      } else if (com && com.startsWith("el-")) {
        // 如果不是内部拖动，先判断是不是设计器拖动过来的elment的组件
        this.dropFromOuter(com);
      } else {
        // 如果不是内部拖动，也不是设计器拖动过来的组件，   在判断是不是从另一个pane拖动过来的，不是则停止
        if (!this.formDedigner.nowFormPane) {
          return;
        }
        this.dropFromPane();
      }
      this.dropToIndex = this.formItemList.length - 1;
      this.$emit("setNowFormPaneAndnowFormPaneDragItem", null, null);
      this.activeFormDragSrc = null;
    }, // 拖拽放置目标元素内事件，用于处理表单
    findLastToIndex(toindex) {
      if (
        toindex > -1 &&
        this.formItemSettingsValue.mustLastFormItem.indexOf(
          this.formItemList[toindex].component
        ) + 1
      ) {
        return this.findLastToIndex(toindex - 1);
      } else {
        return toindex;
      }
    }, // 为了限制某些元素只能放到最后，对dropToIndex进行一次查询
    myelformItemResize(ev, item) {
      let x = ev.clientX;
      let formWidth = this.$refs.myform.$el.offsetWidth;
      let itemCol = ev.target.offsetParent;
      let itemColW = itemCol.offsetWidth;
      this.formItemMouseMove = e => {
        e = e || event;
        let tempWidth = ((itemColW + (e.clientX - x)) / formWidth) * 100;
        if (tempWidth < 10 || tempWidth > 100) return;
        this.$set(item.settings, "handleWidth", tempWidth + "%");
      };
      window.addEventListener("mousemove", this.formItemMouseMove);
      window.addEventListener("mouseup", this.myelformItemStopResize);
    },
    myelformItemStopResize() {
      window.removeEventListener("mousemove", this.formItemMouseMove);
      window.removeEventListener("mouseup", this.myelformItemStopResize);
    },
    validField() {
      let flag = false;
      this.$refs.myform.validate(valid => {
        flag = valid;
        this.formItemList.forEach(item => {
          item.val = this.formModel[item.key];
        });
      });
      return flag;
    },
    delFormItem(index) {
      this.formItemList.splice(index, 1);
      this.dropToIndex = this.formItemList.length - 1;
    },
    changemodel() {
      let tempmodel = {};
      let temprule = {};
      this.showformItem = false;
      this.formItemList.forEach(item => {
        tempmodel[item.key] = this.getDefauleVal(item);
        temprule[item.key] = this.getDefaultRule(item, tempmodel[item.key]);
      });
      this.formModel = tempmodel;
      this.formRule = temprule;
      this.$nextTick(() => {
        this.showformItem = true;
      });
    }
  },
  components: {
    myElement: () => import("./myElement.vue")
  },
  computed: {
    edit: {
      get() {
        return this.$store.state.formDesigner.edit;
      }
    },
    layout: {
      get() {
        this.formItemList.forEach(item => {
          if (item.component === "el-textarea") {
            return;
          }
          item.span = 24 / this.$store.state.formDesigner.layout;
        });
        return this.$store.state.formDesigner.layout;
      }
    },
    openLayout: {
      get() {
        return this.$store.state.formDesigner.openLayout;
      }
    },
    activeFormDragSrc: {
      get() {
        return this.$store.state.formDesigner.activeFormDragSrc;
      },
      set(val) {
        this.$store.commit("formDesigner/setActiveFormDragSrc", val);
      }
    }
  },
  updated() {
    this.$emit("panelUpdated");
  },
  watch: {
    formItemList() {
      this.changemodel();
    }
  },
  mounted() {
    this.$emit("PanelMounted", this);
  },
  beforeDestroy() {
    this.$emit("PanelDestory", this);
  }
};
</script>
