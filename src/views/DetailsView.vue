<template>
    <title_view />
    <div id="spc"></div>
</template>


<script>
import { defineComponent } from 'vue';

// Components
import title_view from '../components/title_view.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    title_view
  },
});
</script>

<style scoped>

#spc{
  padding: 170px;
}

</style>
