<template>
  <v-footer dark color="#2d344d">
    <v-container class="mt-4 pt-4">
      <v-row justify="center">
        <!-- Center columns -->
        <v-col cols="12" md="4"
          ><div id="cen">
            <h2 class="footer-header">Ashraf Lectures</h2>
            <div class="subheading-container">
              <a href="#" class="footer-link">
                <h3 class="subheading">Privacy</h3>
              </a>
              <a href="#" class="footer-link">
                <h3 class="subheading">Terms and Conditions</h3>
              </a>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4"
          ><div id="cen">
            <h3 class="follow-us-header">Follow us on:</h3>
            <div class="social-icons">
              <a href="#" class="footer-link">
                <v-icon size="24">mdi-twitter</v-icon>
                <!-- Use icons for Follow Us -->
              </a>
              <a href="#" class="footer-link">
                <v-icon size="24">mdi-gmail</v-icon>
                <!-- Use icons for Follow Us -->
              </a>
              <a href="#" class="footer-link">
                <v-icon size="24">mdi-youtube</v-icon>
                <!-- Use icons for Follow Us -->
              </a>
              <a href="#" class="footer-link">
                <v-icon size="24">mdi-facebook</v-icon>
                <!-- Use icons for Follow Us -->
              </a>
              <a href="#" class="footer-link">
                <v-icon size="24">mdi-whatsapp</v-icon>
                <!-- Use icons for Follow Us -->
              </a>
              <!-- Add more social media links with icons here -->
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4"
          ><div id="cen">
            <h3 class="contact-header">Contact Us</h3>
            <!-- Add your contact information here -->
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
          </div></v-col
        >
      </v-row>

      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <p class="copyright">
            &copy; {{ new Date().getFullYear() }} Ashraf Lectures. All rights
            reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
#cen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
}

.footer-link {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.footer-link:hover {
  color: #42a5f5;
}

.subheading {
  font-size: 18px;
  margin-top: 5px;
}

.footer-header {
  font-size: 24px;
  color: #fff;
  text-align: left;
}

.contact-column {
  text-align: center;
  margin-top: 20px;
}

.contact-header {
  font-size: 24px;
  color: #fff;
  text-align: left !important;
}

.follow-us-column {
  text-align: center;
  margin-top: 20px;
}

.follow-us-header {
  font-size: 24px;
  color: #fff;
}

.social-icons a {
  display: inline-block;
  margin-right: 20px;
}

.social-icons v-icon {
  color: #fff;
  font-size: 24px;
}

.copyright {
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
}
</style>
