import Vue from 'vue'
import App from './App.vue'
// eslint-disable-line
import ByeCss from 'boilerplate-webpack-babel-sass-storybook-vuejs/dist/Bye.css'; //eslint-disable-line
import HelloCompCss from 'boilerplate-webpack-babel-sass-storybook-vuejs/dist/HelloComp.css'; //eslint-disable-line
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
