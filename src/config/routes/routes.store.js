import ui from "@/pages/swx-ui/z-routes";
import avtiveform from "@/pages/activeForm/z-routes";

let routes = [];
// 添加业务路由
routes = routes.concat(ui);
routes = routes.concat(avtiveform);
// routes = routes.concat(standard);
routes = routes.concat([{ path: "*", redirect: "/activeForm" }]);
export default routes;
