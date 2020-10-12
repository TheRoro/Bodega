<template>
  <div class="login container justify-content-center col-auto row">
    <div class="container row justify-content-center align-items-center">
      <div class="row align-items-center col-12 col-sm-7 login-box ">
        <div class="col-12">
        <h1 class="title mb-3 mt-0">INICIAR SESIÓN</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input class="input-form"
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Email o número de teléfono"
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
        <!---
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
        --->
        <div class="login-link">
          <router-link class="login-link" to="/signup">Recordar Contraseña</router-link>
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
      }
    }
  }
</script>