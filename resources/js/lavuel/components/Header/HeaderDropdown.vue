<template>
  <b-nav-item-dropdown
    right
    no-caret
  >
    <template slot="button-content">
      <img
        src="~static/img/avatars/8.jpg"
        class="img-avatar"
        alt="admin@lavuel.com"
      >
    </template>
    <b-dropdown-header
      tag="div"
      class="text-center"
    >
      <strong>Account</strong>
    </b-dropdown-header>
    <b-dropdown-item
      @click="logout"
    >
      Logout
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
export default {
  name: 'HeaderDropdown',
  data: () => {
    return {}
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then((response) => {
          this.$router.push('/login')
        })
    },
  },
}

</script>
