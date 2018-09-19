<template>
    <div class=''>
        <template   v-for="(popover,index) in popoverlist">
            <h5 :key="'popover-title'+index">{{popover}}</h5>
        <el-popover
                :key="'popover'+index"
                :placement="popover.placement"
                :popper-class="popover.title?'swx-popover swx-popover-hastitle':'swx-popover'"
                :title="popover.title"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">{{popover.placement}}</el-button>
        </el-popover>
        </template>
    </div>
</template>
<script>
export default {
  data() {
    return {
      popoverlist: [
        { title: "标题", placement: "top" },
        { title: "标题", placement: "top-start" },
        { title: "标题", placement: "top-end" },
        { title: "标题", placement: "bottom" },
        { title: "标题", placement: "bottom-start" },
        { title: "标题", placement: "bottom-end" },
        { title: "标题", placement: "left" },
        { title: "标题", placement: "left-start" },
        { title: "标题", placement: "left-end" },
        { title: "标题", placement: "right" },
        { title: "标题", placement: "right-start" },
        { title: "标题", placement: "right-end" },
        { title: "", placement: "top" },
        { title: "", placement: "top-start" },
        { title: "", placement: "top-end" },
        { title: "", placement: "bottom" },
        { title: "", placement: "bottom-start" },
        { title: "", placement: "bottom-end" },
        { title: "", placement: "left" },
        { title: "", placement: "left-start" },
        { title: "", placement: "left-end" },
        { title: "", placement: "right" },
        { title: "", placement: "right-start" },
        { title: "", placement: "right-end" }
      ]
    };
  }
};
</script>
<style>
</style>
