<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3 mx-3 rounded" justify="end" align="right">
            <v-btn elevation="5" color="success" @click="inputData" class="mx-5">Submit</v-btn>
            <v-btn elevation="5" color="error" class="mx-5">Clear</v-btn>
            <v-btn elevation="5" color="primary" class="mx-5">Back</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-10" elevation="5">
              <h1 class="ml-5">Input Data Barang</h1>
              <form class="mx-5">
                <v-select
                  label="Jenis Barang"
                  :items="jenis_barang"
                  item-text="nama_jenis_barang"
                  item-value="id"
                  v-model="dataInputStock.id_jenis_barang"
                ></v-select>
                <v-text-field label="Nama" v-model="dataInputStock.nama_barang"></v-text-field>
                <v-select
                  label="Suplier"
                  :items="supplier"
                  item-text="nama_supplier"
                  item-value="id"
                  v-model="dataInputStock.id_supplier"
                ></v-select>
                <v-text-field label="Harga Beli Per Unit" v-model="dataInputStock.harga_jual"></v-text-field>
                <v-text-field label="Harga Jual Per Unit " v-model="dataInputStock.harga_beli"></v-text-field>
                <v-text-field label="Stock" v-model="dataInputStock.stock"></v-text-field>
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
      jenis_barang: [],
      supplier: [],
      dataInputStock: {
        nama_barang: null,
        id_jenis_barang: null,
        id_supplier: '',
        harga_jual: null,
        harga_beli: null,
        stock: null
      }
    }
  },
  methods: {
    inputData: function() {
      Axios.post('http://localhost:8003/input-barang', {
        nama_barang: this.dataInputStock.nama_barang,
        id_jenis_barang: this.dataInputStock.id_jenis_barang,
        id_supplier: this.dataInputStock.id_supplier,
        harga_jual: this.dataInputStock.harga_jual,
        harga_beli: this.dataInputStock.harga_beli,
        stock: this.dataInputStock.stock
      })
        .then(response => {
          for (let key in this.dataInputStock) {
            this.dataInputStock[key] = null
          }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    Axios.get('http://localhost:8003/jenis-barang-options')
      .then(response => {
        this.jenis_barang = response.data
      })
      .catch(error => {
        console.log(`error jenis barang : ${error}`)
      })
    Axios.get('http://localhost:8003/supplier-options')
      .then(response => {
        this.supplier = response.data
      })
      .catch(error => {
        console.log(`erro supplier : ${error}`)
      })
  }
}
</script>
<style scoped>
.rounded {
  border-radius: 5px;
}
</style>
