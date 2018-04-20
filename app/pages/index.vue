<template>
  <section class="container">
    <div>
      <h1 class="title">
        <app-logo/> NUXT demo for vuex-CRUD
      </h1>

      <div class="links">
        <nuxt-link class="button--green" v-bind:to="{name: 'articles'}"> List articles </nuxt-link>
        <a class="button--grey"> Add article </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  margin-bottom: 45px;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
  cursor: pointer;
}
</style>
