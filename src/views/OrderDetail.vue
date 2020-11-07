<template>
    <div class="container">
        <div class="profile order-box row align-items-center justify-content-center">
            <div class="col-12 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Detalle de Pedido</h3>
                        </div>
                    </div>
                    <div class="row orders-title mt-3">
                        <div class="col-2">
                            <h3 class="subtitle">Codigo Producto</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Nombre Producto</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Precio</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Cantidad</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Imagen Producto</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(line, index) in orderInfo" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-2">
                                        <h3 class="subtitle">{{line.id}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">{{line.name}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">S/.{{line.price}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{line.quantity}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <img  class="order-img" src="../../public/assets/product.png" :alt="line.name" border="0" />
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { baseUrl } from '../shared/baseUrl';
  export default {
    name: 'Orders',
    mounted () {
      this.axios
        .get(baseUrl + 'orders/' + this.$route.params.id + '/articles')
        .then(response => {
            this.orderInfo = response.data;
            //console.log(this.orderInfo)
            //get the orderDetails and store it in the orderDetail array
          })
    },
    data() {
      return {
        checked: null,
        aux: null,
        quantity: null,
        orderInfo: [],
        orderDetail: [
            {
                id: 1,
                name: "Papas Lays",
                price: 2.50,
                quantity: 3,
                dateGenerated: "12/05/2020",
                dateAccepted: "13/05/2020",
                status: 1,
            },
            {
                id: 2,
                name: "Coca Cola",
                price: 4.00,
                quantity: 4,
                dateGenerated: "24/05/2020",
                dateAccepted: "27/05/2020",
                status: 0,
            },
            {
                id: 3,
                name: "Pringles",
                price: 5.50,
                quantity: 3,
                dateGenerated: "30/05/2020",
                dateAccepted: "31/05/2020",
                status: 1,
            },
        ],
      }
    },
    methods: {
        backToProducts() {
            this.$router.push('/products');
        },
        ordersHistory() {
            this.$router.push('/ordersHistory');
        }
    }
  }
</script>