<template>
    <div class=''>
        <h2>说明</h2>
        <h4>本基础库为基础研发团队基于 element-ui  结合 公司的设计视图进行二次开发的产品，本次发布为初代版本</h4>
        <h4>基础库对于element组件的封装仅仅基于css的样式覆盖，在element无法实现的公司视图，进行了部分基础组件的实现。</h4>
        <h4><a href="/swx-ui.zip" download="swx-ui.zip">swx-ui</a></h4>
        <h4><a href="/swx-ui-demo.zip" download="swx-ui-demo.zip">本ui库的demo</a></h4>
        <pre class="swx-pre">
            使用方法：
                安装element-ui 目前最新版本2.4.6
                点击上面的链接，下载swx-ui.zip
                将swx-ui解压后拷贝到项目src/assets文件夹下，
                在main.js中加入如下代码：
                    import ElementUI from "element-ui";
                    import "element-ui/lib/theme-chalk/index.css";
                    import "@/assets/swx-ui/less/index.less";
                    import swxUi from "@/assets/swx-ui/index.js";
                    import VueClipboard from "vue-clipboard2";
                    Vue.use(ElementUI, { size: "mini" });
                    Vue.use(swxUi);
            然后按照demo使用即可。
            注意：在swx-search-tree组件中，使用到了JSX语法，所以请确认您的项目能够支持JSX语法
                    swx-ui的css全线使用的less语法进行书写，请在您的项目中配置less支持
        </pre>

    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
</style>
