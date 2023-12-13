<template>
      <v-navigation-drawer app v-model="drawer" temporary>
        <v-list dense>
          <v-list-item v-for="(item, index) in drawerItems" :key="index">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content> 
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
    <v-app-bar app class="app-bar">
        <!--<v-app-bar-nav-icon id="menue-icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <div id="title" class="pr-4"> Ashraf's Lectures </div>
        <div class="pl-2 pt-1">
            <v-col>
                <v-btn id="nav_btn_1" v-for="(item, index) in navItems" :key="index" :href="item.path" text>
                {{ item.text }}
                </v-btn>
            </v-col>
        </div>
        <v-spacer></v-spacer>
        <div class="reg pt-1">
          <router-link to="/login" style="text-decoration: none; color: inherit;">
            <v-btn id="login"> LOGIN </v-btn>
          </router-link>
          <router-link to="/registration" style="text-decoration: none; color: inherit;">
            <v-btn variant="outlined" id="signup" :to="registration"> SIGN UP </v-btn>
          </router-link>
        </div>
    </v-app-bar>

  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        drawerItems: [
          { text: 'Home', icon: 'mdi-home' },
          { text: 'About Us', icon: 'mdi-information' },
          { text: 'Courses', icon: 'mdi-briefcase' },
        ],
        navItems: [
          { text: 'Home', path: '/' },
          { text: 'About Us', path: '/' },
          { text: 'Courses', path: '/all-courses' },
        ],
      };
    },
  };
  </script>
  
 <style src="./NavBar.css"></style>