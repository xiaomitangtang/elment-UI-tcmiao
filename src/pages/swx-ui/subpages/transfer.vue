<template>
    <div class=''>
        <h4>swx-transfer</h4>
        <swx-transfer :ldata="datalist1" :rdata="datalist12" :header="header" @change="transferChange"
        @toRight="toRight"
        @toLeft="toLeft"
        ></swx-transfer>
        <swx-transfer :ldata="datalist21" :rdata="datalist22" :header="header" @change="transferChange" :showCheckbox="false"></swx-transfer>
        <pre class="swx-pre">
            以上为自己写的组件  swx-transfer
            可以实现同时展示多列数据，但是功能比较单一，暂不支持搜索等功能
            接受参数：
            header              表格头部信息        [{ prop: "name", label: "姓名" }, { prop: "age", label: "年龄" }]
                                head中的属性将通过v-bind直接传递给内部的el-table组件

            ldata               左侧表格的数据      [{ name: "小米", age: "71" }, { name: "小米2", age: "72222" }]

            rdata               右侧表格的数据      [{ name: "小米", age: "72" },{ name: "小米2", age: "11172" }]

            ltitle              左侧表格头部文字    列表
            rtitle              右侧表格头部文字    列表
            showCheckbox        是否开启多选框      true


            事件：change
                    当点击向左向右按钮时，触发的事件  传出的参数为 {ldata:[],rdata:[]}  分别为左边表格和右边表格的数据
                    lCurrentChange   当关闭checkbox时，左侧当前项变化的回调函数，参数为当前项
                    rCurrentChange   当关闭checkbox时，右侧当前项变化的回调函数，参数为当前项
                    lSelectChange    当开启checkbox时，左侧勾选列表变化的回调函数，参数为当前左侧选中列表
                    rSelectChange    当开启checkbox时，右侧勾选列表变化的回调函数，参数为当前右侧选中列表
                    toLeft   向左按钮点击事件  没有回调参数
                    toRight  向右按钮点击事件  没有回调参数
        </pre>
        <h3> el-transfer   加上类名   swx-transfer swx-checkbox</h3>
        <el-transfer class="swx-transfer swx-checkbox" v-model="value1" :data="data"></el-transfer>
    </div>
</template>
<script>
export default {
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      datalist1: [{ name: "小米", age: "71" }, { name: "小米2", age: "72222" }],
      datalist12: [
        { name: "小米", age: "72" },
        { name: "小米2", age: "11172" }
      ],
      datalist21: [
        { name: "小米", age: "72" },
        { name: "小米2", age: "11172" }
      ],
      datalist22: [
        { name: "小米", age: "72" },
        { name: "小米2", age: "11172" }
      ],
      header: [{ prop: "name", label: "姓名" }, { prop: "age", label: "年龄" }],
      data: generateData(),
      value1: [1, 4]
    };
  },
  methods: {
    transferChange(data) {
      console.log(data);
    },
    toLeft() {
      console.log("toLeft");
    },
    toRight() {
      console.log("toRight");
    }
  }
};
</script>
<style>
</style>
