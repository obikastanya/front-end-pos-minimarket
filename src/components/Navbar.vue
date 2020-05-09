<template>
  <v-card class="mx-auto overflow-hidden" height="1000" tile ml-3>
    <v-app-bar color="deep-orange darken-2" flat dark hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Obikun Market</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav class="ml-4 pt-9">
        <v-list-item-group active-class="orange--text text--accent-4">
          <navbar-item v-for="(menu, index) in menus" :key="index" :menus="menu" class="mt-2"></navbar-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-sheet>
      <h2>hello world</h2>
    </v-sheet>
  </v-card>
</template>

<script>
import NavbarItem from './NavbarItem.vue'
export default {
  components: {
    NavbarItem
  },
  data: () => ({
    drawer: false,
    menus: [
      {
        title: 'Dashboard',
        icon: 'mdi-home'
      },
      { title: 'Barang', icon: 'mdi-database-edit' },
      { title: 'Transaksi', icon: 'mdi-cart-plus' },
      { title: 'Suplier', icon: 'mdi-car-pickup' },
      { title: 'Pegawai', icon: 'mdi-account-details-outline' }
    ]
  })
}
</script>
