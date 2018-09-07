<template>
    <div class=''>
        <h1>html命名规范</h1>
        <div class="name_text_box">
            <div>1. 内容优先,表现为辅</div>
            <div>2. css命名中英文对照</div>
            <span class="name_text_item html_name_item" v-for="(text,index) in texts" :key="'css_name'+index">
                <span class="name_text_l">swx_{{text.en}}</span>
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
        { en: "default/index.html", ch: "首页" },
        { en: " 404.html", ch: "404错误页" },
        { en: "print.html", ch: "打印页" },
        { en: "header.html", ch: "页头" },
        { en: "footer.html", ch: "页脚" },
        { en: "sitemap.html", ch: "网站地图" },
        { en: "passport.html", ch: "通行证" },
        { en: "rank.html", ch: "排行榜" },
        { en: "roll.html", ch: "滚动新闻" },
        { en: "solution.html", ch: "解决方案" },
        { en: "joinus.html", ch: "加入我们" },
        { en: "partner.html", ch: "合作伙伴" },
        { en: "service.html", ch: "服务" },
        { en: "aboutus.html", ch: "关于我们" },
        { en: "contact.html", ch: "联系我们" },
        { en: "company.html", ch: "公司介绍" },
        { en: "organization.html", ch: "组织结构" },
        { en: "culture.html", ch: "企业文化" },
        { en: "strategy.html", ch: "发展策略" },
        { en: "honor.html", ch: "公司荣誉" },
        { en: "aptitudes.html", ch: "企业资质" },
        { en: "events.html", ch: "大事记" },
        { en: "business.html", ch: "商务合作" },
        { en: "contract.html", ch: "服务条款" },
        { en: "privacy.html", ch: "隐私声明" },
        { en: "CSR.html", ch: "企业社会责任" },
        { en: "news-开头.html", ch: "新闻相关" },
        { en: "article-开头.html", ch: "资讯相关" },
        { en: "picture-开头.html", ch: "图片相关" },
        { en: "photo-开头.html", ch: "相册相关" },
        { en: "product-开头.html", ch: "产品相关" },
        { en: "goods-开头.html", ch: "商品相关" },
        { en: "system-开头.html", ch: "系统相关" },
        { en: "tag-开头.html", ch: "tag相关" },
        { en: "brand-开头.html", ch: "品牌相关" },
        { en: "help-开头.html", ch: "帮助相关" },
        { en: "member-开头.html", ch: "会员相关" },
        { en: "search-开头.html", ch: "搜索相关" }
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
