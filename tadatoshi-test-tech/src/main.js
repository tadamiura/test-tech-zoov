// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './App.css'
// import VueRouter from 'vue-router'
import * as GmapVue from 'gmap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faInstagram, faSnapchat, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faFacebook, faInstagram, faSnapchat, faYoutube, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// import Map from './components/Map'
// import UpdateBike from './components/UpdateBike'

 
Vue.config.productionTip = false

// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   routes: [{
//   path: '/',
//   component: Map,
//   props: true,
//   name: 'root'
//   }, {
//     path: '/bike/:bikeId',
//     component: UpdateBike,
//     props: {Map: true}, 
//     name: 'update-bike'
//   }, {
//   path: '*',
//   redirect: '/'
//   }]
// })

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
  // router,
  components: { App },
  template: '<App/>'
})
