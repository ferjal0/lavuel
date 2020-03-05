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
                <h1>Register</h1>
                <p>
                  Create your account
                </p>
                <b-row v-if="serverErrors">
                  <b-col cols="12">
                    <b-alert
                      show
                      variant="danger"
                    >
                      <div
                        v-for="(value, key) in serverErrors"
                        :key="key"
                      >
                        {{ value }}
                      </div>
                    </b-alert>
                  </b-col>
                </b-row>
                <b-form-group class="mb-3">
                  <b-form-input
                    v-model="name"
                    v-validate="'required|alpha'"
                    name="name"
                    type="text"
                    :class="{ 'is-invalid' : errors.has('name') }"
                    placeholder="Name"
                  />
                  <b-form-invalid-feedback>
                    {{ errors.first('name') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-3">
                  <b-form-input
                    v-model="email"
                    v-validate="'required|email'"
                    name="email"
                    type="email"
                    :class="{ 'is-invalid' : errors.has('email') }"
                    placeholder="E-mail"
                  />
                  <b-form-invalid-feedback>
                    {{ errors.first('email') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-3">
                  <b-form-input
                    v-model="password"
                    v-validate="'required|min:6'"
                    name="password"
                    type="password"
                    :class="{ 'is-invalid' : errors.has('password') }"
                    placeholder="Password"
                  />
                  <b-form-invalid-feedback>
                    {{ errors.first('password') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-row>
                  <b-col cols="12">
                    <b-button
                      type="submit"
                      :block="true"
                      variant="primary"
                      class="px-4"
                    >
                      Register
                    </b-button>
                  </b-col>
                </b-row>
              </form>
            </b-card-body>
            <b-button
              variant="link"
              class="px-0"
              @click="goToLogin"
            >
              Login with my account
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name          : '',
      email         : '',
      password      : '',
      serverErrors  : '',
      successMessage: '',
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result)
          this.register()
      })
    },
    register () {
      this.$store.dispatch('register', {
        name    : this.name,
        email   : this.email,
        password: this.password,
      })
        .then((response) => {
          this.successMessage = 'Registered successfully'
          this.$router.push({
            name  : 'Login',
            params: { dataSuccessMessage: this.successMessage },
          })
        })
        .catch((err) => {
          this.serverErrors = err.response.data.errors
        })
    },
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>
