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
                                        <h3 class="subtitle">{{payment.paymentId}}</h3>
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
                                            S/.{{payment.amount.toFixed(2)}}
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
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    mounted() {
        this.axios
        .get(baseUrl + 'customers/' + this.$store.getters.customerId + '/paymentMoves')
        .then(response => {
          this.payments = response.data;
          this.formatDate();
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        payments: [],
      }
    },
    methods: {
        paymentsHistory() {
            this.$router.push('/paymentsHistory');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        },
        formatDate() {
            for (let i = 0; i < this.payments.length; i++) {
                //2000-12-11 19:00:00
                let date = this.payments[i].generated_date;
                let splitDate = date.split("-")
                let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
                this.payments[i].generated_date = formatDate;
            }
        }
    }
  }
</script>