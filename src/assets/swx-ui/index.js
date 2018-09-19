import portrait from "./components/portrait";
import search from "./components/search";
import datepicker from "./components/datepicker";
import pagenation from "./components/pagenation";
import swxSwitch from "./components/switch";
import transfer from "./components/transfer";
import loading from "./components/loading";
import timeline from "./components/timeline";
import steps from "./components/steps";
import searchTree from "./components/searchTree";
const components = [
  portrait,
  search,
  datepicker,
  pagenation,
  swxSwitch,
  transfer,
  loading,
  timeline,
  steps,
  searchTree
];

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
