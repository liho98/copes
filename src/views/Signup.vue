<template>
  <v-container style="height:100%" fluid text-center>
    <v-layout style="height:100%" wrap>
      <v-flex xs12>
        <div class="wrap-login100">
          <v-dialog v-model="dialog" width="370" style="height:300px" origin persistent>
            <v-progress-linear absolute indeterminate top style="z-index: 2;" color="primary"></v-progress-linear>
            <v-layout justify-center>
              <v-card width="370" style="height:300px">
                <v-container fluid>
                  <v-layout column>
                    <v-flex xs12>
                      <div style="height: 300px;">
                        <v-layout align-center justify-center column fill-height>
                          <v-icon class="ma-10 mt-0" color="green" size="50">check_circle</v-icon>
                          <v-subheader
                            style="font-size:15px"
                          >Your account have been created successfully.</v-subheader>
                        </v-layout>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-layout>
          </v-dialog>

          <span class="login100-form validate-form">
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
              <button
                :disabled="dialog"
                :loading="dialog"
                @click="login('email')"
                class="login100-form-btn"
              >Sign up</button>
            </div>

            <div class="w-full text-center">
              <router-link to="/login" class="txt3">Login</router-link>
            </div>
          </span>

          <div class="login100-more" style="background-image: url('/signup.jpg');"></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },

  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    }
  },
  methods: {
    login(email) {
      this.dialog = true;
      this.$store.commit("login", email);
    },
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
.txt2,
.txt3 {
  color: #555555;
}
</style>