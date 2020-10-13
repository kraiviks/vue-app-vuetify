import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuex from 'vuex';
import store from './store'
import * as fb from 'firebase'

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyCI0n6yz_uQ0_cb5PYD4cSrT84eCvrFZss",
      authDomain: "vue-app-vuetify.firebaseapp.com",
      databaseURL: "https://vue-app-vuetify.firebaseio.com",
      projectId: "vue-app-vuetify",
      storageBucket: "vue-app-vuetify.appspot.com",
      messagingSenderId: "185893703850",
      appId: "1:185893703850:web:a6ec028f61e248775040d3"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
