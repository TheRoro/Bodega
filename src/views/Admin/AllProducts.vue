<template>
    <div class="container mt-4">
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-12 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Todos mis Productos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-2">
                            <h3 class="subtitle">Codigo Pedido</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Fecha generada</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Fecha aceptada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Detalle</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(order, index) in orders" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.id}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{order.dateGenerated}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{order.dateAccepted}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <div v-if="order.status == 1">
                                            <h3 class="subtitle">Disponible</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Disponible</h3>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div v-if="order.status == 1">
                                            <router-link to="/orderDetail">
                                                <a class="fas fa-eye fa-2x edit-icon"></a>
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <a class="fas fa-eye-slash fa-2x"></a>
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
  export default {
    name: 'Orders',
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        orders: [
            {
                id: 1,
                dateGenerated: "12/05/2020",
                dateAccepted: "13/05/2020",
                status: 1,
            },
            {
                id: 2,
                dateGenerated: "24/05/2020",
                dateAccepted: "27/05/2020",
                status: 0,
            },
            {
                id: 3,
                dateGenerated: "30/05/2020",
                dateAccepted: "31/05/2020",
                status: 1,
            },
        ],
      }
    },
    methods: {
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        }
    }
  }
</script>