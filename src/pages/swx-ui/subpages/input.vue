<template>
    <div class=''>
        <h3>双击复制类名</h3>
        <el-tooltip style="margin: 10px 10px;" v-for="(input,index) in inputs" :key="'input'+index"  effect="dark" :content="input.cssName" >
            <el-input @dblclick.native="copyCss(input)" :class="input.cssName" placeholder="请输入内容" :prefix-icon="input.preIcon"  :suffix-icon="input.sufIcon" :disabled="input.disable"></el-input>
        </el-tooltip>
        <el-radio-group v-model="labelPosition" size="mini">
            <el-radio label="left">左对齐</el-radio>
            <el-radio label="right">右对齐</el-radio>
            <el-radio label="top">顶部对齐</el-radio>
        </el-radio-group>
        <h3>form标签类名  swx-from</h3>
        <el-form :label-position="labelPosition" label-width="60px"  size="mini" class="swx-from"
                 :model="ruleForm" :rules="rules" ref="ruleForm"
        >
            <el-form-item :label="item" :prop="item" v-for="(item,index) in Object.keys(ruleForm)" :key="item+index">
                <el-input class="swx-input swx-input-mini" v-model="ruleForm[item]"></el-input>
            </el-form-item>
        </el-form>

        <h4>搜索,也可以使用swx-search组件，请前往search查看</h4>
        <el-input placeholder="请输入内容"  class="swx-input swx-input-mini">
            <el-select  v-model="inputSelect"  slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-input placeholder="请输入内容"  class="swx-input swx-input-small">
            <el-select  v-model="inputSelect"  slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-input placeholder="请输入内容"  class="swx-input swx-input-medium">
            <el-select  v-model="inputSelect"  slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>
<script>
export default {
  data() {
    return {
      inputs: [
        { cssName: "swx-input swx-input-mini", sufIcon: "", disable: false },
        {
          cssName: "swx-input swx-input-mini",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        { cssName: "swx-input swx-input-small", sufIcon: "", disable: false },
        {
          cssName: "swx-input swx-input-small",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        { cssName: "swx-input swx-input-medium", sufIcon: "", disable: false },
        {
          cssName: "swx-input swx-input-medium",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        { cssName: "swx-input swx-input-medium", sufIcon: "", disable: true },
        {
          cssName: "swx-input swx-input-medium",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: true
        },
        {
          cssName: "swx-input swx-input-medium swx-input-success",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        {
          cssName: "swx-input swx-input-medium swx-input-warning",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        {
          cssName: "swx-input swx-input-medium swx-input-error",
          sufIcon: "el-icon-date",
          preIcon: "el-icon-date",
          disable: false
        },
        { cssName: "swx-input swx-input-medium", sufIcon: "", disable: false }
      ],
      inputSelect: "",
      labelPosition: "right",
      ruleForm: {
        name: "",
        region: "",
        addr: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入name", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ required: true, message: "请输入region", trigger: "blur" }],
        addr: [
          { required: true, message: "请输入addr", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    copyCss(input) {
      this.$copyText(input.cssName).then(
        () => {
          this.$message({
            message: "复制成功:" + input.cssName + "已加入剪贴板",
            type: "success",
            duration: 1500
          });
        },
        () => {
          this.$message({
            message: "复制失败" + input.cssName,
            type: "error",
            duration: 1500
          });
        }
      );
    }
  }
};
</script>
<style>
</style>
