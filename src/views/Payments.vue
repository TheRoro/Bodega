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
        <div class="profile order-box row align-items-center justify-content-center mt-4">
            <div class="col-12 mt-3">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Pagos</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-3">
                            <h3 class="subtitle">No Pedido</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Fecha generada</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Estado</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(payment, index) in payments" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-3">
                                        <h3 class="subtitle">{{payment.paymentId}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">S/.{{payment.amount.toFixed(2)}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{payment.generated_date}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <div v-if="payment.state == 1">
                                            <h3 class="subtitle">Disponible</h3>
                                        </div>
                                        <div v-else>
                                            <h3 class="subtitle">No Disponible</h3>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row orders-item-box ml-1 align-items-center bg-primary text-warning">
                                    <div class="col-10">
                                        <div class="col-auto">
                                            <h3 class="subtitle">Total a pagar:</h3>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">
                                            S/. {{this.totalPay}}
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
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    created() {
        //alert('At this point, this.property is now reactive and propertyComputed will update.')
        
    },
    mounted() {
        this.axios
        .get(baseUrl + 'customers/' + this.$store.getters.customerId + '/paymentMoves')
        .then(response => {
          this.payments = response.data;
          this.formatDate();
          this.total();
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        totalPay: null,
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
        confirmPayment() {
            alert("BIEEEEEEN");
        },
        total() {
            this.totalPay = 0
            this.payments.forEach(element => {
                this.totalPay += element.amount;
            });
            this.totalPay = this.totalPay.toFixed(2);
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