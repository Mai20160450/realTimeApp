<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs6>
        <question
        v-for="question in questions"
        :key="question.path"
        :data = question>
        </question>
      </v-flex>

        <v-flex xs4>
          <app-sidebar></app-sidebar>
        </v-flex>

        <v-flex xs2>
          <app-notification v-if="loggedIn"></app-notification>
        </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import question from './question'
  import AppSidebar from './AppSidebar'
  import AppNotification from '../AppNotification'
  export default {
    data(){
      return{
        loggedIn:User.loggedIn(),
        questions:{}
      }
    },
    components:{question,AppSidebar,AppNotification},
    created(){
    axios.get('/api/question')
    .then(res => this.questions = res.data.data)
    .catch(error => console.log(error.response.data))
    }
  }
</script>

<style lang="css">
</style>
