<template>
      <div >
        <el-input v-if="innerdata.component==='el-input'||innerdata.component==='el-textarea'"  v-bind="innerdata.settings" v-model="formModel[innerdata.key]"></el-input>
        <el-rate v-else-if="innerdata.component==='el-rate'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-rate>
        <el-input-number v-else-if="innerdata.component==='el-input-number'" v-model.number="formModel[innerdata.key]"  v-bind="innerdata.settings" ></el-input-number>
        <el-switch v-else-if="innerdata.component==='el-switch'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-switch>
        <el-color-picker v-else-if="innerdata.component==='el-color-picker'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-color-picker>
        <el-date-picker style="width: 100%;" v-else-if="innerdata.component==='el-date-picker'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings" :type="innerdata.settings.datepickertype"></el-date-picker>
        <el-slider v-else-if="innerdata.component==='el-slider'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings"></el-slider>
        <el-time-select  v-else-if="innerdata.component==='el-time-select'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings"   :picker-options="innerdata.settings['timeselectpicker-options']"></el-time-select>
        <el-time-picker  v-else-if="innerdata.component==='el-time-picker'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings"   :picker-options="innerdata.settings['timepicker-options']"></el-time-picker>
        <el-radio v-else-if="innerdata.component==='el-radio'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings"></el-radio>
        <el-radio-group  v-else-if="innerdata.component==='el-radio-group'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings">
          <el-radio v-if="!innerdata.settings.hasOwnProperty('radio-group-data')">去设置radio的选项</el-radio>
          <el-radio          v-if="innerdata.settings.hasOwnProperty('radio-group-data')&&!innerdata.settings.radiobutton" v-for="item in innerdata.settings['radio-group-data']" :key="item.label" :disabled="item.disabled" :label="item.label" :border="item.border" :size="innerdata.settings.size">{{item.text}}</el-radio>
          <el-radio-button   v-if="innerdata.settings.hasOwnProperty('radio-group-data')&&innerdata.settings.radiobutton" v-for="item in innerdata.settings['radio-group-data']" :key="item.label" :disabled="item.disabled" :label="item.label" :size="innerdata.settings.size">{{item.text}}</el-radio-button>
        </el-radio-group>
        <el-checkbox v-else-if="innerdata.component==='el-checkbox'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-checkbox>
        <el-checkbox-button v-else-if="innerdata.component==='el-checkbox-button'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings">{{innerdata.settings.label}}</el-checkbox-button>
        <el-checkbox-group v-else-if="innerdata.component==='el-checkbox-group'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings">
          <el-checkbox v-if="!innerdata.settings.hasOwnProperty('check-group-data')">去设置check的选项</el-checkbox>
          <el-checkbox v-if="innerdata.settings.hasOwnProperty('check-group-data')&&!innerdata.settings.checkbutton"  v-for="item in innerdata.settings['check-group-data']" :key="item.label" :disabled="item.disabled" :label="item.label" :border="item.border" :size="innerdata.settings.size" :indeterminate="item.indeterminate" :checked="item.checked">{{item.text}}</el-checkbox>
          <el-checkbox-button v-if="innerdata.settings.hasOwnProperty('check-group-data')&&innerdata.settings.checkbutton"  v-for="item in innerdata.settings['check-group-data']" :key="item.label" :disabled="item.disabled" :label="item.label" :border="item.border" :size="innerdata.settings.size" :indeterminate="item.indeterminate" :checked="item.checked">{{item.text}}</el-checkbox-button>
        </el-checkbox-group>
        <el-select v-else-if="innerdata.component==='el-select'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"
        :filterable="innerdata.settings['select-data'].length>10"
        >
          <el-option v-for="item in innerdata.settings['select-data']" :key="item.label"    :label="item.mc" :value="item.mc+'---'+item.dm"></el-option>
        </el-select>
        <el-cascader v-else-if="innerdata.component==='el-cascader'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"  :options="innerdata.settings['cascader-data']||[]"></el-cascader>
        <el-upload style="height: 30px;" ref="upload" v-else-if="innerdata.component==='el-upload'" v-bind="innerdata.settings"  :action="innerdata.settings.uploadUrl ||'http://'"   :file-list="fileList"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   :on-exceed="handleExceed"
                   :on-success="handleSuccess"
                   :on-error="uploadError"
                   :on-change="fileChange"
                   :on-progress="uploadProgress"
                   :before-upload="beforeUpload"
        >
          <el-button slot="trigger" :size="innerdata.settings.size" :plain="innerdata.settings.plain" :round="innerdata.settings.round" :circle="innerdata.settings.circle" :icon="innerdata.settings.icon" :type="innerdata.settings.buttonType" >点击上传</el-button>
          <!--<el-button v-if="!innerdata.settings['auto-upload']"  @click="$refs.upload.submit()" :size="innerdata.settings.size" :plain="innerdata.settings.plain" :round="innerdata.settings.round" :circle="innerdata.settings.circle" :icon="innerdata.settings.icon" :type="innerdata.settings.buttonType" >手动上传</el-button>-->
          <div slot="tip" class="el-upload__tip" v-if="innerdata.settings.uploadtip">{{innerdata.settings.uploadtip}}</div>
          <span class="upload-tip">{{uploadFileName}}</span>
        </el-upload>
        <userimg v-else-if="innerdata.component==='el-image'" :src="formModel[innerdata.key]" @choosedimg="imageChoosed"  v-bind="innerdata.settings"></userimg>

        <el-table v-else-if="innerdata.component==='el-table'" :data="innerdata.settings['table-data']||[]" v-bind="innerdata.settings">
          <el-table-column v-for="item in innerdata.settings.tableColumns" v-bind="item" :key="item.label"></el-table-column>
        </el-table>
      </div>
