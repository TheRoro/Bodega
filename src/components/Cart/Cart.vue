<template>
    <div class="cart container mx-auto px-0">
        <div class="row align-items-center">
            <div class="col-12">
                <b-modal id="bv-modal-example" hide-footer hide-header-close size="md" header-bg-variant="secondary" centered class="col-10">
                    <template #modal-title>
                        Confimación de Pago
                    </template>
                    <div class="d-block text-center mt-3">
                    <h3>¿Estás seguro que deseas realizar tu pago?</h3>
                    </div>
                    <div class="col-12 payment-footer">
                        <div class="row">
                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" variant="success">Cancelar Pago</b-button>
                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" variant="primary"  v-on:click="submitCart">Confirmar Pago</b-button>
                        </div>
                    </div>
                </b-modal>
            </div>
        </div>
        <div class="row mt-3 mb-md-0 mb-3">
            <div class="col-12">
                <div class="row justify-content-center">
                    <!-- <div class="col-auto col-md-12"> -->
                    <div class="col-auto">
                        <div class="row align-items-center">
                            <a class="fas fa-shopping-cart fa-2x"></a>
                            <h1 class="ml-3 h1-title">My Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="this.cart.length !== 0">
            <div class="col-md-9 col-12">
                <div class="row title-box">
                    <div class="col-3">
                        <h2 class="left-text">Product</h2>
                    </div>
                    <div class="col-2">
                        <h2>Unit Price</h2>
                    </div>
                    <div class="col-4">
                        <h2>Quantity</h2>
                    </div>
                    <div class="col-3">
                        <h2>Final Price</h2>
                    </div>
                </div>
                <div v-for="(product, index) in cart" :key="index" class="row item-box align-items-center bg-white">
                    <div class="col-3">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12">
                                <a href="https://imgbb.com/"><img  class="order-img" :src="product.image" :alt="product.name" border="0" /></a>
                                <h3>{{product.name}}</h3>
                            </div>
                        </div>  
                    </div>
                    <div class="col-2">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12">
                                <h3>S/.{{product.price.toFixed(2)}}</h3>
                            </div>
                        </div> 
                    </div>
                    <div class="col-4">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-4 special-col">
                                <b-button class="circle-btn" v-on:click="decrease(product)">
                                    <i class="fas fa-minus"/>
                                </b-button>
                            </div>
                            <div class="col-auto special-col quantity">
                                <div class="row justify-content-center align-items-center">
                                    <div>
                                        <h3 class="centered-text">{{product.quantity}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 special-col">
                                <b-button class="circle-btn" v-on:click="increase(product)">
                                    <i class="fas fa-plus fa-xs"/>
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12">
                                <h3>S/.{{(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12 full-height">
                <div class="row title-box">
                    <div class="col-12">
                        <h2 class="centered-text"></h2>
                    </div>
                </div>
                <div class="row item-box justify-content-center">
                    <div class="col-auto final-price-box">
                        <div class="row full-height align-items-center">
                            <div class="col-md-12 col-12">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-12">
                                        <h3>Total payment:</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-12">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-12">
                                        <h3>S/.{{this.totalCart}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <b-button class="main-btn" v-on:click="backToStore">Add More</b-button>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <b-button class="secondary-btn" v-on:click="ordersHistory">Orders History</b-button>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <label for="checkbox" class="ml-2">Shipping S/. 5.00</label>
                        <input type="checkbox" id="checkbox" v-model="withDelivery" v-on:click="toggleDelivery">
                    </div>
                </div>
                <div class="row mt-2 mb-3">
                    <div class="col-12">    
                        <b-button id="show-btn" class="main-btn" @click="$bvModal.show('bv-modal-example')" v-on:click="submitCart">Confirm</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row empty align-items-center" v-if="this.cart.length === 0">
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <h4>Looks a bit empty over here...</h4>
                    </div>
                    <div class="col-12">
                        <p>Add products to your cart to get started!</p>
                    </div>
                    <div class="col-12">
                        <b-button class="main-btn mt-3" v-on:click="backToStore">Add products to cart</b-button>
                    </div>
                    <div class="col-12">
                        <b-button class="secondary-btn mt-3" v-on:click="ordersHistory">Older Orders</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/app.scss';
@import './Cart.scss';
</style>

<script>
  export default {
    name: 'Cart',
    created() {
        this.totalCartPayment();
        this.cart = this.$store.getters.cart;
    },
    mounted() {
        this.totalCartPayment();
    },
    data() {
      return {
        aux: null,
        quantity: null,
        totalCart: null,
        withDelivery: false,
        cart: [],
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
                let pos = 0
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
            if(this.withDelivery == true) {
                this.withDelivery = false;
            }
            else {
                this.withDelivery = true;
            }
            this.totalCartPayment()
        },
        backToStore() {
            this.$router.push('/store');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        totalCartPayment() {
            this.totalCart = 0
            this.cart.forEach(element => {
                this.totalCart += element.price * element.quantity;
            });
            if(this.withDelivery == true) {
                this.totalCart+=5;
            }
            this.totalCart = this.totalCart.toFixed(2);
        },
        submitCart() {
            alert("Se ha registrado satisfactoriamente su compra");
            this.cart = [];
            this.$store.commit('updateCart', this.cart);
        }
    }
  }
</script>