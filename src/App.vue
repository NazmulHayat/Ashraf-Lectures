<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <ftt />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ftt  from './components/Footer-main.vue';



export default {
    name: 'App',
    data: () => ({
    //
    }),
    components: { NavBar, ftt }
}
</script>
