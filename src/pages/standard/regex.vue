<template>
    <div class=''>
        <h1>正则表达式的元字符</h1>
        <el-table :data="tableData" style="width: 100%" size="mini">
            <el-table-column prop="orange" label="元字符" width="180">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="target" label="匹配对象">
            </el-table-column>
        </el-table>
        <h5>汇集了常用的正则表达式，以后大家不用再从网上各种搜索了，欢迎批评指正。</h5>
        <el-table :data="tableData2" style="width: 100%" size="mini">
            <el-table-column prop="name" label="名称" width="200" >
            </el-table-column>
            <el-table-column prop="expression" label="表达式" width="500">
            </el-table-column>
            <el-table-column prop="msg" label="备注">
            </el-table-column>
        </el-table>
        <h5>以上正则表达式已经过校验，请放心使用，无毒，绿色，满足大部分业务需求！</h5>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { orange: "*", name: "星", target: "零次或多次" },
        { orange: "+", name: "加号", target: "一次或多次" },
        { orange: "?", name: "问好", target: "零次或一次" },
        { orange: ".", name: "点号", target: "单个任意字符" },
        { orange: "[...]", name: "字符组", target: "列出的任意字符" },
        { orange: "[^...]", name: "点号", target: "未列出的任意字符" },
        { orange: "^", name: "脱字符", target: "行的起始位置" },
        { orange: "$", name: "美元符", target: "行的结束为止" },
        { orange: "\\<", name: "反斜线-小于", target: "单词的起始位置" },
        { orange: "\\>", name: "反斜线-大于", target: "单词的结束位置" },
        {
          orange: "|",
          name: "竖线",
          target: "或，匹配分割两边的任意一个表达式"
        },
        { orange: " (...)", name: "括号", target: "限制竖线的作用范围" },
        {
          orange: "\\b",
          name: "",
          target: "匹配一个单词边界，也就是指单词和空格间的位置"
        },
        { orange: "\\B", name: "", target: "匹配非单词边界" },
        { orange: " \\d", name: "", target: "匹配一个数字字符。等价于 [0-9]" },
        {
          orange: " \\D",
          name: "",
          target: "匹配一个非数字字符。等价于 [^0-9]"
        },
        {
          orange: "\\w",
          name: "",
          target: "匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'"
        },
        {
          orange: "\\W",
          name: "",
          target: "匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'"
        },
        {
          orange: "\\f",
          name: "",
          target: "匹配一个换页符。等价于 \\x0c 和 \\cL"
        },
        {
          orange: "\\n",
          name: "",
          target: "匹配一个换行符。等价于 \\x0a 和 \\cJ"
        },
        {
          orange: "\\r",
          name: "",
          target: "匹配一个回车符。等价于 \x0d 和 \\cM"
        },
        {
          orange: "\\s",
          name: "",
          target:
            "匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \\f\\n\\r\\t\\v]"
        },
        {
          orange: "\\S",
          name: "",
          target: "匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]"
        },
        {
          orange: "\\t",
          name: "",
          target: "匹配一个制表符。等价于 \\x09 和 \\cI"
        },
        {
          orange: "\\v",
          name: "",
          target: "匹配一个垂直制表符。等价于 \\x0b 和 \\cK"
        }
      ],
      tableData2: [
        {
          name: "0 或 非0开头数字(非负整数)",
          expression: "^(0|[1-9]\\d*)$",
          msg: ""
        },
        { name: "中文汉字", expression: "^[\\u4e00-\\u9fa5]{0,}$", msg: "" },
        { name: "英文或数字", expression: "^[A-Za-z0-9]*$", msg: "" },
        { name: "英文字母", expression: "^[A-Za-z]*$", msg: "" },
        {
          name: "数字或字母或_",
          expression: "^[\\u4E00-\\u9FA5A-Za-z\\d]*$",
          msg: ""
        },
        {
          name: "中文或数字或字母或_",
          expression: "^[\\u4E00-\\u9FA5\\w]*$",
          msg: ""
        },
        { name: "允许输入这些特殊字符", expression: "^[%&',;=?$]*$", msg: "" },
        { name: "禁止输入这些特殊字符", expression: "^[^%&',;=?$]*$", msg: "" },
        { name: "QQ号校验", expression: "^[1-9]\\d{4,10}$", msg: "" },
        { name: "邮政编码", expression: "^\\d{6}$", msg: "" },
        { name: "12个月匹配", expression: "^(0?[1-9]|1[0-2])$", msg: "" },
        {
          name: "每月31天匹配",
          expression: "^((0?[1-9])|((1|2)[0-9])|30|31)$",
          msg: ""
        },
        {
          name: "匹配金钱",
          expression:
            "(^[1-9](\\d+)?(\\.\\d{1,2})?$)|(^(0){1}$)|(^\\d\\.\\d(\\d)?$)",
          msg: ""
        },
        {
          name: "邮箱校验",
          expression: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
          msg: ""
        },
        {
          name: "域名校验",
          expression: "^([a-zA-Z\\d][a-zA-Z\\d-_]+\\.)+[a-zA-Z\\d-_][^ ]*$",
          msg: ""
        },
        {
          name: "URL校验（带http|https）",
          expression:
            "^(http|https):\\/\\/([a-zA-Z\\d][\\w-]+\\.)+[\\w-]+(/[\\w-./?#%&@=]*)?$",
          msg: ""
        },
        { name: "电话号码", expression: "^0\\d{2,3}-?\\d{7,8}$", msg: "" },
        {
          name: "手机号码",
          expression:
            "^((13[0-9])|(14[5,7,9])|(15[^4])|(16[6])|(17[0,1,2,3,5,6,7,8])(18[0-9])|(19[8,9]))\\d{8}$",
          msg:
            "\t\t13.........\n" +
            "145........，147........，149........\n" +
            "150........，151........，152........，153........，155........，156........，157........，158........，159........\n" +
            "166........\n" +
            "170........，171........，172........，173........，175........，176........，177........，178........\n" +
            "18.........\n" +
            "198........，199........"
        },
        {
          name: "IP5地址",
          expression:
            "^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$",
          msg: ""
        },
        {
          name: "身份证校验",
          expression:
            "^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$",
          msg: ""
        },
        {
          name: "密码校验",
          expression:
            "^(?![a-zA-z]+$)(?!\\d+$)(?![`~!@#$%^&*()_\\-+=<>?:\"{}|,.\\/;'\\\\[\\]·~！@#￥%……&*（）——\\-+={}|《》？：“”【】、；‘’，。、]+$)[a-zA-Z\\d`~!@#$%^&*()_\\-+=<>?:\"{}|,.\\/;'\\\\[\\]·~！@#￥%……&*（）——\\-+={}|《》？：“”【】、；‘’，。、]+$",
          msg: "数字/字母/特殊字符至少两种"
        },
        {
          name: "统一社会信用代码",
          expression: "/[^_IOZSVa-z\\W]{2}\\d{6}[^_IOZSVa-z\\W]{10}/g",
          msg:
            "《GB_32100-2015_法人和其他组织统一社会信用代码编码规则》\r\n统一代码为18位，统一代码由十八位的数字或大写英文字母（不适用I、O、Z、S、V）组成，由五个部分组成：\n" +
            "第一部分（第1位）为登记管理部门代码，9表示工商部门；(数字或大写英文字母)\n" +
            "第二部分（第2位）为机构类别代码;(数字或大写英文字母)\n" +
            "第三部分（第3-8位）为登记管理机关行政区划码；(数字)\n" +
            "第四部分（第9-17位）为全国组织机构代码；(数字或大写英文字母)\n" +
            "第五部分（第18位）为校验码(数字或大写英文字母)"
        },
        { name: "", expression: "", msg: "" }
      ]
    };
  }
};
</script>
<style>
</style>
