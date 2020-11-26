// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as GmapVue from 'gmap-vue'

import Map from './components/Map'
import UpdateBike from './components/UpdateBike'

import './App.css'
 
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
  path: '/',
  component: Map,
  props: true,
  name: 'root'
  }, {
    path: '/bike/:bikeId',
    component: UpdateBike,
    props: {Map: true}, 
    name: 'update-bike'
  }, {
  path: '*',
  redirect: '/'
  }]
})

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyANU7ETQ1AlEMaMpDmY9miT5xswu6DLKZk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
