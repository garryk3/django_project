<template>
    <v-app light>
      <dj-header></dj-header>
      <v-parallax :src="img1" height="150">
            <v-layout column align-center justify-center>
              <h1 class="headline white--text mb-3 text-xs-center">Мои проекты</h1>
            </v-layout>
      </v-parallax>
      <v-container>
        <v-layout wrap>
          <v-flex xs6 class="project-container__content">
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                :src="img1"
            >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">10 ноября 2017 г.</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange" to="projects/1">Read more...</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs6 class="project-container__content">
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                :src="img1"
            >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">10 ноября 2017 г.</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange" to="projects/1">Read more...</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs6 class="project-container__content">
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                :src="img1"
            >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">10 ноября 2017 г.</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange" to="projects/1">Read more...</v-btn>
              </v-card-actions>
            </v-card>
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
    name: 'dj-project-container',
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
  .project-container {
    &__content {
      padding: 10px
    }
  }
</style>
