<template>
      <!--<el-input v-if="innerdata.component==='el-input'"  style="width: 100%"  v-model="formModel[innerdata.key]" :max="innerdata.settings.max" :min="innerdata.settings.min" :step="innerdata.settings.step" :resize="innerdata.settings.resize" :autofocus="innerdata.settings.autofocus" :tabindex="innerdata.settings.tabindex" :minlength="innerdata.settings.minlength" :maxlength="innerdata.settings.maxlength" :size="innerdata.settings.size" :type="innerdata.settings.type" :rows="innerdata.settings.rows" :disabled="innerdata.settings.disabled" :placeholder="innerdata.settings.placeholder" :prefix-icon="innerdata.settings['prefix-icon']" :suffix-icon="innerdata.settings['suffix-icon']" :auto-complete="innerdata.settings['auto-complete']"></el-input>
      <el-rate v-else-if="innerdata.component==='el-rate'" v-model="formModel[innerdata.key]" :max="innerdata.settings.max" :allow-half="innerdata.settings['allow-half']" :disabled="innerdata.settings.disabled" :low-threshold="innerdata.settings['low-threshold']" :high-threshold="innerdata.settings['high-threshold']" :colors="innerdata.settings.colors" :void-color="innerdata.settings['void-color']" :disabled-void-color="innerdata.settings['disabled-void-color']" :show-text="innerdata.settings['show-text']" :show-score="innerdata.settings['show-score']" :text-color="innerdata.settings['text-color']" :texts="innerdata.settings.texts" :icon-classes="innerdata.settings['icon-classes']" :void-icon-class="innerdata.settings['void-icon-class']" :disabled-void-icon-class="innerdata.settings['disabled-void-icon-class']" :score-template="innerdata.settings['score-template']"></el-rate>
      <el-input-number v-else-if="innerdata.component==='el-input-number'" v-model="formModel[innerdata.key]" :max="innerdata.settings.max" :min="innerdata.settings.min" :step="innerdata.settings.step" :precision="innerdata.settings.precision" :controls="innerdata.settings.controls" :controls-position="innerdata.settings['controls-position']" :placeholder="innerdata.settings.placeholder" :disabled="innerdata.settings.disabled"></el-input-number>
      <el-switch v-else-if="innerdata.component==='el-switch'" v-model="formModel[innerdata.key]" :active-text="innerdata.settings['active-text']" :inactive-text="innerdata.settings['inactive-text']" :active-color="innerdata.settings['active-color']" :inactive-color="innerdata.settings['inactive-color']" :disabled="innerdata.settings.disabled"></el-switch>
      <el-color-picker v-else-if="innerdata.component==='el-color-picker'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :show-alpha="innerdata.settings['show-alpha']" :color-format="innerdata.settings['color-format']"></el-color-picker>
      <el-date-picker v-else-if="innerdata.component==='el-date-picker'" v-model="formModel[innerdata.key]"  :disabled="innerdata.settings.disabled" :readonly="innerdata.settings.readonly" :type="innerdata.settings.datepickertype" :editable="innerdata.settings.editable" :clearable="innerdata.settings.clearable" :size="innerdata.settings.size" :placeholder="innerdata.settings.placeholder" :start-placeholder="innerdata.settings['start-placeholder']" :end-placeholder="innerdata.settings['end-placeholder']" :format="innerdata.settings.format" :align="innerdata.settings.align" :range-separator="innerdata.settings['range-separator']" :default-value="innerdata.settings['default-value']" :default-time="innerdata.settings['default-time']" :value-format="innerdata.settings['value-format']" :unlink-panels="innerdata.settings['unlink-panels']" :prefix-icon="innerdata.settings['prefix-icon']" :clear-icon="innerdata.settings['clear-icon']"></el-date-picker>
      <el-slider v-else-if="innerdata.component==='el-slider'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :max="innerdata.settings.max" :min="innerdata.settings.min" :step="innerdata.settings.step"  :show-input="innerdata.settings['show-input']" :show-input-controls="innerdata.settings['show-input-controls']" :input-size="innerdata.settings['input-size']" :show-stops="innerdata.settings['show-stops']" :show-tooltip="innerdata.settings['show-tooltip']" :range="innerdata.settings.range" :vertical="innerdata.settings.vertical" :height="innerdata.settings.height" :debounce="innerdata.settings.debounce"></el-slider>
      <el-time-select  v-else-if="innerdata.component==='el-time-select'" v-model="formModel[innerdata.key]"  :disabled="innerdata.settings.disabled" :readonly="innerdata.settings.readonly" :editable="innerdata.settings.editable" :clearable="innerdata.settings.clearable" :size="innerdata.settings.size" :placeholder="innerdata.settings.placeholder" :is-range="innerdata.settings['is-range']" :arrow-control="innerdata.settings['arrow-control']" :align="innerdata.settings.align"  :value-format="innerdata.settings['value-format']" :default-value="innerdata.settings['default-value']" :prefix-icon="innerdata.settings['prefix-icon']" :clear-icon="innerdata.settings['clear-icon']" :picker-options="innerdata.settings['timeselectpicker-options']"></el-time-select>
      <el-time-picker  v-else-if="innerdata.component==='el-time-picker'" v-model="formModel[innerdata.key]"   :disabled="innerdata.settings.disabled" :readonly="innerdata.settings.readonly" :editable="innerdata.settings.editable" :clearable="innerdata.settings.clearable" :size="innerdata.settings.size" :placeholder="innerdata.settings.placeholder" :start-placeholder="innerdata.settings['start-placeholder']" :end-placeholder="innerdata.settings['end-placeholder']" :is-range="innerdata.settings['is-range']" :arrow-control="innerdata.settings['arrow-control']" :align="innerdata.settings.align" :range-separator="innerdata.settings['range-separator']" :value-format="innerdata.settings['value-format']" :default-value="innerdata.settings['default-value']" :prefix-icon="innerdata.settings['prefix-icon']" :clear-icon="innerdata.settings['clear-icon']"   :picker-options="innerdata.settings['timepicker-options']"></el-time-picker>
      <el-radio v-else-if="innerdata.component==='el-radio'" v-model="formModel[innerdata.key]"  :disabled="innerdata.settings.disabled" :label="innerdata.settings.radiolabel" :border="innerdata.settings.border" :size="innerdata.settings.size"></el-radio>
      <el-radio-group  v-else-if="innerdata.component==='el-radio-group'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :size="innerdata.settings.size" :text-color="innerdata.settings['text-color']" :fill="innerdata.settings.fill">
      <el-checkbox v-else-if="innerdata.component==='el-checkbox'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :size="innerdata.settings.size" :border="innerdata.settings.border" :checked="innerdata.settings.checked" :indeterminate="innerdata.settings.indeterminate"></el-checkbox>
      <el-checkbox-group v-else-if="innerdata.component==='el-checkbox-group'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :size="innerdata.settings.size" :max="innerdata.settings.max" :min="innerdata.settings.min"  :text-color="innerdata.settings['text-color']" :fill="innerdata.settings.fill">
      <el-select v-else-if="innerdata.component==='el-select'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :size="innerdata.settings.size" :multiple="innerdata.settings.multiple" :value-key="innerdata.settings['value-key']" :clearable="innerdata.settings.clearable" :collapse-tags="innerdata.settings['collapse-tags']" :multiple-limit="innerdata.settings['multiple-limit']" :auto-complete="innerdata.settings['auto-complete']" :placeholder="innerdata.settings.placeholder" :no-data-text="innerdata.settings['no-data-text']" :automatic-dropdown="innerdata.settings['automatic-dropdown']">
      <el-cascader v-else-if="innerdata.component==='el-cascader'" v-model="formModel[innerdata.key]" :disabled="innerdata.settings.disabled" :size="innerdata.settings.size" :options="innerdata.settings['cascader-data']||[]" :clearable="innerdata.settings.clearable" :expand-trigger="innerdata.settings['expand-trigger']" :show-all-levels="innerdata.settings['show-all-levels']"  :placeholder="innerdata.settings.placeholder" :change-on-select="innerdata.settings['change-on-select']"></el-cascader>
      <el-upload ref="upload" v-else-if="innerdata.component==='el-upload'"  :disabled="innerdata.settings.disabled" :action="innerdata.settings.uploadUrl ||'http://'" :limit="innerdata.settings.limit" :multiple="innerdata.settings.multiple"  :file-list="fileList"
      <el-table v-else-if="innerdata.component==='el-table'" :data="innerdata.settings['table-data']||[]" :height="innerdata.settings.height" :max-height="innerdata.settings['max-height']"  :stripe='innerdata.settings.stripe' :border="innerdata.settings.border" :size="innerdata.settings.size" :fit="innerdata.settings.fit"
      <el-table-column v-for="item in innerdata.settings.tableColumns"  :prop="item.prop" :label="item.label" :width="item.width" :align="item.align" :fixed="item.fixed" :border="item.border" :show-overflow-tooltip="item['show-overflow-tooltip']" :key="item.label"
