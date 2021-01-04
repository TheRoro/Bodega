<template>
  <div class="container">
      <div class="profile row align-items-center">
          <div class="col-12">
              <div class="row col-12 col-sm-12 edit-profile-box">
                                <div class="profile-col col-auto col-sm-6 mt-2">
                    <div class="col-auto">
                        <h3 class="title">Modificar Producto</h3>
                        <div class="ml-5">
                          <div v-if="this.$store.getters.productImage == ''">
                              <!-- <img src="../../../public/assets/logo.jpeg" class="d-inline-block profile-picture-edit" alt="Wapo logo"> -->
                          </div>
                          <img v-if="this.$store.getters.productImage" :src="this.$store.getters.productImage"  class="profile-picture-edit"/>
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
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Modifique stock del producto:" label-for="input-2">
                          <b-form-input class="input-form2"
                            id="input-2"
                            v-model="form.stock"
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
          description: '',
          price: '',
          stock: ''
        },
        show: true
      }
    },
    created() {
      this.form.name = this.$store.getters.productName;
      this.form.description = this.$store.getters.productDescription;
      this.form.price = this.$store.getters.productPrice;
      this.form.stock = this.$store.getters.productStock;
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.commit('productName', this.form.name)
        this.$store.commit('productDescription', this.form.description)
        this.$store.commit('productPrice', this.form.price)
        this.$store.commit('productStock', this.form.stock)
        alert(JSON.stringify(this.form))
        this.$router.push('/allProducts')
      },
      imageUpload: function (event) {
        //this.$router.push('/imageUpload')
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