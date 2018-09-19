<template>
    <div class=''>
        <swx-steps :data="steps" :stepWidth="200"></swx-steps>
        <swx-steps style="margin-top: 10px;" :data="steps" type="theme2" :stepWidth="200"></swx-steps>
        <swx-steps style="margin-top: 10px;" :data="steps" type="theme3" :stepWidth="200"></swx-steps>
        <pre class="swx-pre">
            接受参数
                 active             当前激活的step的索引，默认为第一个，即为0
                 type               类型：提供三种  default  theme2  theme3
                 backgroundColor:   背景色 ，默认为 #ffffff
                 activeColor:       对于上面的前两种，可以传入激活色和未激活色，第三种使用的是背景图，所以不支持
                 defaultColor:
                 stepWidth:         每一个step的宽度，默认为130
                 data:              步骤数据 为数组，其中每一项可以包含title和content
                                    第一种会显示标题和描述文字，其余两种只会显示标题
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        { title: "步骤一", content: "描述文字" },
        { title: "步骤二", content: "描述文字" },
        { title: "步骤三", content: "描述文字" },
        { title: "步骤四", content: "描述文字" }
      ]
    };
  }
};
</script>
<style>
</style>
