<template>
    <div class=''>
        <h3> class="swx-radio"</h3>
        <div v-for="(radio,index) in radioList" :key="'radio'+index">
            <el-radio class="swx-radio" v-model="radio.value" :label="radio.label" :disabled="radio.disable"></el-radio>
        </div>
        <h3>配合 el-radio-group使用</h3>
        <el-radio-group v-model="radio2">
            <el-radio class="swx-radio" :label="3">备选项</el-radio>
            <el-radio class="swx-radio" :label="6">备选项</el-radio>
            <el-radio class="swx-radio" :label="9">备选项</el-radio>
        </el-radio-group>
        <h3>swx-checkebox</h3>
        <div v-for="(check,index) in checkList" :key="'check'+index">
            <el-checkbox class="swx-checkbox" v-model="check.value" :disabled="check.disable">{{check.label}}</el-checkbox>
        </div>

    <h3>配合el-checkbox-group使用</h3>
        <el-checkbox-group
                v-model="checkedCities1"
                :min="1"
                :max="4">
            <el-checkbox  class="swx-checkbox" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <pre class="swx-pre">
            只针对默认类型进行了样式修饰，button类型未进行修饰，border未进行修饰
            使用方式，直接给相应的
            el-radio        加上  class="swx-radio"
            el-checkbox     加上  class="swx-checkbox"即可
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      radio2: 3,
      checkList: [
        { value: false, label: "备选项" },
        { value: true, label: "备选项" },
        { value: false, label: "备选项", disable: true },
        { value: true, label: "备选项", disable: true }
      ],
      checkedCities1: ["上海", "北京"],
      cities: ["上海", "北京", "广州", "深圳"],
      radioList: [
        { value: "", label: "备选一" },
        { value: "备选二", label: "备选二" },
        { value: "", label: "未激活", disable: true },
        { value: "未激活", label: "未激活", disable: true }
      ]
    };
  }
};
</script>
<style>
</style>
