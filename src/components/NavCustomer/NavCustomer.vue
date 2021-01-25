<template>
  <div class="Nav">
    <b-navbar toggleable="md" class="my-navbar">
      <b-navbar-brand to="/">
        <img class="brand-img" src="../../../public/assets/BodegaLetras.png" alt="BODEGA">
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/store" class="nav-link">Store</router-link>
          <router-link to="/cart" class="nav-link">My Cart</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/app.scss';
@import './NavCustomer.scss';
</style>