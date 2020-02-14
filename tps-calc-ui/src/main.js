import Vue from 'vue';
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag";
import App from './App.vue';
import './quasar';
import WarriorCalculateForm from './components/WarriorCalculateForm.vue';
import DruidCalculateForm from './components/DruidCalculateForm.vue';
import PaladinCalculateForm from './components/PaladinCalculateForm.vue';
import DPSThreat from "./components/DPSThreatComponent.vue";
import About from './components/About.vue';
import CalculationDetails from './components/CalculationDetails.vue';
import ClassRankings from './components/ClassRankings.vue'
import ThreatBreakdown from './components/ThreatBreakdown.vue'
import ThreatResult from './components/ThreatResult.vue';

const routes = [
  {
    path: '/',
    alias: '/warrior',
    component: WarriorCalculateForm,
  },
  {
    path: '/druid',
    component: DruidCalculateForm,
  },
  {
    path: '/paladin',
    component: PaladinCalculateForm,
  },
  {
    path: '/threatvalues',
    component: CalculationDetails,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/rankings/warrior',
    component: ClassRankings,
    props: {player_class: 'Warrior'},
  },
  {
    path: '/rankings/druid',
    component: ClassRankings,
    props: {player_class: 'Druid'},
  },
  {
    path: '/rankings/paladin',
    component: ClassRankings,
    props: {player_class: 'Paladin'},
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGtag, {
  config: { id: "UA-77837329-2" }
});

Vue.component('threat-result', ThreatResult);
Vue.component('dps-threat-result', DPSThreat);
Vue.component('threat-breakdown', ThreatBreakdown)
new Vue({
  router,
  render: h => h(App),

}).$mount('#app');
