<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Get APIs from Server!!!</h1>
    <button class="btn btn-warning" v-on:click="getQuote()">Get API</button>
    <div class="quote-area" v-if="quote">
      <li v-for="(key, value) in quote">
        <h2><blockquote>{{key}} :  {{value}}</blockquote></h2>  
      </li>    
    </div>
    <div class="quote-area" v-else>
      <h2><blockquote>No API</blockquote></h2>      
    </div>    
  </div>
</template>

<script>
import auth from '../auth'

export default {

  data() {
    return {
      quote: ''
    }
  },

  methods: {
    getQuote() {
      this.$http
        .get('http://localhost:9000/', {}, {headers: auth.getAuthHeader()}).then( (data) => {
          this.quote = data.body;
          console.log(data.body);
        }, (err) => {console.log(err)}
        )
    }
  },

  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }

}
</script>