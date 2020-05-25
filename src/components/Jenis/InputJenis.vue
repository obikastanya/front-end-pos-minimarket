<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3 mx-3 rounded" justify="end" align="right">
            <v-btn elevation="5" color="success" @click="inputData" class="mx-5">Submit</v-btn>
            <v-btn elevation="5" color="error" class="mx-5" @click="clearData">Clear</v-btn>
            <v-btn elevation="5" color="primary" class="mx-5" to="lihatJenis">Lihat Data</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-10" elevation="5">
              <h1 class="ml-5">Input Jenis Barang</h1>
              <form class="mx-5">
                <v-text-field label="Description" v-model="nama_jenis_barang"></v-text-field>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      nama_jenis_barang: null
    }
  },
  methods: {
    clearData: function() {
      this.nama_jenis_barang = null
    },
    inputData: function() {
      Axios.post('http://localhost:8003/input-jenis-barang', {
        nama_jenis_barang: this.nama_jenis_barang
      })
        .then(response => {
          clearData()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.rounded {
  border-radius: 5px;
}
</style>
