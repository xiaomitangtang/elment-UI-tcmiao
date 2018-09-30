<template>

<div class="active-form-page">
  <el-row class="active-form-page-head"></el-row>
  <el-row class="active-form-page-body" >
   <div class=" fullhight active-form-page-body-ankalist"><ankaList :data="ankaData" @ankaClick="ankaListItemClick"></ankaList></div>
    <div class=" fullhight active-form-page-body-anka-main">
        <div class="active-form-page-body-anka-main-head">{{currentAnka?currentAnka.CaseCardTemplete.CaseCardName:'案卡详情'}}</div>
        <div class="active-form-page-body-anka-main-body">
            <div class="fullhight active-form-page-body-anka-main-body-formlist">
                <ankaformList :anka="currentAnka" :currenTable="currenShowTable" @ankaTableClick="ankaTableClick"
                    @dragItem="ankaFormListDragItem"
                    @dropedOnTitle="ankaFormListDropedOnTitle"
                    @dropedOnItem="ankaFormListDropedOnItem"
                              @editName="editName"
                ></ankaformList>
            </div>
            <div class=" fullhight active-form-page-body-anka-main-body-form">
                <formDesigner ref="formdesigner" :data="tableList"  :currenTable="currenShowTable" @currentTableChange="ankaTableClick"></formDesigner>
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
                        zdywmc: "TYYW_GG_AJJBXX--AJLB_MC1",
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
                        sjlx: "el-image",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_MC1",
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
                        zdywmc: "TYYW_GG_AqJJBXX--AJLB_MC1",
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
                        sjlx: "el-input",
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
                        zdywmc: "TYYW_GG_AJJB6XX--AJLB_MC",
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
                        mrz: "912",
                        sjlx: "el-upload",
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
                        sjybm: "1",
                        mrz: "",
                        sjlx: "el-upload",
                        ysjzd: "TYYdW_GG_AJJBXX+AJLB_EXT",
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
                  },
                  {
                    TableName: "基本情况demo",
                    TableItems: [
                      {
                        zdywmc: "TYYW_GG_AJJBXX--AJLB_MC",
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
                        sjlx: "el-image",
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
                        zdywmc: "TYYW_GG_AqJJBXX--AJLB_MC",
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
                        sjlx: "el-input",
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
                        zdywmc: "TYYW_GG_AJJB6XX--AJLB_MC",
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
                        mrz: "912",
                        sjlx: "el-upload",
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
                        sjybm: "1",
                        mrz: "",
                        sjlx: "el-upload",
                        ysjzd: "TYYdW_GG_AJJBXX+AJLB_EXT",
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
              },
              {
                TabsName: "支持起诉案件123情况",
                TableList: [
                  {
                    TableName: "基本情况123demo",
                    TableItems: [
                      {
                        zdywmc: "TYYW_GG_AJJBXX--AJLB_MC1",
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
                        sjlx: "el-image",
                        ysjzd: "TYYW_GG_AJJBXX+AJLB_MC1",
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
                        zdywmc: "TYYW_GG_AqJJBXX--AJLB_MC1",
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
                        sjlx: "el-input",
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
                        zdywmc: "TYYW_GG_AJJB6XX--AJLB_MC",
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
                        mrz: "912",
                        sjlx: "el-upload",
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
                        sjybm: "1",
                        mrz: "",
                        sjlx: "el-upload",
                        ysjzd: "TYYdW_GG_AJJBXX+AJLB_EXT",
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
                  },
                  {
                    TableName: "基本情况d1231emo",
                    TableItems: [
                      {
                        zdywmc: "TYYW_GG_AJJBXX--AJLB_MC",
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
                        sjlx: "el-image",
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
                        zdywmc: "TYYW_GG_AqJJBXX--AJLB_MC",
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
                        sjlx: "el-input",
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
                        zdywmc: "TYYW_GG_AJJB6XX--AJLB_MC",
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
                        mrz: "912",
                        sjlx: "el-upload",
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
                        sjybm: "1",
                        mrz: "",
                        sjlx: "el-upload",
                        ysjzd: "TYYdW_GG_AJJBXX+AJLB_EXT",
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
      tableList: [],
      formListDragData: null,
      currenShowTable: null
    };
  },
  methods: {
    ankaListItemClick(data) {
      this.currentAnka = data.anka;
      console.log(this.currentAnka);
    },
    ankaTableClick(data) {
      this.currenShowTable = data;
    },
    ankaFormListDragItem(data) {
      this.formListDragData = data;
    },
    getOrignItem() {
      let dragdata = this.formListDragData;
      return dragdata.tab.TableList.splice(
        dragdata.tab.TableList.indexOf(dragdata.item),
        1
      )[0];
    },
    ankaFormListDropedOnTitle({ tab }) {
      tab.TableList.push(this.getOrignItem());
      this.tableList = this.getAllTable(
        this.currentAnka.CaseCardTemplete.TabsList,
        false
      );
    },
    ankaFormListDropedOnItem({ tab, itemIndex }) {
      tab.TableList.splice(itemIndex, 0, this.getOrignItem());
      this.tableList = this.getAllTable(
        this.currentAnka.CaseCardTemplete.TabsList,
        false
      );
    },
    getAllTable(TabsList = [], init) {
      let alltable = window._.flatten(TabsList.map(i => i.TableList));
      if (init) {
        this.currenShowTable = alltable[0];
      }
      return alltable;
    },
    editName(data) {
      let oldname =
        data.type === "tab" ? data.tab.TabsName : data.table.TableName;
      let title = data.type === "tab" ? "修改tab名" : "修改表名";
      this.$prompt("", { title: title, inputValue: oldname }).then(
        res => {
          if (res.action === "confirm") {
            if (data.type === "tab") {
              data.tab.TabsName = res.value;
            } else {
              data.table.TableName = res.value;
            }
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.currentAnka = this.ankaData[0];
    this.tableList = this.getAllTable(
      this.currentAnka.CaseCardTemplete.TabsList,
      true
    );
    this.$api.activeForm
      .demoData({ params: { akmbbh: "100000231" } })
      .then(data => {
        this.ankaData = data.data;
        this.currentAnka = this.ankaData[0];
        this.tableList = this.getAllTable(
          this.currentAnka.CaseCardTemplete.TabsList,
          true
        );
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
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
