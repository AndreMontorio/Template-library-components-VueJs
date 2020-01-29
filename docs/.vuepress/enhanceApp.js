// enhanceApp.js
import ComponentLibrary from "./../../src/main.js";
import * as componentsDoc from "./components/examples";

export default ({ Vue }) => {
  for (const [name, component] of Object.entries(componentsDoc)) {
    Vue.component(name, component)
  }

  Vue.use(ComponentLibrary);
}