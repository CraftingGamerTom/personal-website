export const state = () => ({
  crumbs: []
})

export const mutations = {
  set (state, value) {
    state.crumbs = value
  }
}
