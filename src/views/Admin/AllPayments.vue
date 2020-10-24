<template>
    <div class="payments mt-4">
        <div class="mt-3 container">
            <div class="col-12 mt-4  row justify-content-center">
                <div class="col-12 product-box ml-4">
                    <div class="row orders-title col-12">
                        <div class="col-auto mt-4">
                            <h3 class="title mr-3">Todos los pagos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-5 col-12">
                        <div class="col-3">
                            <h3 class="subtitle">Codigo de Pago</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Total</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Dar de baja</h3>
                        </div>             
                    </div>
                    <div class="row orders-title col-12">
                        <div class="col-12">
                            <li v-for="(payment, index) in payments" :key="index" class="">
                                <div class="row orders-item-box align-items-center">
                                    <div class="col-3">
                                        <h3 class="subtitle">{{payment.id}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <div v-if="payment.state == 1">
                                            <h3 class="subtitle">Disponible</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Disponible</h3>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">S/.{{payment.total.toFixed(2)}}</h3>
                                    </div>      
                                    <div class="col-3">
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
        payments: [
            {
                id: 1,
                state: 1,
                total: 2.50,
            },
            {
                id: 2,
                state: 1,
                total: 2.50,
            },
            {
                id: 3,
                state: 0,
                total: 2.50,
            },
        ],
      }
    },
    methods: {
        removeOrder() {
            //Change state of product to unavailable
            alert("Removing payment...")
        }
    }
  }
</script>