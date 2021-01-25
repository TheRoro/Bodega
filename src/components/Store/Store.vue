<template>
  <div class="store">
    <div>
      <div class="col-12 pt-4 mb-4">
        <h2>Available Products</h2>
      </div>
    </div>
    <div class="product-box mt-3">
      <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
        <div>
            <a href="https://imgbb.com/"><img  class="prod-img" :src="product.image" :alt="product.name" border="0" /></a>
        </div>
        <router-link to="/product-details">
            <h2 class="product-name mt-2"
                @click="addCurrentProduct(product)">
              {{ product.name }}
            </h2>
          </router-link>
          <div class="text-box">
            <span class="text-success">{{ product.description }}</span>
          </div>
          <div class="mt-2 title2">
            <span>S/. {{ product.price.toFixed(2) }}</span>
          </div>
          <b-button class="mt-4 btn" type="submit" variant="warning" v-on:click="addProductToCart(product)">Add to Cart</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'Store',
    created() {
      this.products = this.$store.getters.products;
    },
      mounted () {
      this.cart = this.$store.getters.cart;
      this.products = this.$store.getters.products;
    },
    data() {
      return {
        products: [],
        cart: [],
      }
    },
    methods: {
        addProductToCart(product) {
          let exists = false;
          for (let index = 0; index < this.cart.length; index++) {
            if(this.cart[index].id === product.id){
              this.cart[index].quantity++
              exists = true;
              alert("Increased product quantity in cart");
            }
          }
          if(exists === false) {
            alert("Added product to cart");
            product.quantity = 1;
            this.cart.push(product)
          }
          this.$store.commit('updateCart', this.cart);
        },
        removeDelivery() {
          this.products.splice(0,1);
        }
    }
  }
</script>

<style lang="scss">
@import '../../assets/scss/app.scss';
@import './Store.scss';
</style>
