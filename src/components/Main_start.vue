<template>
    <div class="top-content">
        <div class="txt">
        <div id="one">Exploring the Depths of Medical Knowledge with Doctor Ashraf</div>
        <div id="two">Grow through what you go through with Dr. Ashraf</div>
        </div>

      <button @click="begin">LET'S BEGIN</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      begin() {
        // Handle the "Let's Begin" button click action here
        alert("Let's begin!");
      },
    },
  };
  </script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@400;500;600;700&family=Kantumruy+Pro:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

/* Top Content Container */
.top-content {
  background-image: url('https://mediversebd.com/images/home/bg-hexagons.png') !important;
  background-size: cover, cover; /* Use 'cover' to preserve the original size of the squares */
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  background-color: rgb(129, 202, 228); /* Background color */
  color: #000000; /* Black text color */
  text-align: left; /* Align text to the left */
  padding: 100px;
  position: relative;
}


.txt{
    width: 550px;
    text-overflow: wrap;
    font-family: 'Arima', cursive !important;
    font-weight: bold;
}

#one{
    font-size: 40px;
    margin-bottom: 10px;
}
#two{
    font-family: "Montserrat",sans-serif;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 24px;
    font-weight: 600;
}

.top-content h1 {
  font-size: 36px;
  font-weight: bold; /* Apply bold font weight */
  word-wrap: break-word; /* Allow text to wrap within container */
}

.top-content p {
  font-size: 18px;
  margin-bottom: 30px;
  font-style: italic; /* Apply italic font style */
  word-wrap: break-word; /* Allow text to wrap within container */
}

.top-content button {
  background-color: #414370; /* Button background color similar to Mediverse website */
  color: #fff; /* Button text color similar to Mediverse website */
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  letter-spacing: 2px;
  transition: background-color 0.3s ease;
  font-weight: bold; /* Apply bold font weight */
}

.top-content button:hover {
  background-color: #000000; /* Button hover color similar to Mediverse website */
}

/* Style for the background overlay with color */

/* Responsive styling */
@media (max-width: 768px) {
  .top-content h1 {
    font-size: 28px; /* Adjust font size for smaller screens */
  }

  .top-content p {
    font-size: 16px; /* Adjust font size for smaller screens */
  }
}
</style>
