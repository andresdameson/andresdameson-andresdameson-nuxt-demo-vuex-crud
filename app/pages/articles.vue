<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-demo-vuex-crud
      </h1>
      <h2 class="subtitle">
        Articles
      </h2>

      <article
        v-for="article in articleList"
        v-bind:key="article.id"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters('articles', {
      articleList: 'list'
    }),
    ...mapState([
      'route', // vuex-router-sync
    ]),
  },

  watch: {
    $route: 'fetchData',
  },

  methods: {
    ...mapActions('articles', {
      fetchArticles: 'fetchList'
    }),

    fetchData() {
      return this.fetchArticles();
    }
  },

  async fetch ({ store }) {
    await store.dispatch('articles/fetchList')
  }
};
</script>

<style>
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
