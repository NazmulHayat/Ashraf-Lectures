<template>
  <NavBar />
  <Main_start />
  <Our_Courses />
  <ReviewSection />
  <ftt />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import Main_start from '@/components/Main_start.vue';
import Our_Courses from '../components/Our_Courses.vue';
import ReviewSection from '../components/ReviewSection.vue';
import ftt from '../components/Footer-main.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    Main_start,
    Our_Courses,
    ReviewSection,
    ftt
  },
});
</script>
