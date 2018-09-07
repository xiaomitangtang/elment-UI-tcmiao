const routes = [
  {
    path: "/swxUI",
    component: () => import("./index"),
    children: [
      {
        path: "uiViews",
        name: "uiViews",
        component: () => import("./subpages/uiViews.vue")
      },
      {
        path: "btns",
        name: "btns",
        component: () => import("./subpages/btns.vue")
      },
      {
        path: "tables",
        name: "tables",
        component: () => import("./subpages/tables.vue")
      },
      {
        path: "portrait",
        name: "portrait",
        component: () => import("./subpages/portrait.vue")
      },
      {
        path: "input",
        name: "input",
        component: () => import("./subpages/input.vue")
      },
      {
        path: "search",
        name: "search",
        component: () => import("./subpages/search.vue")
      },
      {
        path: "*",
        redirect: { name: "uiViews" }
      }
    ]
  }
];

export default routes;
