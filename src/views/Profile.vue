<template>
  <div class="container">
      <div class="profile row align-items-center mt-4">
          <div class="col-12">
              <div class="row col-12 col-sm-12 profile-box">
                <div class="profile-col col-auto col-sm-3 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Foto de Perfil</h3>
                        <div v-if="this.$store.getters.profilePicture == ''">
                            <img src="../../public/assets/user.png" class="d-inline-block profile-picture" alt="Wapo logo">
                        </div>
                        <img v-if="this.$store.getters.profilePicture" :src="this.$store.getters.profilePicture" class="profile-picture"/>
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
                            <p>Nombre: {{this.$store.getters.firstname}}</p>
                            <p>Usuario: {{this.$store.getters.username}}</p>
                            <p>Dirección: {{this.$store.getters.address}}</p>
                        </div>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-4 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Cuenta Crediticia</h3>
                        <p>Número de Cuenta: {{this.$store.getters.accountNumber}}</p>
                        <p>Tasa de Interés establecida: {{this.$store.getters.interestRate}}</p>
                        <p>Compras: {{this.$store.getters.itemsPurchased}}</p>
                        <p>Pedidos: {{this.$store.getters.orders}}</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.$store.commit('logIn')
        console.log(this.$store.getters.LoggedStatus)
        this.$router.push('/homeLogged')  
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      logOut() {
        //this.$store.commit('reset');
        this.$store.commit('resetState');
      }
    }
  }
</script>