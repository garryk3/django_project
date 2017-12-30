<template>
          <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3 footer__content">
                <span>Made by <v-icon class="footer__icon">contacts</v-icon> <a class="footer__link" href="/">garryk3</a></span> <span>© {{ new Date().getFullYear() }}</span>
              </div>
            </v-flex>
          </v-layout>
      </v-footer>
</template>

<script>
    export default {
      name: 'dj-footer'
    }
</script>

<style scoped lang="stylus">
  .footer {
    &__link {
      color: #fff
     }

    &__content {
      display: flex;
      justify-content space-between;

      .footer__icon {
        color: #fff
      }
    }
  }
</style>
