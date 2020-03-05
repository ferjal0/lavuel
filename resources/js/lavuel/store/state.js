// root state object.
// each Vuex instance is just a single state tree.
export default { token: localStorage.getItem('access_token') || null }
