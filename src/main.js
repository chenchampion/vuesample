import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import LoginView from './views/LoginView.vue'

import router from './router'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.config.debug = true;
Vue.use(VueResource);


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/home',
//       name: 'HomeView',
//       component: Home
//     },
//     {
//       path: '/secretquote',
//       name: 'SecretQuoteView',
//       component: SecretQuote
//     },
//     {
//       path: '/login',
//       name: 'LoginView'
//       component: LoginView
//     },
//     {
//       path: '/signup',
//       name: 'SignupView'
//       component: Signup
//     },
//     {
//       path: '*',
//       redirect: '/login/'
//     }          
//   ]
// })

// export var router = new VueRouter()

// router.map({
//   // '/home': {
//   //   component: Home
//   // },
//   'secretquote': {
//     component: SecretQuote
//   },
//   '/login': {
//     //component: Login
//     component: LoginView
//   },
//   '/signup': {
//     component: Signup
//   }
// })

// router.redirect({
//   '*': '/home'
// })

// router.start(App, '#app')

/* eslint-disable no-new */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
