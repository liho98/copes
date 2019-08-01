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
          <v-btn text router>Blog</v-btn>
          <v-btn text router>Support</v-btn>
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

      <v-btn v-if="!isLogin" class="mx-2" icon router to="/login">
        <v-icon>account_circle</v-icon>
      </v-btn>

      <v-chip class="mx-4" v-if="isLogin" pill v-on="on">
        <v-avatar left>
          <v-img
            src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/07/emma-watson-didn_t-always-look-like-this.jpg?itok=zj2E_HAN"
          ></v-img>
        </v-avatar>Li Ho Tan
      </v-chip>




    </v-toolbar>
  </nav>
</template>

<script>
export default {
  components: {},

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded;
    }
  },
  data: () => ({
    isLogin: true,
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    loader: null,
    loading: false
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
button {
  font-family: Poppins-Regular;
}

</style>
