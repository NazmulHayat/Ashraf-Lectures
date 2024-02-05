<template>
    <div class="channel-section">
      <div class="content mr-4 pr-4">
        <div class="title">{{ title }}</div>
        <button class="channel-btn" v-if="!isMobile">Check out the channel</button>
      </div>
      <div class="video-preview">
        <iframe
          width="100%"
          :height="calculateAspectRatio()"
          :src="videoUrl"
          title="YouTube Video Preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "A Glimpse into Dr. Ashraf Lectures",
        videoUrl: "https://www.youtube.com/embed/PwL-McFRDd8",
        isMobile: false,
      };
    },
    methods: {
      calculateAspectRatio() {
        // Assuming the aspect ratio is 16:9
        return ((9 / 16) * 100).toFixed(2) + "%";
      },
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      },
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    },
  };
  </script>
  
  <style scoped>
  .channel-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 70px 30px 0px 30px;
  }
  
  .content {
    text-align: center;
  }
  
  .title {
    font-family: 'Montserrat', sans-serif;
    color: rgb(47, 47, 118);
    font-size: 2.5rem; /* Adjust the font size as needed */
    font-weight: 700; /* Bold */
    margin-bottom: 20px;
  }
  
  .channel-btn {
    background-color: rgb(47, 47, 118);;
    color: #fff;
    padding: 10px 20px;
    border: none;
    font-family: bold;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }
  
  .channel-btn:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(242, 239, 239);
  }
  
  .video-preview {
    width: 100%;
    max-width: 800px;
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 30%; /* Adjust the aspect ratio */
  }
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px; /* Add border-radius for rounded corners */
  }
  
  @media screen and (max-width: 1300px) {
    .title{
        font-size: 1.5rem;
    }
    .channel-btn{
        font-size: 0.75rem;;
    }
  }

  @media screen and (max-width: 1000px) {
    .channel-section {
      flex-direction: column;;
    }
    .video-preview{
        padding-bottom: 50%;
    }
  
    .channel-btn {
      display: none; /* Hide button for small screens */
    }
  }
  </style>
  