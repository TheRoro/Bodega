<template>
  <div id="app">
    <div v-if="!this.$store.getters.loggedStatus">
      <HomeNav/>
    </div>
    <div v-if="this.$store.getters.loggedStatus">
      <HomeNavLogged/>
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

export default {
  name: 'App',
  components: {
    HomeNav,
    HomeNavLogged
  }
}
</script>