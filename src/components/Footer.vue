<template>
  <nav>
    <v-divider></v-divider>
    <v-footer padless class="white text-center">
      <v-card-text style="padding-bottom: 0px;">
        <v-btn left v-for="link in links" :key="link" text rounded>{{ link }}</v-btn>
      </v-card-text>

      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <!-- <v-card-text
          class="white--text pt-0"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>-->

      <v-divider light inset></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} &copy; —
        <strong>Copes&trade; All Right Reserved.</strong>
      </v-card-text>
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
