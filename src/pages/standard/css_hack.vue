<template>
    <div class=''>
        <h1>CSS Hack</h1>
        <img class="standard-img" v-for="(img,index) in imgs" :src="img.src" :key="'html'+index">
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [{ src: require("@/assets/standard/css/csshack.jpg") }]
    };
  }
};
</script>
