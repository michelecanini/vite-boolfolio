<script>
import axios from 'axios';

export default {
    name: 'AppMain', 
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
    <div class="container">

    </div>
</template>

<style lang="">
    
</style>