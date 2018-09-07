<template>
    <div>
        <h3>鼠标移入，即可获得相应类名，复制即可使用，element的type为默认type，其余属性与elment使用方法一致，只是进行css样式覆盖</h3>
        <div v-for="(btns,index) in btnss" :key="'btns'+index">
            <el-tooltip v-for="(btn,index) in btns" :key="'btn'+index"  effect="dark" :content="btn.cssName">
                <el-button @click="copyCss(btn)" :class="btn.cssName" :icon="btn.icon" :round="btn.round" :style="btn.style">{{btn.text}}</el-button>
            </el-tooltip>
        </div>

        <el-tooltip style="margin: 10px 10px;" v-for="(group,index) in btngroups" :key="'group'+index"  effect="dark" content="按钮组与element使用方法一致" >
            <el-button-group>
                <el-button v-for="(btn,index) in group.btns" :key="'groupbtn'+index" :class="btn.cssName" :icon="btn.icon">{{btn.text}}</el-button>
            </el-button-group>
        </el-tooltip>


    </div>
</template>
<script>
export default {
  data() {
    return {
      btnss: [
        [
          {
            cssName: "swx-btn-white swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-table swx-btn-white-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-white swx-btn-size-table swx-btn-white-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal swx-btn-white-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-white swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-white swx-btn-size-normal swx-btn-white-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-primary swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-table swx-btn-primary-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-primary swx-btn-size-table swx-btn-primary-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-primary swx-btn-size-normal swx-btn-primary-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-primary swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-primary swx-btn-size-normal swx-btn-primary-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-warning swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-table swx-btn-warning-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-warning swx-btn-size-table swx-btn-warning-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-warning swx-btn-size-normal swx-btn-warning-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-warning swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-warning swx-btn-size-normal swx-btn-warning-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-danger swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-table swx-btn-danger-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-danger swx-btn-size-table swx-btn-danger-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal swx-btn-danger-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-danger swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-danger swx-btn-size-normal swx-btn-danger-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-success swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-table swx-btn-success-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-success swx-btn-size-table swx-btn-success-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-success swx-btn-size-normal swx-btn-success-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-success swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-success swx-btn-size-normal swx-btn-success-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-info swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-table swx-btn-info-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-info swx-btn-size-table swx-btn-info-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal swx-btn-info-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-info swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-info swx-btn-size-normal swx-btn-info-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-sky swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-table swx-btn-sky-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-table swx-btn-sky-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal swx-btn-sky-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-sky swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-sky swx-btn-size-normal swx-btn-sky-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-orange swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-table swx-btn-orange-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-orange swx-btn-size-table swx-btn-orange-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal swx-btn-orange-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-orange swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-orange swx-btn-size-normal swx-btn-orange-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ],
        [
          {
            cssName: "swx-btn-grayblue swx-btn-size-big",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-normal",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-small",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-mini",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-normal",
            icon: "el-icon-edit",
            text: "",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-grayblue swx-btn-size-table swx-btn-grayblue-plain",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-grayblue swx-btn-size-table swx-btn-grayblue-plain disable",
            icon: "el-icon-edit",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-grayblue swx-btn-size-normal swx-btn-grayblue-plain",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-flag",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName: "swx-btn-grayblue swx-btn-size-normal disable",
            icon: "",
            text: "按钮",
            round: true,
            style: {
              "pointer-events": "auto"
            }
          },
          {
            cssName:
              "swx-btn-grayblue swx-btn-size-normal swx-btn-grayblue-plain disable",
            icon: "",
            text: "按钮",
            round: false,
            style: {
              pointerEvents: "auto"
            }
          }
        ]
      ],
      btngroups: [
        {
          btns: [
            {
              cssName: "swx-btn-sky swx-btn-size-big",
              icon: "",
              text: "上一页"
            },
            {
              cssName: "swx-btn-sky swx-btn-size-big",
              icon: "",
              text: "下一页"
            }
          ]
        },
        {
          btns: [
            {
              cssName: "swx-btn-white swx-btn-size-big",
              icon: "",
              text: "上一页"
            },
            {
              cssName: "swx-btn-white swx-btn-size-big",
              icon: "",
              text: "下一页"
            }
          ]
        },
        {
          btns: [
            {
              cssName: "swx-btn-success swx-btn-size-small",
              icon: "el-icon-plus",
              text: ""
            },
            {
              cssName: "swx-btn-success  swx-btn-size-small",
              icon: "el-icon-edit",
              text: ""
            },
            {
              cssName: "swx-btn-success  swx-btn-size-small",
              icon: "el-icon-delete",
              text: ""
            }
          ]
        }
      ]
    };
  },
  methods: {
    copyCss(btn) {
      this.$copyText(btn.cssName).then(
        () => {
          this.$message({
            message: "复制成功:" + btn.cssName + "已加入剪贴板",
            type: "success",
            duration: 1500
          });
        },
        () => {
          this.$message({
            message: "复制失败" + btn.cssName,
            type: "error",
            duration: 1500
          });
        }
      );
    }
  }
};
</script>
