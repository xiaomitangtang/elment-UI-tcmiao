<template>
    <div class='pagenation-box' :class="{'simple-pagenation':simplePages,'nofirst':!showFirst,'nolast':!showLast,'small-pagenation':smallPagenation}">
        <div class="swx-pagenation-first" v-if="showFirst" @click="pageChange('first')" :class="{disable:currentPage===1,large:!smallPagenation}">{{firstText}}</div>
        <el-pagination
                class="swx-pagenation"
                ref="swxPagenation"
                background
                :small="smallPagenation"
                :layout="innerlayout"
                v-bind="elProps"
                @current-change="pageChange"
                @size-change="sizeChange"
                @prev-click="preClick"
                @next-click="nextClick"
               >
        </el-pagination>
        <div class="swx-pagenation-last" v-if="showLast" @click="pageChange('last')" :class="{disable:currentPage===totalPage,large:!smallPagenation}">{{lastText}}</div>
    </div>
</template>
<script>
export default {
  name: "swx-pagenation",
  props: {
    elProps: { type: Object, default: () => ({ total: 200 }) }
  },
  data() {
    return {
      currentPage: 1,
      totalPage: 1,
      firstText: "首页",
      lastText: "尾页",
      innerlayout: "prev, pager, next",
      smallPagenation: true,
      showFirst: true,
      showLast: true,
      simplePages: false
    };
  },
  methods: {
    pageChange(page) {
      let pagenation = this.$refs.swxPagenation;
      this.totalPage = pagenation.internalPageCount;
      if (page === "first") {
        if (this.currentPage === 1) return;
        pagenation.internalCurrentPage = 1;
        this.$emit("first", 1);
      } else if (page === "last") {
        if (this.currentPage === this.totalPage) return;
        pagenation.internalCurrentPage = this.totalPage;
        this.$emit("last", this.totalPage);
      }
      this.currentPage = pagenation.internalCurrentPage;
      this.$emit("current-change", this.currentPage);
    },
    sizeChange(count) {
      this.currentPage = this.$refs.swxPagenation.internalCurrentPage;
      this.totalPage = this.$refs.swxPagenation.internalPageCount;
      this.$emit("size-change", count);
    },
    preClick(page) {
      this.$emit("prev-click", page);
    },
    nextClick(page) {
      this.$emit("next-click", page);
    },
    initprops() {
      if (this.elProps.layout) {
        this.innerlayout = this.elProps.layout;
      }
      if (this.elProps.small === false) {
        this.smallPagenation = false;
      }
      if (this.elProps.firstText) {
        this.firstText = this.elProps.firstText;
      }
      if (this.elProps.lastText) {
        this.lastText = this.elProps.lastText;
      }
      if (this.elProps.showFirst === false) {
        this.showFirst = false;
      }
      if (this.elProps.showLast === false) {
        this.showLast = false;
      }
      this.$nextTick(() => {
        this.simplePages =
          this.totalPage <= this.$refs.swxPagenation.pagerCount ? true : false;
      });
    }
  },

  beforeMount() {
    this.initprops();
  },
  watch: {
    elProps: {
      deep: true,
      handler() {
        this.initprops();
      }
    }
  },
  mounted() {
    this.currentPage = this.$refs.swxPagenation.internalCurrentPage;
    this.totalPage = this.$refs.swxPagenation.internalPageCount;
  }
};
</script>
<style lang="less">
.pagenation-box {
  overflow: hidden;
  padding-left: 1px;
  .swx-pagenation-first,
  .swx-pagenation-last {
    float: left;
    padding: 0 13px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    user-select: none;
    color: #606266;
    font-weight: 700;
    height: 28px;
    line-height: 28px;
    background-color: #fff;
    border: 1px solid #cccccc;
    &.disable {
      background-color: #fff;
      color: #cccccc;
      cursor: not-allowed;
    }
    &.large {
      height: 28px;
      line-height: 28px;
    }
  }
  .swx-pagenation {
    float: left;
    padding: 0;
  }
  &.simple-pagenation {
    .swx-pagenation-first {
      border-radius: 3px 0 0 3px;
    }
    .swx-pagenation-last {
      margin-left: -1px;
      border-radius: 0 3px 3px 0;
    }
    .swx-pagenation {
      padding: 0;
      .btn-prev,
      .btn-next {
        margin: 0 0 0 -1px;
        border-radius: 0;
      }
      .el-pager {
        .number {
          margin: 0 0 0 -1px;
          border-radius: 0;
        }
      }
    }
  }
  &.small-pagenation {
    .swx-pagenation-first,
    .swx-pagenation-last {
      height: 22px;
      line-height: 22px;
    }
    .el-input {
      position: relative;
      bottom: 1px;
      height: 22px;
      input {
        height: 23px;
        line-height: 23px;
      }
      .el-input__icon {
        line-height: 20px;
      }
    }
  }
  &.nofirst {
    .swx-pagenation {
      .btn-prev {
        border-radius: 3px 0 0 3px;
      }
    }
  }
  &.nolast {
    .swx-pagenation {
      .btn-next {
        border-radius: 0 3px 3px 0;
      }
    }
  }
}
</style>
