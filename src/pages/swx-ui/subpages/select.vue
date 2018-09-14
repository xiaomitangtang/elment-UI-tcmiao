<template>
    <div class=''>
        <h3>  size="small"  class="swx-select"   popper-class="swx-select"</h3>
        <el-select popper-class="swx-select"
                   size="small"
                   v-model="value8" filterable placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>


        <h3>  size="small"  class="swx-select"   popper-class="swx-select"   :multiple="true"</h3>
        <el-select
                   size="small"
                   class="swx-select"
                   popper-class="swx-select"
                   :multiple="true"
                   v-model="arr" filterable placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <!--<pre class="swx-pre">
            存在一个bug，当多选框内容占2行的时候，出现抖动，zIndex快速增长，margin-top浮动变化，内存溢出问题。
            应该存在于element内部，原因未知
        </pre>-->


        <h3> popper-class="swx-select"   size="small"   :disabled="true"</h3>
        <el-select class="swx-select"
                   size="small"
                   :disabled="true"
                   v-model="value8" filterable placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        },
        {
          value: "选项42",
          label: "龙须面"
        },
        {
          value: "选项52",
          label: "北京烤鸭"
        }
      ],
      value8: "",
      arr: []
    };
  }
};
</script>
<style>
</style>
