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
            <td>{{ item.namaBarang }}</td>
            <td class="text-center">{{ item.jenisBarang }}</td>
            <td>{{ item.suplier }}</td>
            <td class="text-right">{{ item.hargaBeli }}</td>
            <td class="text-right">{{ item.hargaJual }}</td>
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
export default {
  data: () => ({
    route: { inputStock: '/input-stock' },
    page: 10,
    length: 15,
    totalVisible: 7,
    barang: [
      {
        namaBarang: 'Pulpen Standard',
        jenisBarang: 'ATK',
        suplier: 'Sinar Mas Cbg. Salatiga',
        hargaBeli: 1000,
        hargaJual: 1500,
        stock: 200
      },
      {
        namaBarang: 'Pencil Faber Castle',
        jenisBarang: 'ATK',
        suplier: 'Sinar Mas Cbg. Salatiga',
        hargaBeli: 1000,
        hargaJual: 1500,
        stock: 200
      },
      {
        namaBarang: 'Lampu LED',
        jenisBarang: 'Alat Listrik',
        suplier: 'Phillip',
        hargaBeli: 20000,
        hargaJual: 25000,
        stock: 50
      },
      {
        namaBarang: 'Cat Tembok',
        jenisBarang: 'Cat Bangunan',
        suplier: 'Nippon Paint',
        hargaBeli: 46000,
        hargaJual: 55000,
        stock: 80
      },
      {
        namaBarang: 'Kertas',
        jenisBarang: 'ATK',
        suplier: 'Sinar Mas Cbg. Salatiga',
        hargaBeli: 100,
        hargaJual: 200,
        stock: 3000
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
