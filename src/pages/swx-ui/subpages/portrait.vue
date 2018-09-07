<template>
    <div class=''>
        <h3>头像为element之外单独的组件，使用方法，swx-portrait  </h3>
        <h5>属性 src为图片    size为尺寸，提供default 62*62   和mini 24*24两种尺寸</h5>
        <swx-portrait :src="man"></swx-portrait>
        <swx-portrait :src="woman"></swx-portrait>
        <swx-portrait></swx-portrait>
        <br>
        <swx-portrait :src="man" size="mini"></swx-portrait>
        <swx-portrait :src="woman" size="mini"></swx-portrait>
        <swx-portrait size="mini"></swx-portrait>
    </div>
</template>
<script>
export default {
  data() {
    return {
      woman: require("../icons/woman-portrait.png"),
      man: require("../icons/man-portrait.png")
    };
  }
};
</script>
<style>
</style>
