const userableSetting = {
  "active-text": false,
  "inactive-text": false,
  texts: false,
  "start-placeholder": false,
  "end-placeholder": false,
  format: false,
  "range-separator": false,
  "default-value": false,
  "default-time": false,
  tabindex: false,
  "score-template": false,
  height: false,
  "max-height": false,
  debounce: false,
  "timeselectpicker-options": false,
  "timepicker-options": false,
  radiolabel: true,
  "no-data-text": false,
  "value-key": false,
  uploadtip: true,
  accept: true,
  "row-class-name": false,
  "cell-class-name": false,
  "header-row-class-name": false,
  "header-cell-class-name": false,
  "empty-text": false,
  type: true,
  minlength: true,
  maxlength: true,
  min: true,
  max: true,
  step: false,
  precision: false,
  "low-threshold": false,
  "high-threshold": false,
  "multiple-limit": true,
  limit: true,
  "controls-position": false,
  "color-format": false,
  datepickertype: true,
  align: true,
  "prefix-icon": false,
  "clear-icon": false,
  "suffix-icon": false,
  "auto-complete": false,
  resize: false,
  "void-icon-class": false,
  "disabled-void-icon-class": false,
  "icon-classes": false,
  "input-size": false,
  "expand-trigger": false,
  buttonType: true,
  icon: false,
  "list-type": false,
  "tooltip-effect": false,
  "auto-upload": true,
  selfhandleFile: true,
  disabled: false,
  controls: true,
  "allow-half": true,
  "show-text": true,
  "show-score": true,
  "show-alpha": true,
  readonly: true,
  editable: false,
  clearable: false,
  "unlink-panels": false,
  autofocus: false,
  "show-input": true,
  "show-input-controls": true,
  "show-stops": false,
  "show-tooltip": false,
  range: true,
  vertical: true,
  "is-range": true,
  "arrow-control": false,
  border: false,
  radiobutton: false,
  checkbutton: false,
  checked: false,
  indeterminate: false,
  multiple: true,
  "collapse-tags": false,
  "automatic-dropdown": false,
  remote: true,
  "show-all-levels": true,
  "change-on-select": true,
  plain: true,
  round: true,
  "show-file-list": false,
  drag: false,
  stripe: true,
  fit: false,
  "show-header": false,
  "highlight-current-row": true,
  "default-expand-all": false,
  colors: false,
  "void-color": false,
  "disabled-void-color": false,
  "text-color": false,
  fill: false,
  "active-color": false,
  "inactive-color": false,
  "select-data": true,
  "radio-group-data": true,
  "check-group-data": true,
  uploadUrl: true,
  remoteUrl: true,
  tableColumns: true
}; //设置项的默认是否展示，如果此处该项对应值为false，则在VUEX 中formDesigner中allSettting为true时，该项才会展示，否则不会展示，即用户不可操作项
const formItemSettingsValue = {
  // inputType: ['text', 'textarea', 'number', 'password'],
  layoutList: [
    { text: "一排一个", val: 1 },
    { text: "一排两个", val: 2 },
    { text: "一排三个", val: 3 },
    { text: "一排四个", val: 4 },
    { text: "一排六个", val: 6 }
  ],
  inputType: ["text", "password"], // number 右边的上下箭头  与element本身的clearable按钮位置冲突，所以不让选
  inputSize: ["medium", "small", "mini"],
  alignList: ["left", "center", "right"],
  fixedList: ["left", "right"],
  resizeList: ["none", "both", "horizontal", "vertical"],
  datepickerTypes: [
    "year",
    "month",
    "date",
    "dates",
    "week",
    "datetime",
    "datetimerange",
    "daterange"
  ],
  inputSizeList: ["default", "medium", "small", "mini"],
  buttonTypeList: ["primary", "success", "warning", "danger", "info", "text"],
  listTypeList: ["text", "picture", "picture-card"],
  triggerList: ["click", "hover"],
  iconsList: [
    "el-icon-info",
    "el-icon-error",
    "el-icon-success",
    "el-icon-warning",
    "el-icon-question",
    "el-icon-back",
    "el-icon-arrow-left",
    "el-icon-arrow-down",
    "el-icon-arrow-right",
    "el-icon-arrow-up",
    "el-icon-caret-left",
    "el-icon-caret-bottom",
    "el-icon-caret-top",
    "el-icon-caret-right",
    "el-icon-d-arrow-left",
    "el-icon-d-arrow-right",
    "el-icon-minus",
    "el-icon-plus",
    "el-icon-remove",
    "el-icon-circle-plus",
    "el-icon-remove-outline",
    "el-icon-circle-plus-outline",
    "el-icon-close",
    "el-icon-check",
    "el-icon-circle-close",
    "el-icon-circle-check",
    "el-icon-circle-close-outline",
    "el-icon-circle-check-outline",
    "el-icon-zoom-out",
    "el-icon-zoom-in",
    "el-icon-d-caret",
    "el-icon-sort",
    "el-icon-sort-down",
    "el-icon-sort-up",
    "el-icon-tickets",
    "el-icon-document",
    "el-icon-goods",
    "el-icon-sold-out",
    "el-icon-news",
    "el-icon-message",
    "el-icon-date",
    "el-icon-printer",
    "el-icon-time",
    "el-icon-bell",
    "el-icon-mobile-phone",
    "el-icon-service",
    "el-icon-view",
    "el-icon-menu",
    "el-icon-more",
    "el-icon-more-outline",
    "el-icon-star-on",
    "el-icon-star-off",
    "el-icon-location",
    "el-icon-location-outline",
    "el-icon-phone",
    "el-icon-phone-outline",
    "el-icon-picture",
    "el-icon-picture-outline",
    "el-icon-delete",
    "el-icon-search",
    "el-icon-edit",
    "el-icon-edit-outline",
    "el-icon-rank",
    "el-icon-refresh",
    "el-icon-share",
    "el-icon-setting",
    "el-icon-upload",
    "el-icon-upload2",
    "el-icon-download",
    "el-icon-loading"
  ],
  dateTypeList: [
    { label: "默认", value: "" },
    { label: "身份证", value: "idcard" },
    { label: "手机号", value: "phone" },
    { label: "固定电话", value: "tel" },
    { label: "手机或座机", value: "telorphone" },
    { label: "邮箱", value: "email" },
    { label: "ip地址", value: "ip" },
    { label: "邮政编码", value: "areaId" },
    { label: "密码", value: "password" },
    { label: "强密码", value: "hardPassword" },
    { label: "QQ号", value: "qq" },
    { label: "url", value: "url" }
  ],
  RegexList: {
    idcard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
    phone: /^1[34578]\d{9}$/,
    tel: /^0\d{2,3}-\d{7,8}$/,
    telorphone: /^(1[34578]\d{9})$|^((0\d{2,3}-\d{7,8}))$/,
    ip: /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
    areaId: /^[1-9]\d{5}$/,
    password: /^[a-zA-Z]\w{5,17}$/, // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
    hardPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/, // 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
    qq: /^[1-9][0-9]{4,}$/
  },
  // mustLastFormItem: ["el-textarea", "el-upload"]
  mustLastFormItem: ["el-textarea"]
}; //表单组件中所用到的静态变量集合
function getSettings(item) {
  let settings = null;
  switch (item.component) {
    case "el-input-number":
      settings = {
        min: 1,
        max: 10,
        step: 1,
        precision: 0,
        size: "",
        disabled: false,
        controls: true,
        "controls-position": "",
        name: "",
        label: "",
        placeholder: ""
      };
      break;
    case "el-input":
      // settings = {minlength: 1, maxlength: 18, type: 'text', size: '', rows: 2, disabled: false, placeholder: '', 'prefix-icon': '', 'suffix-icon': '', 'auto-complete': 'off', max: '', min: '', step: '', resize: 'none', autofocus: false, tabindex: '', clearable: true}
      settings = {
        minlength: 1,
        maxlength: 18,
        type: "text",
        size: "",
        rows: 2,
        disabled: false,
        placeholder: "",
        "prefix-icon": "",
        "suffix-icon": "",
        "auto-complete": "off",
        autofocus: false,
        tabindex: "",
        clearable: true
      };
      break;
    case "el-textarea":
      settings = {
        minlength: 1,
        maxlength: 18,
        type: "textarea",
        size: "",
        rows: 5,
        disabled: false,
        placeholder: "",
        "auto-complete": "off",
        resize: "none",
        autofocus: false,
        tabindex: "",
        clearable: true
      };
      break;
    case "el-radio-group":
      settings = {
        size: "",
        "text-color": "#fffff",
        fill: "#409EFF",
        radiobutton: false,
        "radio-group-data": [
          { text: "demo", label: "demo", disabled: false, border: false }
        ]
      }; // 'el-radio只能在el-radio-group中，所以需要在modal框中进行设置
      break;
    case "el-radio":
      settings = {
        radiolabel: "",
        disabled: false,
        border: false,
        size: ""
      };
      break;
    case "el-checkbox-group":
      settings = {
        size: "",
        min: 1,
        max: 10,
        "text-color": "#ffffff",
        fill: "#409EFF",
        checkbutton: false,
        "check-group-data": [
          {
            label: "demo",
            text: "demo",
            disabled: false,
            border: false,
            checked: false,
            indeterminate: false
          }
        ]
      };
      break;
    case "el-checkbox":
      settings = {
        disabled: false,
        border: false,
        size: "",
        name: "",
        checked: false,
        indeterminate: false
      };
      break;
    case "el-checkbox-button":
      settings = { label: "", checked: false, disabled: false };
      break;
    case "el-select":
      settings = {
        multiple: false,
        "multiple-limit": 0,
        remote: false,
        remoteUrl: "",
        disabled: false,
        "value-key": "value",
        size: "",
        clearable: true,
        "collapse-tags": false,
        name: "",
        "auto-complete": "off",
        placeholder: "请选择",
        "automatic-dropdown": true,
        "no-data-text": "无数据",
        "select-data": [{ dm: "Y", mc: "是" }, { dm: "N", mc: "否" }]
      };
      break;
    case " el-option":
      settings = { value: "", label: "", disabled: false };
      break;
    case "el-cascader":
      settings = {
        "cascader-data": [],
        value: [],
        separator: "/",
        remote: true,
        remoteUrl: "",
        placeholder: "请选择",
        disabled: false,
        clearable: true,
        "expand-trigger": "click",
        "show-all-levels": true,
        "change-on-select": true,
        size: ""
      };
      break;
    case "el-switch":
      settings = {
        disabled: false,
        width: 40,
        "active-text": "",
        "inactive-text": "",
        "active-color": "#409EFF",
        "inactive-color": "#C0CCDA",
        name: ""
      };
      break;
    case "el-slider":
      settings = {
        disabled: false,
        min: 1,
        max: 100,
        step: 1,
        "show-input": true,
        "show-input-controls": true,
        "input-size": "",
        "show-stops": false,
        "show-tooltip": true,
        range: false,
        vertical: false,
        height: "",
        debounce: 300
      };
      break;
    case "el-time-select":
      settings = {
        disabled: false,
        "timeselectpicker-options": {
          start: "09:00",
          end: "18:00",
          step: "00:30",
          minTime: "00:00",
          maxTime: ""
        },
        editable: true,
        readonly: false,
        clearable: true,
        size: "",
        placeholder: "请选择",
        "arrow-control": false,
        align: "left",
        "value-format": "",
        "default-value": "",
        "prefix-icon": "el-icon-time",
        "clear-icon": "el-icon-circle-close"
      };
      break;
    case "el-time-picker":
      settings = {
        disabled: false,
        "timepicker-options": {
          selectableRange: "9:30:00 - 20:30:00",
          format: "HH:mm:ss"
        },
        editable: true,
        readonly: false,
        clearable: true,
        size: "",
        placeholder: "请选择",
        "start-placeholder": "",
        "end-placeholder": "",
        "is-range": false,
        "arrow-control": false,
        align: "left",
        "range-separator": "-",
        "value-format": "",
        "default-value": "",
        "prefix-icon": "el-icon-time",
        "clear-icon": "el-icon-circle-close"
      };
      break;
    case "el-date-picker":
      // settings = {readonly: false, disabled: false, editable: false, clearable: true, placeholder: '请选择', format: 'yyyy-MM-dd', align: 'left', 'picker-options': '', 'range-separator': '-', 'datepickertype': 'date', 'start-placeholder': '开始时间', 'end-placeholder': '截止时间', size: 'small', 'default-value': '', 'default-time': '', 'value-format': '', 'unlink-panels': false, 'prefix-icon': 'el-icon-date', 'clear-icon': 'el-icon-circle-close'}
      //  'default-value': '', 'default-time': '',这两个属性与v-model不一致时，，会报错，，所以去掉
      settings = {
        readonly: false,
        disabled: false,
        editable: false,
        clearable: true,
        placeholder: "请选择",
        format: "yyyy-MM-dd",
        align: "left",
        "picker-options": "",
        "range-separator": "-",
        datepickertype: "date",
        "start-placeholder": "开始时间",
        "end-placeholder": "截止时间",
        size: "",
        "value-format": "",
        "unlink-panels": false,
        "prefix-icon": "el-icon-date",
        "clear-icon": "el-icon-circle-close"
      };
      break;
    case "el-upload":
      settings = {
        uploadtip: "",
        disabled: false,
        selfhandleFile: true,
        accept: "",
        drag: false,
        buttonType: "primary",
        size: "mini",
        plain: false,
        round: false,
        circle: false,
        icon: "",
        limit: 1,
        multiple: false,
        "show-file-list": true,
        "list-type": "text",
        "auto-upload": true,
        uploadUrl: "https://"
      }; // 比较复杂，最后在做
      break;
    case "el-image":
      settings = { disabled: true };
      break;
    case "el-rate":
      settings = {
        max: 5,
        disabled: false,
        "void-icon-class": "el-icon-star-off",
        "disabled-void-icon-class": "el-icon-star-on",
        "icon-classes": [
          "el-icon-star-on",
          "el-icon-star-on",
          "el-icon-star-on"
        ],
        "allow-half": false,
        "low-threshold": 2,
        "high-threshold": 4,
        colors: ["#F7BA2A", "#F7BA2A", "#F7BA2A"],
        "void-color": "#C6D1DE",
        "disabled-void-color": "#EFF2F7",
        "show-text": false,
        "show-score": false,
        "text-color": "#1F2D3D",
        texts: ["极差", "失望", "一般", "满意", "惊喜"],
        "score-template": "{value}"
      };
      break;
    case "el-color-picker":
      settings = {
        disabled: false,
        size: "",
        "show-alpha": false,
        "color-format": "rgb",
        predefine: []
      };
      break;
    case "el-table":
      settings = {
        "table-data": [],
        tableColumns: [
          {
            type: "",
            label: "标题",
            prop: "key1",
            width: "",
            "min-width": "",
            resizable: false,
            "show-overflow-tooltip": false,
            fixed: "",
            align: "left",
            "header-align": "",
            "class-name": "",
            "label-class-name": ""
          }
        ],
        remote: true,
        remoteUrl: "",
        height: "",
        "max-height": "",
        stripe: true,
        border: false,
        size: "",
        fit: true,
        "show-header": true,
        "highlight-current-row": true,
        "row-class-name": "",
        "cell-class-name": "",
        "header-row-class-name": "",
        "header-cell-class-name": "",
        "empty-text": "",
        "default-expand-all": false,
        "tooltip-effect": "",
        "show-summary": false,
        "sum-text": "合计"
      };
      break;
    default:
      settings = {};
  }
  return Object.assign({}, settings, item.settings);
} //根据不同的表单元素进行判断并返回默认值的设置项
function getDefauleVal(item) {
  if (item.val) {
    if (item.component === "el-time-picker") {
      return new Date(item.val);
    } else {
      return item.val;
    }
  }
  if (item.settings.multiple) {
    return [];
  }
  switch (item.component) {
    case "el-switch":
    case "el-radio":
    case "el-checkbox":
      return false;
    case "el-rate":
    case "el-slider":
    case "el-input-number":
      return 0;
    case "el-time-picker":
      return new Date();
    case "el-checkbox-group":
    case "el-cascader":
      return [];
    case "el-date-picker":
      if (
        item.settings.datepickertype &&
        item.settings.datepickertype.indexOf("range") > 0
      )
        return [];
      else return "";
    default:
      return "";
  }
} //根据不同的表单元素进行判断并返回默认值
function formValid(item, rule, value, callback) {
  if (item.init) {
    item.init = false;
    return;
  }
  if (item.key === "TYYW_GG_AJJBXX--FZ") {
    this.formDedigner.getAllTableItem().forEach(i => {
      if (i.key === "TYYW_GG_AJJBXX--SFGZAJ") {
        i.settings.disabled = !value;
      }
    });

    if (value) {
      this.$emit("removeError", {
        value,
        item
      });
      callback();
    } else {
      this.$emit("addError", {
        value,
        item
      });
      callback(new Error(""));
    }
    return;
  }
  callback();
} //自定义校验方法
function getDefaultRule(item, val) {
  let tempRule = [{ validator: formValid.bind(this, item), trigger: "change" }];
  if (!item.isRequire) {
    return tempRule;
  }

  let valType = typeof val;
  let temptype = null;
  let temptrigger = "blur";
  let tempmsg = "此字段";
  let errorDesc = "格式不正确";
  switch (valType) {
    case "string":
      if (["el-time-picker", "el-date-picker"].indexOf(item.component) > -1) {
        temptype = "date";
        temptrigger = "change";
      } else {
        temptype = "string";
      }
      break;
    case "number":
      temptype = "number";
      break;
    case "boolean":
      temptype = "boolean";
      break;
    case "function":
      temptype = "method";
      break;
    case "object":
      if (item.component === "el-date-picker") {
        temptype = "date";
      } else {
        temptype = Array.isArray(val) ? "array" : "object";
      }
      temptrigger = "change";
      break;
    default:
      temptype = "string";
      temptrigger = "blur";
  }
  if (item.label) {
    tempmsg = item.label;
  } else if (item.dataType.label && item.dataType.label !== "默认") {
    tempmsg = item.dataType.label;
  } else {
    tempmsg = item.key;
  }
  if (item.dataType && item.dataType.value === "email") temptype = "email";
  if (item.dataType && item.dataType.value === "url") temptype = "url";
  if (item.dataType && item.dataType.value === "password") {
    item.settings.max = 18;
    item.settings.min = 6;
    errorDesc = "应以字母开头，请使用字母数字下划线";
  }
  if (item.dataType && item.dataType.value === "hardPassword") {
    item.settings.max = 10;
    item.settings.min = 8;
    errorDesc = "应为大小写字母和数字的组合，不能使用特殊字符";
  }
  tempRule.push({
    required: true,
    type: temptype,
    message: tempmsg + "不能为空",
    trigger: temptrigger
  });
  if (item.settings.min) {
    tempRule.push({
      min: item.settings.min,
      type: temptype,
      message: tempmsg + "最小为" + item.settings.min,
      trigger: temptrigger
    });
  }
  if (item.settings.max) {
    tempRule.push({
      max: item.settings.max,
      type: temptype,
      message: tempmsg + "最大为" + item.settings.max,
      trigger: temptrigger
    });
  }
  let regex =
    item.dataType && this.formItemSettingsValue.RegexList[item.dataType.value];
  if (regex) {
    tempRule.push({
      pattern: regex,
      message: tempmsg + errorDesc,
      trigger: temptrigger
    });
  }
  return tempRule;
} //根据不同的表单元素进行判断并返回默认的验证规则
function groupAddItem(data, index, type) {
  let tempindex = data.length;
  switch (type) {
    case "radio":
      data.push({
        text: "demo" + tempindex,
        label: "demo" + tempindex,
        disabled: false,
        border: false
      });
      break;
    case "checkbox":
      data.push({
        label: "demo" + tempindex,
        text: "demo" + tempindex,
        disabled: false,
        border: false,
        checked: false,
        indeterminate: false
      });
      break;
    case "option":
      data.push({
        value: "demo" + tempindex,
        label: "demo" + tempindex,
        disabled: false
      });
      break;
    case "tableColumns":
      data.push({
        type: "",
        label: "标题",
        prop: "key1",
        width: "",
        "min-width": "",
        resizable: false,
        "show-overflow-tooltip": false,
        fixed: "",
        align: "left",
        "header-align": "",
        "class-name": "",
        "label-class-name": ""
      });
      break;
  }
} //用于给需要手动控制数据项的表单元素加入新的数据
function groupDelItem(data, index, type) {
  if (data.length > 1) {
    data.splice(index, 1);
  } else {
    switch (type) {
      case "radio":
        data.splice(index, 1, {
          text: "demo",
          label: "demo",
          disabled: false,
          border: false
        });
        break;
      case "checkbox":
        data.splice(index, 1, {
          label: "demo",
          text: "demo",
          disabled: false,
          border: false,
          checked: false,
          indeterminate: false
        });
        break;
      case "option":
        data.splice(index, 1, {
          value: "demo",
          label: "demo",
          disabled: false
        });
        break;
      case "tableColumns":
        data.splice(index, 1, {
          type: "",
          label: "标题",
          prop: "key1",
          width: "",
          "min-width": "",
          resizable: false,
          "show-overflow-tooltip": false,
          fixed: "",
          align: "left",
          "header-align": "",
          "class-name": "",
          "label-class-name": ""
        });
        break;
    }
  }
} //用于给需要手动控制数据项的表单元素删除元素
function isSettingVisible(setting, val) {
  return (
    setting.hasOwnProperty(val) &&
    (this.$store.state.formDesigner.allSettting || userableSetting[val])
  );
} //此方法用于返回相对应的设置项是否展示出来给用户进行设置
function translateFormItem(item, index, maxWidth, tabIndex, tableIndex) {
  let tempItem = {
    key: item.zdywmc,
    elId: item.zdywmc,
    label: item.zdzwmc || "",
    span: 24 / this.$store.state.formDesigner.layout,
    component: item.sjlx || "el-select",
    offset: 0,
    labelWidth: "",
    settings: {},
    tabIndex, //仅仅用于记录改字段属于第几个tablist
    tableIndex //仅仅用于记录改字段属于第几个table
  };
  // let textW = tempItem.label.replace(/[\u4e00-\u9fa5]/g, "aa").length * 8 + 12;
  // tempItem.labelWidth = textW === 12 ? 0 : Math.min(Math.max(textW, 120), 180);
  tempItem.labelWidth = maxWidth;
  tempItem.settings = getSettings(tempItem);
  tempItem.settings.disabled = false;
  tempItem.isRequire = false;
  tempItem.init = true;
  // tempItem.settings.placeholder = item.mrz;
  tempItem.val = item.value;
  if (item.sjygl) {
    tempItem.settings.remote = true;
    tempItem.settings.remoteUrl = "/getSJYByProcedure?P_LBBM=" + item.sjygl;
  }
  return tempItem;
} //此方法用于将原来案卡的数据，进行一次转换，转成本表单容器所能接受的形式
export default {
  formItemSettingsValue,
  getSettings,
  getDefauleVal,
  getDefaultRule,
  groupAddItem,
  groupDelItem,
  isSettingVisible,
  translateFormItem
};
