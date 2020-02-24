<template>

<v-card
    class="mx-auto"
  >
  <v-container>
    <v-card-title>
      <div>
        <div class="headline" style="line-height: 1rem;">
            {{data.title}}
        </div>
            <span style="color: gray; font-size:16px;">{{data.user}} said {{data.created_at}}</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn style="background-color:#008080; color:#fff">{{replyCount}} Replies</v-btn>
      </v-card-title>

      <v-card-text v-html="body"></v-card-text>
      <v-card-actions v-if="own">
        <v-btn icon small @click="edit" style="margin-right: 71px; margin-left: 22px;">
          <v-icon style= "color:orange">edit</v-icon>
        </v-btn>
        <v-btn icon small @click="destroy">
          <v-icon style= "color:red">delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-container>
</v-card>

</template>

<script>
  export default {
    props:['data'],
    data(){
      return{
        own : User.own(this.data.user_id),
        replyCount:this.data.reply_count
      }
    },
    computed:{
      body(){
        return md.parse(this.data.body)
      }
    },
    methods:{
      destroy(){
      axios.delete(`/api/question/${this.data.slug}`)
      .then(res => this.$router.push('/forum'))
      .catch(error => console.log(error.response.data))
      },
      edit(){
        EventBus.$emit('startEditing')
      }
    },
    created(){
      EventBus.$on('newReply',() =>{
        this.replyCount++
      });
      EventBus.$on('deleteReply',() =>{
        this.replyCount--
      });

      Echo.private('App.User.' + User.id())
        .notification((notification) => {
            this.replyCount++
        });

      Echo.channel('deleteReplyChannel')
        .listen('DeleteReplyEvent', (e) => {
            this.replyCount--
        });
    }
  }
</script>

<style lang="css">

</style>
