<template>
    <div class=''>
        <swx-search-tree :readOnly="false" :treeData="data" :closeOnClickTree="true"></swx-search-tree>
        <pre class="swx-pre">
            接收参数：
                    value：              输入框的值
                    treeData：           el-tree树组件的数据
                    closeOnClickTree：   点击数节点是否立即关闭树
                    readOnly             输入框是否只读
                    filterNode           过滤数据的自定义函数，默认通过字符串的indexOf进行过滤，
                                         直接传递给el-tree的filterNode函数

                    更多属性，请通过下面三种参数进行传递
                    treeOptions：        el-tree数组件的option
                    treeBind：           将原封不动的绑定到el-tree上
                    inputBind：          将原封不动的绑定到输入框上
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
</style>
