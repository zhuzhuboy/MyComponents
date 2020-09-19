import Vue from 'vue';
import '@/plugins/element';
import { ElCol, ElRow } from 'components/elements/index';
import App from './App.vue';

Vue.use(ElCol);
Vue.use(ElRow);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
