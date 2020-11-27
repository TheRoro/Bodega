<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                <div class="profile-col col-auto col-sm-4 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Registrar Cliente</h3>
                        <div class="">
                          <img src="../../../public/assets/user.png"  class="profile-picture-edit"/>
                        </div>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="imageUpload">Subir Foto</b-button>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-4 mt-5">
                  <div class="col-auto">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group id="input-group-1" label="Ingrese el nombre del cliente:" label-for="input-1">
                        <b-form-input class="input-form2"
                          id="input-1"
                          v-model="form.name"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese el usuario:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.username"
                          required
                          placeholder=""
                          @keydown="validateUsername($event)"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese la contraseña:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.password"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese la dirección:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.address"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-form>
                  </div>
              </div>
              <div class="profile-col col-auto col-sm-4 mt-5">
                  <div class="col-auto">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group id="input-group-1" label="Ingrese la tasa de interés:" label-for="input-1">
                        <div class="row">
                          <div class="col-10">
                            <b-form-input class="input-form2"
                              id="input-1"
                              v-model="form.rate"
                              required
                              placeholder=""
                              @keydown="validateNumber($event)"
                            ></b-form-input>
                          </div>
                          <div class="col-1">
                            <h3 class="subtitle mt-3">%</h3>
                          </div>
                        </div>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese el tipo de interés:" label-for="input-2">
                          <b-form-select v-model="form.type" :options="tasas"></b-form-select>  
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese el balance de cuenta:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.account"
                          required
                          placeholder=""
                          @keydown="validateBalance($event)"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Ingrese la moneda:" label-for="input-2">
                          <b-form-select v-model="form.currency" :options="monedas"></b-form-select>  
                      </b-form-group>
                      <b-button class="mt-4 edit-btn" type="submit" variant="primary">Aceptar</b-button>
                    </b-form>
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
    data() {
      return {
        form: {
          name: '',
          username: '+51',
          password: '',
          address: '',
          rate: '',
          type: '',
          account: '',
          currency: '',
        },
        show: true,
        tasas: [
          { value: 1, text: 'Simple' },
          { value: 2, text: 'Compuesto' },
          { value: 3, text: 'Efectivo' }
        ],
        monedas: [
          { value: 'soles', text: 'S/. Soles' },
          { value: 'dolares', text: '$ Dólares' }
        ],
      }
    },
    created() {
      this.form.name = "";
      this.form.username = "+51";
      this.form.password = "";
      this.form.address = "";
      this.form.rate = "";
      this.form.type = "";
      this.form.account = "";
      this.form.currency = "";
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        //Create User
        this.axios.post(baseUrl + 'users', {
            enabled: 1,
            username: this.form.username,
            password: this.form.password,
          })
          .then((responseUser) => {
            //Create Customer
            this.axios.post(baseUrl + 'users/' + responseUser.data.id + '/customers', {
              address: this.form.address,
              state: 1,
              name: this.form.name,
            })
            .then((responseCustomer) => {
                //Create Credit Account
                let today = new Date().toISOString()
                this.axios.post(baseUrl + 'customers/' + responseCustomer.data.id + '/creditAccounts', {
                  state: 1,
                  generated_date: today,
                  interest_rate: parseInt(this.form.type),
                  interest_rate_value: parseFloat(this.form.rate),
                  balance: parseFloat(this.form.account),
                  actual_balance: parseFloat(this.form.account),
                  currency: this.form.currency
                })
                .then((responseAccount) => {
                    //Create Payment
                    this.axios.post(baseUrl + 'creditAccounts/' + responseAccount.data.id + '/payment', {
                      state: 1,
                    })
                    .then((response) => {
                        this.$router.push('/allCustomers')
                    })
                    .catch(function (error) {
                      alert("No se pudo crear el pago de forma correcta");
                    });
                })
                .catch(function (error) {
                  alert("No se pudo crear la cuenta de forma correcta");
                });
              })
            .catch(function (error) {
              alert("No se pudo crear el cliente de forma correcta");
            });
          })
          .catch(function (error) {
            alert("No se pudo crear el usuario de forma correcta");
          });

        //alert("Se registró satisfactoriamente el usuario");
        //this.$router.push('/allCustomers')
      },
      imageUpload: function (event) {
        //this.$router.push('/imageUpload')
      },
      validateNumber($event){
        if(this.form.rate.includes(".") && $event.keyCode === 190){
          $event.preventDefault();
        }
        if($event.keyCode >= 48 && $event.keyCode <= 57 || $event.keyCode === 8 || $event.keyCode >= 37 && $event.keyCode <= 40 || $event.keyCode === 46 || $event.keyCode === 9 || $event.keyCode === 190){
        
        }
        else{
          $event.preventDefault();
        }
      },
      validateBalance($event){
        if(this.form.account.includes(".") && $event.keyCode === 190){
          $event.preventDefault();
        }
        if($event.keyCode >= 48 && $event.keyCode <= 57 || $event.keyCode === 8 || $event.keyCode >= 37 && $event.keyCode <= 40 || $event.keyCode === 46 || $event.keyCode === 9 || $event.keyCode === 190){
        
        }
        else{
          $event.preventDefault();
        }
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
      }
    }
  }
</script>