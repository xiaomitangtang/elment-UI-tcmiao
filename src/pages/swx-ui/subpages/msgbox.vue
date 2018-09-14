<template>
    <div class=''>
        <h3>这是element的msgbox   加上类名 swx-message-box   center=true</h3>
        <el-button class="swx-btn-primary swx-btn-size-small" v-for="(btn,index) in btns" :key="'btn'+index" @click="btnClick(btn,true)">{{btn.text}}</el-button>
        <h3>这是element的msgbox   加上类名 swx-message-box  center=false</h3>
        <el-button class="swx-btn-primary swx-btn-size-small" v-for="(btn,index) in btns" :key="'btn2'+index" @click="btnClick(btn,false)">{{btn.text}}</el-button>
        <pre class="swx-pre">
            加上类名 swx-message-box仅仅对messagebox的header进行了修饰，
            内容区域因为是自定义的，所以需要在开发时自行填充内容
            另 里面的按钮是可以通过element的配置进行配置类名以及文字的
            上面的事例都有此配置
              options.cancelButtonClass  = "swx-btn-white swx-btn-size-normal";
              options.confirmButtonClass = "swx-btn-primary swx-btn-size-normal";
              options.confirmButtonText  = "是";
              options.cancelButtonText   = "否";

            如果不想使用center属性，但是又想底部按钮居中，
                可以在customerClass中加入   swx-message-box-btns-center
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      btns: [
        {
          text: "msgbox",
          conf: {
            title: "msgbox",
            type: "warning",
            message: "这是一条成功的提示消息"
          }
        },
        {
          text: "alert",
          conf: {
            title: "alert",
            message: "这是一条警告的提示消息",
            type: "warning"
          }
        },
        {
          text: "confirm",
          conf: {
            title: "confirm",
            message: "这是一条消息的提示消息",
            type: "info"
          }
        },
        {
          text: "prompt",
          conf: {
            title: "prompt",
            message: "这是一条消息的提示消息"
          }
        }
      ]
    };
  },
  methods: {
    btnClick(data) {
      let temConf = {};
      temConf.customClass = "swx-message-box swx-message-box-btns-center";
      temConf.title = data.conf.title;
      temConf.type = data.conf.type;
      temConf.message = "customClass=" + temConf.customClass;
      temConf.cancelButtonClass = "swx-btn-white swx-btn-size-normal";
      temConf.confirmButtonClass = "swx-btn-primary swx-btn-size-normal";
      temConf.confirmButtonText = "是";
      temConf.cancelButtonText = "否";
      // temConf.center = flag;
      if (data.text === "msgbox") {
        this["$" + data.text](temConf);
      } else {
        this["$" + data.text](temConf.message, temConf);
      }
    }
  }
};
</script>
<style>
</style>
