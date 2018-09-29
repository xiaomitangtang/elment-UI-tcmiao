import Vue from "vue";
import App from "./App";
import mixins from "@/mixins";
import router from "@/config/routes";
import { sync } from "vuex-router-sync";
import { apistore } from "@/config/api/api.store";
import directive from "@/directives";
import * as filters from "@/filters";
import { createStore } from "@/store/index.js";
import eventbus from "@/store/eventbus";
import VueI18n from "vue-i18n";
import messages from "@/config/i18n";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/swx-ui/less/index.less";
import swxUi from "@/assets/swx-ui/index.js";
import VueClipboard from "vue-clipboard2";
import _ from "lodash";

window._ = _;
Vue.use(ElementUI, { size: "mini" });
Vue.use(swxUi);
Vue.use(VueClipboard);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.use(directive);
Vue.use(VueI18n);
Vue.mixin(mixins);
const store = createStore();
sync(store, router);

const i18n = new VueI18n({
  locale: "zh",
  messages
});

Vue.prototype.$api = apistore;
Vue.prototype.$eventbus = eventbus;
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.debug = true;
Vue.prototype.$http = axios;

axios.defaults.timeout = 5000;
//response拦截器
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // todo: 做一些其他日志记录处理
    return Promise.reject(error);
  }
);
//request拦截器  可对请求进行相应的处理
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
//导航守卫
router.beforeEach((to, from, next) => {
  store.commit("setRouterList", to.matched);
  next();
});

//先读取配置文件，初始化项目可配置参数，路径为/表示为服务器根目录，如果为tomcat服务器，请将路径改为某文件夹，并将此请求地址改为相对应的文件夹路径
//如果项目可以直接放在服务器根目录，则可以将配置文件放在此项目的public文件夹下
//如果不需要读取配置文件，注释次请求代码，放开下面的初始化Vue实例代码即可

//  如果在很多地方都想使用配置文件内容，也可以在相应的组件内 import config from '@/loadConfig.js'
//  这是一个同步请求获取配置文件
axios.get("/VueApp_config.json").then(res => {
  axios.defaults.baseURL = res.data.REMOTE_ADDR;
  new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
  }).$mount("#app");
});

/*new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
}).$mount("#app");*/
