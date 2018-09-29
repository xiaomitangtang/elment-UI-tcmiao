<template>
    <div class=''>
        <h2>说明</h2>
        <h4>本基础库为基础研发团队基于 element-ui  结合 公司的设计视图进行二次开发的产品，本次发布为初代版本</h4>
        <h4>基础库对于element组件的封装仅仅基于css的样式覆盖，在element无法实现的公司视图，进行了部分基础组件的实现。</h4>
        <h4><a href="/swx-ui.zip" download="swx-ui.zip">swx-ui</a></h4>
        <h4><a href="/swx-ui-demo.zip" download="swx-ui-demo.zip">本ui库的demo</a></h4>

        <pre class="swx-pre">
            使用方法一：
                安装element-ui 目前最新版本2.4.6
                点击上面的链接，下载swx-ui.zip
                将swx-ui解压后拷贝到项目src/assets文件夹下，
                在main.js中加入如下代码：
                    import ElementUI from "element-ui";
                    import "element-ui/lib/theme-chalk/index.css";
                    import "@/assets/swx-ui/less/index.less";
                    import swxUi from "@/assets/swx-ui/index.js";
                    Vue.use(ElementUI, { size: "mini" });
                    Vue.use(swxUi);
            然后按照demo使用即可。
            注意：在swx-search-tree组件中，使用到了JSX语法，所以请确认您的项目能够支持JSX语法
                    swx-ui的css全线使用的less语法进行书写，请在您的项目中配置less支持
        </pre>
        <h4><a href="/vbp3.0.zip" download="vbp3.0.zip">vbp3.0</a></h4>
        <pre class="swx-pre">
            使用方法二：
                下载上面的vbp3.0.zip,解压到目的文件夹，
                    为了方便内网使用，此压缩包已经包含项目所需的基本node_modules依赖
                    如果不需要新的依赖，则可直接使用
                进入vbp3.0，执行命令
                    npm run serve
                    如果失败就再次执行
                     npm run serve
                    即可成功启动
                注：该压缩包已经内置了swx-ui，所以不用重复引入，
                    并且，该vbp3.0提供了加载配置文件的部分代码，
                    需要在服务器根目录存在VueApp_config.json文件，
                    main.js中提供了一种异步获取配置的方式
                    在loadConfig.js中提供了同步加载的方式，并且可使用import的方式引入需要的组件
                特别提醒：项目使用  vue-cli3.0搭建，所以启动命令和配置文件与2.0都不一样
                    3.0项目引号使用双引号，而非单引号。
                    如果在修改js文件时，在相应的目录生成临时文件，直接删除临时文件即可
                项目打包命令  npm run build
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
