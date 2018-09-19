<template>
    <el-row>
      <div v-for="item in dragComponents " class="menu-item" draggable="true" @dragstart="dragComponent(item)">
        <!--<div class="menu-item-text">{{item.name}}</div>-->
        <div class="menu-item-text">{{item.name}}</div>
        <div class="menu-item-drag"><el-button class="menu-item-drag-btn" size="mini" type="info" icon="el-icon-rank">拖动</el-button></div>
      </div>
    </el-row>
</template>

<script>
export default {
  name: "dragMenu",
  data() {
    return {
      dragComponents: [
        { name: "评分", component: "el-rate" },
        // {name: '分页', component: 'el-pagination'},
        // {name: '对话框', component: 'el-dialog'},
        // {name: '自动填充', component: 'el-autocomplete'},
        // {name: '下拉', component: 'el-dropdown'},
        // {name: '下拉菜单', component: 'el-dropdownmenu'},
        // {name: '下拉选项', component: 'el-dropdownitem'},
        // {name: '菜单', component: 'el-menu'},
        // {name: '子菜单', component: 'el-submenu'},
        // {name: '菜单项', component: 'el-menuitem'},
        // {name: '菜单项组', component: 'el-menuitemgroup'},
        { name: "输入框", component: "el-input" },
        { name: "文本域", component: "el-textarea" },
        { name: "计数器", component: "el-input-number" },
        { name: "单选框", component: "el-radio" },
        // {name: '单选框按钮', component: 'el-radio-button'},
        { name: "单选框组", component: "el-radio-group" },
        { name: "多选框", component: "el-checkbox" },
        // {name: '多选框按钮', component: 'el-checkbox-button'},
        { name: "多选框组", component: "el-checkbox-group" },
        { name: "开关", component: "el-switch" },
        { name: "选择器", component: "el-select" },
        // {name: '选项', component: 'el-option'},
        // {name: '选项组', component: 'el-option-group'},
        // {name: '按钮', component: 'el-button'},
        // {name: '按钮组', component: 'el-button-group'},
        // {name: '表格', component: 'el-table'},
        // {name: '表格列', component: 'el-table-column'},
        { name: "颜色选择器", component: "el-color-picker" },
        { name: "日期选择器", component: "el-date-picker" },
        { name: "时间select", component: "el-time-select" },
        { name: "时间picker", component: "el-time-picker" },
        // {name: '弹出框', component: 'el-popover'},
        // {name: '文字提示', component: 'el-tooltip'},
        // {name: '面包屑导航', component: 'el-breadcrumb'},
        // {name: '面包屑', component: 'el-breadcrumb-item'},
        // {name: '表单', component: 'el-form'},
        // {name: '表单项', component: 'el-form-item'},
        // {name: '标签页组', component: 'el-tabs'},
        // {name: '标签页', component: 'el-tab-pane'},
        // {name: '标签', component: 'el-tag'},
        // {name: '树形控件', component: 'el-tree'},
        // {name: '警告', component: 'el-alert'},
        { name: "滑块", component: "el-slider" },
        // {name: '图标', component: 'el-icon'},
        // {name: 'row', component: 'el-row'},
        // {name: 'col', component: 'el-col'},
        { name: "上传", component: "el-upload" },
        // {name: '进度条', component: 'el-progress'},
        // {name: '标记', component: 'el-badge'},
        // {name: '卡片', component: 'el-card'},
        // {name: '卡片', component: 'el-card'},
        // {name: '步骤条', component: 'el-steps'},
        // {name: '步骤项', component: 'el-step'},
        // {name: '走马灯', component: 'el-carousel'},
        // {name: '走马灯项', component: 'el-carousel-item'},
        // {name: '折叠面板', component: 'el-collapse'},
        // {name: '折叠面板项', component: 'el-collapse-item'},
        { name: "级联选择器", component: "el-cascader" }
        // {name: '穿梭框', component: 'el-transfer'},
        // {name: 'container', component: 'el-container'},
        // {name: 'header', component: 'el-header'},
        // {name: 'aside', component: 'el-aside'},
        // {name: 'main', component: 'el-main'}
      ]
    };
  },
  methods: {
    dragComponent(item) {
      this.$store.commit("formDesigner/setActiveFormDragSrc", item.component);
    }
  }
};
</script>

<style>
.menu-item {
  width: 100%;
  padding: 5px;
  overflow: hidden;
}
.menu-item-text {
  float: left;
  width: 70%;
  padding: 3px 10px;
  background-color: #bbbbbb;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.6);
}
.menu-item-drag {
  float: left;
  text-align: right;
  width: 30%;
  padding: 3px;
  height: 100%;
  line-height: 10px;
}
.menu-item-drag-btn {
  padding: 3px 2px;
}
.menu-item-drag-btn .el-icon-rank {
  color: #333333;
}
</style>
