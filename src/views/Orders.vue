<template>
    <div class="container">
        <div class="profile order-box row align-items-center">
            <div class="col-9 mt-4">
                <div class="col-12">
                    <div class="row orders-title">
                        <div class="col-12">
                            <h3 class="title mr-3">Pedidos</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-5">
                            <h3 class="subtitle">Producto</h3>
                        </div>
                        <div class="col-3">
                            <h3 class="subtitle">Precio Unitario</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Cantidad</h3>
                        </div>
                        <div class="col-2">
                            <h3 class="subtitle">Precio Final</h3>
                        </div>
                    </div>
                    <div class="row orders-title">
                        <div class="col-12">
                            <li v-for="(order, index) in orders" :key="index" class="">
                                <div class="row orders-item-box ml-1 align-items-center">
                                    <div class="col-1">
                                        <a href="https://imgbb.com/"><img  class="order-img" :src="order.image" :alt="order.name" border="0" /></a>
                                    </div>
                                    <div class="col-4">
                                        <h3 class="subtitle">{{order.name}}</h3>
                                    </div>
                                    <div class="col-3">
                                        <h3 class="subtitle">S/.{{order.price}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">{{order.quantity}}</h3>
                                    </div>
                                    <div class="col-2">
                                        <h3 class="subtitle">S/.{{(parseFloat(order.price)*parseFloat(order.quantity)).toFixed(2)}}</h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 container">
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-5 edit-btn" variant="primary">Agregar Más</b-button>
                        <b-button class="mt-5 edit-btn" variant="primary">Ver Pedidos</b-button>
                        <p class="orders-title">Servicios</p>
                        <input type="checkbox" id="checkbox" v-model="checked">
                        <label for="checkbox">Delivery S/. 5.00</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-5 edit-btn" variant="primary">Aceptar</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Orders',
    data() {
      return {
        checked: null,
        orders: [
          { 
            "name": "Queso Edam",
            "price": "4.60",
            "quantity": "2",
            "image": "https://i.ibb.co/gmn70wj/edam.jpg"
          },
          { 
            "name": "Queso Crema",
            "price": "1.00",
            "quantity": "5",
            "image": "https://i.ibb.co/bRPVRcx/crema.jpg"
          },
          { 
            "name": "Queso Cheddar",
            "price": "4.20",
            "quantity": "1",
            "image": "https://i.ibb.co/XJcxV6Q/cheddar.jpg"
          },
          { 
            "name": "Fanta",
            "price": "4.00",
            "quantity": "1",
            "image": "https://i.ibb.co/3fThG44/fanta.jpg"
          },
          { 
            "name": "Lays",
            "price": "2.50",
            "quantity": "3",
            "image": "https://i.ibb.co/nn3txMz/lays.jpg"
          },
          { 
            "name": "Coca Cola",
            "price": "4.30",
            "quantity": "3",
            "image": "https://i.ibb.co/Kwr2kqn/coke.jpg"
          }
        ]
      }
    },
    methods: {
    }
  }
</script>