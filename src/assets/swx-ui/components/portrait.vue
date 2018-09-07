<template>
    <div class="swx-portrait" :class="{'swx-default-portrait':size!=='mini','swx-mini-portrait':size==='mini'}" >
        <img :src="src" alt="">
    </div>
</template>
<script>
export default {
  name: "swx-portrait",
  props: {
    size: { type: String, default: "default" },
    src: { default: require("../icons/default-portrait.png") }
  }
};
</script>
<style lang="less">
.swx-portrait {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #d3e9f9;
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.swx-default-portrait {
  width: 62px;
  height: 62px;
  line-height: 62px;
}
.swx-mini-portrait {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
</style>
