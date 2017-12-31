<template>
    <v-app light>
      <dj-header></dj-header>
      <v-parallax :src="img1" height="280">
            <v-layout column align-center justify-center>
              <em>раздел "Мои проекты"</em>
              <h1 class="headline white--text mb-3 text-xs-center">Название проекта</h1>
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
              active-class=""
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-layout>
        <v-layout>
          <v-flex xs12 class="project__content">
            <p>
              Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.
            </p>
            <img :src="img1" alt="">
          </v-flex>
        </v-layout>
      </v-container>
      <dj-content-preview></dj-content-preview>
      <dj-footer></dj-footer>
    </v-app>
</template>

<script>
  import Header from '@/components/blocks/header/Header'
  import Footer from '@/components/blocks/footer/Footer'
  import ContentPreview from '@/components/blocks/content-preview/ContentPreview'

  import img1 from '@/components/pages/project/img/vbanner.jpg'

  export default {
    name: 'dj-project',
    data () {
      return {
        img1: img1,
        items: [
          {
            text: 'Главная',
            disabled: false,
            path: '/'
          },
          {
            text: 'Проекты',
            disabled: false,
            path: '/projects'
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
      'dj-content-preview': ContentPreview
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
