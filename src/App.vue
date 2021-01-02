<template>
  <div id="app">
    <NavAdmin v-if="!this.$store.getters.loggedStatus"/>
    <HomeNavLogged v-if="this.$store.getters.loggedStatus && !this.$store.getters.isAdmin"/>
    <NavAdmin v-if="this.$store.getters.loggedStatus && this.$store.getters.isAdmin"/>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
</style>

<script>
import HomeNav from './views/HomeNav'
import HomeNavLogged from './views/HomeNavLogged'
import NavAdmin from './components/NavAdmin/NavAdmin.vue';

export default {
  name: 'App',
  components: {
    HomeNav,
    HomeNavLogged,
    NavAdmin
  }
}
</script>