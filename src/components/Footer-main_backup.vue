<template>\
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="https://mediversebd.com/images/logo.png" alt="Mediverse Logo" />
      </div>
      <div class="footer-links">
        <a v-for="(link, index) in links" :key="index" :href="link.url" class="footer-link">{{ link.text }}</a>
      </div>
      <div class="social-icons">
        <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.url" class="social-icon">
          <i :class="icon.iconClass"></i>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; {{ currentYear }} Mediverse. All rights reserved.
    </div>
  </footer> 
</template> 

<script>
export default {
  name: 'ftt',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      links: [
        { text: 'Home', url: '#' },
        { text: 'About', url: '#' },
        { text: 'Services', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Contact', url: '#' },
      ],
      socialIcons: [
        { iconClass: 'fab fa-facebook', url: '#' },
        { iconClass: 'fab fa-twitter', url: '#' },
        { iconClass: 'fab fa-linkedin', url: '#' },
        { iconClass: 'fab fa-instagram', url: '#' },
      ],
    };
  },
};
</script>

<style scoped>
/* Footer Container */
.footer {
  background-color: #343a40; /* Background color similar to Mediverse */
  color: #ffffff; /* Text color */
  font-family: 'Montserrat', sans-serif; /* Use a Google Font or import the desired font */
  padding: 50px 0;
}

/* Footer Content Container */
.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer Logo */
.footer-logo img {
  width: 150px; /* Adjust the logo size as needed */
}

/* Footer Links */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #007bff; /* Hover color similar to Mediverse */
}

/* Footer Social Icons */
.social-icons {
  margin-top: 20px;
}

.social-icon {
  font-size: 24px;
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #007bff; /* Hover color similar to Mediverse */
}

/* Footer Bottom Text */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
}
</style>



