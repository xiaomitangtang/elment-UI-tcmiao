<template>
 <div class="swx-ui">
  <mainl class="swx-ui-mainl" :expandMenu="expandMenu" :class="{'swx-ui-mainl-inactive':!expandMenu}" @mainlArrowClick="changeMenuStatus"></mainl>
  <div class="swx-ui-mainr" :class="{'swx-ui-mainr-active':!expandMenu}">
   <mainRH class="swx-ui-mainrh" @rmenuClick="changeMenuStatus"></mainRH>
   <sbreadcrumb class="swx-ui-breadcrumb"></sbreadcrumb>
   <div class="swx-ui-main">
    <router-view class="swx-ui-main-page"/>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      expandMenu: true
    };
  },
  methods: {
    changeMenuStatus() {
      this.expandMenu = !this.expandMenu;
    }
  },
  components: {
    mainl: () => import("./components/mainL.vue"),
    mainRH: () => import("./components/mainRH.vue"),
    sbreadcrumb: () => import("./components/sbreadcrumb.vue")
  }
};
</script>
<style lang="less">
.swx-ui {
  width: 100%;
  height: 100%;
  .swx-ui-mainl {
    position: relative;
    float: left;
    width: 206px;
    height: 100%;
    background-color: #1865a7;
    transition: width 0.3s;
  }
  .swx-ui-mainr {
    position: relative;
    float: left;
    height: 100%;
    width: calc(100% - 206px);
    transition: width 0.3s;
    .swx-ui-mainrh {
      width: 100%;
      height: 60px;
      padding: 0 20px;
      line-height: 60px;
    }
  }
  .swx-ui-mainl-inactive {
    width: 64px;
  }
  .swx-ui-mainr-active {
    width: calc(100% - 64px);
  }
  .swx-ui-breadcrumb {
    position: relative;
    background-color: #ecf2f7;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
  }
  .swx-ui-main {
    width: 100%;
    height: calc(100% - 110px);
    background-color: #ecf2f7;
  }
  .swx-ui-main-page {
    width: 100%;
    height: 100%;
    padding: 0 30px 20px;
    overflow: auto;
  }
}

.standard-img {
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
}
.name_text_box {
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 10px;
}
.name_text_item {
  display: inline-block;
  padding: 10px;
  min-width: 20%;
  span {
    padding: 5px;
  }
}
.swx-pre {
  background-color: #e7e7e7;
  padding: 10px;
  border-radius: 10px;
  line-height: 18px;
}
</style>
