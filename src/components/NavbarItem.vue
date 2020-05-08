<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>{{ menus.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ menus.title }}</v-list-item-title>
  </v-list-item>
</template>
<script>
export default {
  name: 'navbarItem',
  props: {
    menus: {}
  }
}
</script>
