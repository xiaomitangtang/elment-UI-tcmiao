import portrait from "./components/portrait";
import search from "./components/search";
const components = [portrait, search];

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
