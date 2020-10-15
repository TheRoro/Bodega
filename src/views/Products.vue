<template>
  <div class="products mt-4">
    <h1>Productos</h1>
    <ul id="example-1">
        <li v-for="product in this.products" :key="product.key">
            <Product/>
        </li>
    </ul>
  </div>
</template>

<script>
import Product from './Product'

  export default {
    name: 'Products',
    components: {
        Product
    },
    props: {
        
    },
    data() {
      return {
        data: {
            products: [
            { product: 'Foo' },
            { product: 'Bar' }
            ]
        }
      }
    },
    methods: {

    }
  }
</script>