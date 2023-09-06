<script>

import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
//import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  
  components:{
    AppHeader,
    AppJumbotron,
    //AppMain,
    AppFooter,
  },

};

</script>

<template>
      <div>
        <AppHeader />
        <!--<AppJumbotron />-->
        <router-view></router-view>
        <AppFooter />
      </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>