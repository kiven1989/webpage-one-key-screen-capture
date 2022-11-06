import JBtn from "./j-btn/index.vue";
import ScreenCapture from "./screen-capture/index.vue";
const commons = [JBtn, ScreenCapture];

const install = function (Vue) {
  commons.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install;
