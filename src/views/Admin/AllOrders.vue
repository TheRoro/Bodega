<template>
    <div class="products mt-4">
        <div class="product-box mt-3">
            <div class="col-12 mt-4">
                <div class="col-12 product-box">
                    <div class="row orders-title">
                        <div class="col-10 mt-4">
                            <h3 class="title mr-3">Todos los pedidos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-5">
                        <div class="col-2">
                            <h3 class="subtitle">Codigo Pedido</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Usuario</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Fecha Generada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Fecha Aceptada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Detalle</h3>
                        </div>            
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(order, index) in orders" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.orderId}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.customerName}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.generated_date}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.accepted_date}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <div v-if="order.state == 1">
                                            <h3 class="subtitle">Aceptado</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">Generado</h3>
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <h3 class="subtitle">S/.{{order.total_amount.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <div v-if="order.state == 1">
                                            <router-link :to="`/orderDetail/${order.orderId}`">
                                                <a class="fas fa-eye fa-2x edit-icon"></a>
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <a class="fas fa-eye-slash fa-2x text-info"></a>
                                        </div>
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
        .get(baseUrl + 'orders')
        .then(response => {
            this.orders = response.data;
            this.formatDate();
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        orders: [],
      }
    },
    methods: {
        removeOrder() {
            //Change state of product to unavailable
            alert("Removing order...")
        },
        formatDate() {
            for (let i = 0; i < this.orders.length; i++) {
                let date = this.orders[i].generated_date;
                let splitDate = date.split("-")
                let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.orders[i].generated_date = formatDate;
            }
            for (let i = 0; i < this.orders.length; i++) {
                let date = this.orders[i].accepted_date;
                let splitDate = date.split("-")
                let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.orders[i].accepted_date = formatDate;
            }
        }
    }
  }
</script>