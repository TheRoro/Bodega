<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                                <div class="profile-col col-auto col-sm-6 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Registrar Producto</h3>
                        <div class="ml-5">
                          <img src="../../../public/assets/product.png"  class="profile-picture-edit"/>
                        </div>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="imageUpload">Subir Foto</b-button>
                    </div>
                </div>
                  <div class="profile-col col-auto col-sm-6 mt-5">
                    <div class="col-auto">
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group id="input-group-1" label="Ingrese el nombre del producto:" label-for="input-1">
                          <b-form-input class="input-form2"
                            id="input-1"
                            v-model="form.name"
                            required
                            placeholder=""
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Ingrese la descripción del producto:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.description"
                            required
                            placeholder=""
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Ingrese el precio del producto:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.price"
                            required
                            placeholder="S/."
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
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: '',
          stock: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.axios.post(baseUrl + '/articles', {
          description: this.form.description,
          state: 1,
          name: this.form.name,
          price: parseFloat(this.form.price),
          unit: 'UN',
        })
        .then(function (response) {
        })
        .catch(function (error) {
          alert("No se pudo crear el prodcuto de forma correcta");
        });
        this.$router.push('/allProducts')
      },
      imageUpload: function (event) {
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.description = ''
        this.form.price = ''
        this.form.stock = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>