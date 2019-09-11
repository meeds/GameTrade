import Vue from 'vue'
import App from './App.vue'
import './components/shared/globals.js';
import VueRouter from 'vue-router';
import {router} from './router/routerConfig';
import Vuelidate from 'vuelidate';
import {store} from "@/domain/store/store";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

