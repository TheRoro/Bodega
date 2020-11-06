<template>
  <div class="HomeNav">
    <b-navbar class="my-navbar" toggleable="sm" type="dark" variant="">
    <b-navbar-brand to="/">
        <img src="../../public/assets/logo.jpeg" class="d-inline-block align-top nav-logo" alt="Wapo logo" >
    </b-navbar-brand>
    <b-navbar-brand to="/">FinanciApp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item class="text-primary" to="/">Home</b-nav-item>
        <b-nav-item to="/about">Contáctanos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item to="/payments">
            <b-button size="lg" variant="primary text-success" class="nav-btn">Pagos</b-button>
        </b-nav-item>
        <b-nav-item to="/orders">
            <b-button size="lg" variant="primary text-success" class="nav-btn">Mi carrito</b-button>
        </b-nav-item>
        <b-nav-item to="/products">
            <b-button size="lg" variant="primary text-success" class="nav-btn">Comprar</b-button>
        </b-nav-item>
        <b-navbar-brand to="/profile">
            <img src="../../public/assets/user.png" class="d-inline-block align-top nav-logo" alt="Wapo logo" >        
        </b-navbar-brand>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>