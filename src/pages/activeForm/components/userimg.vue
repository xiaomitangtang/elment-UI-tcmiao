<template>
    <div class="imgbox" :class="{'img-disabled':disabled}">
      <input ref="fileinput" type="file" accept="image/*"  @change="chooseimg" :disabled="disabled">
      <div class="imgbody">
        <img class="userimg" v-show="imgsrcinner" :src="imgsrcinner" alt="">
        <span v-show="!imgsrcinner" class="el-icon-plus"></span>
      </div>
      <div class="imgfoot">
        <span class="imgfootl fl">头像</span>
        <span class="imgfootr fr">
          <i class="el-icon-plus"></i>添加
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: "userimg",
  props: {
    disabled: { type: Boolean, default: false },
    imgsrc: {
      type: [String, File],
      default: ""
    }
  },
  data() {
    return {
      file: null,
      imgsrcinner: ""
    };
  },
  methods: {
    chooseimg(e) {
      let files = e.target.files;
      if (files.length) {
        if (files[0].size > 10 * 1024 * 1024) {
          this.$mytip({
            title: "温馨提示",
            content: "您选择的图片超过了10M，请重新选择",
            type: "error"
          });
          return false;
        }
        this.file = files[0];
        this.imgsrcinner = URL.createObjectURL(this.file);
        this.$emit("choosedimg", this.file);
      }
    }
  },
  watch: {
    imgsrc(n) {
      let typen = typeof n;
      if (typen === "string" || typen === "object") {
        this.imgsrcinner = n;
      } else if (!n) {
        this.imgsrcinner = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.imgbox {
  position: relative;
  border: 1px dashed #b6b6b6;
  width: 221px;
  height: 221px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .imgbody {
    height: 182px;
    text-align: center;
    line-height: 182px;
    .userimg {
      display: block;
      width: 100%;
      height: 100%;
    }
    span {
      color: #b6b6b6;
      line-height: 180px;
      font-size: 150px;
    }
  }
  .imgfoot {
    height: 37px;
    background-color: #d9d9d9;
    line-height: 37px;
    padding: 0 15px;
    color: #666666;
    font-size: 13px;
    .imgfootl {
    }
    .imgfootr {
      cursor: pointer;
      i {
        position: relative;
        top: 1px;
      }
    }
  }
  &.img-disabled {
    background-color: #e6e6e6;
  }
}
</style>
