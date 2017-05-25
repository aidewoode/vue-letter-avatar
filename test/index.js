import Vue from 'vue';
import App from './app.vue';
import VueLetterAvatar from '../src/index';

Vue.use(VueLetterAvatar);

new Vue({
  el: '#app',
  render: h => h(App)
});
