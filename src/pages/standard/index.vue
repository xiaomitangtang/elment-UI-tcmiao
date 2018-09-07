<template>
  <el-container>
    <el-header>前端规范文档</el-header>
    <el-container>
      <el-aside width="200px">
        <lmenu></lmenu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  components: {
    lmenu: () => import("./slidemenu.vue")
  }
};
</script>
<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #fff;
  color: #333;
  padding-left: 20px;
}

#app > .el-container {
  height: 100%;
}
standard-img {
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
</style>
