<template>
    <div class=''>
        <h1>键盘按钮keycode</h1>
        <img class="standard-img" v-for="(img,index) in imgs" :src="img.src" :key="'html'+index">
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        { src: require("@/assets/standard/keycode/keycode01.jpg") },
        { src: require("@/assets/standard/keycode/keycode02.jpg") },
        { src: require("@/assets/standard/keycode/keycode03.jpg") }
      ]
    };
  }
};
</script>
