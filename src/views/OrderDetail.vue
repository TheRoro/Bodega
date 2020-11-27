<template>
    <div class="container">
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-12 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Detalle de Pedido</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-2">
                            <h3 class="subtitle">Codigo Pedido</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Nombre Producto</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio Unitario</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Cantidad</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Imagen Producto</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio Total</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(line, index) in orderInfo" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center bg-success text-secondary" v-if="line.name === 'Delivery'">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{line.id}}</h3>
                                    </div>
                                    <div class="col-8">
                                        <h3 class="subtitle">{{line.name}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{(parseFloat(line.price)*parseFloat(line.quantity)).toFixed(2)}}</h3>
                                    </div>
                                </div>
                                <div class="row orders-item-box ml-1 align-items-center"  v-if="line.name !== 'Delivery'">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{line.id}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{line.name}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{line.price}}</h3>
                                    </div>
                                    <div class="col-2" v-if="line.name !== 'Delivery'">
                                        <h3 class="subtitle">{{line.quantity}}</h3>
                                    </div>
                                    <div class="col-2" v-if="line.name !== 'Delivery'">
                                        <img  class="order-img" src="../../public/assets/product.png" :alt="line.name" border="0" />
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{(parseFloat(line.price)*parseFloat(line.quantity)).toFixed(2)}}</h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div class="col-12">
                            <li v-for="(t, index) in total" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center bg-primary text-white">
                                    <div class="col-10">
                                        <h3 class="subtitle">Total Del Pedido:</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{totalPrice.toFixed(2)}}</h3>
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
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    mounted () {
      this.axios
        .get(baseUrl + 'orders/' + this.$route.params.id + '/articles')
        .then(response => {
            this.orderInfo = response.data;
            this.formatPrice();
            this.calcTotalPrice();
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        orderInfo: [],
        total: ['total'],
        totalPrice: null,
      }
    },
    methods: {
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        formatPrice() {
            for (let i = 0; i < this.orderInfo.length; i++) {
                let price = parseFloat(this.orderInfo[i].price);
                price = price.toFixed(2);
                this.orderInfo[i].price = price;
            }
        },
        calcTotalPrice() {
            for (let i = 0; i < this.orderInfo.length; i++) {
                this.totalPrice+=(parseFloat(this.orderInfo[i].price)*parseFloat(this.orderInfo[i].quantity));
            }
        }
    }
  }
</script>