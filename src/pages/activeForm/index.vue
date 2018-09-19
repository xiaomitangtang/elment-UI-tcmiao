<template>

<div class="active-form-page">
  <el-row class="active-form-page-head"></el-row>
  <el-row class="active-form-page-body" >
   <div class=" fullhight active-form-page-body-ankalist"><ankaList></ankaList></div>
    <div class=" fullhight active-form-page-body-anka-main">
        <div class="active-form-page-body-anka-main-head">{{rtitle}}</div>
        <div class="active-form-page-body-anka-main-body">
            <div class="fullhight active-form-page-body-anka-main-body-formlist">
                <ankaformList></ankaformList>
            </div>
            <div class=" fullhight active-form-page-body-anka-main-body-form">
                <formDesigner></formDesigner>
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
      rtitle: "审查起诉受理情况"
    };
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
          padding: 10px;
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
