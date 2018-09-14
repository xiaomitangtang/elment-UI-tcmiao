<template>
    <div class=''>
        <h3>swx-switch</h3>
        <div v-for="(switchItem,index) in switchList" :key="'switch'+index">
            <h4>{{switchItem}}</h4>
            <swx-switch v-model="switch1" v-bind="switchItem"></swx-switch>
        </div>
        <pre class="swx-pre">
            此组件为element之外的组件，仅实现简单的展示功能，
            接受四个参数，如下：
                value: { type: Boolean, default: true },
                onText: { type: String, default: "on" },
                offText: { type: String, default: "off" },
                type: { type: String, default: "round" }
            value在绑定的值，布尔类型
            onText 值为true所对应的文字
            offText 值为false所对应的文字
            type   为字符串类型，可选为 round    btn   即是长圆形和按钮类型
            注：长圆形文字只能接受一个汉字，按钮类型只能接受两个汉字，字符长度超过将以省略号显示

        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: true,
      switchList: [
        {},
        { onText: "开", offText: "关" },
        { type: "btn" },
        { onText: "开", offText: "关", type: "btn" },
        { onText: "办案", offText: "管理", type: "btn" },
        { onText: "办案11", offText: "管理11", type: "btn" }
      ]
    };
  }
};
</script>
<style>
</style>
