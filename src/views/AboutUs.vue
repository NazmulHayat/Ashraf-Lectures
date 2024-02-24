<template>
    <v-container>
      <!-- About Us Section -->
      <v-row>
        <v-col cols="12">
          <h1 class="display-2 text-center mb-5">About Us</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="your-image-url.jpg" alt="About Us Image" width="100%"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>
              <p class="body-1">
                Insert your about us text here.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" class="white--text">Get in Touch</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Why Choose Ashraf Lectures Section -->
      <v-row class="mt-10">
        <v-col cols="12">
          <h2 class="display-1 text-center mb-5">Why Choose Ashraf Lectures</h2>
          <p class="subtitle-1 text-center mb-10">
            Thank you for considering me as your Lecturer. I believe that my experience, skill, and dedication sets me apart and make me the ideal option for your exams.
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card class="elevation-10">
            <v-card-title class="headline text-center">Expertise</v-card-title>
            <v-card-text>
              <p class="body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card class="elevation-10">
            <v-card-title class="headline text-center">Attention to Detail</v-card-title>
            <v-card-text>
              <p class="body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card class="elevation-10">
            <v-card-title class="headline text-center">Communication</v-card-title>
            <v-card-text>
              <p class="body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card class="elevation-10">
            <v-card-title class="headline text-center">Customer Service</v-card-title>
            <v-card-text>
              <p class="body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  