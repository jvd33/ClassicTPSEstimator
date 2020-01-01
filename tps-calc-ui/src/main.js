import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import './quasar';
import CalculateForm from './components/CalculateForm.vue';
import About from './components/About.vue';

const routes = [
  {
    path: '/',
    component: CalculateForm,
    children: [
      { path: 'about', component: About },
    ],
  },
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),

}).$mount('#app');
