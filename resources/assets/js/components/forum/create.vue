<template>
<v-container>
    <v-form @submit.prevent="create">


      <v-text-field
        v-model="form.title"
        type="text"
        label="Title"
        required
      ></v-text-field>

      <v-select
      :items="categories"
      item-text="name"
      item-value="id"
      v-model="form.category_id"
      label="Category"
        ></v-select>
        <vue-simplemde v-model="form.body" />
      <v-btn
        style="background-color:green"
        type="submit"
        :disabled="disable"
      >
        Create
      </v-btn>


    </v-form>
  </v-container>
</template>

<script>

  export default {
    data(){
      return {
        form:{
          title:null,
          category_id:null,
          body:null,

        },
        categories:{},
        errors:{}
      }
    },
    created(){
      axios.get('/api/category')
      .then(res => this.categories = res.data.data)
    },
    methods:{
      create(){
        axios.post('/api/question',this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => this.errors = response.data.error)
      }
    },
    computed:{
      disable(){
        return !(this.form.title && this.form.category_id && this.form.body)
      }
    }

  }
</script>

<style lang="css">

</style>
