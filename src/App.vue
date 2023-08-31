<script>
import AppHeader from './components/AppHeader.vue';
//import AppJumbotron from './components/AppJumbotron.vue';
//import AppMain from './components/AppMain.vue';
//import AppFooter from './components/AppFooter.vue';

export default {
  components:{
    AppHeader,
    //AppJumbotron,
    //AppMain,
    //AppFooter,
  }
}

</script>

<template>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,800&display=swap" rel="stylesheet">
        <!-- Fontawesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>