</template>
<script>
export default {
  name: "myElement",
  props: {
    formModel: Object,
    innerdata: { type: Object }
  },
  data() {
    return { fileList: [], uploadFileName: "" };
  },
  methods: {
    getRemoteData() {
      if (!this.innerdata.settings.remoteUrl) {
        alert("没有设置远程地址");
        return;
      }
      this.$http.get(this.innerdata.settings.remoteUrl).then(
        res => {
          if (res.data.status === "success") {
            switch (this.innerdata.component) {
              case "el-select":
                this.innerdata.settings["select-data"] = res.data.data;
                break;
              case "el-cascader":
                this.innerdata.settings["cascader-data"] = res.data;
                break;
              case "el-table":
                this.innerdata.settings["table-data"] = res.data;
                break;
            }
          } else {
            this.$notify.error({
              title: this.innerdata.component,
              message:
                "加载数据出现错误，返回参数应包含status，并且成功为success，数据存放在data中。"
            });
          }
        },
        err => {
          console.log(err);
          this.$notify.error({
            title: this.innerdata.component,
            message: "请求未成功，请检查remoteUrl参数配置"
          });
        }
      );
    },
    //  el-upload的方法
    handlePreview(file, fileList) {
      console.log("handlePreview", file, fileList);
      /*this.$notify.info({
        title: this.innerdata.component,
        message: "handlePreview"
      });*/
    },
    handleRemove(file, fileList) {
      this.fileList.forEach((item, index) => {
        if (file.name === item.name) {
          this.fileList.splice(index, 1);
        }
        console.log(fileList);
        console.log("handleRemove", this.fileList);
      });
      /*  this.$notify.info({
        title: this.innerdata.component,
        message: "handleRemove"
      });*/
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleExceed(file, fileList) {
      console.log("handleExceed", file, fileList);
      this.$message.warning(
        `当前限制选择${this.innerdata.settings.limit} 个文件，本次选择了 ${
          fileList.length
        } 个文件，共选择了 ${fileList.length + fileList.length} 个文件`
      );
    },
    handleSuccess(response, file, fileList) {
      console.log("handleSuccess", response, file, fileList);
      /*  this.$notify.success({
        title: this.innerdata.component,
        message: "handleSuccess"
      });*/
    },
    uploadProgress(event, file, fileList) {
      console.log("uploadProgress", event, file, fileList);
    },
    fileChange(file, fileList) {
      this.fileList.push({
        name: file.name,
        url: URL.createObjectURL(file.raw),
        file: file.raw
      });
      console.log("fileChange", this.fileList, fileList);
    },
    uploadError(err, file, fileList) {
      console.error("uploadError", err, file, fileList);
      this.$notify.info({
        title: this.innerdata.component,
        message: "uploadError"
      });
    },
    beforeUpload(file, fileList) {
      console.log("beforeUpload", file, fileList);
      this.formModel[this.innerdata.key] = file;
      this.uploadFileName = file.name;
      // return !this.innerdata.settings.selfhandleFile;
      return false;
    },
    //头像的方法
    imageChoosed(file) {
      this.formModel[this.innerdata.key] = file;
    }
  },
  components: {
    userimg: () => import("./components/userimg.vue")
  },
  computed: {
    edit: {
      get() {
        return this.$store.state.formDesigner.edit;
      }
    }
  },
  mounted() {
    if (this.edit) return;
    if (this.innerdata.settings.remote) {
      this.getRemoteData();
    }
  }
};
</script>
<style>
.upload-tip {
  display: block;
  color: #cccccc;
  font-size: 12px;
}
</style>
