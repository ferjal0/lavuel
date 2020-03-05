import axios from 'axios'

// actions are functions that cause side effects and can involve
// asynchronous operations.

export default {
  login (context, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/api/login', {
        email   : credentials.email,
        password: credentials.password,
      })
        .then((response) => {
          const token = response.data.token
          localStorage.setItem('access_token', token)
          context.commit('login', token)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  logout (context) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.token}`
    return new Promise((resolve, reject) => {
      axios.get('/api/logout')
        .then((response) => {
          localStorage.removeItem('access_token')
          context.commit('logout')
          resolve(response)
        })
        .catch((err) => {
          localStorage.removeItem('access_token')
          context.commit('logout')
          reject(err)
        })
    })
  },
  register (context, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/api/register', {
        name    : credentials.name,
        email   : credentials.email,
        password: credentials.password,
      })
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
