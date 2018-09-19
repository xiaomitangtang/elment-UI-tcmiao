<template>
    <div class='swx-search-tree'>
        <el-input size="mini" :value="inputText" @input="selfInput"
                  :readOnly="readOnly"
                  class="swx-input swx-input-mini" @click.native.stop="showtree=true" :clearable="true" @clear="clear" v-bind="inputBind"></el-input>
        <transition name="searchTreeFade">
            <div class="swx-search-tree-treebox" v-if="showtree">
                <el-tree
                        ref="searchtree"
                        class="swx-tree-arrow-style-two  swx-checkbox"
                        :data="treeData"
                        :expand-on-click-node="true"
                        @node-click="nodeClick"
                        :filter-node-method="filterNode"
                        :render-content="renderContent"
                        v-bind="treeBind"
                        :option="treeOptions"
                >
                </el-tree>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  name: "swx-search-tree",
  props: {
    value: {
      type: String,
      default: ""
    },
    treeData: { type: Array },
    treeOptions: {
      type: Object,
      default: () => ({
        label: "label",
        children: "children",
        disabled: "disabled",
        isLeaf: "isLeaf"
      })
    },
    treeBind: {
      type: Object
    },
    inputBind: { type: Object },
    closeOnClickTree: { type: Boolean, default: false },
    readOnly: { type: Boolean, default: false },
    filterNode: {
      type: Function,
      default: function(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      resetFunc: "",
      showtree: false,
      inputText: "",
      filterText: ""
    };
  },
  methods: {
    clear() {
      this.inputText = "";
      this.filterText = "";
      this.$emit("input", "");
    },
    selfInput(val) {
      this.inputText = val;
      this.filterText = val;
      this.$emit("input", val);
    },
    nodeClick(data, node, com) {
      this.inputText = node.label;
      this.filterText = "";
      this.$emit("input", this.inputText);
      this.$emit("treeNodeClick", data, node, com);
      if (this.closeOnClickTree) {
        this.showtree = false;
      }
    },
    renderContent(h, { node }) {
      let temClass = "swx-icon-span swx-icon-span-" + node.level;
      return (
        <span>
          <span class={temClass} />
          {node.data.label}
        </span>
      );
    }
  },
  watch: {
    filterText(val) {
      this.$refs.searchtree.filter(val);
    }
  },
  mounted() {
    this.resetFunc = () => {
      this.showtree = false;
    };
    document.addEventListener("click", this.resetFunc);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.resetFunc);
  }
};
</script>
<style lang="less">
.swx-search-tree {
  position: relative;
  .swx-search-tree-treebox {
    position: absolute;
    width: 100%;
    min-height: 150px;
    max-height: 250px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    overflow: auto;
  }
}
.searchTreeFade-enter-active,
.searchTreeFade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.searchTreeFade-enter,
.searchTreeFade-leave-active {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
