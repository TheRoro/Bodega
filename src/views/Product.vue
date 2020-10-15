<template>
  <div class="product mt-4">
    <p>
        {{product.title}}
        Hola
    </p>
  </div>
</template>

<script>

  export default {
    name: 'Product',
    props: {
        
    },
    data() {
      return {
        data: {
            products: [
            { title: 'Foo' },
            { title: 'Bar' }
            ]
        }
      }
    },
    methods: {

    }
  }
</script>