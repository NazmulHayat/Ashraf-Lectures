<template>
  <div id="hash">
    <h1 class="page-heading">What our customers say</h1>
  </div>
  <v-carousel cycle hide-delimiters>
    <v-carousel-item v-for="(review, index) in reviews" :key="index">
      <v-container class="review-container">
        <v-row>
          <v-col cols="12" md="6" id="dum">
            <div class="review-content">
              <div class="review-info">
                <div class="pain">
                  <div class="profile-image">
                    <img :src="review.imageUrl" alt="Profile Image" class="profile-image" />
                  </div>
                  <div class="author-info">
                    <p class="author-name">{{ review.authorName }}</p>
                    <p class="college-name">{{ review.college }}</p>
                  </div>
                </div>
                <div class="quote">
                  <q class="quote-text">{{ review.highlightedQuote }}</q>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="review">
              <p class="review-text">{{ review.reviewText }}</p>
            </div>
          </v-col>
        </v-row>
        <div class="carousel-arrows">
          <v-carousel-control prev color="#007bff"></v-carousel-control>
          <v-carousel-control next color="#007bff"></v-carousel-control>
        </div>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          reviewText: "The most exciting fact was the 24/7 chatbox service! Whenever I had any queries I could ask them in the Whatsapp group and the mentors are so kind that they give answers to each and every question with valid explanations. Also the mentors used to give quizzes on the related topics ( Even the post graduation exam questions too) and it's a great pleasure to solve them as an undergraduate student!",
          authorName: 'John Doe',
          college: "Chittagong Medical College",
          highlightedQuote: "24/7 chatbox service!",
          imageUrl: "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
        },
        {
          reviewText: "Noorjahan Sultana Session-2014-15 FCPS part-1 in Medicine(Cardiology) Review- Instructor conveys his specialized knowledge in the most understandable way with very well-organized PDF with keynotes. As well as this course will be highly recommended if anyone wants to be prepared himself/herself with individualized grooming for FCPS.",
          authorName: 'Jane Smith',
          college: "Monno Medical college and hospital",
          highlightedQuote: "Highly recommended for FCPS!",
          imageUrl: "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
        },
        {
          reviewText: "The most exciting fact was the 24/7 chatbox service! Whenever I had any queries I could ask them in the Whatsapp group and the mentors are so kind that they give answers to each and every question with valid explanations. Also the mentors used to give quizzes on the related topics ( Even the post graduation exam questions too) and it's a great pleasure to solve them as an undergraduate student!",
          authorName: 'Nazmul Hayat',
          college: "Dhaka Medical College",
          highlightedQuote: "Great pleasure to solve quizzes!",
          imageUrl: "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
        },
        {
          reviewText: "Noorjahan Sultana Session-2014-15 FCPS part-1 in Medicine(Cardiology) Review- Instructor conveys his specialized knowledge in the most understandable way with very well-organized PDF with keynotes. As well as this course will be highly recommended if anyone wants to be prepared himself/herself with individualized grooming for FCPS.",
          authorName: 'Michael Jordan',
          college: "Raojan college and hospital",
          highlightedQuote: "Specialized knowledge in an understandable way!"
        },
        // Add more review objects as needed
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@400;500;600;700&family=Kantumruy+Pro:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

#hash {
  padding-top: 100px;
  text-align: center;
}

.page-heading {
  font-family: 'Arima', cursive !important;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
}

.review-container {
  padding: 20px;
  background-color: #fff;
}

.review-content {
  text-align: left;
}

.review-info {
  display: flex;
  flex-direction: column;
  align-self: center !important;
  height: 100%;
}

#dum{
  align-self: center !important;
}

.quote {
  text-align: left;
  margin-top: 20px;
}

.author-name {
  font-size: 28px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}

.college-name {
  font-size: 20px;
  color: #007bff;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
}

.quote-symbol {
  font-size: 36px;
  color: #007bff;
}

.quote-text {
  font-size: 28px;
  font-weight: bold;
  color: #007bff;
  font-family: "Montserrat", sans-serif;
}

.review {
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.review-text {
  font-size: 24px;
  font-weight: normal;
  line-height: 1.5;
  font-family: "Montserrat", sans-serif;
}

.carousel-arrows {
  text-align: center;
  margin-top: 20px;
}

.review-info {
  display: flex;
  align-items: left;
}

.author-info {
  display: flex;
  flex-direction: column;
  margin-left: 20px; /* Add spacing between author info and profile image */
}
.profile-image {
  width: 80px; /* Adjust the size as needed */
  height: 80px; /* Adjust the size as needed */
  border-radius: 50%; /* Makes it circular */
  border: 2px solid #007bff; /* Adds an outline with the desired color */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Center and cover the image within the container */
}

.pain{
  display: flex;
  flex-direction: row;
}

</style>
