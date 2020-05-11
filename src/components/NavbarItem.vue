<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ menus.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menus.title }}</v-list-item-title>
      </v-list-item>
    </template>
    <v-list-item
      sub-group
      dense
      class="ml-10"
      v-for="(crudmenu, index) in menus.crudMenu"
      v-bind:key="index"
    >{{ crudmenu }}</v-list-item>
  </v-list-group>
</template>
<script>
export default {
  name: 'navbarItem',
  props: {
    menus: {}
  }
}
</script>
