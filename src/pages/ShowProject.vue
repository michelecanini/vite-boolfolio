<script>

import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: "ShowProject",
    components: {
    AppLoader,
    },

    data() {
        return {
            baseUrl: "http://localhost:8000",
            project: '[]',
            loading: true,
           
        }
    },
    created() {
        this.getShowProject();
    },
    methods: {
        getShowProject(){
            this.loading = true;

            axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                
            if (response.data.success) {
                console.log(response.data.success);
                this.project = response.data.results;
                console.log(response.data.results);
                this.loading = false;
            }
            else{
                // zona per 404
            }

        });
        }

    },
}
</script>


<template lang="">

    <div>
        <AppLoader v-if="loading" />

        <div class="container">
            <div class="row">
                <h2 class="text-center mt-5">{{ project.title }}</h2>

                <div class="col-12 mb-5 text-center" >
                    <img :src="`${baseUrl}/storage/${project.thumb}`" class="card-img-top img-fluid mt-1 border" alt="{{ project.title }}" style="width: 900px">
                    <p class="mt-5">{{ project.description }}</p>
                    <a :href="project.github" target="_blank" class="btn btn-primary mt-3 me-2">Repo GitHub</a>
                    <a :href="project.demo" target="_blank" class="btn btn-secondary mt-3 me-2">Link Demo</a>
                </div>
            </div> 
        </div>
    </div>

</template>

<style lang="">
    
</style>