<template>
  <section class="container">
    <div>
      <h1 class="title">
        <app-logo/> NUXT demo for vuex-CRUD
      </h1>
      <h2 class="subtitle">
        Article
      </h2>

      <div class="article-container">
        <article v-if="currentArticle">
          <h3>{{ currentArticle.title }}</h3>
          <p>{{ currentArticle.content }}</p>
          <br>
          <nuxt-link class="button--green" v-bind:to="{name: 'articles-edit-id', params:{id: currentArticle.id}}">Edit</nuxt-link>
        </article>
      </div>
    </div>

    <nuxt-link class="button--green back" v-bind:to="{name: 'articles'}">Back to list</nuxt-link>
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
      articleById: 'byId'
    }),
    ...mapState([
      'route', // vuex-router-sync
    ]),
    currentArticle () {
      return this.articleById(this.$route.params.id)
    }
  },

  watch: {
    $route: 'fetchData',
  },

  methods: {
    ...mapActions('articles', {
      fetchArticle: 'fetchSingle'
    }),
    fetchData() {
      return this.fetchArticle({
        id: this.route.params.id
      });
    }
  },

  async fetch ({ store, params }) {
    await store.dispatch('articles/fetchSingle',{
      id: params.id
    })
  }
};
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

article {
  width: 80vw;
  max-width: 600px;
  margin: 0 auto;
}
  article h1 {
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
