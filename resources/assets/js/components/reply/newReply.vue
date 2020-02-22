<template lang="html">
  <div style="    margin-top: 16px;">
    <vue-simplemde v-model="body" />
    <v-btn style="background-color:green; color:#fff;" @click="submit">
      Reply
    </v-btn>
  </div>
</template>

<script>
  export default {
    props:['questionSlug'],
    data(){
      return{
        body:null
      }
    },
    methods:{
      submit(){
        axios.post(`/api/question/${this.questionSlug}/reply` , {body:this.body})
        .then(res => {
          this.body = ''
          EventBus.$emit('newReply',res.data.reply)
        })
      }
    }
  }
</script>

<style lang="css">
</style>
