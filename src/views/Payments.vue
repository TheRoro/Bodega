<template>
    <div class="container">
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
                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" variant="primary"  v-on:click="confirmPayment()">Confirmar Pago</b-button>
                        </div>
                    </div>
                </b-modal>
            </div>
        </div>
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-12 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Pagos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-2">
                            <h3 class="subtitle">No Pedidos</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Interés</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Delivery</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Mora</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Total</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(payment, index) in payments" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{payment.number}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{payment.price.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{payment.rate.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{payment.delivery.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{payment.latePayment.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">
                                            S/.{{(payment.price+
                                            payment.rate+
                                            payment.delivery+
                                            payment.latePayment).toFixed(2)}}
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 container">
                <div class="row justify-content-end">
                    <div class="col-3">
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="paymentsHistory()">Ver Pagos</b-button>
                    </div>
                    <div class="col-3">
                        <b-button id="show-btn" class="mt-5 edit-btn" variant="primary" @click="$bvModal.show('bv-modal-example')">Pagar</b-button>
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
                number: 3,
                price: 2.50,
                rate: 2.50,
                delivery: 5.00,
                latePayment: 3.00,
                status: 1,
            },
            {
                id: 2,
                number: 2,
                price: 1.50,
                rate: 6.50,
                delivery: 5.00,
                latePayment: 7.00,
                status: 1,
            },
            {
                id: 3,
                number: 1,
                price: 6.50,
                rate: 0.50,
                delivery: 5.00,
                latePayment: 5.00,
                status: 1,
            },
            {
                id: 4,
                number: 8,
                price: 10.50,
                rate: 6.70,
                delivery: 5.00,
                latePayment: 0.00,
                status: 1,
            },
        ],
      }
    },
    methods: {
        paymentsHistory() {
            this.$router.push('/paymentsHistory');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        confirmPayment() {
            alert("BIEEEEEEN");
        }
    }
  }
</script>