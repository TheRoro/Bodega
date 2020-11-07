<template>
    <div class="container mt-4">
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-12 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Historial de Pedidos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-2">
                            <h3 class="subtitle">Codigo Pedido</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Fecha generada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Fecha aceptada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Monto</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Detalle</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(order, index) in orderHistory" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.id}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.generated_date}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.accepted_date}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <div v-if="order.state == 1">
                                            <h3 class="subtitle">Disponible</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Disponible</h3>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="col-3">
                                            <h3 class="subtitle">S/.{{order.total_amount.toFixed(2)}}</h3>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div v-if="order.state == 1">
                                            <router-link :to="`/orderDetail/${order.id}`">
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
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    mounted() {
    this.axios
    .get(baseUrl + 'customers/' + this.$store.getters.customerId + '/orders')
    .then(response => {
        this.orderHistory = response.data.content;
        this.formatDate()
        })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        orderHistory: [],
      }
    },
    methods: {
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        formatDate() {
            for (let i = 0; i < this.orderHistory.length; i++) {
                //2000-12-11 19:00:00
                //generated date
                let date = this.orderHistory[i].generated_date;
                let splitDate = date.split("-")
                let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.orderHistory[i].generated_date = formatDate;
                //accepted date
                date = this.orderHistory[i].accepted_date;
                splitDate = date.split("-")
                formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.orderHistory[i].accepted_date = formatDate;
            }
        }
    }
  }
</script>