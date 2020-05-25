<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3 mx-3 rounded" justify="end" align="right">
            <v-btn elevation="5" color="success" @click="inputData" class="mx-5">Submit</v-btn>
            <v-btn elevation="5" color="error" class="mx-5" @click="clearData">Clear</v-btn>
            <v-btn elevation="5" color="primary" class="mx-5" to="cek-stock">Lihat Data</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-10" elevation="5">
              <h1 class="ml-5">Input Data Supplier</h1>
              <form class="mx-5">
                <v-text-field label="Nama" v-model="supplier.nama_supplier"></v-text-field>
                <v-text-field label="Alamat" v-model="supplier.alamat"></v-text-field>
                <v-text-field label="No. Telp" v-model="supplier.no_telp"></v-text-field>
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
      supplier: {
        nama_supplier: null,
        alamat: null,
        no_telp: null
      }
    }
  },
  methods: {
    clearData: function() {
      for (let key in this.supplier) {
        this.supplier[key] = null
      }
    },
    inputData: function() {
      Axios.post('http://localhost:8003/input-supplier', {
        nama_supplier: this.supplier.nama_supplier,
        alamat: this.supplier.alamat,
        no_telp: this.supplier.no_telp
      })
        .then(response => {
          this.clearData()
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
