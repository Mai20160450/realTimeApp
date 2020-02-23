<template>
  <v-card
  max-width="600"
    class="mx-auto" dense style="margin-left: 12px;">
  <v-toolbar
    style="background-color:cyan;color:#fff">

    <v-toolbar-title :color="color">Notifications</v-toolbar-title>
    <v-spacer></v-spacer>
    {{unreadCount}}
  </v-toolbar>


  <v-list>
    <v-list-item v-for="item in unread" :key="item.id">
      <v-list-item-content>
        <router-link :to="item.path">
          <v-list-item-title @click="readIt(item)">
              {{item.question}}
          </v-list-item-title>
        </router-link>
      </v-list-item-content>
    </v-list-item>

     <v-list-item v-for="item in read" :key="item.id">
      <v-list-item-content>
        <v-list-item-title>
            {{item.question}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>

  </v-card>
</template>
<script>
  export default {
    data(){
      return{
        read:{},
        unread:{},
        unreadCount:0,
      }
    },
    created(){
      if(User.loggedIn()){
        this.getNotifications()
      }

      Echo.private('App.User.' + User.id())
        .notification((notification) => {
            this.unread.unshift(notification)
            this.unreadCount++
        });
    },
    methods:{
      getNotifications(){
        axios.post('/api/notifications')
        .then(res =>{
          this.read = res.data.read
          this.unread = res.data.unread
          this.unreadCount = res.data.unread.length
        })
      },
      readIt(readnotification){
        axios.post('/api/markAsRead' ,{id:readnotification.id})
        .then(res =>{
          this.unread.splice(readnotification,1)
          this.read.push(readnotification)
          this.unreadCount--
        })
      }
    },
    computed:{
      color(){
        return this.unreadCount > 0 ? '#D32F2F' : '#FFCDD2';
      }
    }
  }
</script>

<style lang="css">
</style>
