<template>
    <div style="background-color: #fff;">
        <h5>在element的组件上加上  swx-alert类名即可，其余使用方法与element一致</h5>
   <div v-for="(a,index) in alertList" :key="'alert'+index" style="margin: 5px;">
       <el-alert
               :class="a.className"
               :title="a.title"
               :type="a.type"
               :show-icon="a.showIcon">
       </el-alert>
   </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      alertList: [
        {
          title: "成功提示的文案",
          className: "swx-alert",
          type: "success",
          showIcon: true
        },
        {
          title: "成功提示的文案",
          className: "swx-alert",
          type: "success",
          showIcon: false
        },
        {
          title: "消息提示的文案",
          className: "swx-alert",
          type: "info",
          showIcon: true
        },
        {
          title: "消息提示的文案",
          className: "swx-alert",
          type: "info",
          showIcon: false
        },
        {
          title: "警告提示的文案",
          className: "swx-alert",
          type: "warning",
          showIcon: true
        },
        {
          title: "警告提示的文案",
          className: "swx-alert",
          type: "warning",
          showIcon: false
        },
        {
          title: "错误提示的文案",
          className: "swx-alert",
          type: "error",
          showIcon: true
        },
        {
          title: "错误提示的文案",
          className: "swx-alert",
          type: "error",
          showIcon: false
        }
      ]
    };
  }
};
</script>
<style>
</style>
