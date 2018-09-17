<template>
    <div class=''>
        <h4>swx-loading 预置了一些loading动画，默认宽高为300px  可以自行指定，传入不同的type值即可呈现不同的loading动画</h4>
        <div style="display: inline-block" v-for="(load,index) in loadingList" :key="'loading'+index">
            <el-button class="swx-btn-primary swx-btn-size-mini" @click="copyCss(load)">{{load.type}}</el-button>
            <swx-loading :type="load.type" ></swx-loading>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loadingList: [
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
