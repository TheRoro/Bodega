<template>
    <div class="container">
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-9 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Historial de Pagos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-4">
                            <h3 class="subtitle">Codigo de Pago</h3>
                        </div>
                        <div class="col-4">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                        <div class="col-4">
                            <h3 class="subtitle">Total</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(payment, index) in payments" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-4">
                                        <h3 class="subtitle">{{payment.number}}</h3>
                                    </div>
                                    <div class="col-4">
                                        <div v-if="payment.state == 1">
                                            <h3 class="subtitle">Pagado</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Pagado</h3>
                                        </div>
                                    </div>
                                    <div class="col-4">
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
                state: 1,
                status: 1,
            },
            {
                id: 2,
                number: 2,
                price: 1.50,
                rate: 6.50,
                delivery: 5.00,
                latePayment: 7.00,
                state: 0,
                status: 1,
            },
            {
                id: 3,
                number: 1,
                price: 6.50,
                rate: 0.50,
                delivery: 5.00,
                latePayment: 5.00,
                state: 1,
                status: 1,
            },
            {
                id: 4,
                number: 8,
                price: 10.50,
                rate: 6.70,
                delivery: 5.00,
                latePayment: 0.00,
                state: 1,
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
        }
    }
  }
</script>