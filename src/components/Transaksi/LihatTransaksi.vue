<template>
  <v-container>
    <v-responsive min-width="300" flat dense class="float-md-right">
      <v-text-field full-width class="mx-4" label="Masukkan Id Transaksi" solo></v-text-field>
    </v-responsive>
    <v-responsive>
      <v-simple-table>
        <!-- <template> -->
        <thead class="orange darken-3">
          <tr>
            <th class="colorFont">No</th>
            <th class="colorFont">Id Transaksi</th>
            <th class="colorFont">Kasir</th>
            <th class="colorFont">Item</th>
            <th class="colorFont">Total</th>
            <th class="colorFont">Bayar</th>
            <th class="colorFont">Kembalian</th>
            <th class="colorFont" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ItemTransaksi" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.idTransaksi }}</td>
            <td>{{ item.kasir }}</td>
            <td>{{ item.item }}</td>
            <td class="text-right">{{ item.total }}</td>
            <td class="text-right">{{ item.bayar }}</td>
            <td class="text-right">{{ item.kembalian }}</td>
            <td class="action">
              <v-btn class="warning" :to="route.detailTransaksi">Edit</v-btn>
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
    route: { detailTransaksi: '/detail-transaksi' },
    page: 10,
    length: 15,
    totalVisible: 7,
    ItemTransaksi: [
      {
        idTransaksi: '23e',
        kasir: 'Obi Kastanya',
        item: 'Oreo (3), Indomie Special (4)',
        total: 12000,
        bayar: 15000,
        kembalian: 5000
      },
      {
        idTransaksi: '23r',
        kasir: 'Obi Kastanya',
        item: 'Pepsi 1 L (1), UC 1000C (1), Nivea Men (1)',
        total: 35000,
        bayar: 50000,
        kembalian: 15000
      },
      {
        idTransaksi: '23t',
        kasir: 'Obi Kastanya',
        item: 'Lampu LED (1)',
        total: 17000,
        bayar: 20000,
        kembalian: 3000
      },
      {
        idTransaksi: '23k',
        kasir: 'Obi Kastanya',
        item: 'Cat Tembok Nippon Paint (1)',
        total: 65000,
        bayar: 100000,
        kembalian: 35000
      },
      {
        idTransaksi: '23l',
        kasir: 'Obi Kastanya',
        item: 'Kabel 3 M (1)',
        total: 21000,
        bayar: 25000,
        kembalian: 4000
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
