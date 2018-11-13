import Vue from 'vue'
import App from './App.vue'
import ByeCss from 'boilerplate-webpack-babel-sass-storybook-vuejs/dist/Bye.css';
import HelloCompCss from 'boilerplate-webpack-babel-sass-storybook-vuejs/dist/HelloComp.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
