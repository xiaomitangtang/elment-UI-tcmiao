<template>
    <div class=''>
        <h4>swx-loading 预置了一些loading动画，默认宽高为300px  可以自行指定，传入不同的type值即可呈现不同的loading动画</h4>
        <h4>360、FireFox、Chrome、Safari、Opera、傲游、搜狗、世界之窗. 不支持IE8及以下浏览器</h4>
        <h5>square</h5>
        <div style="display: inline-block" v-for="(load,index) in loadingSquareList" :key="'loading-squre'+index">
            <el-button class="swx-btn-primary swx-btn-size-mini" @click="copyCss(load)">{{load.type}}</el-button>
            <swx-loading :type="load.type" ></swx-loading>
        </div>
        <h5>round</h5>
        <div style="display: inline-block" v-for="(load,index) in loadingRoundList" :key="'loading-round'+index">
            <el-button class="swx-btn-primary swx-btn-size-mini" @click="copyCss(load)">{{load.type}}</el-button>
            <swx-loading :type="load.type" ></swx-loading>
        </div>
        <h5>various</h5>
        <div style="display: inline-block" v-for="(load,index) in loadingVariousList" :key="'loading-various'+index">
            <el-button class="swx-btn-primary swx-btn-size-mini" @click="copyCss(load)">{{load.type}}</el-button>
            <swx-loading :type="load.type" ></swx-loading>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loadingSquareList: [
        { type: "loading-square-1" },
        { type: "loading-square-2" },
        { type: "loading-square-3" },
        { type: "loading-square-4" },
        { type: "loading-square-5" },
        { type: "loading-square-6" },
        { type: "loading-square-7" },
        { type: "loading-square-8" },
        { type: "loading-square-9" },
        { type: "loading-square-10" }
      ],
      loadingRoundList: [
        { type: "loading-round-1" },
        { type: "loading-round-2" },
        { type: "loading-round-3" },
        { type: "loading-round-4" },
        { type: "loading-round-5" },
        { type: "loading-round-6" },
        { type: "loading-round-7" },
        { type: "loading-round-8" },
        { type: "loading-round-9" },
        { type: "loading-round-10" }
      ],
      loadingVariousList: [
        { type: "loading-various-1" },
        { type: "loading-various-2" },
        { type: "loading-various-3" },
        { type: "loading-various-4" },
        { type: "loading-various-5" },
        { type: "loading-various-6" },
        { type: "loading-various-7" },
        { type: "loading-various-8" },
        { type: "loading-various-9" },
        { type: "loading-various-10" }
      ]
    };
  },
  methods: {
    copyCss(load) {
      this.$copyText(load.type).then(
        () => {
          this.$message({
            message: "复制成功:" + load.type + "已加入剪贴板",
            type: "success",
            duration: 1500
          });
        },
        () => {
          this.$message({
            message: "复制失败" + load.type,
            type: "error",
            duration: 1500
          });
        }
      );
    }
  }
};
</script>
<style>
</style>
