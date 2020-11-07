<template>
  <div class="products mt-4">
    <div class="align-items-center product-title-box pt-1">
      <div class="col-12 pt-4">
        <h2 class="text-success title2">Productos Disponibles</h2>
      </div>
    </div>
    <div class="product-box mt-3">
      <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
        <div>
           <a><img  class="prod-img" src="../../public/assets/product.png" :alt="product.name" border="0" /></a>
        </div>
        <router-link to="/product-details">
            <h2 class="product-name mt-2"
                @click="addCurrentProduct(product)">
              {{ product.name }}
            </h2>
          </router-link>
          <div>
            <span class="text-link">{{ product.description }}</span>
          </div>
          <div class="mt-2 title2">
            <span>S/. {{ product.price.toFixed(2) }}</span>
          </div>
          <b-button class="mt-4 btn" type="submit" variant="secondary" v-on:click="addProductToCart(product)">Añadir al carrito</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Products',
    data() {
      return {
        products: [],
        cart: [],
      }
    },
    mounted () {
      this.axios
        .get(baseUrl + 'articles')
        .then(response => {
          this.info = response
          this.products = response.data.content;
          })
      this.cart = this.$store.getters.cart;
    },
    methods: {
        addProductToCart(product) {
          var exists = false;
          for (let index = 0; index < this.cart.length; index++) {
            if(this.cart[index].id === product.id){
              this.cart[index].quantity++
              exists = true;
            }
          }
          if(exists === false) {
            alert("Se ha añadido el producto al carrito");
            product.quantity = 1;
            this.cart.push(product)
          }
          this.$store.commit('updateCart', this.cart);
        }
    }
  }
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }
  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    height: auto;
  }
  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }
  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
  .prod-img {
    height: 100px;
    width: 130px;
  }
</style>
