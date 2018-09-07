<template>
    <div class=''>
        <el-carousel class="swx-ui-views-carousel" :autoplay="false" >
            <el-carousel-item v-for="(img,index) in imgs" :key="'img'+index">
                <img  :src="img.src" >
            </el-carousel-item>
        </el-carousel>

    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        { src: require("../../../assets/swx-ui/imgs/swx00.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx01.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx03.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx05.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx06.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx07.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx08.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx09.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx10.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx11.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx12.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx13.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx14.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx15.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx16.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx17.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx18.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx19.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx20.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx21.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx22.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx23.jpg") },
        { src: require("../../../assets/swx-ui/imgs/swx24.jpg") }
      ]
    };
  }
};
</script>
<style lang="less">
.swx-ui-views-carousel {
  height: 100%;
  .el-carousel__container {
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .el-carousel__button {
    background-color: #1865a7 !important;
    width: 8px;
    height: 8px;
    border-radius: 5px;
  }
  .is-active .el-carousel__button {
    background-color: #165b96 !important;
  }
}
</style>
