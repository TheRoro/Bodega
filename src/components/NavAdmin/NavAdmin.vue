<template>
  <div class="Nav">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="navbar-horizontal">
        <b-navbar-brand href="#">FinanceeApp</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <span class="nav-link nav-link-inner--text">Discover</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <span class="nav-link nav-link-inner--text">Profile</span>
                    </a>
                </li>
                <b-nav-item-dropdown right>
                <template v-slot:button-content>
                    <span class="nav-link-inner--text">Settings</span>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav-form>

        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <!-- <b-navbar toggleable="lg" type="light">
    <b-navbar-brand to="/">
        <img src="../../../public/assets/logo.jpeg" class="d-inline-block align-top nav-logo" alt="Wapo logo" >
    </b-navbar-brand>
    <b-navbar-brand to="/">FinanciApp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item to="/">
            Home
        </b-nav-item>
        <b-nav-item class="nav-text" to="/about">Contáctanos</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
        <b-nav-item to="/allProducts">
            <b-button size="lg">Productos</b-button>
        </b-nav-item>
        <b-nav-item to="/allCustomers">
            <b-button size="lg">Clientes</b-button>
        </b-nav-item>
        <b-nav-item to="/allPayments">
            <b-button size="lg">Pagos</b-button>
        </b-nav-item>
        <b-nav-item to="/allOrders">
            <b-button size="lg">Pedidos</b-button>
        </b-nav-item>
        <b-navbar-brand to="/profile">
            <img v-if="this.$store.getters.profilePicture == ''" src="../../../public/assets/user.png" class="d-inline-block align-top nav-logo" alt="Wapo logo" >
            <img v-if="this.$store.getters.profilePicture" :src="this.$store.getters.profilePicture"  class="d-inline-block align-top nav-logo"/>
                        
        </b-navbar-brand>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar> -->
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/app.scss';
@import './NavAdmin.scss';
</style>