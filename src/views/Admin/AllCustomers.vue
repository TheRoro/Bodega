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
                        <div class="col-2">
                            <h3 class="subtitle">Nombre</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Usuario/ Número</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Dirección</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Imagen</h3>
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
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(customer, index) in customerInfo" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.customerId}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{customer.name}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{customer.username}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{customer.address}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <a><img  class="order-img" src="../../../public/assets/user.png" :alt="customer.name" border="0" /></a>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.date}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{customer.rate.toFixed(2) + ' %'}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <div v-if="customer.rate_type == 1">
                                            <h3 class="subtitle">Simple</h3>
                                        </div>
                                        <div v-if="customer.rate_type == 2">
                                            <h3 class="subtitle">Compuesta</h3>
                                        </div>
                                        <div v-if="customer.rate_type == 3">
                                            <h3 class="subtitle">Efectiva</h3>
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <router-link :to="`/editCustomer/${customer.customerId}`">
                                            <a class="fas fa-pencil-alt fa-2x edit-icon"></a>
                                        </router-link>
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
  import { baseUrl } from '../../shared/baseUrl';
  export default {
    name: 'Orders',
    mounted() {
        //get all users
        this.axios
        .get(baseUrl + 'customerInfo')
        .then(responseUser => {
            this.customerInfo = responseUser.data;
            this.formatDate();
        });
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        customerInfo: [],
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
        },
        formatDate() {
            for (let i = 0; i < this.customerInfo.length; i++) {
                //2000-12-11 19:00:00
                let date = this.customerInfo[i].date;
                let splitDate = date.split("-")
                let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.customerInfo[i].date = formatDate;
            }
        }
    }
  }
</script>