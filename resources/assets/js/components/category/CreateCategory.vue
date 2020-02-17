<template>
<v-container>
    <v-form @submit.prevent="submit">


      <v-text-field
        v-model="form.name"
        type="text"
        label="Category Name"
        required
      ></v-text-field>

        <v-btn
        style="background-color:pink"
        type="submit" v-if="editSlug">
        Update
        </v-btn>

        <v-btn
        style="background-color:green"
        type="submit" v-else>
        Create
        </v-btn>

    </v-form>
    <v-card
      class="mx-auto" dense style="margin-left: 12px; margin-top:10px">
    <v-toolbar
      style="background-color:indigo;color:#fff">

      <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>


    <v-list>
      <div  v-for="(category, index) in categories" :key="category.id">
        <v-list-item>
          <v-list-item-action style="margin-right: 24px;
            margin-bottom: 22px;}">
          <v-btn icon small @click="edit(index)" >
            <v-icon style= "color:orange">edit</v-icon>
          </v-btn>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                  {{category.name}}
              </v-list-item-title>
            </v-list-item-content>

            <v-btn icon small @click="deletCat(category.slug ,index)"  style="    margin-right: 20px;">
              <v-icon style= "color:red">Delete</v-icon>
            </v-btn>
            </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    </v-card>
  </v-container>
</template>

<script>
  export default {
  data(){
    return{
      form:{
        name:null
      },
      categories:{},
      editSlug:null
    }
  },
  created(){
    if(!User.admin()){
      this.$router.push('/forum');
    }
    axios.get('/api/category')
    .then(res => this.categories = res.data.data)
  },
  methods:{
    submit(){
      this.editSlug ? this.update() : this.create()

    },
    create(){
      axios.post('/api/category',this.form)
      .then(res => {
        this.categories.unshift(res.data)
        this.form.name = null
      })
      .catch(error => console.log(response.data.error))
    },
    update(){
      axios.patch(`/api/category/${this.editSlug}`,this.form)
      .then(res => {
        this.categories.unshift(res.data)
        this.form.name = null
      })
      .catch(error => console.log(response.data.error))
    },
    deletCat(slug ,index){
      axios.delete(`/api/category/${slug}`)
      .then(res => this.categories.splice(index,1))
    },
    edit(index){
      this.form.name= this.categories[index].name;
      this.editSlug= this.categories[index].slug;
      this.categories.splice(index,1);
    }
  }

  }
</script>

<style lang="css">
</style>
