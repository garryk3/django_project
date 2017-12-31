<template>
  <v-toolbar>
    <router-link to="/">
      <v-icon>home</v-icon>
    </router-link>
    <v-toolbar-title>Блог воспитателя</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/projects">Проекты</v-btn>
      <v-btn flat>Творчество</v-btn>
      <v-btn flat to="/gallery">Галереи</v-btn>
      <v-btn to="/#contacts" flat>Контакты</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
    export default {
      name: 'dj-header'
    }
</script>

<style scoped>

</style>
