import Vue from 'vue';
import App from './App.vue';
import VueAos from 'vue-aos';
import VueObserveVisibility from 'vue-observe-visibility'
require('intersection-observer');
Vue.use(VueObserveVisibility)
Vue.component('vue-aos', VueAos);
Vue.config.productionTip = true;
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
