<template>
  <v-container style="height:100%" fluid text-center>
    <v-layout style="height:100%" wrap>
      <v-flex xs12>
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-34">Account Sign Up</span>

            <div
              class="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
              data-validate="Required email"
            >
              <input id="first-name" class="input100" type="text" name="email" placeholder="Email" />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
              data-validate="Required password"
            >
              <input class="input100" type="password" name="pass" placeholder="Password" />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
              data-validate="Password not matched"
            >
              <input class="input100" type="password" name="pass" placeholder="Retype password" />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Sign up</button>
            </div>

            <div class="w-full text-center">
              <router-link to="/login" class="txt3">Login</router-link>
            </div>
          </form>

          <div class="login100-more" style="background-image: url('/signup.jpg');"></div>
        </div>
      </v-flex>
    </v-layout>

    <!-- <v-card
    class="mx-auto"
    style="width: 100%;padding: 30px;text-align: left;"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider style="margin-top: 15px;margin-bottom: 25px;"></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
    </v-card>-->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    }
  }
};
</script>


<style scoped>
@import "/login.css";

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.login100-form {
  padding: 5%;
}
.input100 {
  padding: 0 25px;
}
a {
}
.txt2,
.txt3 {
  color: #555555;
}
</style>