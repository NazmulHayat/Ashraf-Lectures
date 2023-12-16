<template>
  <div class="course_title">
    <div id="course_title_txt">Course Title</div>
    <div id="teacher_name">Teacher</div>
    <div id="enrolled_num">Total Enrolled Number</div>
  </div>
  <div class="main-area">
    <div id="about_course">About the Course</div>
    <div id="about_title">About title About title About title</div>
  </div>
  <div class="requirements">
    <div id="require_txt">Requirements</div>
    <div id="require_row">
      <div id="blt"> • </div>
      <div id="listi">Lorem ipsum</div>
    </div>
    <div id="require_row">
      <div id="blt"> • </div>
      <div id="listi">Lorem ipsum</div>
    </div>
    <div id="require_row">
      <div id="blt"> • </div>
      <div id="listi">Lorem ipsum</div>
    </div>
    <div id="require_row">
      <div id="blt"> • </div>
      <div id="listi">Lorem ipsum</div>
    </div>
  </div>
  <div class="curriculum">
    <div id="cur_txt">Curriculum</div>
      <v-expansion-panels class="pt-3 panel">
        <v-expansion-panel v-for="(qa, index) in FAQs"  :key="index">
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            {{ qa.q }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{ qa.a }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
  </div>

  <v-card :loading="loading" class="crd mx-auto my-12" max-width="574">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-item>
      <v-card-title>Course Title</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Rating</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly size="small"></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Time Range</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection" @change="updatePrice">
        <v-chip value="1">1 Month</v-chip>
        <v-chip value="3">3 Months</v-chip>
        <v-chip value="6">6 Months</v-chip>
      </v-chip-group>
    </div>

    <div class="pb-4">
      <v-card-title>Price: {{ getPrice }}</v-card-title>
    </div>


    <v-card class="ins-card mx-4 my-4 px-4" max-width="374">
      <v-row class="my-4 mx-1">
        <v-icon class="mdi mdi-account mr-2"></v-icon> <!-- MDI icon for Level -->
        <div class="crd-title">Level</div>
        <v-spacer />
        <div class="crd-sub">Intermediate</div>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-row class="my-4 mx-1">
        <v-icon class="mdi mdi-play-circle mr-2"></v-icon> <!-- MDI icon for Lectures -->
        <div class="crd-title">Lectures</div>
        <v-spacer />
        <div class="crd-sub">17 lectures</div>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-row class="my-4 mx-1">
        <v-icon class="mdi mdi-atom mr-2"></v-icon> <!-- MDI icon for Subject -->
        <div class="crd-title">Subject</div>
        <v-spacer />
        <div class="crd-sub">Surgery</div>
      </v-row>

      <v-col class="my-4 mx-1">
        <v-col>
          <v-btn class="mx-auto" width="200">
            <v-icon class="pr-4">mdi-cart</v-icon> <!-- Shopping cart icon for Enroll -->
            Enroll
          </v-btn>
        </v-col>
        <v-col>
          <v-btn width="200">
            <v-icon class="pr-4">mdi-heart</v-icon> <!-- Heart icon for Wishlist -->
            Add to wishlist
          </v-btn>
        </v-col>
      </v-col>

      <v-row class="my-4 py-4 mx-4" justify="center">
        <v-btn class="mr-2" icon href="https://facebook.com">
          <v-icon>mdi-facebook</v-icon> <!-- Facebook icon -->
        </v-btn>
        <v-btn class="mr-2" icon href="https://twitter.com">
          <v-icon>mdi-twitter</v-icon> <!-- Twitter icon -->
        </v-btn>
        <v-btn icon href="https://instagram.com">
          <v-icon>mdi-instagram</v-icon> <!-- Instagram icon -->
        </v-btn>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    selectedAnswer: null,
    FAQs: [

      {
        q: "Who is eligible to participate?",
        a: "All students from grade 9 to grade 12 are eligible to participate.",
      },
      {
        q: "What if I don’t know how to code?",
        a: "Not a problem. It’s absolutely okay if you don’t have prior technology experience or programming prerequisites before coming, it’s more about your interest in making a jumpstart in technology. We will have workshops & experienced mentors to guide you through the whole process and hopefully, it will be exciting for your first foray into the world of technology.",
      },
      {
        q: "How much will it cost to participate in the event?",
        a: "Thanks to our wonderful sponsors, participating is completely free of cost. We hope everyone who wants to participate can participate.",
      },
      {
        q: "Do I need to prepare anything before the competition?",
        a: "All you need is a device and a good internet connection, and the world is yours to conquer.",
      },
    ]
  }),

  computed: {
    getPrice() {
      // Define your price logic based on the selected time range
      switch (parseInt(this.selection)) {
        case 1:
          return "$10"; // Replace this with your actual price for 1 Month
        case 3:
          return "$25"; // Replace this with your actual price for 3 Months
        case 6:
          return "$45"; // Replace this with your actual price for 6 Months
        default:
          return "$0";
      }
    },
  },

  methods: {
    updatePrice() {
      // You can perform additional actions when the selection changes
      // For example, update other data properties or make API calls
    },
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    toggleAnswer(index) {
      this.$set(this.FAQs, index, { ...this.FAQs[index], showAnswer: !this.FAQs[index].showAnswer });
    },
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@400;500;600;700&family=Kantumruy+Pro:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

.course_title {
  background-color: rgba(245, 247, 254, 255);
  padding-left: 50px;
  padding-top: 35px;
  padding-bottom: 90px;

}

#course_title_txt {
  font-size: 50px;
  font-weight: bold;
}

#teacher_name {
  font-size: 30px;
  font-weight: 500;
}

#enrolled_num {
  font-size: 25px;
  font-weight: 400
}

.main-area {
  padding-top: 60px;
  padding-left: 50px;
}

#about_course {
  font-size: 30px;
  font-weight: 700;
}

#about_title {
  font-size: 23px;
  font-weight: 400;
  padding-top: 10px;
}

.requirements {
  padding-top: 40px;
  padding-left: 50px;
}

#require_txt {
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 5px;
}

#require_row {
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
}

.text {
  display: inline-block;
  /* display : flex;
        justify-content: center; */
}

#listi {
  font-size: 23px;
  font-weight: 500;
}

#blt {
  font-size: 30px;
  font-weight: bold;
  padding-right: 10px;
}

.curriculum {
  padding-top: 50px;
  padding-left: 50px;
}

.panel{
  max-width: 1000px;
}

#cur_txt {
  font-size: 30px;
  font-weight: 700;
}


.crd {
  position: absolute;
  top: 4%;
  right: 5%;
}

#log {
  text-align: left;
}

.ins-card {
  background-color: rgb(241, 227, 227) !important;
}

.crd-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: rgb(17, 16, 16);
  font-size: 15px;
}

.crd-sub {
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  color: rgb(38, 33, 33);
  font-size: 15px;
}

.crd-title {
  margin-left: 8px;
  /* Adjust the margin as needed */
}
</style>