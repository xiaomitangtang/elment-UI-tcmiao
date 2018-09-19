<template>
    <div class=''>
            <h4>仅仅对css样式进行覆盖，加上相应类名即可</h4>
        <el-tooltip v-for="(toolltip,index) in tooltips" :key="'tooltip'+index" :popper-class="toolltip.cssName" :content="toolltip.cssName" :value="toolltip.value"
                    :placement="toolltip.placement">
            <el-button @click="copyCss(toolltip)">{{toolltip.text}}</el-button>
        </el-tooltip>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tooltips: [
        {
          value: true,
          text: "dark top",
          cssName: "swx-tooltip swx-tooltip-dark",
          placement: "top"
        },
        {
          value: true,
          text: "dark right",
          cssName: "swx-tooltip swx-tooltip-dark",
          placement: "right"
        },
        {
          value: true,
          text: "dark bottom",
          cssName: "swx-tooltip swx-tooltip-dark",
          placement: "bottom"
        },
        {
          value: true,
          text: "dark left",
          cssName: "swx-tooltip swx-tooltip-dark",
          placement: "left"
        },
        {
          value: true,
          text: "light top",
          cssName: "swx-tooltip swx-tooltip-light",
          placement: "top"
        },
        {
          value: true,
          text: "light right",
          cssName: "swx-tooltip swx-tooltip-light",
          placement: "right"
        },
        {
          value: true,
          text: "light bottom",
          cssName: "swx-tooltip swx-tooltip-light",
          placement: "bottom"
        },
        {
          value: true,
          text: "light left",
          cssName: "swx-tooltip swx-tooltip-light",
          placement: "left"
        }
      ]
    };
  },
  methods: {
    copyCss(tooltip) {
      this.$copyText(tooltip.cssName).then(
        () => {
          this.$message({
            message: "复制成功:" + tooltip.cssName + "已加入剪贴板",
            type: "success",
            duration: 1500
          });
        },
        () => {
          this.$message({
            message: "复制失败" + tooltip.cssName,
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
