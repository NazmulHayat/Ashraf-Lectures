<template>
    <title_view />
    <div id="spc"></div>
    <ftt />
</template>


<script>
import { defineComponent } from 'vue';

// Components
import title_view from '../components/title_view.vue';
import ftt from '../components/Footer-main.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    title_view, ftt
  },
});
</script>

<style scoped>

#spc{
  padding: 170px;
}

</style>
