<template>
  <v-container>
    <v-responsive min-width="300" flat dense class="float-md-right">
      <v-text-field full-width class="mx-4" label="Cari Barang" solo></v-text-field>
    </v-responsive>
    <v-responsive>
      <v-simple-table>
        <!-- <template> -->
        <thead class="orange darken-3">
          <tr>
            <th class="colorFont">No</th>
            <th class="colorFont">Nama</th>
            <th class="colorFont">Jenis</th>
            <th class="colorFont">Suplier</th>
            <th class="colorFont">Harga Beli</th>
            <th class="colorFont">Harga Jual</th>
            <th class="colorFont">Stock</th>
            <th class="colorFont" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in barang" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nama_barang }}</td>
            <td class="text-center">{{ item.id_jenis_barang }}</td>
            <td>{{ item.id_supplier }}</td>
            <td class="text-right">{{ item.harga_beli }}</td>
            <td class="text-right">{{ item.harga_jual }}</td>
            <td class="text-right">{{ item.stock }}</td>
            <td class="action">
              <v-btn class="warning" :to="route.inputStock">Edit</v-btn>
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
import axios from 'axios'
export default {
  data: () => ({
    route: { inputStock: '/input-stock' },
    page: 10,
    length: 15,
    totalVisible: 7,
    barang: []
  }),
  mounted() {
    axios
      .get('http://localhost:8003/get-barang')
      .then(response => {
        this.barang = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
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
