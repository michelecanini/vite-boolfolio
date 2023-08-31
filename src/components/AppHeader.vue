

<script>

export default {
    name: 'AppHeader', 
    data() {
        return {
            menuItems: [
                {
                    label: 'HomePage',
                    routeName: 'home'
                },
                {
                    label: 'Project',
                    routeName: 'projects'
                },
                {
                    label: 'About'
                },
                {
                    label: 'Types'
                },
                {
                    label: 'Technologies'
                },
                {
                    label: 'Contact'
                },
                
            ]
        }
    },
    created() {
        
    },
    methods: {
        
    },
}
</script>

<template lang="">
    
            <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-md">
            <a class="navbar-brand" href="#">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                    <a class="nav-link" href="#">{{ item.label }}</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        
</template>

<style lang="">
    
</style>
