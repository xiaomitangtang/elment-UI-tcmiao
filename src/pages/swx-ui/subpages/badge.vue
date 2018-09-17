<template>
    <div class=''>
        <h4>给el-badge加上相应对的类名即可</h4>
        <template v-for="(b,index) in badgelist">
        <el-tooltip  :key="'badge'+index"  effect="dark" :content="b.cssName">
            <el-badge  :value="b.value" class="item" :class="b.cssName">
                <el-button @click="copyCss(b)" class="swx-btn-primary swx-btn-size-mini">评论</el-button>
            </el-badge>
        </el-tooltip>
            <br v-if="(index+1)%6===0" :key="'badge-br'+index"  >
        </template>

    </div>
</template>
<script>
export default {
  data() {
    return {
      badgelist: [
        { cssName: "swx-badge swx-badge-success", value: 5 },
        { cssName: "swx-badge swx-badge-success", value: 12 },
        { cssName: "swx-badge swx-badge-success", value: 122 },
        { cssName: "swx-badge swx-badge-success swx-badge-plain", value: 5 },
        { cssName: "swx-badge swx-badge-success swx-badge-plain", value: 12 },
        { cssName: "swx-badge swx-badge-success swx-badge-plain", value: 100 },
        { cssName: "swx-badge swx-badge-error", value: 5 },
        { cssName: "swx-badge swx-badge-error", value: 12 },
        { cssName: "swx-badge swx-badge-error", value: 122 },
        { cssName: "swx-badge swx-badge-error swx-badge-plain", value: 5 },
        { cssName: "swx-badge swx-badge-error swx-badge-plain", value: 12 },
        { cssName: "swx-badge swx-badge-error swx-badge-plain", value: 100 },
        { cssName: "swx-badge swx-badge-warning ", value: 5 },
        { cssName: "swx-badge swx-badge-warning ", value: 12 },
        { cssName: "swx-badge swx-badge-warning ", value: 122 },
        { cssName: "swx-badge swx-badge-warning swx-badge-plain", value: 5 },
        { cssName: "swx-badge swx-badge-warning swx-badge-plain", value: 12 },
        { cssName: "swx-badge swx-badge-warning swx-badge-plain", value: 100 }
      ]
    };
  },
  methods: {
    copyCss(badge) {
      this.$copyText(badge.cssName).then(
        () => {
          this.$message({
            message: "复制成功:" + badge.cssName + "已加入剪贴板",
            type: "success",
            duration: 1500
          });
        },
        () => {
          this.$message({
            message: "复制失败" + badge.cssName,
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
.item {
  margin-top: 15px;
  margin-right: 40px;
}
</style>
