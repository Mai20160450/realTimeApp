<template lang="html">
<v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
    <!--  <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>BitFumes</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        v-if="item.show">
          <v-btn >{{item.title}}</v-btn>
        </router-link>

      </div>
    </v-toolbar>
  </v-card>

</template>

<script>
  export default {
    data(){
      return{
        items:[
          {title : 'Forum' , to:'/forum' , show: true},
          {title : 'Login' , to:'/login' , show: !User.loggedIn()},
          {title : 'AskQuestion' , to:'/ask' , show: User.loggedIn()},
          {title : 'Category' , to:'/category' , show: User.admin()},
          {title : 'Logout' , to:'/logout' , show: User.loggedIn()},
        ]
      }
    },
    created(){
    EventBus.$on('logout',() => {
      User.logout()
    })
    }
  }
</script>

<style>
</style>
