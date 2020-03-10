import Vue from 'vue';
import App from './App.vue';
import VueObserveVisibility from 'vue-observe-visibility';
require('intersection-observer');
Vue.use(VueObserveVisibility);
Vue.config.productionTip = true;
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
