import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Peliculas from './components/Peliculas.vue'
import Personajes from './components/Personajes.vue'
import Planetas from './components/Planetas.vue'
import Vehiculos from './components/Vehiculos.vue'
import Cruceros from './components/Cruceros.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/peliculas', name: 'peliculas', component: Peliculas },
  { path: '/personajes', name: 'personajes', component: Personajes },
  { path: '/planetas', name: 'planetas', component: Planetas },
  { path: '/vehiculos', name: 'vehiculos', component: Vehiculos },
  { path: '/cruceros', name: 'cruceros', component: Cruceros },
];

const router = new VueRouter({
  routes
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
