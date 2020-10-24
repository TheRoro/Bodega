<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                <div class="profile-col col-auto col-sm-4 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Modificar Cliente</h3>
                        <div class="">
                          <div v-if="this.$store.getters.customerImage == ''">
                              <img src="../../../public/assets/user.png" class="d-inline-block profile-picture-edit" alt="Wapo logo">
                          </div>
                          <img v-if="this.$store.getters.customerImage" src="../../../public/assets/user.png"  class="profile-picture-edit"/>
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
                      <b-form-group id="input-group-1" label="Modifique la tasa de interés:" label-for="input-1">
                        <b-form-input class="input-form2"
                          id="input-1"
                          v-model="form.rate"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique el tipo del cliente:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.type"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Modifique el número de cuenta:" label-for="input-2">
                        <b-form-input class="input-form2"
                          id="input-2"
                          v-model="form.account"
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
  export default {
    data() {
      return {
        form: {
          name: '',
          username: '',
          password: '',
          address: '',
          rate: '',
          type: '',
          account: '',
        },
        show: true
      }
    },
    created() {
      this.form.name = this.$store.getters.customerName;
      this.form.username = this.$store.getters.customerUsername;
      this.form.password = this.$store.getters.customerPassword;
      this.form.address = this.$store.getters.customerAddress;
      this.form.rate = this.$store.getters.customerRate;
      this.form.type = this.$store.getters.customerType;
      this.form.account = this.$store.getters.customerAccount;
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.commit('customerName', this.form.name)
        this.$store.commit('customerUsername', this.form.username)
        this.$store.commit('customerPassword', this.form.password)
        this.$store.commit('customerAddress', this.form.address)
        this.$store.commit('customerRate', this.form.rate)
        this.$store.commit('customerType', this.form.type)
        this.$store.commit('customerAccount', this.form.account)
        alert(JSON.stringify(this.form))
        this.$router.push('/allCustomers')
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