-->
      <div>
        <el-input v-if="innerdata.component==='el-input'||innerdata.component==='el-textarea'"  style="width: 100%" v-bind="innerdata.settings" v-model="formModel[innerdata.key]"></el-input>
        <el-rate v-else-if="innerdata.component==='el-rate'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-rate>
        <el-input-number v-else-if="innerdata.component==='el-input-number'" v-model.number="formModel[innerdata.key]"  v-bind="innerdata.settings" ></el-input-number>
        <el-switch v-else-if="innerdata.component==='el-switch'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-switch>
        <el-color-picker v-else-if="innerdata.component==='el-color-picker'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"></el-color-picker>
        <el-date-picker v-else-if="innerdata.component==='el-date-picker'" v-model="formModel[innerdata.key]"  v-bind="innerdata.settings" :type="innerdata.settings.datepickertype"></el-date-picker>
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
        <el-select v-else-if="innerdata.component==='el-select'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings">
          <el-option v-for="item in innerdata.settings['select-data']" :key="item.label" :value="item.value"></el-option>
        </el-select>
        <el-cascader v-else-if="innerdata.component==='el-cascader'" v-model="formModel[innerdata.key]" v-bind="innerdata.settings"  :options="innerdata.settings['cascader-data']||[]"></el-cascader>
        <el-upload ref="upload" v-else-if="innerdata.component==='el-upload'" v-bind="innerdata.settings"  :action="innerdata.settings.uploadUrl ||'http://'"   :file-list="fileList"
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
          <el-button v-if="!innerdata.settings['auto-upload']"  @click="$refs.upload.submit()" :size="innerdata.settings.size" :plain="innerdata.settings.plain" :round="innerdata.settings.round" :circle="innerdata.settings.circle" :icon="innerdata.settings.icon" :type="innerdata.settings.buttonType" >手动上传</el-button>
          <div slot="tip" class="el-upload__tip" v-if="innerdata.settings.uploadtip">{{innerdata.settings.uploadtip}}</div>
        </el-upload>
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
    innerdata: { type: Object },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { fileList: [] };
  },
  methods: {
    getRemoteData() {
      if (!this.innerdata.settings.remoteUrl) {
        alert("没有设置远程地址");
        return;
      }
      this.$http.get(this.innerdata.settings.remoteUrl).then(
        res => {
          if (res.status === "success") {
            switch (this.innerdata.component) {
              case "el-select":
                this.innerdata.settings["select-data"] = res.data;
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
    handlePreview(file, fileList) {
      console.log("handlePreview", file, fileList);
      this.$notify.info({
        title: this.innerdata.component,
        message: "handlePreview"
      });
    },
    handleRemove(file, fileList) {
      this.fileList.forEach((item, index) => {
        if (file.name === item.name) {
          this.fileList.splice(index, 1);
        }
        console.log("handleRemove", this.fileList);
      });
      this.$notify.info({
        title: this.innerdata.component,
        message: "handleRemove"
      });
    },
    beforeRemove(file, fileList) {},
    handleExceed(file, fileList) {
      console.log("handleExceed", file, fileList);
      this.$message.warning(
        `当前限制选择${this.innerdata.settings.limit} 个文件，本次选择了 ${
          fileList.length
        } 个文件，共选择了 ${fileList.length + fileList.length} 个文件`
      );
    },
    handleSuccess(response, file, fileList) {
      console.log("handleSuccess", file, fileList);
      this.$notify.success({
        title: this.innerdata.component,
        message: "handleSuccess"
      });
    },
    uploadProgress(event, file, fileList) {
      console.log("uploadProgress", file, fileList);
    },
    fileChange(file, fileList) {
      this.fileList.push({
        name: file.name,
        url: URL.createObjectURL(file.raw),
        file: file.raw
      });
      console.log("fileChange", this.fileList);
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
      return !this.innerdata.settings.selfhandleFile;
    }
  },
  mounted() {
    if (this.innerdata.settings.remote) {
      this.getRemoteData();
    }
  }
};
</script>
