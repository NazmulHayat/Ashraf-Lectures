<template>
    <div>
      <v-container>
        <h1 class="faculty-heading">Faculty</h1>
        <p class="caption">Discover exceptional educational content curated by our esteemed faculty, designed to inspire and empower.</p>
        
        <!-- Undergraduate Faculty Section -->
        <v-row v-if="facultyType === 'undergraduate'" class="faculty-section">
          <v-col v-for="(teacher, index) in undergraduateFaculty" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card class="teacher-card">
              <v-img :src="teacher.imageUrl" height="200"></v-img>
              <v-card-title class="teacher-name">{{ teacher.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        
        <!-- Postgraduate Faculty Section -->
        <v-row v-else-if="facultyType === 'postgraduate'" class="faculty-section">
          <v-col v-for="(teacher, index) in postgraduateFaculty" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card class="teacher-card">
              <v-img :src="teacher.imageUrl" height="200"></v-img>
              <v-card-title class="teacher-name">{{ teacher.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        
        <!-- Skill Development Faculty Section -->
        <v-row v-else-if="facultyType === 'skilldev'" class="faculty-section">
          <v-col v-for="(teacher, index) in skillDevFaculty" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card class="teacher-card">
              <v-img :src="teacher.imageUrl" height="200"></v-img>
              <v-card-title class="teacher-name">{{ teacher.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        
        <!-- All Faculty Section -->
        <v-row v-else-if="facultyType === 'all'" class="faculty-section">
          <v-col v-for="(teacher, index) in allFaculty" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card class="teacher-card">
              <v-img :src="teacher.imageUrl" height="200"></v-img>
              <v-card-title class="teacher-name">{{ teacher.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
    
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ShowTeachers',
    props: {
      facultyType: {
        type: String,
        required: true
      }
    },
    data() {
        return {
            undergraduateFaculty: [
                { name: 'John Doe', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { name: 'Jane Smith', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { name: 'Michael Brown', imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
                { name: 'Emily Johnson', imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
                // Add more undergraduate faculty here
            ],
            postgraduateFaculty: [
                { name: 'David Johnson', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
                { name: 'Emily Brown', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
                { name: 'James Wilson', imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
                { name: 'Sophia Miller', imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
                // Add more postgraduate faculty here
            ],
            skillDevFaculty: [
                { name: 'Michael Williams', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
                { name: 'Sarah Davis', imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
                { name: 'Robert Martinez', imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg' },
                { name: 'Jessica Anderson', imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg' },
                // Add more skill development faculty here
            ],
            // Combine all faculty for the 'all' type
            allFaculty: []
        };
    },

    created() {
      // Combine all faculty for the 'all' type
      this.allFaculty = [
        ...this.undergraduateFaculty,
        ...this.postgraduateFaculty,
        ...this.skillDevFaculty
      ];
    }
  });
  </script>
 
<style scoped>
.faculty-heading {
  font-size: 32px; /* Increase font size for heading */
  font-weight: bold;
  margin-bottom: 20px;
}

.caption {
  font-size: 18px; /* Increase font size for caption */
  margin-bottom: 30px;
}

.faculty-section {
  margin-bottom: 30px;
}

.teacher-card {
  margin-bottom: 30px;
}

.teacher-name {
  text-align: center;
  font-weight: bold;
}
</style>