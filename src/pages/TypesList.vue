<script>

import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';

export default {
    name: 'TypesList', 
    components:{
        AppLoader,
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            types: '[]',
            loading: true,
        }
    },
    created() {
        this.getTypes();
    },
    methods: {
        getTypes(){
            this.loading = true;

            axios.get(`${this.baseUrl}/api/types`).then ((response) => {
                this.loading = true;
                if (response.data.success) {
                    this.types = response.data.results
                    this.loading = false;
                }
            });
        }    
    }
}


</script>

<template lang="">

    <AppLoader v-if="loading" />
    <div v-else class="container">
        <div class="row">
            <h2 class="text-center mt-5">Tipologie di Progetto</h2>
            <div class="col-12 col-md-4 mt-5 mb-5 " v-for="item in types" :key="item.id">
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="card-title">
                            {{ item.name }}
                        </div>
                        <div class="card-footer text-center mb-3">
                            <a href="#" class="btn btn-sm bg-primary mt-5">Dettaglio Tipologia</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
        
</template>

<style lang="">
    
</style>