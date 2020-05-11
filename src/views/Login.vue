<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" align="center" justify="center">
        <v-card class="mx-auto pa-10 red lighten-5" max-width="800">
          <h2>Login</h2>
          <form class="ml-10">
            <v-text-field label="Username"></v-text-field>
            <v-text-field label="Password" type="password"></v-text-field>
            <v-btn :to="dashboard">Submit</v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      dashboard: '/input-stock'
    }
  }
}
</script>
