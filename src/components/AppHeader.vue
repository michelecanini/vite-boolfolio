

<script>
export default {
    name: 'AppHeader', 
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        
    },
}
</script>

<template lang="">

    <header>
        <nav class="navbar navbar-expand-md navbar-light shadow-sm bg-light">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="{{ url('/') }}">
                    <div>
                        <!--logo-->
                        <div>Boolfolio</div>
                        <!--mobile-logo
                        <img src="./img/mobile-logo.png" alt="logo" class="mobile_logo"> -->
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item">
                        
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<style lang="">
    
</style>