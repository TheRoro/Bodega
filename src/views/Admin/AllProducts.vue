<template>
    <div class="products mt-4">
        <div class="product-box mt-3">
            <div class="col-12 mt-4">
                <div class="col-12 product-box">
                    <div class="row orders-title">
                        <div class="col-10 mt-4">
                            <h3 class="title mr-3">Todos mis Productos</h3>
                        </div>
                        <div class="col-2 mt-4">
                            <b-button class="btn text-success" type="submit" variant="primary" v-on:click="registerProduct()">Registrar Producto</b-button>
                        </div>
                    </div>
                    <div class="row orders-title mt-5">
                        <div class="col-1">
                            <h3 class="subtitle">Codigo Producto</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Nombre</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Descripcion</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Imagen</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Modificar</h3>
                        </div>                
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(product, index) in products" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-1">
                                        <h3 class="subtitle">{{product.id}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{product.name}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{product.description}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{product.price.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <div v-if="product.state == 1">
                                            <h3 class="subtitle">Disponible</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Disponible</h3>
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <a><img  class="order-img" src="../../../public/assets/product.png" :alt="product.name" border="0" /></a>
                                    </div>
                                    <div class="col-1">
                                        <router-link :to="`/editProduct/${product.id}`">
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
    mounted () {
      this.axios
        .get(baseUrl + 'articles')
        .then(response => {
            this.info = response
            this.products = response.data.content;
            this.removeDelivery()
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        products: [],
      }
    },
    methods: {
        registerProduct() {
            this.$router.push('/registerProduct');
        },
        editProduct() {
            this.$router.push('/editProduct');
        },
        removeProduct() {
            //Change state of product to unavailable
            alert("Removing product...")
        },
        removeDelivery() {
            this.products.shift();
        }
    }
  }
</script>