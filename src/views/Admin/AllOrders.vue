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
                            <h3 class="subtitle">Fecha Generada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Fecha Aceptada</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Detalle</h3>
                        </div>
                        <div class="col-1">
                            <h3 class="subtitle">Dar de baja</h3>
                        </div>                
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(order, index) in orders" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.id}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.dateGenerated}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.dateAccepted}}</h3>
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
                                        <h3 class="subtitle">S/.{{order.price.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-1">
                                        <div v-if="order.state == 1">
                                            <router-link to="/orderDetail">
                                                <a class="fas fa-eye fa-2x edit-icon"></a>
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <a class="fas fa-eye-slash fa-2x text-info"></a>
                                        </div>
                                    </div>              
                                    <div class="col-1">
                                        <button class="btn-icon" v-on:click="removeOrder"><i class="fas fa-trash fa-2x edit-icon"></i></button>
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
                state: 1,
                price: 2.50,
            },
            {
                id: 2,
                dateGenerated: "24/05/2020",
                dateAccepted: "27/05/2020",
                state: 0,
                price: 2.50,
            },
            {
                id: 3,
                dateGenerated: "30/05/2020",
                dateAccepted: "31/05/2020",
                state: 1,
                price: 2.50,
            },
        ],
      }
    },
    methods: {
        removeOrder() {
            //Change state of product to unavailable
            alert("Removing order...")
        }
    }
  }
</script>