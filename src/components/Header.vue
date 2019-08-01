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

      <v-btn v-show="!$store.state.user[0].isLogin" class="mx-2" icon router to="/login">
        <v-icon>account_circle</v-icon>
      </v-btn>

      <div class="text-center">
        <v-menu
          nudge-width="100"
          nudge-right="10"
          nudge-bottom="28"
          offset-overflow
          offset-y
          offset-x
        >
          <template v-slot:activator="{ on }">
            <v-chip class="mx-4" v-show="$store.state.user[0].isLogin" pill v-on="on">
              <v-avatar left>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>Li Ho Tan
            </v-chip>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Li Ho Tan</v-list-item-title>
                  <v-list-item-subtitle>vip</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-layout text-center justify-center>
              <v-flex xs12>
                <v-card>
                  <v-card-text>
                    <v-btn outlined @click="signout('email')">Sign out</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-menu>
      </div>
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
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    loader: null,
    loading: false,
    menu: false
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  methods: {
    signout(email) {
      this.$store.commit("signout", email);
    }
  }
};
</script>

<style scoped>
button {
  font-family: Poppins-Regular;
}
</style>
