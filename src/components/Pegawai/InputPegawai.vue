<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3 mx-3 rounded" justify="end" align="right">
            <v-btn elevation="5" color="success" @click="inputPegawai" class="mx-5">Submit</v-btn>
            <v-btn elevation="5" color="error" class="mx-5" @click="clearData">Clear</v-btn>
            <v-btn elevation="5" color="primary" class="mx-5" to="lihat-pegawai">Lihat Data</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-10" elevation="5">
              <h1 class="ml-5">Input Data Pegawai</h1>
              <form class="mx-5">
                <v-text-field v-model="pegawai.nama_pegawai" label="Nama"></v-text-field>
                <v-text-field type="date" label="Tanggal Lahir" v-model="pegawai.tgl_lahir"></v-text-field>
                <v-select
                  :items="JenisKelamin"
                  label="Jenis Kelamin"
                  v-model="pegawai.jenis_kelamin"
                ></v-select>
                <v-text-field type="date" label="Hire Date" v-model="pegawai.hire_date"></v-text-field>
                <v-text-field label="Alamat" v-model="pegawai.alamat"></v-text-field>
                <v-text-field label="Gaji" v-model="pegawai.gaji"></v-text-field>
                <v-text-field label="No. Telp" v-model="pegawai.no_telp"></v-text-field>
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
      JenisKelamin: ['Laki Laki', 'Perempuan'],
      pegawai: {
        nama_pegawai: null,
        tgl_lahir: null,
        jenis_kelamin: null,
        hire_date: null,
        alamat: null,
        gaji: null,
        no_telp: null
      }
    }
  },
  methods: {
    clearData: function() {
      for (let key in this.pegawai) {
        this.pegawai[key] = null
      }
    },
    inputPegawai: function() {
      Axios.post('http://localhost:8003/input-pegawai', {
        nama_pegawai: this.pegawai.nama_pegawai,
        tgl_lahir: this.pegawai.tgl_lahir,
        jenis_kelamin: this.pegawai.jenis_kelamin,
        hire_date: this.pegawai.hire_date,
        alamat: this.pegawai.alamat,
        gaji: this.pegawai.gaji,
        no_telp: this.pegawai.no_telp
      })
        .then(response => {
          this.clearData()
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
<style scoped>
.rounded {
  border-radius: 5px;
}
</style>
