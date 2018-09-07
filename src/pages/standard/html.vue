<template>
    <div class=''>
        <h1>Html书写规范</h1>
        <img class="standard-img" v-for="(img,index) in imgs" :src="img.src" :key="'html'+index">
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        { src: require("@/assets/standard/html/html01.jpg") },
        { src: require("@/assets/standard/html/html02.jpg") },
        { src: require("@/assets/standard/html/html03.jpg") },
        { src: require("@/assets/standard/html/html04.jpg") },
        { src: require("@/assets/standard/html/html05.jpg") },
        { src: require("@/assets/standard/html/html06.jpg") },
        { src: require("@/assets/standard/html/html07.jpg") }
      ]
    };
  }
};
</script>
