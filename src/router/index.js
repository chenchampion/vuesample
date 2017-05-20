import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/RegisterView.vue'
//import Home from '../components/Home.vue'
import SecretQuote from '../components/SecretQuote.vue'
import Signup from '../components/Signup.vue'
import HomeView from '../views/HomeView.vue'
import PagesView from '../views/PagesView.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
      ]
    },
    {
      path: '/secretquote',
      name: 'SecretQuoteView',
      component: SecretQuote
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView
    },
    {
      path: '*',
      redirect: '/login/'
    }          
  ]
})