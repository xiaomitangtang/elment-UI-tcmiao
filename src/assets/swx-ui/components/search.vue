<template>
        <el-input class="swx-search"
                  :suffix-icon="searchType==='simple'?sufIcon:''"
                  :class="classObj"
                  :placeholder="placeholder"
                  v-model="keywords"
                  clearable
                  @focus="searchInputFocus"
                  @blur="searchInputBlur"
                  @change="searchInputChange"
                  :disabled="disable"
        >
           <template v-if="searchType!=='simple'&&selects.length" >
               <div slot="prepend" :style="prependStyle">
                   <div class="swx-prepend-select-container"  v-for="(select ,index) in selects"  :key="'swx-search-input'+index">
                       <el-select size="mini" v-model="selectList[select.key]"    :placeholder="select.placeholder||'请选择'" @change="selectChange"
                                  :disabled="disable"
                       >
                           <el-option v-for="(item,index) in select.list" :label="item[options.label]" :key="'swx-search-option'+index" :value="item[options.value]"></el-option>
                       </el-select>
                       <span class="swx-search-selects-line" ></span>
                   </div>
               </div>
               <el-button type="primary"   :disabled="disable" @click="search" class="swx-search-btn" slot="append" :icon="sufIcon">{{submitText}}</el-button>
           </template>
        </el-input>
</template>
<script>
export default {
  name: "swx-search",
  props: {
    searchType: { type: String, default: "simple" },
    sufIcon: { type: String, default: "el-icon-search" },
    selects: { type: Array, default: () => [] },
    placeholder: { type: String, default: "请输入" },
    submitText: { type: String, default: "" },
    disable: { type: Boolean, default: false },
    options: {
      type: Object,
      default: () => ({ label: "label", value: "value" })
    }
  },
  data() {
    let tempdata = {
      isFocus: false,
      keywords: "",
      selectList: {}
    };
    this.selects.forEach(item => {
      tempdata.selectList[item.key] = "";
    });
    return tempdata;
  },
  methods: {
    searchInputFocus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    searchInputBlur() {
      this.isFocus = false;
      this.$emit("blur");
    },
    searchInputChange() {
      this.$emit("change", { keywords: this.keywords, keys: this.selectList });
    },
    selectChange() {
      this.$emit("change", { keywords: this.keywords, keys: this.selectList });
    },
    search() {
      this.$emit("search", { keywords: this.keywords, keys: this.selectList });
    }
  },
  watch: {
    keywords(n) {
      this.$emit("change", { keywords: n, keys: this.selectList });
    },
    selects: {
      deep: true,
      handler(n) {
        if (!Array.isArray(n)) {
          alert("你传入的搜索条件应为数组---from  swx-search");
          return;
        }
        let tempList = {};
        n.forEach(item => {
          tempList[item.key] = "";
        });
        this.selectList = tempList;
      }
    }
  },
  computed: {
    prependStyle() {
      if (!this.selects.length) return {};
      if (this.searchType === "selects-small") {
        return { width: this.selects.length * 105 + "px", height: "100%" };
      } else if (this.searchType === "selects-large") {
        return { width: this.selects.length * 127 + "px", height: "100%" };
      }
    },
    classObj() {
      return {
        "swx-simple-search": this.searchType === "simple",
        "swx-search-selects-small": this.searchType === "selects-small",
        "swx-search-selects-large": this.searchType === "selects-large",
        "swx-search-focus": this.isFocus,
        "swx-search-disable": this.disable
      };
    }
  }
};
</script>
<style lang="less" >
.swx-search {
  overflow: hidden;
  .el-select {
    margin: 7px 0 0 0;
    width: 105px;
    background-color: #fff;
    color: #666666;
    .el-input__inner::placeholder {
      color: #ccc;
    }
  }
  .swx-search-selects-line {
    position: absolute;
    top: 20%;
    right: 0;
    z-index: 2;
    height: 60%;
    border-right: 1px solid #cccccc;
  }
  .swx-prepend-select-container {
    position: relative;
    display: inline-block;
    height: 100%;
  }
  .el-input-group__prepend {
    padding: 0;
    background-color: #fff;
    height: 100%;
    border: 1px solid transparent;
  }
  .swx-search-btn {
    width: 100px;
    background-color: #1d83d3 !important;
    border-radius: 0 6px 6px 0;
    margin-right: -22px !important;
    i {
      color: #fff;
      font-size: 16px;
    }
    span {
      color: #fff;
    }
    &:active {
      background-color: #5fa5d3 !important;
    }
  }
}
.swx-simple-search {
  height: 32px;
  input {
    height: 32px;
    padding-left: 13px;
    line-height: 32px;
    font-size: 12px;
  }
  .el-input__icon {
    line-height: 32px;
    font-size: 16px;
    color: #999999;
  }
  &.swx-search-focus .el-input__icon {
    color: #1d83d3;
  }
}
.swx-search-selects-small {
  height: 42px;
  border: 1px solid #1d83d3;
  border-radius: 6px;
  padding: 0 0 0 2px;
  background-color: #fff;
  & > .el-input__inner {
    height: 100%;
    line-height: 42px;
    border: 0;
  }
  .swx-search-btn {
    height: 44px;
  }
}
.swx-search-selects-large {
  height: 48px;
  border: 1px solid #1d83d3;
  border-radius: 6px;
  padding: 0 0 0 2px;
  background-color: #fff;
  & > .el-input__inner {
    height: 100%;
    line-height: 48px;
    border: 0;
  }
  .swx-search-btn {
    height: 60px;
  }
  .el-select {
    margin: 10px 0 0 0;
    width: 127px;
  }
}
.swx-search-disable {
  border: 1px solid #dddddd;
  background-color: #f1f1f1;
  padding: 0;
  .swx-prepend-select-container {
    background-color: #f1f1f1;
  }
  .el-input-group__prepend {
    border: 1px solid #f1f1f1;
  }
  .el-select {
    background-color: transparent;
  }
  .swx-search-btn {
    background-color: #cbcbcb !important;
  }
}
</style>
