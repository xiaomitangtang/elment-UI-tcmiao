<template>

<div class="active-form-page">
  <el-row class="active-form-page-head"></el-row>
  <el-row class="active-form-page-body" >
   <div class=" fullhight active-form-page-body-ankalist"><ankaList :data="ankaData" @ankaClick="ankaListItemClick"></ankaList></div>
    <div class=" fullhight active-form-page-body-anka-main">
        <div class="active-form-page-body-anka-main-head">{{currentAnka?currentAnka.CaseCardTemplete.CaseCardName:'案卡详情'}}</div>
        <div class="active-form-page-body-anka-main-body">
            <div class="fullhight active-form-page-body-anka-main-body-formlist">
                <ankaformList :anka="currentAnka" @ankaTableClick="ankaTableClick"></ankaformList>
            </div>
            <div class=" fullhight active-form-page-body-anka-main-body-form">
                <formDesigner ref="formdesigner" :data="currentTable"></formDesigner>
            </div>
        </div>
<!--      <el-col class="fullhight" :span="4" ><dragmenu></dragmenu></el-col>
      <el-col class="fullhight"  :span="20" > <formDesigner></formDesigner></el-col>-->
    </div>


  </el-row>
</div>

</template>
<script>
export default {
  name: "activeForm",
  data() {
    return {
      ankaData: [
        {
          CaseCardTemplete: {
            CaseCardCode: "100000231",
            CaseCardName: "支持起诉demo",
            TabsList: [
              {
                TabsName: "支持起诉案件情况",
                TableList: [
                  {
                    TableName: "基本情况demo",
                    TableItems: [
                      {
                        zdywmc: "TYYW_GG_AJJBXX-AJLB_MC",
                        zdzwmc: "小白",
                        sfjh: true,
                        bdfz: {
                          bbfz: false,
                          kbfzzd: [
                            "TYYW_GG_AJJBXX+BMSAH",
                            "TYYW_GG_AJJBXX+BMSAH2"
                          ]
                        },
                        sjybm: "0",
                        mrz: "999",
                        sjlx: "01",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_MC",
                        zdFields: {
                          fhzfs: "返回文本",
                          kxxjd: false,
                          kjxsdfs: "显示文本",
                          sffx: false,
                          sfjs: false,
                          ztys: "红色Red"
                        }
                      },
                      {
                        zdywmc: "TYYW_GG_AqJJBXX-AJLB_MC",
                        zdzwmc: "小白",
                        sfjh: "true/false",
                        bdfz: {
                          bbfz: false,
                          kbfzzd: [
                            "TYYW_GG_AJJBXX+BMSAH",
                            "TYYW_GG_AJJBXX+BMSAH2"
                          ]
                        },
                        sjybm: "0",
                        mrz: "999",
                        sjlx: "01",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_MC",
                        zdFields: {
                          fhzfs: "返回文本",
                          kxxjd: false,
                          kjxsdfs: "显示文本",
                          sffx: false,
                          sfjs: true,
                          ztys: "红色Red"
                        }
                      },
                      {
                        zdywmc: "TYYW_GG_AJJB6XX-AJLB_MC",
                        zdzwmc: "小白",
                        sfjh: "true/false",
                        bdfz: {
                          bbfz: false,
                          kbfzzd: [
                            "TYYW_GG_AJJBXX+BMSAH",
                            "TYYW_GG_AJJBXX+BMSAH2"
                          ]
                        },
                        sjybm: "0",
                        mrz: "999",
                        sjlx: "01",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_MC",
                        zdFields: {
                          fhzfs: "返回文本",
                          kxxjd: false,
                          kjxsdfs: "显示文本",
                          sffx: false,
                          sfjs: true,
                          ztys: "红色Red"
                        }
                      }
                    ],
                    ExtItems: [
                      {
                        zdywmc: "TYYW_GG_AJJBXX+AJLB_EXT",
                        sfjh: "true/false",
                        bdfz: {
                          bbfz: false,
                          kbfzzd: [
                            "TYYW_GG_AJJBXX.BMSAH",
                            "TYYW_GG_AJJBXX+BMSAH2"
                          ]
                        },
                        sjybm: "0",
                        mrz: "",
                        sjlx: "01",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_EXT",
                        zdFields: {
                          fhzfs: "返回文本",
                          kxfjd: false,
                          kjxsdfs: "显示文本",
                          sffx: false,
                          sfjs: true,
                          ztys: "红色Red"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      currentAnka: null,
      currentTable: null
    };
  },
  methods: {
    ankaListItemClick(data) {
      this.currentAnka = data.anka;
      console.log(this.currentAnka);
    },
    ankaTableClick(data) {
      console.log(data);
      this.currentTable = data;
    }
  },
  mounted() {
    /*    this.currentAnka = this.ankaData[0];
    this.currentTable = this.currentAnka.CaseCardTemplete.TabsList[0].TableList[0];*/
    this.$api.activeForm
      .demoData({ params: { akmbbh: "100000231" } })
      .then(data => {
        this.ankaData = data.data;
        this.currentAnka = this.ankaData[0];
        this.currentTable = this.currentAnka.CaseCardTemplete.TabsList[0].TableList[0];
      });
  },
  components: {
    ankaList: () => import("./ankalist"),
    ankaformList: () => import("./anka-form-list.vue"),
    dragmenu: () => import("./dragMenu.vue"),
    formDesigner: () => import("./formDesigner.vue")
  }
};
</script>

<style lang="less">
.active-form-page {
  height: 100%;
  .active-form-page-head {
    height: 60px;
    background-color: #c9e1f7;
  }
  .active-form-page-body {
    height: calc(100% - 60px);
    padding: 10px;
    .active-form-page-body-ankalist {
      float: left;
      width: 200px;
      overflow: auto;
    }
    .active-form-page-body-anka-main {
      float: right;
      width: calc(100% - 210px);
      /*border: 1px solid #abc1de;*/
      .active-form-page-body-anka-main-head {
        width: 100%;
        height: 34px;
        font-size: 14px;
        line-height: 34px;
        padding-left: 15px;
        background-color: #d1e4f6;
        border: 1px solid #abc1de;
      }
      .active-form-page-body-anka-main-body {
        height: calc(100% - 34px);
        width: 100%;
        border: 1px solid #abc1de;
        .active-form-page-body-anka-main-body-formlist {
          float: left;
          width: 200px;
          border-right: 1px solid #abc1de;
        }
        .active-form-page-body-anka-main-body-form {
          float: left;
          padding: 10px 0 10px 10px;
          width: calc(100% - 200px);
        }
      }
    }
  }
  .fullhight {
    height: 100%;
  }
}
</style>
