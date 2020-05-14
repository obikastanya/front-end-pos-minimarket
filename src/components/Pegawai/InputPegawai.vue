<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="9">
        <v-row>
          <v-col class="orange darken-3 mx-3 rounded" justify="end" align="right">
            <v-btn
              v-for="(buttontext, index) in buttonText"
              :key="index"
              elevation="5"
              :color="buttontext.color"
              class="mx-5"
            >{{ buttontext.btnName }}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-10" elevation="5">
              <h1 class="ml-5">Input Data Pegawai</h1>
              <form class="mx-5">
                <v-text-field label="Nama"></v-text-field>
                <v-text-field type="date" label="Tanggal Lahir"></v-text-field>
                <v-select :items="JenisKelamin" label="Jenis Kelamin"></v-select>
                <v-text-field type="date" label="Hire Date"></v-text-field>
                <v-text-field label="Alamat"></v-text-field>
                <v-text-field label="Gaji"></v-text-field>
                <v-text-field label="No. Telp"></v-text-field>
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
      buttonText: [
        { btnName: 'Submit', color: 'success' },
        { btnName: 'Clear', color: 'error' },
        { btnName: 'Back', color: 'primary' }
      ],
      JenisKelamin: ['Laki Laki', 'Perempuan']
    }
  }
}
</script>
<style scoped>
.rounded {
  border-radius: 5px;
}
</style>
