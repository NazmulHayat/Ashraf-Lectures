<!-- src/components/RegistrationForm.vue -->

<template>
    <NavBar />
    <v-container class="login_big_box">
      <v-card class="login" elevation="24">
        <div class="login_tit"> Ashraf's Lectures </div>
        <div class="card flex flex-column align-items-center">
          <v-text-field
           v-model="email"
           color="blue"
           variant="outlined"
           :rules="[rules.required]"
           label="Email"
           hide-details
           class="px-4 mx-2 py-2 mb-3"
          ></v-text-field>
            <v-text-field
            v-model="password"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            variant="outlined"
            @click:append="show1 = !show1"
            color="blue"
            class="px-4 mx-2 py-2 mb-1"
            ></v-text-field>
          <div class="final mb-4 mx-2 px-4">
            <button type="submit" class="py-2 btn btn-primary" :disabled="!termsChecked">LOGIN</button>
          </div>
          <div class="login_help mx-4 pl-2 mb-4 pb-2 pt-3">
            <a id="forgot" href="https://www.example.com/terms"> Forgot Password? </a>
            <div id="not_registered"> Not Registerd? 
                <a id="signupagain" href="https://www.example.com/terms"> Sign Up </a>
            </div>
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
.login_big_box{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.login{
    height: auto;
    width: 450px;
}
.login_tit{
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    padding: 30px;
    font-size: 25px;
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
    width: 100%;
    border-radius: 3px;
    transition: background-color 0.3s; /* Add smooth transition effect */
  }
  
  .btn-primary:hover {
    background-color: rgb(39, 184, 39); /* Lighter green on hover */
  }
  #forgot, #not_registered, #signupagain{
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
  </style>
  