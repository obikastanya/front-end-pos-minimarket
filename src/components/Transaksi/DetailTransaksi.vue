<template>
  <v-container fluid class="mx-10">
    <v-row>
      <v-col md="6">
        <v-row>
          <v-col class="orange darken-3">
            <h1 class="white--text font-weight-regular">Detail Transaksi</h1>
          </v-col>
        </v-row>
        <v-row class="rightMargin">
          <v-col>
            <v-select :items="item" label="Item"></v-select>
            <v-text-field label="Harga"></v-text-field>
            <v-text-field label="Jumlah"></v-text-field>
            <v-text-field label="Diskon %"></v-text-field>
            <v-text-field label="Bayar"></v-text-field>
            <v-text-field label="Kembalian"></v-text-field>
            <span class="d-flex justify-end">
              <v-btn class="warning mx-10">Edit</v-btn>
              <v-btn class="error">Cancel</v-btn>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="5" class="mx-10">
        <v-col class="orange darken-3">
          <h1 class="white--text font-weight-regular">Cart</h1>
        </v-col>
        <v-col>
          <v-simple-table>
            <thead>
              <tr>
                <th>No</th>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ cart.namaitem }}</td>
                <td>{{ cart.jumlahItem }}</td>
                <td>{{ cart.hargaItem }}</td>
                <td>{{ cart.jumlahItem * cart.hargaItem }}</td>
                <td>
                  <v-icon color="error">mdi-close-box</v-icon>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-col>
          <h2 class="d-inline">Total: {{ total }}</h2>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.rightMargin {
  margin-right: 5%;
  margin-left: 2%;
}
</style>
<script>
export default {
  data() {
    return {
      item: [],
      total: 0,
      carts: [
        {
          namaitem: 'Pulpen',
          hargaItem: 1500,
          jumlahItem: 3
        },
        {
          namaitem: 'Buku gambar',
          hargaItem: 7000,
          jumlahItem: 1
        },
        {
          namaitem: 'Roti Malkist',
          hargaItem: 11000,
          jumlahItem: 2
        },
        {
          namaitem: 'UC 1000 Orange',
          hargaItem: 6500,
          jumlahItem: 1
        }
      ]
    }
  }
}
</script>
