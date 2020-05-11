<template>
  <v-app>
    <home></home>
    <v-spacer></v-spacer>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  })
}
</script>
