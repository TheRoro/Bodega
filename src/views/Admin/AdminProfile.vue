<template>
  <div class="container">
      <div class="profile row align-items-center mt-4">
          <div class="col-12">
              <div class="row col-12 col-sm-12 profile-box">
                <div class="profile-col col-auto col-sm-3 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Foto de Perfil</h3>
                        <img src="../../../public/assets/user.png" class="d-inline-block profile-picture" alt="Wapo logo">
                        <div class="row">
                            <div class="col-12">
                                <b-button class="mt-5 edit-btn" variant="primary" v-on:click="logOut()">Cerrar Sesión</b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-8 mt-2 ml-5 mt-4">
                    <div class="col-auto">
                      <div class="row">
                        <h3 class="title">Administrador de la Bodega</h3>
                      </div>
                      <div class="data mt-4 mb-4">
                        <p class="font-italic">"Un cliente satisfecho es la mejor estrategia de negocio"</p> 
                      </div>
                      <div class="row mt-5">
                        <h3 class="title mr-3">Mis datos</h3>
                        <router-link to="/editProfile">
                            <a class="fas fa-pencil-alt fa-2x edit-icon"></a>
                        </router-link>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="data mt-4">
                            <p>Nombre: {{this.customer.name}}</p>
                            <p>Usuario: {{this.user.username}}</p>
                            <p>Dirección: {{this.customer.address}}</p>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="data mt-4">
                            
                          </div>
                        </div>
                      </div>
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
      cobrarMantenimiento() {
        alert("Se estará cobrando mantimiento a todas las cuentas de credito activas...");
        this.axios
        .put(baseUrl + 'maintenancePayment')
        .then(response => {
            
          })
      }
    }
  }
</script>