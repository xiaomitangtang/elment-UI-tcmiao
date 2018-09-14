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
        path: "select",
        name: "select",
        component: () => import("./subpages/select.vue")
      },
      {
        path: "datepicker",
        name: "datepicker",
        component: () => import("./subpages/datepicker.vue")
      },
      {
        path: "pagenation",
        name: "pagenation",
        component: () => import("./subpages/pagenation.vue")
      },
      {
        path: "radioAndCheckbox",
        name: "radioAndCheckbox",
        component: () => import("./subpages/radioAndCheckbox.vue")
      },
      {
        path: "switch",
        name: "switch",
        component: () => import("./subpages/switch.vue")
      },
      {
        path: "tabs",
        name: "tabs",
        component: () => import("./subpages/tabs.vue")
      },
      {
        path: "alert",
        name: "alert",
        component: () => import("./subpages/alert.vue")
      },
      {
        path: "notify",
        name: "notify",
        component: () => import("./subpages/notify.vue")
      },
      {
        path: "msgbox",
        name: "msgbox",
        component: () => import("./subpages/msgbox.vue")
      },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("./subpages/dialog.vue")
      },
      {
        path: "transfer",
        name: "transfer",
        component: () => import("./subpages/transfer.vue")
      },
      {
        path: "tree",
        name: "tree",
        component: () => import("./subpages/tree.vue")
      },
      {
        path: "html",
        name: "html",
        component: () => import("../standard/html.vue")
      },
      {
        path: "css",
        name: "css",
        component: () => import("../standard/css.vue")
      },
      {
        path: "hack",
        name: "hack",
        component: () => import("../standard/css_hack.vue")
      },
      {
        path: "keycode",
        name: "keycode",
        component: () => import("../standard/skeycode.vue")
      },
      {
        path: "aria",
        name: "aria",
        component: () => import("../standard/aria.vue")
      },
      {
        path: "css_name",
        name: "css_name",
        component: () => import("../standard/css_name.vue")
      },
      {
        path: "html_name",
        name: "html_name",
        component: () => import("../standard/html_name.vue")
      },
      {
        path: "folder_name",
        name: "folder_name",
        component: () => import("../standard/folder_name.vue")
      },
      {
        path: "regex",
        name: "regex",
        component: () => import("../standard/regex.vue")
      },
      {
        path: "cursor",
        name: "cursor",
        component: () => import("../standard/cursor.vue")
      },
      {
        path: "edm",
        name: "edm",
        component: () => import("../standard/edm.vue")
      },
      {
        path: "*",
        redirect: { name: "uiViews" }
      }
    ]
  }
];

export default routes;
