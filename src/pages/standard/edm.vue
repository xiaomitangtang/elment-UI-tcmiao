<template>
    <div>
        <h1>Html书写规范</h1>
        <img class="standard-img" v-for="(img,index) in imgs" :src="img.src" :key="'html'+index">
    </div>

</template>

<script>
export default {
  name: "edm",
  data() {
    return {
      texts: [
        {
          text:
            "用table布局，大表格套小表格方式，尽量避免用div布局，禁用浮动布局"
        },
        {
          text:
            "表格尽量固定宽度，或者自适应，高度有要求就固定高度，没要求就让height缺省，自适应。避免使用百分比；"
        },
        {
          text:
            "不能引用（css、js等文件）外部资源（css文件、），图片除外可以引用外部链接；"
        },
        { text: "禁用iframe页面嵌套；" },
        {
          text:
            "CSS要完全嵌入html元素中，不能写在页头，完全不能用CSS3的新属性（动效什么的就不要奢求），CSS2中应该禁用的常用属性有float，clear，position，top/left/right/bottom，overflow，z-index 等；"
        },
        { text: "完全禁用任何形式的Javascript和其他脚本；" },
        {
          text:
            "禁用HTML5新元素，禁用marquee，object，iframe所有的表单元素和页头元素（所以flash、video、audio就不要考虑）。\n" +
            "以上七条不能违背，否则你的EDM会在90%以上的邮箱被屏蔽或者显示得面目全非。\n" +
            "\n" +
            "进行过EDM测试的主流邮箱：\n" +
            "\n" +
            "网页：QQ，126/163，Gmail，MSN，Outlook，公司企业邮箱。\n" +
            "\n" +
            "移动端：主流APP，微信公共账号\n" +
            "\n" +
            "PC客户端：Outlook、Foxmail、MAC邮件\n" +
            "\n" +
            "所以综上所述，最终EDM邮件成品也是不同邮箱、客户端、APP展示的效果都不是完全一样的，都会有细微的差距，是不可能100%的完美还原EDM设计稿的。所以尽量采用保守和折衷的方法来尽可能多的展现你需要展现的内容。\n" +
            "\n" +
            "所以从一开始设计EDM：1、放下完美主义情节；2：风格保守、简单，不要标新立异。\n" +
            "\n" +
            "为了避免邮件被邮箱识别为垃圾邮件，还需要注意以下几点："
        },
        {
          text:
            "少用图片；\n" +
            "尽可能用背景色代替图片背景；\n" +
            "是文案的地方尽量用文字，不要用图片；\n" +
            "不要有敏感词（发票、赌博、色情等），很多邮箱还具有图像识别技术，能识别图片上的敏感词。\n" +
            "最好给出退订入口，方便用户退订。"
        }
      ],
      imgs: [{ src: require("@/assets/standard/EDM/edm01.jpg") }]
    };
  }
};
</script>

<style scoped>
</style>
