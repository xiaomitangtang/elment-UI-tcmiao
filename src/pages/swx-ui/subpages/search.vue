<template>
    <div class=''>
        <h4>swx-search</h4>
        <swx-search :options="{label:'label',value:'label'}" :selects="selects1" @search="search" @change="search"></swx-search>

      <div v-for="(demo,index) in demoList" :key="'searchdemo'+index">
          <h5>swx-search {{JSON.stringify(demo)}}</h5>
          <swx-search :placeholder="demo.placeholder" :searchType="demo.searchType" :submitText="demo.submitText" :sufIcon="demo.sufIcon"
                      :options="{label:'label',value:'label'}" :selects="index<2?selects2:selects1" @search="search" @change="search" :disable="demo.disable"></swx-search>
      </div>

        <pre class="swx-pre">
            swx-search接受参数如下：
             placeholder:输入框占位符默认为：‘请输入’
             searchType: 输入框的类型，简单输入框为默认值simple，简单输入框可不传
             sufIcon: 简单搜索框右侧的图标/复杂搜索框右侧按钮图标 默认值为el-icon-search，即一个放大镜
             submitText:复杂搜索框右侧按钮文字，默认为空字符串
             selects: 带下拉框搜索的列表数据，为一个数组，数组形式为：[{key:'keyname',placeholder:"条件占位符",list:[{label:"",value:""}]}]形式，
                      其中key为传出时该选项的键名，list为下拉框的数据，默认label为显示的文字属性，value为传出的字段属性
             options: 配合 selects使用，默认为{ label: "label", value: "value" }，
                      其中，label为select的list中需要显示的文字属性字段名，value为传出字段属性
            disable:禁用搜索框   默认为false

            事件：
                change 当输入框内容变化，下拉选择器变化，会触发change事件
                search 当点击搜索按钮，触发的事件
                回调参数均为
                { keywords: "", keys: "" }
                其中 keywords为输入框内容
                keys为下拉选择框的字段集合
            例如：
            selects属性为：
                [
                    {
                      key: "key1",
                      placeholder: "条件一",
                      list: [{ label: "条件一", value: 1 },{ label: "条件二", value: 2 },{ label: "条件三", value: 3 },
                             { label: "条件四", value: 4 },{ label: "条件五", value: 5 }]
                    },
                    {
                      key: "key2",
                      placeholder: "条件二",
                      list: [{ label: "条件一", value: 1 },{ label: "条件二", value: 2 },{ label: "条件三", value: 3 },
                             { label: "条件四", value: 4 },{ label: "条件五", value: 5 }]
                    }
                  ]
            options属性为：
                {label:'label',value:'label'}

            则回调函数传出的参数为：
                {"keywords":"123","keys":{"key1":"条件三","key2":"条件三"}}
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      demoList: [
        {
          placeholder: "请输入",
          searchType: "selects-small",
          submitText: "搜索",
          sufIcon: "",
          disable: false
        },
        {
          placeholder: "请输入",
          searchType: "selects-small",
          submitText: "搜索",
          sufIcon: "",
          disable: true
        },

        {
          placeholder: "请输入",
          searchType: "selects-large",
          submitText: "",
          sufIcon: "el-icon-search",
          disable: false
        },
        {
          placeholder: "请输入",
          searchType: "selects-small",
          submitText: "",
          sufIcon: "el-icon-search",
          disable: false
        },
        {
          placeholder: "请输入",
          searchType: "selects-small",
          submitText: "搜索",
          sufIcon: "",
          disable: false
        },

        {
          placeholder: "请输入",
          searchType: "selects-large",
          submitText: "",
          sufIcon: "el-icon-search",
          disable: false
        },
        {
          placeholder: "请输入",
          searchType: "selects-large",
          submitText: "搜索",
          sufIcon: "",
          disable: false
        }
      ],
      selects1: [
        {
          key: "key1",
          placeholder: "条件1",
          list: [
            { label: "条件一", value: 1 },
            { label: "条件二", value: 2 },
            { label: "条件三", value: 3 },
            { label: "条件四", value: 4 },
            { label: "条件五", value: 5 }
          ]
        },
        {
          key: "key2",
          placeholder: "条件2",
          list: [
            { label: "条件一", value: 1 },
            { label: "条件二", value: 2 },
            { label: "条件三", value: 3 },
            { label: "条件四", value: 4 },
            { label: "条件五", value: 5 }
          ]
        }
      ],
      selects2: [
        {
          key: "key1",
          placeholder: "条件1",
          list: [
            { label: "条件一", value: 1 },
            { label: "条件二", value: 2 },
            { label: "条件三", value: 3 },
            { label: "条件四", value: 4 },
            { label: "条件五", value: 5 }
          ]
        }
      ]
    };
  },
  methods: {
    search(data) {
      console.log(JSON.stringify(data));
    }
  }
};
</script>
<style>
</style>
