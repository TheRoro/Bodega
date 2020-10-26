<template>
    <div class="container">
        <div class="profile order-box row align-items-center mt-3">
            <div class="col-9 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <div class="row">
                                <a class="fas fa-shopping-cart fa-2x"></a>
                                <h3 class="title ml-3">Mi Carrito</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row orders-title mt-3 ml-1">
                        <div class="col-4">
                            <h3 class="subtitle">Producto</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Precio Unitario</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Cantidad</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio Final</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(product, index) in order" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-1">
                                        <a href="https://imgbb.com/"><img  class="order-img" :src="product.image" :alt="product.name" border="0" /></a>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{product.name}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">S/.{{product.price}}</h3>
                                    </div>
                                    <div class="col-3 quantity-row">
                                        <div class="row align-items-center quantity-row">
                                                <button class="btn2 mr-2" v-on:click="decrease(product)"><i class="fas fa-minus"/></button>
                                            <div class="mt-1 ml-2">
                                                <h3 class="subtitle quantity-order">{{product.quantity}}</h3>                                                
                                            </div>
                                                <button class="btn2 ml-3" v-on:click="increase(product)"><i class="fas fa-plus"/></button>
                                            <div class="col-7">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)}}</h3>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row orders-item-box ml-1 align-items-center bg-primary text-warning">
                                    <div class="col-10">
                                        <h3 class="subtitle">Total a pagar</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{this.totalCartPayment()}}</h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 container">
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-5 edit-btn" variant="primary"  v-on:click="backToProducts">Agregar Más</b-button>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="ordersHistory">Historial Pedidos</b-button>
                        <p class="orders-title">Servicios</p>
                        <input type="checkbox" id="checkbox" v-model="withDelivery">
                        <label for="checkbox" class="ml-2">Delivery S/. 5.00</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-5 edit-btn" variant="primary">Aceptar</b-button>
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
        aux: null,
        quantity: null,
        totalCart: null,
        withDelivery: false,
        order: [
          { "id": "1",
            "name": "Queso Edam",
            "price": "4.60",
            "quantity": "2",
            "image": "https://i.ibb.co/gmn70wj/edam.jpg"
          },
          { "id": "2",
            "name": "Queso Crema",
            "price": "1.00",
            "quantity": "5",
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          {  "id": "3",
            "name": "Queso Cheddar",
            "price": "4.20",
            "quantity": "1",
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { "id": "4",
            "name": "Fanta",
            "price": "4.00",
            "quantity": "1",
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { "id": "5",
            "name": "Lays",
            "price": "2.50",
            "quantity": "3",
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { "id": "6",
            "name": "Coca Cola",
            "price": "4.30",
            "quantity": "3",
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          }
        ]
      }
    },
    methods: {
        decrease(product) {
            this.quantity = parseInt(product.quantity);
            if(this.quantity - 1 >= 1) {
                this.aux = this.quantity-1;
                product.quantity = this.aux.toString();
            }
        },
        increase(product) {
            this.quantity = parseInt(product.quantity);
            if(this.quantity + 1 <= 1000) {
                this.aux = this.quantity+1;
                product.quantity = this.aux.toString();
            }
        },
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        totalCartPayment() {
            this.totalCart = 0
            this.order.forEach(element => {
                this.totalCart += element.price * element.quantity;
            });
            if(this.withDelivery == true) {
                this.totalCart+=5;
            }
            return this.totalCart.toFixed(2);
        }
    }
  }
</script>