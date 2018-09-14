import ui from "@/pages/swx-ui/z-routes";
// import standard from "@/pages/standard/z-routes";

let routes = [];
// 添加业务路由
routes = routes.concat(ui);
// routes = routes.concat(standard);
routes = routes.concat([{ path: "*", redirect: "/swxUI" }]);
export default routes;
