<template>
  <v-container>
    <v-responsive min-width="400" flat dense class="float-md-right">
      <v-text-field full-width class="mx-4" label="Cari Barang" solo></v-text-field>
    </v-responsive>
    <v-responsive>
      <v-simple-table>
        <!-- <template> -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
        <!-- </template> -->
      </v-simple-table>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        price: '1000'
      },
      {
        name: 'Frozen Yogurt',
        calories: 159,
        price: '1000'
      },
      {
        name: 'Frozen Yogurt',
        calories: 159,
        price: '1000'
      },
      {
        name: 'Frozen Yogurt',
        calories: 159,
        price: '1000'
      },
      {
        name: 'Frozen Yogurt',
        calories: 159,
        price: '1000'
      }
    ]
  })
}
</script>
