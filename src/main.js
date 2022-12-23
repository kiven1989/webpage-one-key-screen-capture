import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import drag from "v-drag";

// import "./assets/main.css";

const app = createApp(App);

app.use(drag);
app.use(router);

app.mount("#oneKey");
