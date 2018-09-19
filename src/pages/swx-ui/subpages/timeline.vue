<template>
    <div class=''>
        <h4>swx-timeline  element之外的自定义组件</h4>
        <swx-timeline :data="times" ></swx-timeline>
        <swx-timeline :data="times"  :type="'theme2'"></swx-timeline>
        <swx-timeline :data="times"  :type="'theme3'"></swx-timeline>

        <pre class="swx-pre">
            接受参数：
                type                类型 default  theme2 theme3 分别对应上面的三个
                height              高度 如果内容超出，超出的部分将出现滚动条                默认400
                colors              颜色板，第一种和第二种样式中彩色部分将在颜色板中循环取色
                                            默认["#3b73b7", "#5b9bd5", "#e4a255", "#61b888", "#8e999c"]
                backgroundColor     背景色 ，默认 #ffffff
                data                时间线数据，为一个数组，其中每一个项内可包含date，title，content，分别为时间，标题，内容
                                        其中date需要可以被 Date()函数解析
                                注意：因 ie 不支持new Date()解析日期，
                                        如果需要兼容ie，建议传递参数2017-1-25格式，在不支持new Date()解析日期的浏览器下将截取字符串
            以上三种样式为固定样式，如需其他样式，需要自行编写，或者修改组件

           data示例
            [
                {
                  date: "2017-1-25",
                  title: "标题",
                  content: "这是有标题文字描述，当然，也可以选择无标题样式"
                }
            ]
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      times: [
        {
          date: "2017-1-25",
          title: "标题",
          content: "这是有标题文字描述，当然，也可以选择无标题样式"
        },
        {
          date: "2017-1-25",
          title: "标题",
          content: "这是有标题文字描述，当然，也可以选择无标题样式"
        },
        {
          date: "2017-1-25",
          title: "标题",
          content: "这是有标题文字描述，当然，也可以选择无标题样式"
        },
        {
          date: "2017-1-25",
          title: "标题",
          content: "这是有标题文字描述，当然，也可以选择无标题样式"
        },
        {
          date: "2017-1-25",
          title: "标题",
          content: "这是有标题文字描述，当然，也可以选择无标题样式"
        },
        {
          date: "2017-1-25",
          content: "这是没有题文"
        }
      ]
    };
  }
};
</script>
<style>
</style>
