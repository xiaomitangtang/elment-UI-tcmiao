<template>
    <div class=''>
        <h1>ARIA无障碍网页应用属性</h1>
        <img class="standard-img" v-for="(img,index) in imgs" :src="img.src" :key="'html'+index">
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        { src: require("@/assets/standard/aria/aria01.jpg") },
        { src: require("@/assets/standard/aria/aria02.jpg") },
        { src: require("@/assets/standard/aria/aria03.jpg") },
        { src: require("@/assets/standard/aria/aria04.jpg") },
        { src: require("@/assets/standard/aria/aria05.jpg") },
        { src: require("@/assets/standard/aria/aria06.jpg") },
        { src: require("@/assets/standard/aria/aria07.jpg") },
        { src: require("@/assets/standard/aria/aria08.jpg") },
        { src: require("@/assets/standard/aria/aria09.jpg") },
        { src: require("@/assets/standard/aria/aria10.jpg") },
        { src: require("@/assets/standard/aria/aria11.jpg") },
        { src: require("@/assets/standard/aria/aria12.jpg") },
        { src: require("@/assets/standard/aria/aria13.jpg") },
        { src: require("@/assets/standard/aria/aria14.jpg") },
        { src: require("@/assets/standard/aria/aria15.jpg") },
        { src: require("@/assets/standard/aria/aria16.jpg") },
        { src: require("@/assets/standard/aria/aria17.jpg") }
      ]
    };
  }
};
</script>
