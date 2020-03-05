<template>
  <div class="app flex-row align-items-center bg-gradient-blue">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card
            no-body
            class="p-4 animated fadeIn"
          >
            <b-card-body class="text-center">
              <form
                @submit.prevent="validateBeforeSubmit"
              >
                <h1>Login</h1>
                <p>
                  Sign In to your account
                </p>
                <b-alert
                  v-if="dataSuccessMessage"
                  show
                  variant="success"
                >
                  {{ dataSuccessMessage }}
                </b-alert>
                <b-form-group class="mb-3">
                  <b-form-input
                    v-model="email"
                    v-validate="'required|email'"
                    name="email"
                    type="email"
                    :class="{ 'is-invalid' : errors.has('email') }"
                    class="form-control"
                    placeholder="E-mail"
                  />
                  <b-form-invalid-feedback>
                    {{ errors.first('email') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-4">
                  <b-form-input
                    v-model="password"
                    v-validate="'required|min:6'"
                    name="password"
                    type="password"
                    :class="{ 'is-invalid' : errors.has('password') }"
                    class="form-control"
                    placeholder="Password"
                  />
                  <b-form-invalid-feedback>
                    {{ errors.first('password') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-row v-if="serverError">
                  <b-col cols="12">
                    <b-alert
                      show
                      variant="danger"
                    >
                      {{ serverError }}
                    </b-alert>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <b-button
                      type="submit"
                      :block="true"
                      variant="primary"
                      class="px-4"
                    >
                      Login
                    </b-button>
                  </b-col>
                </b-row>
              </form>
            </b-card-body>
            <b-button
              variant="link"
              class="px-0"
              @click="goToRegister"
            >
              Register a new account
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Login',
  props: { dataSuccessMessage: { type: String } },
  data () {
    return {
      email      : '',
      password   : '',
      serverError: '',
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result)
          this.login()
      })
    },
    login () {
      this.$store.dispatch('login', {
        email   : this.email,
        password: this.password,
      })
        .then((response) => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          this.serverError = err.response.data
        })
    },
    goToRegister () {
      this.$router.push({ name: 'Register' })
    },
  },
}
</script>
