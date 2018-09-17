<template>
    <div class='breadcrumb-page'>
        <h4>前面图标自己在el-breadcrum前面添加，给el-breadcrumb加上类名swx-breadcrumb</h4>
        <sbreadcrumb></sbreadcrumb>
    </div>
</template>
<script>
export default {
  components: {
    sbreadcrumb: () => import("../components/sbreadcrumb.vue")
  }
};
</script>
<style>
.breadcrumb-page {
}
</style>
