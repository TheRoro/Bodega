<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                <div class="profile-col col-auto col-sm-4 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Modificar Cliente</h3>
                        <div class="">
                            <img src="../../../public/assets/user.png" class="d-inline-block profile-picture-edit" alt="Wapo logo">
                        </div>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="imageUpload">Subir Foto</b-button>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-4 mt-5">
                  <div class="col-auto">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group id="input-group-1" label="Modifique el nombre del cliente:" label-for="input-1">
                        <b-form-input class="input-form2"
                          id="input-1"
                          v-model="form.name"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique el usuario:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.username"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique la contraseña:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.password"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique la dirección:" label-for="input-2">
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
                      <b-form-group id="input-group-1" label="Modifique la tasa de interés (%):" label-for="input-1">
                        <b-form-input class="input-form2"
                          id="input-1"
                          v-model="form.rate"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique el tipo de interés:" label-for="input-2">
                        <b-form-select v-model="form.type" :options="tasas"></b-form-select>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique el estado del cliente:" label-for="input-2">
                        <b-form-select v-model="form.state" :options="estados"></b-form-select>
                      </b-form-group>
                      <b-form-group id="input-group-1" label="Modifique el saldo actual (S/.):" label-for="input-1">
                          <b-form-input class="input-form2"
                          id="input-1"
                          v-model="form.saldoActual"
                          required
                          placeholder=""
                        ></b-form-input>
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
    mounted () {
      this.axios
        .get(baseUrl + 'users/' + this.$route.params.id)
        .then(response => {
            this.user = response.data;
            this.form.username = this.user.username;
            this.form.password = this.user.password;
              this.axios
              .get(baseUrl + 'users/' + this.$route.params.id + '/customers')
              .then(responseCustomer => {
                  this.customer = responseCustomer.data.content[0];
                  this.form.name = this.customer.name;
                  this.form.address = this.customer.address;
                    this.axios
                    .get(baseUrl + 'customers/' + this.customer.id + '/creditAccounts')
                    .then(responseCreditAccount => {
                        this.creditAccount = responseCreditAccount.data;
                        this.form.rate = this.creditAccount.interest_rate_value;
                        this.form.type = this.creditAccount.interest_rate;
                        this.form.state = this.creditAccount.state;
                        this.form.saldoActual = this.creditAccount.actual_balance;
                    });   
                })
          })
    },
    data() {
      return {
        form: {
          name: '',
          username: '',
          password: '',
          address: '',
          rate: '',
          type: '',
          state: '',
          saldoActual: '',
        },
        show: true,
        user: [],
        customer: [],
        creditAccount: [],
        tasas: [
          { value: 1, text: 'Simple' },
          { value: 2, text: 'Compuesta' },
          { value: 3, text: 'Efectiva' }
        ],
        estados: [
          { value: 1, text: 'Disponible' },
          { value: 0, text: 'De baja' }
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.axios
        .put(baseUrl + 'users/' + this.$route.params.id, {
          username: this.form.username,
          password: this.form.password,
          enabled: 1
        })
        .then(response => {
              this.axios
              .put(baseUrl + 'users/' + this.$route.params.id + '/customers/' + this.customer.id , {
                name: this.form.name,
                address: this.form.address,
                state: parseInt(this.form.state)
              })
              .then(response => {
                  this.axios
                  .put(baseUrl + 'customers/' + this.customer.id + '/creditAccounts', {
                    state: 1,
                    interest_rate: parseInt(this.form.type),
                    interest_rate_value: this.form.rate,
                    balance: this.creditAccount.balance,
                    actual_balance: this.form.saldoActual,
                    generated_date: this.creditAccount.generated_date,
                  })
                  this.$router.push('/allCustomers')
              })
        })
      },
      imageUpload: function (event) {
        //this.$router.push('/imageUpload')
      },
      onReset(evt) {
        evt.preventDefault()
      }
    }
  }
</script>