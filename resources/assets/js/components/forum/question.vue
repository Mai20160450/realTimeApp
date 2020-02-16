<template>
  <v-card
    class="mx-auto"
  >

    <v-card-subtitle class="pb-0">
    <h3 class="headline mb-0">
      <router-link :to="data.path">
        {{data.title}}
      </router-link>
    </h3>
    <div class="text--primary ">
      {{data.user}} said {{data.created_at}}
    </div>
    </v-card-subtitle>


    <v-card-text>
      {{data.body}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props:['data']
  }
</script>

<style lang="css">
</style>
