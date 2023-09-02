<script>

import AppLoader from '../components/AppLoader.vue';
import AppJumbotron from '../components/AppJumbotron.vue';

import axios from 'axios';

export default {
    name: 'ProjectList', 
    components:{
        AppLoader,
        AppJumbotron
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            projects: '[]',
            loading: true,
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(num_page){
            this.loading = true;

            axios.get(`${this.baseUrl}/api/projects`, {params: {page: num_page}}).then ((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.loading = false;
            });

            // CHIAMATA SENZA PAGINAZIONE (NO PARAMETRI)
            //axios.get(`${this.baseUrl}/api/projects`).then((response) => {
            //    if (response.data.success){

            //        this.projects = response.data.results; SENZA PAGINAZIONE
            //        this.projects = response.data.results.data; // CON PAGINAZIONE
            //        this.loading = false;
            //  }
            //  else{

        },
        truncateText(text){
            if (text.length > 50){
                return text.substr(0,90) + '...';
            }
            return text;
        }
    },
}


</script>

<template lang="">

    <div>
     <AppJumbotron />
    </div>

    <AppLoader v-if="loading" />
    <div v-else class="container">
        <div class="row">
            <div class="col-12 col-md-4 mb-5 " v-for="project in projects" :key="project.id">
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="text-end"><span class="badge text-bg-info">{{ project.type.name }}</span></div>
                        <img :src="`${baseUrl}/storage/${project.thumb}`" class="card-img-top img-fluid mt-1" alt="{{ project.title }}">
                        <h5 class="card-title text-black mt-3">{{ project.title }}</h5>
                        <div><span class="badge text-bg-warning me-1" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</span></div>
                        <p class=" text-black mt-3">{{ truncateText(project.description) }}</p>      
                        <a :href="project.github" target="_blank" class="btn btn-primary mt-3 me-2">GitHub</a>
                        <a :href="project.demo" target="_blank" class="btn btn-secondary mt-3">Demo</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <nav>
                        <ul class="pagination">
                            <li :class="currentPage === 1 ? 'disabled' : ''">
                                <button type="button" class="page-link" @click="getProjects(currentPage - 1)"><i class="fa-solid fa-angles-left"></i> Progetti Precedenti</button>
                            </li>
                            <li :class="currentPage === lastPage ? 'disabled' : ''">
                                <button type="button" class="page-link" @click="getProjects(currentPage + 1)">Progetti Successivi <i class="fa-solid fa-angles-right"></i></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>