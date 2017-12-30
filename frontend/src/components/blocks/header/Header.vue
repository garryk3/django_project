<template>
  <v-container>
    <v-layout>
    <v-flex xs12>
      <v-toolbar>
    <v-toolbar-title>Блог воспитателя</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Проекты</v-btn>
      <v-btn flat>Творчество</v-btn>
      <v-btn flat>Галерея</v-btn>
      <v-btn href="#contacts" flat>Контакты</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'dj-header'
    }
</script>

<style scoped>

</style>
