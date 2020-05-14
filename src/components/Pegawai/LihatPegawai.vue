<template>
  <v-container>
    <v-responsive min-width="300" flat dense class="float-md-right">
      <v-text-field full-width class="mx-4" label="Cari pegawai" solo></v-text-field>
    </v-responsive>
    <v-responsive>
      <v-simple-table>
        <thead class="orange darken-3">
          <tr>
            <th class="colorFont">No</th>
            <th class="colorFont">Nama</th>
            <th class="colorFont">Tanggal Lahir</th>
            <th class="colorFont">Jenis Kelamin</th>
            <th class="colorFont">Hire Date</th>
            <th class="colorFont">Alamat</th>
            <th class="colorFont">Gaji</th>
            <th class="colorFont">No. Telp</th>
            <th class="colorFont" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in pegawai" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.namaPegawai }}</td>
            <td>{{ item.tglLahir }}</td>
            <td>{{ item.jenisKelamin }}</td>
            <td>{{ item.hireDate }}</td>
            <td>{{ item.alamat }}</td>
            <td>{{ item.gaji }}</td>
            <td class="text-right">{{ item.noTelp }}</td>
            <td class="action">
              <v-btn class="warning" :to="route.inputPegawai">Edit</v-btn>
            </td>
            <td class="action">
              <v-btn class="error">Delete</v-btn>
            </td>
            <td class="action">
              <v-btn class="info">Detail</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-pagination
        dense
        class="mt-5"
        next-icon="mdi-chevron-right"
        prev-icon="mdi-chevron-left"
        :page="page"
        :length="length"
        :total-visible="totalVisible"
      ></v-pagination>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    route: { inputPegawai: '/input-pegawai' },
    page: 10,
    length: 15,
    totalVisible: 7,
    pegawai: [
      {
        namaPegawai: 'Obi Kastanya',
        tglLahir: '13/05/1998',
        jenisKelamin: 'Laki Laki',
        hireDate: '20/04/2007',
        alamat: 'Salatiga',
        gaji: '3000000',
        noTelp: '08782142'
      },
      {
        namaPegawai: 'Aaron Sanger',
        tglLahir: '01/02/1999',
        jenisKelamin: 'Laki Laki',
        hireDate: '20/04/2006',
        alamat: 'Salatiga',
        gaji: '3500000',
        noTelp: '08782142'
      },
      {
        namaPegawai: 'Kevin Hartono',
        tglLahir: '12/06/1998',
        jenisKelamin: 'Laki Laki',
        hireDate: '20/02/2007',
        alamat: 'Solo',
        gaji: '3000000',
        noTelp: '08782144'
      },
      {
        namaPegawai: 'Abed Nego Angga Kusuma',
        tglLahir: '25/11/1998',
        jenisKelamin: 'Laki Laki',
        hireDate: '15/04/2008',
        alamat: 'Magelang',
        gaji: '3500000',
        noTelp: '08731521'
      }
    ]
  })
}
</script>
<style scoped>
.colorFont {
  color: white !important;
  font-size: 1em;
  font-weight: 350;
  text-align: center !important;
}
.action {
  padding: 0px 2px 0px 2px;
}
</style>
