<template>
    <div class=''>
        <h1>css中cursor(光标类型)</h1>
        <el-table :data="tableData" style="width: 100%" size="mini" :row-style="rowStyle">
            <el-table-column prop="val" label="值" width="180">
            </el-table-column>
            <el-table-column prop="des" label="描述">
            </el-table-column>
        </el-table>

    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          val: "url",
          des:
            "需使用的自定义光标的 URL。\n注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标"
        },
        { val: "default", des: "默认光标（通常是一个箭头" },
        { val: "auto", des: "默认。浏览器设置的光标" },
        { val: "crosshair", des: "光标呈现为十字线" },
        { val: "pointer", des: "光标呈现为指示链接的指针（一只手）" },
        { val: "move", des: "此光标指示某对象可被移动" },
        { val: "e-resize", des: "此光标指示矩形框的边缘可被向右（东）移动" },
        {
          val: "ne-resize",
          des: "此光标指示矩形框的边缘可被向上及向右移动（北/东）"
        },
        {
          val: "nw-resize",
          des: "此光标指示矩形框的边缘可被向上及向左移动（北/西）"
        },
        { val: "n-resize", des: "此光标指示矩形框的边缘可被向上（北）移动" },
        {
          val: "se-resize",
          des: "此光标指示矩形框的边缘可被向下及向右移动（南/东）"
        },
        {
          val: "sw-resize",
          des: "此光标指示矩形框的边缘可被向下及向左移动（南/西）"
        },
        { val: "s-resize", des: "此光标指示矩形框的边缘可被向下移动（南）" },
        { val: "w-resize", des: "此光标指示矩形框的边缘可被向左移动（西）" },
        { val: "text", des: "此光标指示文本" },
        { val: "wait", des: "此光标指示程序正忙（通常是一只表或沙漏）" },
        { val: "help", des: "此光标指示可用的帮助（通常是一个问号或一个气球）" }
      ]
    };
  },
  methods: {
    rowStyle(row) {
      return {
        cursor: row.row.val
      };
    }
  }
};
</script>
<style>
</style>
