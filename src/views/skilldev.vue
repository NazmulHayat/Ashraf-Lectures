<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center category-header-container">
            <h1 class="category-header">Category: Skill Development</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="course in courses" :key="course.id" cols="12" sm="6" md="4" lg="3">
            <v-hover v-slot="{ hover }">
              <v-card :class="{ 'elevation-12': hover }" class="course-card">
                <v-img id="c" :src="course.imageUrl"></v-img>
                <v-card-subtitle class="mt-4 mb-2">{{ course.date }}</v-card-subtitle>
                <v-card-title class="mb-2 font-weight-bold multi-line-title">{{ course.title }}</v-card-title>
                <v-card-text>{{ truncateDescription(course.description) }}</v-card-text>
                <v-btn class="read-more-btn" text @click="redirectToCourse(course.id)">Read More</v-btn>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <showteachers :facultyType="'skilldev'" />
      </v-container>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import router from '@/router';
  import showteachers from '../components/show-teachers.vue';


  
  export default defineComponent({
    name: 'HomeView',
    components: {
      showteachers
    },
    data() {
      return {
        courses: this.generateRandomCourses(),
      };
    },
    methods: {
      generateRandomCourses() {
        const titles = [
          'Human Anatomy and Physiology',
          'Advanced Medical Imaging ',
          'Introduction to Human Biology',
          'Neuroscience: Exploring the Brain',
          'Pathophysiology in Health and Disease',
          'Clinical Medicine: From Theory to Practice',
          'Biochemistry Essentials',
          'Ethical Dilemmas in Medicine',
          'Immunology and Disease Prevention',
        ];
  
        const getRandomTitle = () => {
          const titlescopy = [...titles];
          const randomIndex = Math.floor(Math.random() * titlescopy.length);
          return titlescopy.splice(randomIndex, 1)[0];
        };
  
        const descriptions = [
          'Explore the intricacies of the human body and its functions in this comprehensive course.',
          'Discover the world of medical imaging techniques and technologies with hands-on experience.',
          'Study the fundamental concepts of human biology and genetics in an engaging learning environment.',
          'Dive into the complexities of the human nervous system and its role in health and disease.',
          'Understand the mechanisms of diseases and their effects on the body through real-world case studies.',
          'Learn about the practice of medicine in a clinical setting with experienced professionals.',
          'Explore the chemical processes within living organisms and their impact on health.',
          'Discuss ethical considerations in the field of medicine and how they shape medical practices.',
          'Study the immune system and its role in health and disease, with a focus on recent advancements.',
        ];
  
        const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
        return Array.from({ length: 9 }, (_, index) => ({
          id: index + 1,
          imageUrl: `https://source.unsplash.com/600x400/?${getRandomTitle()}`,
          date: this.generateRandomDate(),
          title: getRandomTitle(),
          description: getRandomElement(descriptions),
        }));
      },
      generateRandomDate() {
        const start = new Date(2022, 0, 1); // January 1, 2022
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDate.toDateString();
      },
      redirectToCourse(courseId) {
        // Add logic to redirect to the detailed course page
        router.push({ name: 'course-details'});
        console.log(`Redirecting to course ${courseId}`);
      },
      truncateDescription(description) {
        const maxLength = 150; // Set your desired maximum length for description
        return description.length > maxLength ? description.slice(0, maxLength) + '....' : description;
      },  
    },
  });
  </script>
  <style scoped>
  .category-header-container {
    margin: 20px 0;
    padding: 10px 0;
    background-color: #00897B; /* Change to a color that suits your design */
    color: #fff;
    width: 100%;
  }
  
  .category-header {
    font-size: 28px;
    margin: 0;
  }
  
  .course-card {
    margin-bottom: 30px;
    transition: box-shadow 0.3s;
    overflow: hidden;
  }
  
  .course-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  #imgimg {
    object-fit: cover !important;
    height: 250px; /* Adjust this value based on your design preference */
  }
  
  .v-card-title {
    font-family: 'Montserrat', sans-serif; /* Make sure to load the Montserrat font in your project */
    color: #3954A1;
    font-weight: bold;
    white-space: normal; /* Allow multiple lines for title */
    overflow: hidden;
  }
  
  .v-card-subtitle {
    color: #546E7A;
    font-weight: normal;
  }
  
  .v-card-text {
    color: #455A64;
    font-weight: normal;
  }
  
  .read-more-btn {
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 15px; /* Adjust margin based on your design preference */
    background-color: #009688; /* Medishark-like color */
    color: #ffffff; /* Text color */
    border: none;
    transition: background-color 0.3s;
  }
  
  .read-more-btn:hover {
    background-color: #00796B; /* Medishark-like hover color */
  }
  
  /* Add any additional styling here */
  </style>
  