<template>
    <div class=''>
        <h1>文件夹命名规范</h1>
        <div class="name_text_box">
            <div>按A-Z升序排列</div>
            <span class="name_text_item html_name_item" v-for="(text,index) in texts" :key="'folder_name'+index">
                <span class="name_text_l">{{text.en}}</span>
                <span class="name_text_r">{{text.ch}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      texts: [
        { en: "admin", ch: "后台管理" },
        { en: "app", ch: "应用" },
        { en: "article", ch: "资讯" },
        { en: "common", ch: "公共" },
        { en: "config", ch: "配置" },
        { en: "data", ch: "数据" },
        { en: "digg", ch: "顶" },
        { en: "us", ch: "英文" },
        { en: "extend", ch: "延伸" },
        { en: "install", ch: "安装" },
        { en: "Lang", ch: "语言包" },
        { en: "Lib", ch: "库" },
        { en: "mall", ch: "商城" },
        { en: "picture", ch: "组图" },
        { en: "product", ch: "商品" },
        { en: "search", ch: "搜索" },
        { en: "section", ch: "区块" },
        { en: "shop", ch: "商店" },
        { en: "static", ch: "静态" },
        { en: "system", ch: "系统" },
        { en: "templates", ch: "模版" },
        { en: "tuan", ch: "团购" },
        { en: "ucenter", ch: "用户中心" },
        { en: "upload", ch: "上传" },
        { en: "video", ch: "视频" },
        { en: "vote", ch: "投票" },
        { en: "zh_tw", ch: "繁体中文" },
        { en: "zh-cn", ch: "简体中文" }
      ]
    };
  }
};
</script>
<style>
.html_name_item {
  display: block;
}
</style>
