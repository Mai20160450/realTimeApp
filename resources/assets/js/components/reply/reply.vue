<template lang="html">
  <div style="margin-top: 4px;">
    <v-card>
      <v-card-title>
        <div class="headline">{{data.user}}</div>
        <span style="margin-left:6px;font-size:14px;"> said {{data.created_at}}</span>
      </v-card-title>
      <v-divider></v-divider>

      <edit-reply
       v-if="editing"
       :reply=data
       ></edit-reply>
      <v-card-text v-else v-html="reply"></v-card-text>
      <v-divider></v-divider>

      <div v-if="!editing">
        <v-card-actions v-if="own">
          <v-btn icon small  style="margin-right: 71px; margin-left: 22px;">
            <v-icon style= "color:orange" @click="edit">edit</v-icon>
          </v-btn>
          <v-btn icon small @click="destroy">
            <v-icon style= "color:red">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

    </v-card>
  </div>
</template>

<script>
import EditReply from './editReply'
  export default {
    components:{EditReply},
    props:['data','index'],
    data(){
      return{
        editing:false,
        beforeEditReplyBody:''
      }
    },
    computed:{
      own(){
        return User.own(this.data.user_id);
      },
      reply(){
        return md.parse(this.data.reply)
      }
    },
    created(){
      this.listen()
    },
    methods:{
      destroy(){
        EventBus.$emit('deleteReply',this.index)
      },
      edit(){
        this.editing = true
        this.beforeEditReplyBody = this.data.reply
      },
      listen(){
        EventBus.$on('cancleEditing',(reply) =>{
          this.editing = false
          if(reply !== data.reply){
            this.data.reply = this.beforeEditReplyBody
            this.beforeEditReplyBody = ''
          }

        })
      }
    }
  }
</script>

<style lang="css">
</style>
