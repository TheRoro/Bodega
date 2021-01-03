<template>
  <div class="Nav">
    <b-navbar toggleable="md" class="my-navbar">
      <b-navbar-brand href="#">
        <img src="/src/assets/img/BodegaLetras.png" alt="BODEGA">
      </b-navbar-brand>
      <b-navbar-brand href="#">
      <img src="/public/assets/BodegaLetras.png" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </b-navbar-brand>
      <router-link to="/" class="navbar-brand">BODEGA</router-link>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/allProducts" class="nav-link">Products</router-link>
          <router-link to="/allCustomers" class="nav-link">Customers</router-link>
          <router-link to="/allPayments" class="nav-link">Payments</router-link>
          <router-link to="/allOrders" class="nav-link">Orders</router-link>
          <router-link to="/profile" class="nav-link">My Profile</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/app.scss';
@import './NavAdmin.scss';
</style>