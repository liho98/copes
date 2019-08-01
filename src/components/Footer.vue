<template>
  <nav style="z-index: 1;">
    <v-footer
      style="box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.2);"
      padless
      class="white text-center"
    >
      <v-container light style="background-color:white" fluid>
        <v-layout column>
          <v-flex xs12>
            <div>
              <v-layout align-center justify-center column fill-height>
                <v-card-text style="padding-bottom: 0px;">
                  <v-btn left v-for="link in links" :key="link" text rounded>{{ link }}</v-btn>
                </v-card-text>

                <v-card-text>
                  <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                  </v-btn>
                </v-card-text>
                <v-card-text style="padding-top:0;padding-bottom:10px">
                  <v-divider light inset></v-divider>
                </v-card-text>
                <v-card-text>
                  {{ new Date().getFullYear() }} &copy; —
                  <strong>Copes&trade; All Right Reserved.</strong>
                </v-card-text>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </nav>
</template>


<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

<style scoped>
.v-divider {
  margin: auto !important;
}
</style>
