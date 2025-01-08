import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const vuetify = new Vuetify();  // Criação da instância Vuetify

new Vue({
  vuetify,  // Adiciona a instância Vuetify
  render: h => h(App),
}).$mount('#app');

