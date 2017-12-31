<template>
    <v-app light>
      <dj-header></dj-header>
      <v-parallax :src="img1" height="280">
            <v-layout column align-center justify-center>
              <em>раздел "Галереи"</em>
              <h1 class="headline white--text mb-3 text-xs-center">Название галереи</h1>
              <span>дата публикации: 20.01.2017 г.</span>
            </v-layout>
      </v-parallax>
      <v-container>
        <v-layout>
          <v-breadcrumbs divider="/">
            <v-breadcrumbs-item
              v-for="item in items"
              :key="item.text"
              :disabled="item.disabled"
              :to="item.path"
              :append="true"
              active-class=""
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-layout>
        <v-layout wrap class="gallery__content">
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <v-flex
            xs4
            class="gallery__img"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
          </v-flex>
        </v-layout>
      </v-container>
      <dj-footer></dj-footer>
    </v-app>
</template>

<script>
  import VueGallery from 'vue-gallery'
  import Header from '@/components/blocks/header/Header'
  import Footer from '@/components/blocks/footer/Footer'

  import img1 from '@/components/pages/project/img/vbanner.jpg'

  export default {
    name: 'dj-project',
    data () {
      return {
        img1: img1,
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffjjff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/00dd00/ffffff'
        ],
        index: null,
        items: [
          {
            text: 'Главная',
            disabled: false,
            path: '/'
          },
          {
            text: 'Галереи',
            disabled: false,
            path: '/gallery'
          },
          {
            text: 'Link 2',
            disabled: true
          }
        ]
      }
    },
    components: {
      'dj-header': Header,
      'dj-footer': Footer,
      'gallery': VueGallery
    }
  }
</script>

<style scoped lang="stylus">
  .gallery {
    &__img {
      height: 200px
      box-sizing border-box
      background-position 50% 50%
      border 5px solid #fff
    }
    &__content {
      padding: 15px 0 40px
    }
  }
</style>
