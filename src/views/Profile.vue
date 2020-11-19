<template>
  <div class="container">
      <div class="profile row align-items-center mt-4">
          <div class="col-12">
              <div class="row col-12 col-sm-12 profile-box">
                <div class="profile-col col-auto col-sm-3 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Foto de Perfil</h3>
                        <img src="../../public/assets/user.png" class="d-inline-block profile-picture" alt="Wapo logo">
                        <div class="row">
                            <div class="col-12">
                                <b-button class="mt-5 edit-btn" variant="primary" v-on:click="logOut()">Cerrar Sesión</b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-5 mt-2">
                    <div class="col-auto">
                        <div class="row">
                            <h3 class="title mr-3">Datos personales</h3>
                            <router-link to="/editProfile">
                                <a class="fas fa-pencil-alt fa-2x edit-icon"></a>
                            </router-link>
                        </div>
                        <div class="data mt-4">
                            <p>Nombre: {{this.customer.name}}</p>
                            <p>Usuario: {{this.user.username}}</p>
                            <p>Dirección: {{this.customer.address}}</p>
                        </div>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-4 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Cuenta Crediticia</h3>
                        <div v-if="this.creditAccount.currency == 1">
                            <p>Balance inicial: S/. {{this.creditAccount.balance}}</p>
                            <p>Balance actual: S/. {{this.creditAccount.actual_balance}}</p>
                        </div>
                        <div v-if="this.creditAccount.currency == 2">
                            <p>Balance inicial: $ {{(this.creditAccount.balance / dollar).toFixed(2)}}</p>
                            <p>Balance actual: $ {{(this.creditAccount.actual_balance / dollar).toFixed(2)}}</p>
                        </div>
                        <!-- <p>Balance inicial: S/. {{this.creditAccount.balance}}</p>
                        <p>Balance actual: S/. {{this.creditAccount.actual_balance}}</p>
                        <p>Balance inicial: $ {{(this.creditAccount.balance / dollar).toFixed(2)}}</p>
                        <p>Balance actual: $ {{(this.creditAccount.actual_balance / dollar).toFixed(2)}}</p> -->
                        <p>Tasa de interés: {{this.creditAccount.interest_rate_value}}%</p>
                        <div v-if="this.creditAccount.interest_rate == 1">
                            <p class="">Tipo de interés: Simple</p>
                        </div>
                        <div v-if="this.creditAccount.interest_rate == 2">
                            <p class="">Tipo de interés: Compuesto</p>
                        </div>
                        <div v-if="this.creditAccount.interest_rate == 3">
                            <p class="">Tipo de interés: Efectivo</p>
                        </div>
                        <p>Fecha de creación de cuenta: {{this.creditAccount.generated_date}}</p>
                        <div v-if="this.creditAccount.state == 1">
                            <p class="">Estado de la cuenta: Activo</p>
                        </div>
                        <div v-if="this.creditAccount.state == 2">
                            <p class="">Estado de la cuenta: De baja</p>
                        </div>
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
    mounted() {
        //get my user
        this.axios
        .get(baseUrl + 'users/' + this.$store.getters.userId)
        .then(responseUser => {
            this.user = responseUser.data;
        });
        //get my profile(customer)
        this.axios
        .get(baseUrl + 'users/' + this.$store.getters.userId + '/customers')
        .then(responseCustomer => {
            this.customer = responseCustomer.data.content[0];
            this.axios
            .get(baseUrl + 'customers/' + this.customer.id + '/creditAccounts')
            .then(responseCreditAccount => {
                this.creditAccount = responseCreditAccount.data;
                this.formatDate()
                this.formatBalance()
            });
        });
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true,
        user: [],
        customer: [],
        creditAccount: [],
        dollar: 3.61, 
      }
    },
    methods: {
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      logOut() {
        this.$store.commit('resetState');
        this.$router.push('/');
      },
      formatDate() {
        let date = this.creditAccount.generated_date;
        let splitDate = date.split("-")
        let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0];
        this.creditAccount.generated_date = formatDate;
      },
      formatBalance() {
        this.creditAccount.balance = this.creditAccount.balance.toFixed(2);
        this.creditAccount.actual_balance = this.creditAccount.actual_balance.toFixed(2);
      }
    }
  }
</script>