<template>
    <div class='swx-mainl'>
        <div class="swx-mainl-logo"></div>
        <div class="swx-mainl-main">
            <el-menu default-active="1-4-1"  :collapse="!expandMenu"
                     background-color="#1865a7"
                     text-color="#fff"
                     :router="true"
                     :unique-opened="true"
                     active-text-color="#fff">
                <template  v-for="(menu,index) in menuList" >
                    <el-submenu v-if="menu.children&&menu.children.length"   :index="menu.id" :key="'menu'+index">
                        <template slot="title">
                            <i :class="menu.icon"></i>
                            <span>{{menu.title}}</span>
                        </template>
                        <el-menu-item  v-for="(submenu,index) in menu.children" :index="submenu.routername" :key="'submenu'+index">
                            <i :class="submenu.icon"></i>
                            <small>{{submenu.title}}</small>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item  v-else  :key="'menu'+index" :index="menu.routername">
                        <i :class="menu.icon"></i>
                        <span slot="title">{{menu.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>

        </div>
        <div class="swx-mainl-footer">
            <i  :class="{'el-icon-arrow-left':expandMenu,'el-icon-arrow-right':!expandMenu}" @click="$emit('mainlArrowClick')"></i>
        </div>
    </div>
</template>
<script>
export default {
  props: ["expandMenu"],
  data() {
    return {
      menuList: [
        {
          id: "1-1",
          title: "前端规范",
          icon: "el-icon-menu",
          children: [
            {
              id: "1-1",
              routername: "/swxUI/html",
              title: "html书写规范",
              icon: ""
            },
            {
              id: "1-2",
              routername: "/swxUI/css",
              title: "css写作注意事项",
              icon: ""
            },
            {
              id: "1-3",
              routername: "/swxUI/hack",
              title: "CSS Hack",
              icon: ""
            },
            {
              id: "1-4",
              routername: "/swxUI/keycode",
              title: "键盘按钮Keycode",
              icon: ""
            },
            {
              id: "1-5",
              routername: "/swxUI/aria",
              title: "ARIA属性值",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/css_name",
              title: "css命名规范",
              icon: ""
            },
            {
              id: "1-7",
              routername: "/swxUI/html_name",
              title: "html命名规范",
              icon: ""
            },
            {
              id: "1-8",
              routername: "/swxUI/folder_name",
              title: "文件夹命名规范",
              icon: ""
            },
            {
              id: "1-9",
              routername: "/swxUI/regex",
              title: "常用正则表达式",
              icon: ""
            },
            {
              id: "1-10",
              routername: "/swxUI/cursor",
              title: "css中的cursor",
              icon: ""
            },
            {
              id: "1-11",
              routername: "/swxUI/edm",
              title: "EDM制作规范",
              icon: ""
            }
          ]
        },
        {
          id: "1",
          title: "赛威讯UI",
          icon: "el-icon-tickets",
          children: [
            {
              id: "1-1",
              routername: "/swxUI/uiViews",
              title: "ui视图",
              icon: ""
            },
            {
              id: "1-2",
              routername: "/swxUI/btns",
              title: "按钮",
              icon: ""
            },
            {
              id: "1-3",
              routername: "/swxUI/tables",
              title: "表格",
              icon: ""
            },
            {
              id: "1-4",
              routername: "/swxUI/portrait",
              title: "头像图标",
              icon: ""
            },
            {
              id: "1-5",
              routername: "/swxUI/input",
              title: "输入框",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/search",
              title: "搜索",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/select",
              title: "下拉选择",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/datepicker",
              title: "日期选择",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/pagenation",
              title: "分页",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/switch",
              title: "开关",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/radioAndCheckbox",
              title: "单选复选",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/tabs",
              title: "Tabs",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/alert",
              title: "alert",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/notify",
              title: "notify",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/msgbox",
              title: "msgbox",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/dialog",
              title: "dialog",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/transfer",
              title: "transfer",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/tree",
              title: "tree",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/breadcrumb",
              title: "breadcrumb",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/badge",
              title: "badge",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/swxUI/loading",
              title: "loading",
              icon: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
.swx-mainl-logo {
  width: 100%;
  height: 60px;
  background: url("../icons/logo.png") no-repeat center center #083b66;
}
.swx-mainl-main {
  height: calc(100% - 100px);
  overflow: auto;
  i {
    color: #fff !important;
  }
  .el-menu {
    border-right: 0;
  }
  .el-menu-item.is-active {
    background-color: #1ab394 !important;
  }
}
.swx-mainl-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #135186;
  i {
    position: absolute;
    right: 10px;
    top: 8px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
