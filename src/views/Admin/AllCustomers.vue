<template>
    <div class="products mt-4">
        <div class="product-box mt-3">
            <div class="col-12 mt-4">
                <div class="col-12 product-box">
                    <div class="row orders-title">
                        <div class="col-10 mt-4">
                            <h3 class="title mr-3">Todos mis Clientes</h3>
                        </div>
                        <div class="col-2 mt-4">
                            <b-button class="btn text-success" type="submit" variant="primary" v-on:click="registerCustomer()">Registrar Cliente</b-button>
                        </div>
                    </div>
                    <div class="row orders-title mt-5">
                        <div class="col-1">
                            <h3 class="subtitle">Codigo Cliente</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Nombre</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Usuario</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Contraseña</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Dirección</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Imagen</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Cuenta</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Fecha Registro</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Tasa</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Tipo</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Modificar</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Dar de baja</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(customer, index) in customers" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.id}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.name}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.username}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.password}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.address}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <a><img  class="order-img" src="../../../public/assets/user.png" :alt="customer.name" border="0" /></a>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.account}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.dateRegistered}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.rate}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.type}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <router-link to="/editCustomer">
                                            <a class="fas fa-pencil-alt fa-2x edit-icon"></a>
                                        </router-link>
                                    </div>                
                                    <div class="col-1">
                                        <button class="btn-icon" v-on:click="removeCustomer"><i class="fas fa-trash fa-2x edit-icon"></i></button>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Orders',
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        customers: [
            { 
                id: 1,
                "name": "John Doe",
                "username": "John123",
                "password": "123",
                "address": "Calle Kosaraju 420",
                "image": "https://i.ibb.co/gmn70wj/edam.jpg",
                "account": "123-45678",
                "dateRegistered": "02/12/2020",
                "rate": "2.40%",
                "type": "Compuesta",
            },
            { 
                id: 2,
                "name": "Johna Doea",
                "username": "Johna123",
                "password": "123123",
                "address": "Calle Kosaraju 422",
                "image": "https://i.ibb.co/gmn70wj/edam.jpg",
                "account": "123-456789",
                "dateRegistered": "22/12/2020",
                "rate": "4.40%",
                "type": "Compuesta",
            },
        ],
      }
    },
    methods: {
        registerCustomer() {
            this.$router.push('/registerCustomer');
        },
        editCustomer() {
            this.$router.push('/editCustomer');
        },
        removeCustomer() {
            //Change state of product to unavailable
            alert("Removing customer...")
        }
    }
  }
</script>