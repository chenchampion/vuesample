import {router} from '../main'

const API_URL = 'http://localhost:9000/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const LOGOUT_URL = API_URL + 'rest-auth/logout/'
const SIGNUP_URL = API_URL + 'rest-auth/registration/'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) =>{
      //console.log(data.body.token)
      localStorage.setItem('id_token', data.body.token)
      //console.log(data)

      this.user.authenticated = true

      if(redirect) {
        context.$router.push({path: redirect})      
      }

    }, (err) => {
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
    context.$http.post(LOGOUT_URL).then((data) =>{
      localStorage.removeItem('id_token')
      this.user.authenticated = false
    }, (err) => {
      localStorage.removeItem('id_token')
      this.user.authenticated = false      
      context.error = err
    })
    context.$router.push({name: 'LoginView'})
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
    var authHearder = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')}
    console.log(authHearder)
    return authHearder
  }
}
