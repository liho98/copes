<template>
  <v-container style="height:100%" fluid text-center>
    <v-layout style="height:100%" wrap>
      <v-flex xs12>
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-34">Account Login</span>

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

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Sign in</button>
            </div>

            <div class="w-full text-center p-t-27 p-b-239">
              <span class="txt1">Forgot </span>

              <a href="#" class="txt2">email or password?</a>
            </div>
      
            <div class="w-full text-center">
              <router-link to="/signup" class="txt3">Sign Up</router-link>
            </div>
          </form>

          <div class="login100-more" style="background-image: url('/login.jpg');"></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>


<style scoped>
@import '/login.css';

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
  a{
  }
  .txt2, .txt3 {
    color: #555555;
  }
</style>