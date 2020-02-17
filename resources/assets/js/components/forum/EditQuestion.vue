<template>
<v-container fluid>
<v-card>
    <v-form @submit.prevent="update">


      <v-text-field
        v-model="form.title"
        type="text"
        label="Title"
        required
      ></v-text-field>

      <vue-simplemde v-model="form.body" />

      <v-card-actions >
        <v-btn icon small type="submit" style="margin-right: 71px; margin-left: 22px;">
          <v-icon style= "color:orange">save</v-icon>
        </v-btn>
        <v-btn icon small @click="cancle">
          <v-icon style= "color:red">cancle</v-icon>
        </v-btn>
      </v-card-actions>

    </v-form>
    </v-card>
  </v-container>

</template>

<script>

  export default {
    props:['data'],
    data(){
      return {
        form:{
          title:null,
          body:null,
        }
      }
    },
    methods:{
      update(){
        axios.patch(`/api/question/${this.form.slug}` , this.form)
        .then(res => this.cancle())
        .catch(error => console.log(response.data.error))
      },
      cancle(){
      EventBus.$emit('cancleEditing')
      }
    },
    mounted(){
      this.form =this.data
    }
  }
</script>

<style lang="css">
</style>
