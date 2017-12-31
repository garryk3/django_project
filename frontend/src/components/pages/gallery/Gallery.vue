<template>
    <v-app light>
      <dj-header></dj-header>
      <v-parallax :src="img1" height="280">
            <v-layout column align-center justify-center>
              <em>раздел "Галерея"</em>
              <h1 class="headline white--text mb-3 text-xs-center">Название галереи</h1>
              <span>дата публикации: 20.01.2017 г.</span>
            </v-layout>
      </v-parallax>
      <v-container>
        <v-layout>
          <v-flex xs12 class="project__content">

          </v-flex>
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
    name: 'dj-project',
    data () {
      return {
        img1: img1
      }
    },
    components: {
      'dj-header': Header,
      'dj-footer': Footer
    }
  }
</script>

<style scoped lang="stylus">
  .project {
    &__content {
      p {
        font-size 17px
      }

      img {
        max-width 100%
        display: block
        margin: 20px auto
      }
    }
  }
</style>
