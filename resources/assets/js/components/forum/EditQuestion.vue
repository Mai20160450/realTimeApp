<template>
<v-container>
<v-card>
    <v-form @submit.prevent="edit">


      <v-text-field
        v-model="form.title"
        type="text"
        label="Title"
        required
      ></v-text-field>

      <vue-simplemde v-model="form.body" />

      <v-card-actions >
        <v-btn icon small @click="" style="margin-right: 71px; margin-left: 22px;">
          <v-icon style= "color:orange">save</v-icon>
        </v-btn>
        <v-btn icon small @click="">
          <v-icon style= "color:red">cancle</v-icon>
        </v-btn>
      </v-card-actions>

    </v-form>
  </v-container>
</v-card>
</template>

<script>

  export default {
    data(){
      return {
        form:{
          title:null,
          body:null,
        }
      }
    },
    methods:{
      edit(){

      }
    }
  }
</script>

<style lang="css">
</style>
