<template>
    <div class="container">
        <div class="profile order-box row mt-3">
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
                            <li v-for="(product, index) in cart" :key="index" class="">
                                <div v-if="product.name == 'delivery'">
                                    <div class="row orders-item-box ml-1 align-items-center">
                                        <div class="col-10">
                                            <h3>Delivery</h3>
                                        </div>
                                        <div class="col-2">
                                            <h3 class="subtitle">S/.{{"5.00"}}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row orders-item-box ml-1 align-items-center">
                                        <div class="col-1">
                                            <img  class="order-img" src="../../public/assets/product.png" :alt="product.name" border="0" />
                                        </div>
                                        <div class="col-3">
                                            <h3 class="subtitle">{{product.name}}</h3>
                                        </div>
                                        <div class="col-3">
                                            <h3 class="subtitle">S/.{{product.price.toFixed(2)}}</h3>
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
                                </div>
                            </li>
                            <li>
                                <div class="row orders-item-box ml-1 align-items-center bg-primary text-warning">
                                    <div class="col-10">
                                        <h3 class="subtitle">Total a pagar</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{this.totalCart}}</h3>
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
                        <input type="checkbox" id="checkbox" v-model="withDelivery" v-on:click="toggleDelivery">
                        <label for="checkbox" class="ml-2">Delivery S/. 5.00</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="submitCart()">Aceptar</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    created() {
        
    },
    mounted () {
      this.cart = this.$store.getters.cart;
      this.withDelivery = this.$store.getters.delivery;
      this.totalCartPayment()
    },
    data() {
      return {
        aux: null,
        quantity: null,
        totalCart: null,
        orderId: '',
        cart: [],
        withDelivery: false,
        delivery: {
            description: "Selected a delivery service",
            id: 1,
            name: "delivery",
            price: 5.0,
            quantity: 1,
            state: 1,
            unit: "UN"
        },
      }
    },
    methods: {
        decrease(product) {
            this.quantity = parseInt(product.quantity);
            if(this.quantity - 1 >= 1) {
                this.aux = this.quantity-1;
                product.quantity = this.aux.toString();
            }
            if(this.quantity - 1 == 0) {
                var pos = 0
                for (let index = 0; index < this.cart.length; index++) {
                    if(this.cart[index].id === product.id){
                        pos = index;
                    }
                }
                this.cart.splice(pos, 1)
            }
            this.totalCartPayment()
        },
        increase(product) {
            this.quantity = parseInt(product.quantity);
            if(this.quantity + 1 <= 1000) {
                this.aux = this.quantity+1;
                product.quantity = this.aux.toString();
            }
            this.totalCartPayment()
        },
        toggleDelivery() {
            var exists = false;
            for (let index = 0; index < this.cart.length; index++) {
                if(this.cart[index].name === this.delivery.name){
                //this.cart[index].quantity++
                    exists = true;
                    this.cart.splice(index,1)
                    this.withDelivery = false;
                    this.$store.commit('delivery', this.withDelivery);
                    alert("Se ha removido el Delivery");
                }
            }
            if(exists === false) {
                alert("Se ha seleccionado Delivery");
                this.withDelivery = true;
                this.$store.commit('delivery', this.withDelivery);
                this.cart.push(this.delivery)
            }
            this.$store.commit('updateCart', this.cart);
            this.totalCartPayment()
        },
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        totalCartPayment() {
            this.totalCart = 0
            this.cart.forEach(element => {
                this.totalCart += element.price * element.quantity;
            });
            this.totalCart = this.totalCart.toFixed(2);
            this.$store.commit('updateCart', this.cart);
        },
        submitCart() {
            let today = new Date().toISOString()
            this.axios.post(baseUrl + 'customers/' + this.$store.getters.customerId + '/orders', {
                total_amount: this.totalCart,
                payment_method: 1,
                generated_date: today,
                accepted_date: today, //replace with null
                state: 1,
            })
            .then(responseOrder => {
                this.orderId = responseOrder.data.id
                this.axios.post(baseUrl + 'orders/' + this.orderId + '/articles', this.cart)
                .then(responseCartInfo => {
                    alert("Se ha registrado satisfactoriamente su compra")
                    this.cart = []
                    this.$store.commit('updateCart', this.cart);
                    this.$router.push('/ordersHistory');
                    this.axios.post(baseUrl + 'orders/' + this.orderId + '/creditAccount')
                    .then(movementResponse =>{
                    });
                })
                
            })
        }
    }
  }
</script>