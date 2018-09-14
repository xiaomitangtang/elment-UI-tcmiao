<template>
    <div class=''>
        <h3>这是element的notify</h3>
        <el-button class="swx-btn-primary swx-btn-size-small" v-for="(btn,index) in btns" :key="'btn'+index" @click="btnClick(btn)">{{btn.text}}</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      btns: [
        {
          text: "成功",
          conf: {
            title: "成功",
            message: "这是一条成功的提示消息",
            type: "success"
          }
        },
        {
          text: "警告",
          conf: {
            title: "警告",
            message: "这是一条警告的提示消息",
            type: "warning"
          }
        },
        {
          text: "消息",
          conf: {
            title: "消息",
            message: "这是一条消息的提示消息",
            type: "info"
          }
        },
        {
          text: "错误",
          conf: {
            title: "错误",
            message: "这是一条消息的错误消息",
            type: "error"
          }
        }
      ]
    };
  },
  methods: {
    btnClick(data) {
      let temConf = Object.assign({}, data.conf);
      temConf.duration = 0;
      temConf.customClass = "swx-notify swx-notify-" + data.conf.type;
      temConf.message = "customClass=" + temConf.customClass;
      console.log(temConf);
      this.$notify(temConf);
    }
  }
};
</script>
<style>
</style>
