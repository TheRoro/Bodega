<template>
  <div class="products">
    <div class="row align-items-center product-title-box">
      <div class="col-12">
        <h2 class="text-success">Productos</h2>
      </div>
    </div>
    <div>
      <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
        <div>
           <a href="https://imgbb.com/"><img  class="prod-img" :src="product.image" :alt="product.name" border="0" /></a>
        </div>
        <router-link to="/product-details">
            <h2 class="product-name"
                @click="addCurrentProduct(product)">
              {{ product.name }}
            </h2>
          </router-link>
          <div class="product-price">
            <span>S/. {{ product.price }}, 00</span>
            <span>10 x {{ Math.round(product.price / 10) }}, 00 </span>
          </div>
          <b-button class="mt-4 btn" type="submit" variant="secondary" v-on:click="addProductToCart(product)">Añadir al carrito</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Products',
    props: {
        
    },
    data() {
      return {
        products: [
          { 
            "name": "Queso Edam",
            "desciption": "Bonle de 90 gr",
            "state": "Available",
            "price": "4.50",
            "unity": "UN",
            "image": "https://i.ibb.co/gmn70wj/edam.jpg"
          },
          { 
            "name": "Queso Crema",
            "desciption": "Bonle de 170 gr",
            "state": "Available",
            "price": "8.50",
            "unity": "UN",
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          { 
            "name": "Queso Cheddar",
            "desciption": "Laive de 170 gr",
            "state": "Available",
            "price": "6.30",
            "unity": "UN",
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { 
            "name": "Fanta",
            "desciption": "Botella 2.25 LT",
            "state": "Available",
            "price": "5.20",
            "unity": "UN",
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { 
            "name": "Lays",
            "desciption": "Papas Lays 160 gr",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { 
            "name": "Coca Cola",
            "desciption": "Coca cola 200 ml",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          },
          { 
            "name": "Queso Crema",
            "desciption": "Bonle de 170 gr",
            "state": "Available",
            "price": "8.50",
            "unity": "UN",
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          { 
            "name": "Queso Cheddar",
            "desciption": "Laive de 170 gr",
            "state": "Available",
            "price": "6.30",
            "unity": "UN",
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { 
            "name": "Fanta",
            "desciption": "Botella 2.25 LT",
            "state": "Available",
            "price": "5.20",
            "unity": "UN",
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { 
            "name": "Lays",
            "desciption": "Papas Lays 160 gr",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { 
            "name": "Coca Cola",
            "desciption": "Coca cola 200 ml",
            "state": "Available",
            "price": "4.20",
            "unity": "UN",
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          }
        ]
      }
    },
    methods: {

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
