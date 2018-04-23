<template>
  <section class="container">
    <div>
      <h1 class="title">
        <app-logo/> NUXT demo for vuex-CRUD
      </h1>
      <h2 class="subtitle">
        Articles
      </h2>

      <div class="article-container">
        <article
          v-for="article in articleList"
          v-bind:key="article.id"
        >
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <div class="article-links">
            <nuxt-link v-bind:to="{name: 'articles-id', params:{id: article.id}}" class="button--green"> View </nuxt-link>
            <a @click="destroyArticle({id: article.id})" class="button--grey"> Delete </a>
          </div>
        </article>
      </div>
    </div>

    <nuxt-link class="button--green back" v-bind:to="{name: 'index'}">Back to home </nuxt-link>
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

  async fetch ({ store }) {
    await store.dispatch('articles/fetchList')
  },

  methods: {
    ...mapActions('articles', {
      fetchArticles: 'fetchList',
      destroyArticle: 'destroy'
    }),
    fetchData() {
      return this.fetchArticles();
    }
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.article-container {
  text-align: center;
}
  article {
    display: inline-block;
    width: 250px;
    padding: 10px;
    text-align: left;
    vertical-align: top;
  }
    article h3 {
      margin-bottom: 10px;
    }
    .article-links {
      margin-top: 15px;
    }
      .article-links a {
        cursor: pointer;
      }

.back {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
