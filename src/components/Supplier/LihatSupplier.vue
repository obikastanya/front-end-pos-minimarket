<template>
  <v-container>
    <v-responsive min-width="300" flat dense class="float-md-right">
      <v-text-field full-width class="mx-4" label="Cari Supplier" solo></v-text-field>
    </v-responsive>
    <v-responsive>
      <v-simple-table>
        <!-- <template> -->
        <thead class="orange darken-3">
          <tr>
            <th class="colorFont">No</th>
            <th class="colorFont">Nama</th>
            <th class="colorFont">Alamat</th>
            <th class="colorFont">No. Telp</th>
            <th class="colorFont" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in supplier" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.namaSupplier }}</td>
            <td>{{ item.alamat }}</td>
            <td class="text-right">{{ item.noTelp }}</td>
            <td class="action">
              <v-btn class="warning" :to="route.inputSupplier">Edit</v-btn>
            </td>
            <td class="action">
              <v-btn class="error">Delete</v-btn>
            </td>
            <td class="action">
              <v-btn class="info">Detail</v-btn>
            </td>
          </tr>
        </tbody>
        <!-- </template> -->
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
    route: { inputSupplier: '/input-supplier' },
    page: 10,
    length: 15,
    totalVisible: 7,
    supplier: [
      {
        namaSupplier: 'Obi Kastanya',
        alamat: 'Tingkir, Salatiga',
        noTelp: '089324224'
      },
      {
        namaSupplier: 'Aaron Sanger',
        alamat: 'Solo',
        noTelp: '08782142'
      },
      {
        namaSupplier: 'PT Tirta Jaya',
        alamat: 'Klaseman V, Salatiga',
        noTelp: '0893212'
      },
      {
        namaSupplier: 'IndoFood',
        alamat: 'Semarang',
        noTelp: '089324326'
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
