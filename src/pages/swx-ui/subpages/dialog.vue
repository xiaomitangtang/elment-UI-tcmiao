<template>
    <div class=''>
        <el-button class="swx-btn-white swx-btn-size-normal" @click="dialogVisible=true">dialog</el-button>
        <el-button class="swx-btn-white swx-btn-size-normal" @click="dialogVisible2=true">centerDialog</el-button>
        <pre class="swx-pre">
            样例中确定按钮   class="swx-btn-primary    swx-btn-size-normal"
            样例中关闭按钮   class="swx-btn-primary  swx-btn-primary-plain  swx-btn-size-normal"


            点击关闭按钮使用element的$confirm

               this.$confirm("确认关闭？", {
                        customClass: "swx-message-box",
                        cancelButtonClass: "swx-btn-white swx-btn-size-normal",
                        confirmButtonClass: "swx-btn-primary swx-btn-size-normal",
                        confirmButtonText: "是",
                        cancelButtonText: "否",
                        title: "提示"
                      })
        </pre>
        <el-dialog
                title="提示"
                class="swx-dialog"
                :visible.sync="dialogVisible"
                width="60%"
                :before-close="handleClose">
            <div class="demo-dialog-content">swx-dialog  内容区</div>
            <span slot="footer" class="dialog-footer">
                <el-button class="swx-btn-primary    swx-btn-size-normal" @click="dialogVisible = false">确 定</el-button>
                <el-button class="swx-btn-primary  swx-btn-primary-plain  swx-btn-size-normal" @click="dialogVisible = false">关 闭</el-button>
              </span>
        </el-dialog>

        <el-dialog
                title="提示"
                class="swx-dialog"
                :visible.sync="dialogVisible2"
                width="60%"
                center
                :before-close="handleClose">
            <div class="demo-dialog-content">swx-dialog  内容区</div>
            <span slot="footer" class="dialog-footer">
                <el-button class="swx-btn-primary    swx-btn-size-normal" @click="dialogVisible2 = false">确 定</el-button>
                <el-button class="swx-btn-primary  swx-btn-primary-plain  swx-btn-size-normal" @click="dialogVisible2 = false">关 闭</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return { dialogVisible: false, dialogVisible2: false };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？", {
        customClass: "swx-message-box",
        cancelButtonClass: "swx-btn-white swx-btn-size-normal",
        confirmButtonClass: "swx-btn-primary swx-btn-size-normal",
        confirmButtonText: "是",
        cancelButtonText: "否",
        title: "提示"
      })
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>
<style>
.demo-dialog-content {
  background-color: #e5e5e5;
  height: 250px;
  line-height: 250px;
  text-align: center;
  color: #666666;
}
</style>
