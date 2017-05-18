import {router} from '../index'

const API_URL = 'http://localhost:9000/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const LOGOUT_URL = API_URL + 'rest-auth/logout/'
const SIGNUP_URL = API_URL + 'rest-auth/registration/'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.token)
      console.log(data)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout(context) {
    context.$http.post(LOGOUT_URL, (data) =>{
      localStorage.removeItem('id_token')
      this.user.authenticated = false
    }).error((err) => {
      localStorage.removeItem('id_token')
      this.user.authenticated = false      
      context.error = err
    })
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
