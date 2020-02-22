<template lang="html">
  <div>
    <vue-simplemde v-model="reply.reply" />
    <v-card-actions>
      <v-btn icon small @click="update"  style="margin-right: 71px; margin-left: 22px;">
        <v-icon style= "color:green" >save</v-icon>
      </v-btn>
      <v-btn icon small @click="cancle">
        <v-icon style= "color:black">cancle</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
  export default {
    props:['reply'],
    methods:{
      cancle(reply){
        EventBus.$emit('cancleEditing',reply);
      },
      update(){
        axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
        .then(res => this.cancle(this.reply.reply))
      }
    }
  }
</script>

<style lang="css">
</style>
