<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3" justify="end" align="right">
            <v-btn
              v-for="(buttontext, index) in buttonText"
              :key="index"
              class="mx-5"
            >{{ buttontext }}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pink lighten-3">
            <v-card class="pa-10">
              <h1 class="ml-5">Input Data Barang</h1>
              <form class="mx-5">
                <v-select label="Jenis Barang"></v-select>
                <v-text-field label="Nama"></v-text-field>
                <v-select label="Suplier"></v-select>
                <v-text-field label="Harga Beli Per Unit"></v-text-field>
                <v-text-field label="Harga Jual Per Unit "></v-text-field>
                <v-text-field label="Stock"></v-text-field>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      buttonText: {
        submit: 'Submit',
        clear: 'Clear',
        back: 'Back'
      }
    }
  }
}
</script>
