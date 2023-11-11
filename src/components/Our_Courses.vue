<template>
  <div class="courses-section">
    <div class="courses-content">
      <div id="tit">Our Courses</div>
      <v-container fluid>
        <v-row justify="center" align="center">
          <!-- Card 1 -->
          <v-col cols="12" sm="6" md="4" lg="3" class="mx-4">
            <router-link to="/category/undergraduate" class="custom-link">
              <v-card class="pa-4 text-center card-hover" elevation="10">
                <!-- Centered badge icon -->
                <v-img src="../assets/skill-logo.png" max-height="120" class="mx-auto mt-4" />

                <!-- Card text below the image, centered with padding -->
                <v-card-text class="courses-text">
                  Undergraduate
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>

          <!-- Card 2 -->
          <v-col cols="12" sm="6" md="4" lg="3" class="mx-4">
            <router-link to="/category/postgraduate" class="custom-link">
              <v-card class="pa-4 text-center card-hover" elevation="10">
                <!-- Centered badge icon -->
                <v-img src="../assets/smart-nigga.png" max-height="120" class="mx-auto mt-4" />

                <!-- Card text below the image, centered with padding -->
                <v-card-text class="courses-text">
                  Postgraduate
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>

          <!-- Card 3 -->
          <v-col cols="12" sm="6" md="4" lg="3" class="mx-4">
            <router-link to="/category/skilldev" class="custom-link">
              <v-card class="pa-4 text-center card-hover" elevation="10">
                <!-- Centered badge icon -->
                <v-img src="../assets/handshake.png" max-height="120" class="mx-auto mt-4" />

                <!-- Card text below the image, centered with padding -->
                <v-card-text class="courses-text">
                  Skill Development
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesSection'
}
</script>

<style scoped>
/* Remove underline from router-link text */
.custom-link {
  text-decoration: none;
}

/* Add hover effect for cards */
.card-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.courses-section {
  background-image: url('../assets/bg_bg.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #000000;
  text-align: center;
  padding: 70px 0;
  padding-left: 50px;
  padding-right: 50px;
}

.courses-content {
  padding: 20px;
  border-radius: 5px;
}

h2 {
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "Montserrat",sans-serif;
  font-weight: bold;
}

p {
  font-size: 22px;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif !important;
  padding-bottom: 20px;
}

.courses-text {
  font-weight: bold;
  font-size: 25px;
  padding-top: 35px;
  white-space: normal; /* Allow multiple lines */
}

.btn {
  background-color: #414370;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.btn:hover {
  background-color: #000000;
}

#tit{   
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 30px;
  font-family: 'Arima', cursive !important;
}

/* Responsive styling */
@media (max-width: 768px) {
  h2 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }
}
</style>
