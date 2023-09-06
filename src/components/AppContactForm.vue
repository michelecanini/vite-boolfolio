<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'AppContactForm',
    components:{
        AppLoader
    },
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            loading: false,
            name:'',
            email:'',
            message:'',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm(){
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            this.errors = {};

            axios.post(`${this.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                }
                else{
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;

            });
        }
    }
}
</script>

<template lang="">
    <div>
        <div class="py-5 ">
            <div class="container">
                <div class="row ">
                    <div class="col-12 ">
                        <h2 class="text-center mt-5 mb-5">Contattaci</h2>
                    </div>
                    <div v-if="success" class="alert alert-success">
                        Messaggio inviato con Successo
                    </div>
                </div> 
            </div>
            <div class="row ">
                <div class="col-12 col-md-6 mx-auto">
                    <p v-for="(error, index) in errors" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                    <form @submit.prevent="sendForm()" class="row">
                        <div class="col-12 ">
                            <label class="control-label">Nome e Cognome</label>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Name" class="form-control mb-5" :class="errors.name ? 'is-invalid' : ''" >
                        </div>
                        <div class="col-12 ">
                            <label class="control-label">Email</label>
                            <input type="mail" name="email" id="email" v-model="email" placeholder="Email" class="form-control mb-5" :class="errors.email ? 'is-invalid' : ''" >
                        </div>
                        <div class="col-12">
                            <label class="control-label">Messaggio</label>
                            <textarea class="form-control mb-5" name="message" id="message" v-model="message" placeholder="Messaggio" :class="errors.message ? 'is-invalid' : ''"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-sm btn-success" type="submit" :disabled="loading">{{ loading ? 'Invio email in corso' :'Invia' }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>