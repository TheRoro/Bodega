<template>
  <div id="app">
    <div>
      <b-navbar class="my-navbar" toggleable="sm" type="dark" variant="">
        <b-navbar-brand to="/">
          <img src="../public/assets/logo.jpeg" class="d-inline-block align-top nav-logo" alt="Wapo logo" >
        </b-navbar-brand>
        <b-navbar-brand to="/">FinanciApp</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="text-primary" to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login">
              <b-button variant="primary text-success">Log In</b-button>
            </b-nav-item>
            <b-nav-item to="/signup">
              <b-button variant="primary text-success">Sign Up</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
