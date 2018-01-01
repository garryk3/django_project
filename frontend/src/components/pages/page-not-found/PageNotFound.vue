<template>
    <v-app light>
      <dj-header></dj-header>
      <v-parallax :src="img1" height="150">
            <v-layout column align-center justify-center>
              <h1 class="display-4">404</h1>
            </v-layout>
      </v-parallax>
      <v-container class="page-not-found">
        <v-layout wrap>
          <h1 class="h2 page-not-found__text">«Поздравляем! Вы сломали нашу страницу. Эта страница не существует либо произошла ужасная ошибка.»</h1>
        </v-layout>
      </v-container>
      <dj-footer></dj-footer>
    </v-app>
</template>

<script>
  import Header from '@/components/blocks/header/Header'
  import Footer from '@/components/blocks/footer/Footer'

  import img1 from '@/components/pages/project/img/vbanner.jpg'

  export default {
    name: 'page-not-found',
    data () {
      return {
        img1
      }
    },
    components: {
      'dj-header': Header,
      'dj-footer': Footer
    }
  }
</script>

<style scoped lang="stylus">
  .page-not-found {
    text-align: center;
    color: #757575;

    &__text {
      margin: 50px auto;
      max-width: 600px;
    }
  }
</style>
