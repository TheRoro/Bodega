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
                        <div class="col-1">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Stock</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Imagen</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Modificar</h3>
                        </div>                
                        <div class="col-1">
                            <h3 class="subtitle">Dar de Baja</h3>
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
                                        <h3 class="subtitle">{{product.desciption}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">S/.{{product.price}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">{{product.stock}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <a href="https://imgbb.com/"><img  class="order-img" :src="product.image" :alt="product.name" border="0" /></a>
                                    </div>
                                    <div class="col-1">
                                        <router-link to="/editProduct">
                                            <a class="fas fa-pencil-alt fa-2x edit-icon"></a>
                                        </router-link>
                                    </div>                
                                    <div class="col-1">
                                        <button class="btn-icon" v-on:click="removeProduct"><i class="fas fa-trash fa-2x edit-icon"></i></button>
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
        products: [
          { 
            id: 1,
            "name": "Queso Edam",
            "desciption": "Bonle de 90 gr",
            "state": "Available",
            "price": "4.50",
            "unity": "UN",
            stock: 20,
            "image": "https://i.ibb.co/gmn70wj/edam.jpg"
          },
          { 
            id: 2,
            "name": "Queso Crema",
            "desciption": "Bonle de 170 gr",
            "state": "Available",
            "price": "8.50",
            "unity": "UN",
            stock: 42,
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          { 
            id: 3,
            "name": "Queso Cheddar",
            "desciption": "Laive de 170 gr",
            "state": "Available",
            "price": "6.30",
            "unity": "UN",
            stock: 68,
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { 
            id: 4,
            "name": "Fanta",
            "desciption": "Botella 2.25 LT",
            "state": "Available",
            "price": "5.20",
            "unity": "UN",
            stock: 21,
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { 
            id: 5,
            "name": "Lays",
            "desciption": "Papas Lays 160 gr",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            stock: 34,
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { 
            id: 6,
            "name": "Coca Cola",
            "desciption": "Coca cola 200 ml",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            stock: 58,
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          },
          { 
            id: 7,
            "name": "Queso Crema",
            "desciption": "Bonle de 170 gr",
            "state": "Available",
            "price": "8.50",
            "unity": "UN",
            stock: 167,
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          { 
            id: 8,
            "name": "Queso Cheddar",
            "desciption": "Laive de 170 gr",
            "state": "Available",
            "price": "6.30",
            "unity": "UN",
            stock: 11,
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { 
            id: 9,
            "name": "Fanta",
            "desciption": "Botella 2.25 LT",
            "state": "Available",
            "price": "5.20",
            "unity": "UN",
            stock: 13,
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { 
            id: 10,
            "name": "Lays",
            "desciption": "Papas Lays 160 gr",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            stock: 70,
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { 
            id: 11,
            "name": "Coca Cola",
            "desciption": "Coca cola 200 ml",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            stock: 69,
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          }
        ],
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
        }
    }
  }
</script>