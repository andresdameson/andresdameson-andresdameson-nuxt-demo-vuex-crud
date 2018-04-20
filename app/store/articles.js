import createCRUDModule from 'vuex-crud'

const crudModule = createCRUDModule({
  resource: 'articles',
  urlRoot: 'http://localhost:3031/articles'
})

const state = () => crudModule.state

const { actions, mutations, getters } = crudModule

export {
  state,
  actions,
  mutations,
  getters
}
