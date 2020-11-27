<template>
  <div class="login container justify-content-center col-auto row">
    <div class="container row justify-content-center align-items-center">
      <div class="row align-items-center col-12 col-sm-7 login-box">
        <div class="col-12">
        <h1 class="title mb-3 mt-0">INICIAR SESIÓN</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Número de teléfono:" label-for="input-1">
            <b-form-input class="input-form"
              id="input-1"
              v-model="form.username"
              required
              placeholder="Número de teléfono"
              @keydown="validateUsername($event)"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
            <b-form-input class="input-form"
              id="input-2"
              v-model="form.password"
              required
              placeholder="Contraseña"
              type="password"
              
            ></b-form-input>
          </b-form-group>
          <b-button class="mt-4 btn" type="submit" variant="success">Iniciar Sesión</b-button>
        </b-form>
        <div class="login-link">
          <router-link class="login-link" to="/signup">Recordar Contraseña</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { baseUrl } from '../shared/baseUrl';
  export default {
    data() {
      return {
        form: {
          username: '+51',
          password: '',
        },
        show: true,
        user: [],
        customer: [],
        creditAccount: []
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.axios
        .post(baseUrl + 'login', {
          username: this.form.username,
          password: this.form.password,
        })
        .then(response => {
            this.user = response.data;
            if(this.user.id !== null){
                  this.$store.commit('userId', this.user.id);
                  this.$store.commit('logIn')
                  this.axios
                  .get(baseUrl + 'users/' + this.$store.getters.userId + '/customers')
                  .then(responseCustomer => {
                      this.customer = responseCustomer.data.content[0];
                      this.$store.commit('customerId', this.customer.id);
                      this.axios
                      .get(baseUrl + 'customers/' + this.customer.id + '/creditAccounts')
                      .then(responseCreditAccount => {
                          this.creditAccount = responseCreditAccount.data;
                          this.$store.commit('creditAccountId', this.creditAccount.id);
                          //UserId customerId and creditAccountId set correctly
                      });
                  });
              if(this.user.id === 1){ //admin validation
                alert("Welcome ADMIN");
                this.$store.commit('isAdmin', true);
              }
              else{
                alert("Welcome CUSTOMER");
              }
              this.$router.push('/homeLogged')
            }
            else{
              alert("Wrong username or password")
            }
            
        })
      },
      validateUsername($event){
        if(($event.key === "Backspace" || $event.keyCode === 46) && this.form.username.length === 3) {
          $event.preventDefault();
        }
        if($event.keyCode >= 48 && $event.keyCode <= 57 || $event.keyCode === 8 || $event.keyCode >= 37 && $event.keyCode <= 40 || $event.keyCode === 46 || $event.keyCode === 9){
        }
        else{
          $event.preventDefault();
        }
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
      }
    }
  }
</script>