<!-- src/components/RegistrationForm.vue -->

<template>
  <NavBar />
  <v-container class="reg_big_box">
    <v-card class="reg" elevation="24">
      <div class="reg_tit"> REGISTER NOW! </div>
      <div class="card flex flex-column align-items-center gap-3">
        <v-text-field
         v-model="first"
         variant="outlined"
         color="blue"
         :rules="[rules.required]"
         label="First Name"
         hide-details
         class="px-4 mx-2 pb-2 mb-3"
        ></v-text-field>
        <v-text-field
         v-model="last"
         variant="outlined"
         color="blue"
         :rules="[rules.required]"
         label="Last Name"
         hide-details
         class="px-4 mx-2 py-2 mb-3"
        ></v-text-field>
        <v-text-field
         v-model="email"
         color="blue"
         variant="outlined"
         :rules="[rules.required]"
         label="Email"
         hide-details
         class="px-4 mx-2 py-2 mb-3"
        ></v-text-field>
        <v-row class="pt-2 mx-4">
          <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          variant="outlined"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          color="blue"
          class="pl-2 pr-4 mr-3 py-2"
          ></v-text-field>
          <v-text-field
          v-model="confirm_password"
          :rules="[rules.required, rules.match]"
          :type="show1 ? 'text' : 'password'"
          label="Confirm Password"
          variant="outlined"
          counter
          color="blue"
          class="pr-2 py-2"
          ></v-text-field>
        </v-row>
        <v-row id="checkbox" class="px-4 pb-2 mb-4" justify="center">
          <input type="checkbox" id="termsCheckbox" v-model="termsChecked" class="custom-checkbox" />
          <label for="termsCheckbox" class="custom-label">
            I Read and Accept
            <a href="https://www.example.com/terms" target="_blank" class="terms-link">Terms and Conditions</a>
          </label>
        </v-row>
        <div class="final mb-4 pb-4">
          <button type="submit" class="btn btn-primary" :disabled="!termsChecked">SIGN UP</button>
        </div>
      </div>
    </v-card>
  </v-container>
  <ftt />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import ftt from '../components/Footer-main.vue';
export default {
  components: {
    NavBar,
    ftt
  },
  data() {
    return {
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      show1: false,
      show2: true,
      rules: {
        required: value => !!value || 'Required.',
        min:v => v.length >= 8 || 'Min 8 characters',
        match: v => v == this.password || 'Passwords do not match',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },
  methods: {
    submitForm() {
      // Implement your registration logic here
      console.log('Registration submitted:', this.first, this.last, this.email, this.password);
    },
  },
};
</script>

<style scoped>  
  .reg_big_box{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .reg{
    height: auto;
    width: 550px;
  }
  .reg_tit{
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    padding: 30px;
    font-size: 25px;
  }
  .checkbox_txt{
    font-size: 20px;
  }
  .custom-checkbox {
  margin-right: 10px; /* Add padding to the right of the checkbox */
  transform: scale(1.5); /* Increase the size of the checkbox */
}

.custom-label {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  font-family: 900;
  align-items: center;
  font-size: 17px; /* Increase the font size of the label text */
}

.terms-link {
  margin-left: 5px; /* Add spacing between "Terms and Conditions" and the link */
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}
.final{
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-primary {
  background-color: #237687; /* Darker green */
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 3px;
  transition: background-color 0.3s; /* Add smooth transition effect */
}

.btn-primary:hover {
  background-color: rgb(39, 184, 39); /* Lighter green on hover */
}
</style>
