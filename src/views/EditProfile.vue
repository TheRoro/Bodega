<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                  <div class="profile-col col-auto col-sm-6 mt-2">
                    <div class="col-auto">
                      <div class="row">
                          <h3 class="title mr-3">Editar los datos personales</h3>
                      </div>
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                          <b-form-input class="input-form2"
                            id="input-1"
                            v-model="form.name"
                            required
                            placeholder="Nombre"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Usuario:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.username"
                            required
                            placeholder="Usuario"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.password"
                            required
                            placeholder="Contraseña"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Dirección:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.address"
                            required
                            placeholder="Dirección"
                          ></b-form-input>
                        </b-form-group>
                        <b-button class="mt-4 edit-btn" type="submit" variant="primary">Aceptar</b-button>
                      </b-form>
                    </div>
                </div>
                <div class="profile-col col-auto col-sm-6 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Cambiar foto de perfil</h3>
                        <div class="ml-5">
                          <div v-if="this.$store.getters.profilePicture == ''">
                              <img src="../../public/assets/user.png" class="d-inline-block profile-picture-edit" alt="Wapo logo">
                          </div>
                          <img v-if="this.$store.getters.profilePicture" :src="this.$store.getters.profilePicture"  class="profile-picture-edit"/>
                        </div>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="imageUpload">Subir Foto</b-button>
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
          address: ''
        },
        show: true
      }
    },
    created() {
      this.form.name = this.$store.getters.firstname;
      this.form.username = this.$store.getters.username
      this.form.password = this.$store.getters.password
      this.form.address = this.$store.getters.address
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.commit('firstname', this.form.name)
        this.$store.commit('username', this.form.username)
        this.$store.commit('password', this.form.password)
        this.$store.commit('address', this.form.address)
        alert(JSON.stringify(this.form))
        this.$router.push('/profile')
      },
      imageUpload: function (event) {
        this.$router.push('/imageUpload')
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.username = ''
        this.form.password = ''
        this.form.address = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>