<template>
    <div class=''>
        <div v-for="(tab,index) in tabsList" :key="'tabs'+index">
            <h4>{{tab}}</h4>
            <el-tabs :class="tab.className" :type="tab.type" :tabPosition="tab.tabPosition" :style="tab.style">
                <el-tab-pane  label="消息中心11">我的行程</el-tab-pane>
                <el-tab-pane label="消息中心">消息中心</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务1111补偿</el-tab-pane>
            </el-tabs>
        </div>
        <pre class="swx-pre">
            以上是根据设计图对element做的相应调整，
                注：在tabs的头部加上一些额外图标，提示消息等，不属于基本库的修饰范围，需要通过slot传入element进行自定义修饰，
                这些需要根据开发实际情况按需完成

            每个demo上面为使用方式以及类名，demo之外的定位方式未进行修饰，比如right  bottom以及 type=border-card
                按照需要加上对应的class类名以及type属性即可，并且仅仅对css进行修饰，并未修改element的js代码
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabsList: [
        {
          type: "",
          tabPosition: "top",
          className: "swx-tabs swx-tabs-simple",
          style: { height: "100px" }
        },
        {
          type: "",
          tabPosition: "top",
          className: "swx-tabs swx-tabs-panel",
          style: { height: "100px" }
        },
        {
          type: "",
          tabPosition: "left",
          className: "swx-tabs swx-tabs-simple",
          style: { height: "300px" }
        },
        {
          type: "card",
          tabPosition: "top",
          className: "swx-tabs swx-tabs-card",
          style: { height: "100px" }
        },
        {
          type: "card",
          tabPosition: "left",
          className: "swx-tabs swx-tabs-card",
          style: { height: "300px" }
        }
      ]
    };
  }
};
</script>
<style>
</style>
