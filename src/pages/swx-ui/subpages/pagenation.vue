<template>
    <div class=''>
        <h3> swx-pagenation  对element的pagenation进行包装   将所有参数包装到一个对象中进行传递，prop名为elProps</h3>
        <div v-for="(props,index) in elPropsList" :key="'pagenation'+index">
            <h4>{{props}}</h4>
            <swx-pagenation :elProps="props"  @current-change="pageChange" @size-change="sizeChange"></swx-pagenation>
        </div>



        <pre class="swx-pre">
           传递给element的属性请通过 props   elProps传递进入组件，将原封不动传递给element的pagenation
          注意：不包括  background 因设计图包含背景，所以组件内已经固定传递此属性
                另外多添加属性         showLast     showFirst 首页按钮和尾页按钮是否显示，默认为true
                                       firstText   lastText  分别为首页/尾页按钮文字，默认为  首页/尾页




            事件：first  首页按钮点击事件
                  last   尾页按钮点击事件
                  current-change 当前页变化事件   仅仅传递element事件 未作处理
                  size-change  pageSize变化事件   仅仅传递element事件 未作处理
                  prev-click   前一页按钮点击事件  仅仅传递element事件 未作处理
                  next-click   后一页按钮点击事件  仅仅传递element事件 未作处理


            注：因，首页，尾页按钮是外部加上的，所以只能在element组件的两端，此时不建议同时使用element的
                sizes, jumper,total
                因为看起来会显得比较怪异
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      elPropsList: [
        {
          total: 200,
          "current-page": 1,
          layout: "prev, pager,next",
          small: false,
          firstText: "",
          lastText: ""
        },
        {
          total: 60,
          "current-page": 1,
          layout: "prev, pager,next",
          small: false,
          firstText: "",
          lastText: ""
        },
        {
          total: 70,
          "current-page": 2,
          layout: "prev, pager,next",
          small: false,
          firstText: "",
          lastText: "",
          showLast: false,
          showFirst: false
        },
        {
          total: 200,
          "current-page": 1,
          layout: "prev, pager,next",
          small: true,
          firstText: "first",
          lastText: "last",
          showLast: true,
          showFirst: true
        },
        {
          total: 60,
          "current-page": 1,
          layout: "prev, pager,next",
          small: true,
          firstText: "first",
          lastText: "last",
          showLast: true,
          showFirst: true
        },
        {
          total: 60,
          "current-page": 1,
          layout: "pager",
          small: true,
          showLast: true,
          showFirst: true
        },
        {
          total: 70,
          "current-page": 1,
          layout: "prev, pager,next",
          small: true,
          firstText: "first",
          lastText: "last",
          showLast: false,
          showFirst: false
        },
        {
          total: 70,
          "current-page": 1,
          layout: "sizes,prev, pager, next, jumper,total",
          small: true,
          firstText: "first",
          lastText: "last",
          showLast: false,
          showFirst: false
        },
        {
          total: 70,
          "current-page": 1,
          layout: "sizes,prev, pager, next, jumper,total",
          small: false,
          firstText: "first",
          lastText: "last",
          showLast: false,
          showFirst: false
        }
      ]
    };
  },
  methods: {
    pageChange(page) {
      console.log(page);
    },
    sizeChange(size) {
      console.log(size);
    }
  }
};
</script>
<style>
</style>
