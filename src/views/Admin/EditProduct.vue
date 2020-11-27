<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                                <div class="profile-col col-auto col-sm-6 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Modificar Producto</h3>
                        <div class="ml-5">
                          <img src="../../../public/assets/product.png"  class="profile-picture-edit"/>
                        </div>
                        <b-button class="mt-5 edit-btn" variant="primary" v-on:click="imageUpload">Subir Foto</b-button>
                    </div>
                </div>
                  <div class="profile-col col-auto col-sm-6 mt-5">
                    <div class="col-auto">
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group id="input-group-1" label="Modifique el nombre del producto:" label-for="input-1">
                          <b-form-input class="input-form2"
                            id="input-1"
                            v-model="form.name"
                            required
                            placeholder=""
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Modifique la descripción del producto:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.description"
                            required
                            placeholder=""
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Modifique el precio del producto:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.price"
                            required
                            placeholder=""
                            @keydown="validateNumber($event)"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Modifique el estado del producto:" label-for="input-2">
                          <b-form-select v-model="form.state" :options="options"></b-form-select>
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
        .get(baseUrl + 'articles/' + this.$route.params.id)
        .then(response => {
            this.info = response
            this.product = response.data;
            this.form.name = this.product.name;
            this.form.description = this.product.description;
            this.form.price = this.product.price.toFixed(2);
            this.form.state = this.product.state;        
          })
    },
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: '',
          state: ''
        },
        show: true,
        product: [],
        options: [
          { value: 1, text: 'Disponible' },
          { value: 0, text: 'No disponible' }
        ]
      }
    },
    created() {
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.axios
        .put(baseUrl + 'articles/' + this.$route.params.id, {
          name: this.form.name,
          description: this.form.description,
          price: parseFloat(this.form.price),
          state: parseInt(this.form.state),
        })
        .then(response => {
            this.$router.push('/allProducts')
          })
      },
      imageUpload: function (event) {
        //this.$router.push('/imageUpload')
      },
      validateNumber($event){
        if(this.form.price.includes(".") && $event.keyCode === 190){
          $event.preventDefault();
        }
        if($event.keyCode >= 48 && $event.keyCode <= 57 || $event.keyCode === 8 || $event.keyCode >= 37 && $event.keyCode <= 40 || $event.keyCode === 46 || $event.keyCode === 9 || $event.keyCode === 190){
        
        }
        else{
          $event.preventDefault();
        }
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