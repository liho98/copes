<template>
  <nav style="z-index: 1;">
    <v-toolbar light class="py-3 px-2">
      <router-link to="/">
        <v-img max-width="120" style="margin-top:-4px" src="../../public/Copes-logo.png"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-items>
          <v-btn text router to="/shop">Shop</v-btn>
          <v-btn text router >Blog</v-btn>
          <v-btn text router >Support</v-btn>
        </v-toolbar-items>
      </template>

      <v-divider class="mx-5" inset vertical></v-divider>

      <v-btn class="mx-2" icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-badge overlap class="mx-2" color="grey white--text" right>
        <template v-slot:badge>
          <span v-if="numProductsAdded > 0">{{numProductsAdded}}</span>
        </template>

        <v-btn icon router to="/shoppingcart">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </v-badge>

      <v-btn class="mx-2" icon router to="/login">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  components: {},

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    }
  },
  data: () => ({
    show: false,
  }),
  
};
</script>

<style scoped>
button{
  font-family: Poppins-Regular;
}
</style>
