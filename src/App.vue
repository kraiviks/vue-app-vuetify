<template>
  <v-app>
  <v-navigation-drawer 
    app
    temporary
    v-model="drawer"
    >
    <!-- -->
    <v-list>
      <v-list-item
        v-for="link of links"
        :key="link.title"
        :to="link.url"
      >
        <v-list-item-icon>
          <v-icon color="black">
            mdi-{{link.icon}}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        @click="onLogout"
        v-if="isUserLoggedIn"
      >
        <v-list-item-icon>
          <v-icon color="black">
            mdi-logout-variant
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="'Logout'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-card
    flat
    tile
  >
    <v-toolbar dense dark color="#54575f">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Kraiviks: App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="#0000" v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn color="#0000" @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left>mdi-logout-variant</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>

  <!-- Sizes your content based upon application components -->
  <v-main >

    <!-- Provides the application the proper gutter -->
    <v-container fluid >
            
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>

    <v-slide-y-reverse-transition>
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
        v-if="error"
      >
        {{error}}
  
        <template v-slot:action="{ attrs }">
          <v-btn
            dark
            text
            v-bind="attrs"
            @click="closeError"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-slide-y-reverse-transition>
  </v-main>
</v-app>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      drawer: false
    }
  },
  computed:{
    error(){
      return this.$store.getters.error
    },
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn
    },
    links(){
      if (this.isUserLoggedIn){
        return [
          {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
          {title: 'New add', icon: 'note-plus', url: '/new'},
          {title: 'My ads', icon: 'format-list-bulleted', url: '/list'}
        ]
      } else {
        return [
          {title: 'Login', icon: 'lock', url: '/login'},
          {title: 'Registration', icon: 'face', url: '/registration'}
        ]
      }
    }
  },
  methods:{
    closeError(){
      this.$store.dispatch('clearError')
    },
    onLogout(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color:#e5e9ec;
}

.pointer{
  cursor: pointer;
}
</style>
