<template>
  <Main_start />
  <Our_Courses />
  <Youtube_link />
  <ReviewSection />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Main_start from '@/components/Main_start.vue';
import Our_Courses from '../components/Our_Courses.vue';
import ReviewSection from '../components/ReviewSection.vue';
import Youtube_link from '../components/Youtube_link.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Main_start,
    Our_Courses,
    ReviewSection,
    Youtube_link
  },
});
</script>