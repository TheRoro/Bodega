<template>
  <div id="app">
    <div v-if="!this.$store.getters.loggedStatus">
      <HomeNav/>
    </div>
    <div v-if="this.$store.getters.loggedStatus && !this.$store.getters.isAdmin">
      <HomeNavLogged/>
    </div>
    <div v-if="this.$store.getters.loggedStatus && this.$store.getters.isAdmin">
      <HomeNavAdmin/>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
</style>

<script>
import HomeNav from './views/HomeNav'
import HomeNavLogged from './views/HomeNavLogged'
import HomeNavAdmin from './views/Admin/HomeNavAdmin'

export default {
  name: 'App',
  components: {
    HomeNav,
    HomeNavLogged,
    HomeNavAdmin
  }
}
</script>