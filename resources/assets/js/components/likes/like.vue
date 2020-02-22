<template lang="html">
  <div>
    <v-btn icon @click="likeIt">
      <v-icon :color="color" style="font-size: 13px;
    margin-right: 29px;">favourite</v-icon> {{count}}
    </v-btn>
  </div>
</template>

<script>
  export default {
    props:['content'],
    data(){
      return{
        liked:this.content.liked,
        count:this.content.like_count
      }
    },
    computed:{
      color(){
        return this.liked ? '#D32F2F' : '#FFCDD2';
      }
    },
    methods:{
      likeIt(){
        if(User.loggedIn()){
          this.liked ? this.decr() : this.incr()
          this.liked = !this.liked
        }
      },
      incr(){
        axios.post(`/api/like/${this.content.id}`)
        .then(res => this.count ++)

      },
      decr(){
        axios.post(`/api/like/${this.content.id}`)
        .then(res => this.count --)
      }
    }
  }
</script>

<style lang="css">
</style>
