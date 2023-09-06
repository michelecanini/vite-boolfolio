

<script>

export default {
    name: 'AppHeader', 
    data() {
        return {
            menuItems: [
                //{
                //    label: 'Home',
                //    routeName: 'home'
                //},
                {
                    label: 'Projects',
                    routeName: 'projects'
                },
                {
                    label: 'About',
                    routeName: 'about'
                },
                {
                    label: 'Types',
                    routeName: 'types'
                },
                {
                    label: 'Contact',
                    routeName: 'contact'
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
    
    <nav class="navbar navbar-expand-lg bg-light border-bottom">
        <div class="container-md">
            <a class="navbar-brand" href="/">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link class="nav-link" :to="{ name: item.routeName }">{{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
</template>

<style lang="">
    
</style>
