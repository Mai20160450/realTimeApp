<template>
  <v-card
  max-width="600"
    class="mx-auto" dense style="margin-left: 12px;">
  <v-toolbar
    style="background-color:cyan;color:#fff">

    <v-toolbar-title>Categories</v-toolbar-title>
  </v-toolbar>


  <v-list>
    <v-list-item v-for="category in categories" :key="category.id">
      <v-list-item-content>
        <v-list-item-title>
            {{category.name}}
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
      categories:{}
    }
  },
  created(){
    axios.get('/api/category')
    .then(res => this.categories = res.data.data)
  }

  }
</script>

<style lang="css">
</style>
