<template>
    <div class='anka-form'  >
        <div class="anka-form-part" v-for="(tab,index) in anka?anka.CaseCardTemplete.TabsList:[]" :key="'form'+index">
            <div class="form-list-title"
                 @drop="dropedOnTitle(tab,index)"
                 @dragover.prevent.stop
                 @dblclick="titleDbClick(tab)"
            >{{tab.TabsName}}</div>
            <ul class="form-list-ul" >
                <li class="form-list-item" :class="{'anka-form-active':currenTable===form}"
                    @click="formClick(form,tab)" v-for="(form,index2) in tab.TableList"
                    :key="'form'+index+index2"
                    draggable="true"
                    @dblclick="itemDbClick(form)"
                    @dragstart="dragStart(tab,form,index,index2)"
                    @drop="dropedOnItem(tab,form,index,index2)" @dragover.prevent.stop
                >{{form.TableName}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    anka: { type: Object },
    currenTable: { type: Object }
  },
  data() {
    return {
      forms: [
        {
          title: "受理情况",
          list: [{ text: "基本信息" }, { text: "侵犯知识产权情况" }]
        },
        {
          title: "嫌疑人审结及变更情况",
          list: [
            { text: "审结情况" },
            { text: "审结变更情况" },
            { text: "羁押必要性审查" }
          ]
        }
      ]
    };
  },
  methods: {
    formClick(table, tab) {
      this.$emit("ankaTableClick", { table, tab });
    },
    dragStart(tab, item, index, index2) {
      this.$emit("dragItem", { tab, item, tabIndex: index, itemIndex: index2 });
    },
    dropedOnTitle(tab, index) {
      this.$emit("dropedOnTitle", { tab, tabIndex: index });
    },
    dropedOnItem(tab, item, index, index2) {
      this.$emit("dropedOnItem", {
        tab,
        item,
        tabIndex: index,
        itemIndex: index2
      });
    },
    titleDbClick(tab) {
      this.$emit("editName", { type: "tab", tab: tab });
    },
    itemDbClick(form) {
      this.$emit("editName", { type: "table", table: form });
    }
  }
};
</script>
<style lang="less">
.anka-form {
  padding: 20px 15px;
  height: 100%;
  overflow: auto;
  .anka-form-part {
    .form-list-title {
      color: #40638e;
      font-weight: 600;
      font-size: 14px;
    }
    .form-list-ul {
      /*margin: 0;*/
      padding: 0;
      list-style: none;
      .form-list-item {
        position: relative;
        border-bottom: 1px solid #d5e0ee;
        min-height: 40px;
        line-height: 40px;
        list-style: none;
        font-size: 13px;
        color: #7b99b6;
        padding-left: 20px;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 8px;
          margin-top: -2px;
          width: 4px;
          height: 4px;
          background-color: #abc1de;
          border-radius: 50%;
        }
        &:first-child {
          border-top: 1px solid #d5e0ee;
        }
      }
      .anka-form-active {
        background-color: #ddeeff;
        color: #40638e;
        &::before {
          background-color: #40638e;
        }
      }
    }
  }
}
</style>
