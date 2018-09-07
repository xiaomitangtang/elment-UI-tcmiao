<template>
    <el-menu   background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :router="true"
               default-active="/standard/html"
    >
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
             <span slot="title">   {{menu.title}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: "1-1",
          routername: "/swxUI",
          title: "赛威讯UI",
          icon: "el-icon-tickets"
        },
        {
          id: "1",
          title: "前端规范",
          icon: "el-icon-menu",
          children: [
            {
              id: "1-1",
              routername: "/standard/html",
              title: "html书写规范",
              icon: ""
            },
            {
              id: "1-2",
              routername: "/standard/css",
              title: "css写作注意事项",
              icon: ""
            },
            {
              id: "1-3",
              routername: "/standard/hack",
              title: "CSS Hack",
              icon: ""
            },
            {
              id: "1-4",
              routername: "/standard/keycode",
              title: "键盘按钮Keycode",
              icon: ""
            },
            {
              id: "1-5",
              routername: "/standard/aria",
              title: "ARIA属性值",
              icon: ""
            },
            {
              id: "1-6",
              routername: "/standard/css_name",
              title: "css命名规范",
              icon: ""
            },
            {
              id: "1-7",
              routername: "/standard/html_name",
              title: "html命名规范",
              icon: ""
            },
            {
              id: "1-8",
              routername: "/standard/folder_name",
              title: "文件夹命名规范",
              icon: ""
            },
            {
              id: "1-9",
              routername: "/standard/regex",
              title: "常用正则表达式",
              icon: ""
            },
            {
              id: "1-10",
              routername: "/standard/cursor",
              title: "css中的cursor",
              icon: ""
            },
            {
              id: "1-11",
              routername: "/standard/edm",
              title: "EDM制作规范",
              icon: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
</style>
