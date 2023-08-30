<script>
import AppLoader from './AppLoader.vue';
import axios from 'axios';

export default {
    name: 'AppMain', 
    components:{
        AppLoader
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            projects: '[]',
            loading: true,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                if (response.data.success){
                    this.projects = response.data.results;
                    this.loading = false;
                }
                else{

                }
            })
        }
    },
}
</script>

<template lang="">
    <AppLoader v-if="loading" />
    <div v-else class="container">
        <div class="row">
            <div class="col-12 col-md-4 mb-5 " v-for="project in projects" :key="project.id">
                <div class="card">
                    <div class="card-body">
                        <img :src="`${baseUrl}/storage/${project.thumb}`" class="card-img-top img-fluid mt-3" alt="{{ project.title }}">
                        <h5 class="card-title text-black mt-3">{{ project.title }}</h5>
                        <a href="{{ project.github }}" target="_blank" class="btn btn-primary mt-3 me-2">GitHub</a>
                        <a href="{{ project.demo }}" target="_blank" class="btn btn-secondary mt-3">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>