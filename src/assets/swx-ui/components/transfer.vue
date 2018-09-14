<template>
    <div class='swx-transfer-components'>
        <div class="swx-transfer-components-left">
            <div class="swx-transfer-components-tip">{{ltitle}}</div>
            <el-table
                    ref="ltable"
                    :data="lefttableData"
                    size="mini"
                    class="swx-transfer-components-table"
                    style="width: 100%" height="221"
                    :highlight-current-row="!showCheckbox"
                    @selection-change="lSelectionChange"
                    @current-change="lCurrentChange"
            >
                <el-table-column
                        v-if="showCheckbox"

                        type="selection"
                        class-name="swx-checkbox"
                        width="55"
                ></el-table-column>

                <el-table-column v-for="(head,index) in header" :key="'swx-transfer-components-ldata'+index"
                        v-bind="head"
                       >
                </el-table-column>
            </el-table>
        </div>
        <div class="swx-transfer-components-center">
           <div class="swx-transfer-components-center-btn-box">
               <el-button class="swx-btn-primary swx-btn-size-small" icon="el-icon-d-arrow-right" :class="{disable:lbtnDisabled}" :disabled="lbtnDisabled" @click="changeSelecttion('toRight')">{{rbtnText}}</el-button>
               <br>
               <el-button class="swx-btn-primary swx-btn-size-small" icon="el-icon-d-arrow-left" :class="{disable:rbtnDisabled}" :disabled="rbtnDisabled" @click="changeSelecttion('toLeft')">{{lbtnText}}</el-button>
           </div>
        </div>
        <div class="swx-transfer-components-right">
            <div class="swx-transfer-components-tip">{{rtitle}}</div>
            <el-table
                    ref="rtable"
                    :data="righttableData"
                    size="mini"
                    class="swx-transfer-components-table"
                    style="width: 100%" height="221"
                    :highlight-current-row="!showCheckbox"
                    @selection-change="rSelectionChange"
                    @current-change="rCurrentChange"
            >
                <el-table-column
                        v-if="showCheckbox"
                        type="selection"
                        class-name="swx-checkbox"
                        width="55"></el-table-column>
                <el-table-column v-for="(head,index) in header" :key="'swx-transfer-components-rdata'+index"
                                 v-bind="head"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
  name: "swx-transfer",
  props: {
    rdata: {
      type: Array,
      default: () => []
    },
    ldata: {
      type: Array,
      default: () => []
    },
    header: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    ltitle: { type: String, default: "列表" },
    rtitle: { type: String, default: "列表" },
    rbtnText: { type: String, default: "添加" },
    lbtnText: { type: String, default: "移除" }
  },
  data() {
    return {
      lefttableData: this.ldata,
      righttableData: this.rdata,
      lSelecttion: [],
      rSelection: [],
      lCurrent: null,
      rCurrent: null
    };
  },
  methods: {
    lSelectionChange(s) {
      this.lSelecttion = s;
      this.$emit("lSelectChange", s);
    },
    rSelectionChange(s) {
      this.rSelection = s;
      this.$emit("rSelectChange", s);
    },
    rCurrentChange(n) {
      this.rCurrent = n;
      this.$emit("lCurrentChange", n);
    },
    lCurrentChange(n) {
      this.lCurrent = n;
      this.$emit("rCurrentChange", n);
    },

    changeSelecttion(type) {
      if (!this.showCheckbox) {
        if (type === "toRight") {
          this.lefttableData = this.lefttableData.filter(i => {
            return i !== this.lCurrent;
          });
          this.righttableData.push(this.lCurrent);
          this.lCurrent = null;
          this.$refs.ltable.setCurrentRow();
        } else if (type === "toLeft") {
          this.righttableData = this.righttableData.filter(i => {
            return i !== this.rCurrent;
          });
          this.lefttableData.push(this.rCurrent);
          this.rCurrent = null;
          this.$refs.rtable.setCurrentRow();
        }
      } else {
        if (type === "toRight") {
          this.lefttableData = this.lefttableData.filter(i => {
            return !(this.lSelecttion.indexOf(i) + 1);
          });
          this.lSelecttion.forEach(i => {
            this.righttableData.push(i);
          });
        } else if (type === "toLeft") {
          this.righttableData = this.righttableData.filter(i => {
            return !(this.rSelection.indexOf(i) + 1);
          });
          this.rSelection.forEach(i => {
            this.lefttableData.push(i);
          });
        }
      }
      this.$emit(type);
      this.$emit("change", {
        ldata: this.lefttableData,
        rdata: this.righttableData
      });
    }
  },
  watch: {
    rdata(n) {
      this.righttableData = n;
      this.rSelection = [];
      this.rCurrent = null;
    },
    ldata(n) {
      this.lefttableData = n;
      this.lSelecttion = [];
      this.lCurrent = null;
    }
  },
  computed: {
    lbtnDisabled() {
      return this.showCheckbox ? this.lSelecttion.length === 0 : !this.lCurrent;
    },
    rbtnDisabled() {
      return this.showCheckbox ? this.rSelection.length === 0 : !this.rCurrent;
    }
  }
};
</script>
<style lang="less">
.swx-transfer-components {
  display: inline-block;
  .swx-transfer-components-left,
  .swx-transfer-components-center,
  .swx-transfer-components-right {
    float: left;
    text-align: center;
    height: 255px;
    /*min-height: 100px;*/
  }
  .swx-transfer-components-tip {
    text-align: left;
    font-size: 12px;
    padding: 8px;
    color: #084c7b;
  }
  .swx-transfer-components-left {
    /*min-width: calc(50% - 50px);*/
  }
  .swx-transfer-components-center {
    /*display: flex;*/
    /*align-items: Center;*/
    position: relative;
    width: 100px;
    height: 168px;
    margin-top: 32px;
    /*height: 200px;*/
    .swx-transfer-components-center-btn-box {
      position: absolute;
      margin: auto;
      width: 80px;
      height: 50px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .swx-transfer-components-right {
    /*min-width: calc(50% - 50px);*/
  }
  .swx-transfer-components-table {
    border-left: 1px solid #c0cfdb;
    border-right: 1px solid #c0cfdb;
    border-bottom: 1px solid #c0cfdb;
    border-radius: 3px;
    &::before {
      height: 0;
    }
    .el-table__header {
      background-color: #d7eaf6;
      thead th {
        text-align: center;
        background-color: #d7eaf6;
        border: 1px solid #c0cfdb;
        padding: 3.8px 0;
        border-right: 0;
        color: #084c7b;
        &:first-child {
          border-radius: 3px 0 0 0;
          border-left: 0;
        }
        &:nth-last-child(2) {
          border-radius: 0 3px 0 0;
          border-right: 0;
        }
      }
      .gutter {
        opacity: 0;
      }
    }
    .el-table__body {
      .el-table__row {
        td {
          border-bottom: 0;
          padding: 4px 0;
          .cell {
            padding: 0;
          }
        }
        &:first-child {
          td::after {
            position: absolute;
            content: "";
            height: 220px;
            top: 0;
            z-index: 20;
            left: 0;
            border-left: 1px solid #c0cfdb;
          }
          td:first-child::after {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
