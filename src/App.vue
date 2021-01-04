<template>
  <div id="app">
    <NavCustomer v-if="!this.$store.getters.loggedStatus"/>
    <NavCustomer v-if="this.$store.getters.loggedStatus && !this.$store.getters.isAdmin"/>
    <NavAdmin v-if="this.$store.getters.loggedStatus && this.$store.getters.isAdmin"/>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
</style>

<script>
import NavCustomer from './components/NavCustomer/NavCustomer.vue';
import NavAdmin from './components/NavAdmin/NavAdmin.vue';

export default {
  name: 'App',
  components: {
    NavCustomer,
    NavAdmin
  }
}
</script>