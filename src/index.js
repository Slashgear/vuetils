export { withBeforeAfter } from "./methods.js";
import { bemModifiers } from "./components.js";
export { bemModifiers } from "./components.js";

export default {
  install: Vue => {
    Vue.prototype.$bemModifiers = bemModifiers;
  }
};
