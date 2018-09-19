<template>
    <div class=''>
        <h3>swx-datepicker</h3>
        <swx-datepicker v-model="date1"></swx-datepicker>
        <h3>swx-datepicker    :disabled="true"</h3>
        <swx-datepicker v-model="date1" :disabled="true"></swx-datepicker>
        <pre class="swx-pre">
            这是自己封装的datepicker
            组件为 swx-datepicker
            使用方法，直接使用v-model绑定变量即可  变量格式为yyyy-MM-dd格式字符串
            可配置参数
            placehoder 占位字符
            clearable  是否可清空
            disabled   使用禁用

            功能比较简单，作为日期选择器使用，如需更丰富的功能，请使用element相关的组件
        </pre>



        <h3>下面是element组件的css类封装  size="small"  class="swx-datepicker"   popper-class="swx-datepicker"</h3>
        <h5>    type="date"</h5>
        <el-date-picker
                 class="swx-datepicker"
                 popper-class="swx-datepicker"
                 size="small"
                v-model="date2"
                type="date"
                placeholder="选择日期">
        </el-date-picker>

        <h5>     type="month"</h5>
        <el-date-picker
                class="swx-datepicker"
                popper-class="swx-datepicker"
                type="month"
                size="small"
                v-model="date2"
                placeholder="选择日期">
        </el-date-picker>
        <h5>      type="year"</h5>
        <el-date-picker
                class="swx-datepicker"
                popper-class="swx-datepicker"
                type="year"
                size="small"
                v-model="date2"
                placeholder="选择日期">
        </el-date-picker>
        <h5>  type="dates"</h5>
        <el-date-picker
                class="swx-datepicker"
                popper-class="swx-datepicker"
                type="dates"
                size="small"
                v-model="dates"
                placeholder="选择日期">
        </el-date-picker>

        <h5> type="daterange"</h5>
        <el-date-picker
                class="swx-datepicker"
                popper-class="swx-datepicker"
                type="daterange"
                size="small"
                v-model="dates"
                placeholder="选择日期">
        </el-date-picker>
        <h5>带有选项</h5>
        <el-date-picker
                v-model="value7"
                type="daterange"
                size="small"
                class="swx-datepicker"
                popper-class="swx-datepicker"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
        </el-date-picker>
    </div>
</template>
<script>
export default {
  data() {
    return {
      date1: "",
      date2: "2018-9-12",
      value7: ["2018-9-12", "2019-2-1"],
      dates: [],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  }
};
</script>
<style>
</style>
