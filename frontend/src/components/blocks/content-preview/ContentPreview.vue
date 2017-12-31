<template>
  <v-container>
    <h3 class="display-1 content-preview__main-header">Последние публикации</h3>
    <v-layout v-if="previewContent" class="content-preview__body">
      <v-flex
        xs4
        class="content-preview__content"
        v-for="(item, index) in articles"
        :key="index"
      >
            <v-card>
              <v-card-media
                class="white--text content-preview__img-wrapper"
                height="150px"
                :src="item.img"
            >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="content-preview__header">{{ item.header }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">{{ item.time }}</span><br>
                  <span>{{ item.text }}</span>
          </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange" :to="item.url">Перейти к статье...</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'content-preview',
    data () {
      return {
        previewContent: [
          {
            img: 'https://dummyimage.com/800/fffiif/000000',
            header: 'Header for preview',
            time: '22 jan 2018 yy',
            url: '/gallery',
            text: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.'
          },
          {
            img: 'https://dummyimage.com/800/llffff/000000',
            header: 'Header for preview',
            time: '22 jan 2018 yy',
            url: '/gallery',
            text: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.'
          },
          {
            img: 'https://dummyimage.com/800/fkkfff/000000',
            header: 'Header for preview',
            time: '22 jan 2018 yy',
            url: '/gallery',
            text: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.'
          }
        ]
      }
    },
    computed: {
      articles () {
        if (this.previewContent && Array.isArray(this.previewContent)) {
          return this.previewContent.splice(0, 3)
        } else {
          return []
        }
      }
    },
    props: ['content']
  }
</script>

<style scoped lang="stylus">
  .content-preview {
    &__body {
      margin-bottom: 50px
    }

    &__content {
      padding: 5px
    }

    &__img-wrapper {
      &::after {
        content: ''
        position absolute
        top: 0
        bottom: 0
        right: 0
        left: 0
        background rgba(0,0,0,0.4)
      }
    }

    &__header {
      position relative
      z-index 1
      font-size 20px
      line-height: 24px
    }

    &__main-header {
      text-align: center
      margin-bottom: 20px
    }
  }
</style>
