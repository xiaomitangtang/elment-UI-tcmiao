<template>
    <div>
        <i class="el-icon-location-outline" style="color: #7fa7d8"></i>
        <el-breadcrumb class="swx-breadcrumb" separator-class="el-icon-arrow-right"  style="display: inline-block;margin-left: 6px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
