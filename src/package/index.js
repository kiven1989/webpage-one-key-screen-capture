import JBtn from "./j-btn/index.vue";
const commons = [JBtn];

const install = function (Vue) {
  commons.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install;
