<template>
    <div class="container mt-5 upload-box">
        <h1 for="img" class="title pt-4">Importa una imagen desde tu pc:</h1>
        <input type="file" accept="image/*" @change="onChange" class="mt-3"/>
        <div id="preview">
            <img v-if="item.imageUrl" :src="item.imageUrl" class="profile-picture"/>
        </div>
        <div class="row justify-content-center">
            <div class="mr-2">
                <b-button class="mt-4 auto-btn" variant="primary" v-on:click="discardChanges">Cancelar</b-button>
            </div>
            <div class="ml-2">
                <b-button class="mt-4 auto-btn" variant="success" v-on:click="saveImage">Elegir como foto de perfil</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageUpload',
    data() {
        return {
        item:{
            //...
            image : null,
            imageUrl: null
        }
        }
    },
    created() {
    },
    methods: {
        onChange(e) {
        const file = e.target.files[0]
        this.image = file
        this.item.imageUrl = URL.createObjectURL(file)
        },
        saveImage: function (event) {
            this.$router.push('/editProfile')
        },
        discardChanges: function (event) {
            this.$router.push('/editProfile')
        }
    }
} 
</script>