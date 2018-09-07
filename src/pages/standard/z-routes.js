const routes = [
  {
    path: "/standard",
    component: () => import("@/pages/standard/index.vue"),
    children: [
      {
        path: "html",
        name: "html",
        component: () => import("@/pages/standard/html.vue")
      },
      {
        path: "css",
        name: "css",
        component: () => import("@/pages/standard/css.vue")
      },
      {
        path: "hack",
        name: "hack",
        component: () => import("@/pages/standard/css_hack.vue")
      },
      {
        path: "keycode",
        name: "keycode",
        component: () => import("@/pages/standard/skeycode.vue")
      },
      {
        path: "aria",
        name: "aria",
        component: () => import("@/pages/standard/aria.vue")
      },
      {
        path: "css_name",
        name: "css_name",
        component: () => import("@/pages/standard/css_name.vue")
      },
      {
        path: "html_name",
        name: "html_name",
        component: () => import("@/pages/standard/html_name.vue")
      },
      {
        path: "folder_name",
        name: "folder_name",
        component: () => import("@/pages/standard/folder_name.vue")
      },
      {
        path: "regex",
        name: "regex",
        component: () => import("@/pages/standard/regex.vue")
      },
      {
        path: "cursor",
        name: "cursor",
        component: () => import("@/pages/standard/cursor.vue")
      },
      {
        path: "edm",
        name: "edm",
        component: () => import("@/pages/standard/edm.vue")
      },
      { path: "*", redirect: { name: "html" } }
    ]
  }
];

export default routes;
