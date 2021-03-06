import Vue from "vue";
import "@mdi/font/css/materialdesignicons.min.css";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "mdi"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
