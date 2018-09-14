import portrait from "./components/portrait";
import search from "./components/search";
import datepicker from "./components/datepicker";
import pagenation from "./components/pagenation";
import swxSwitch from "./components/switch";
import transfer from "./components/transfer";
const components = [
  portrait,
  search,
  datepicker,
  pagenation,
  swxSwitch,
  transfer
];

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
