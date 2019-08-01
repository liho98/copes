<template>
  <v-container grid-list-md text-center>
    <v-snackbar v-model="snackbar" :timeout="timeout" absolute top right color="success">
      <span>Added 1 item to shopping cart</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>

    <v-layout wrap>
      <v-flex xs12>
        <v-card flat>
          <v-card-text class="px-0">
            <v-layout mx-3 my-0>
              <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex xs1>
        <v-card flat>
          <v-card-text class="px-0">
            <v-flex v-for="i in 4" :key="i">
              <v-layout ma-2 align-center justify-center>
                <v-card flat>
                  <v-scale-transition>
                    <v-img style="width:100%height:80%" :src="product.img"></v-img>
                  </v-scale-transition>
                </v-card>
              </v-layout>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs5>
        <v-card flat>
          <v-card-text class="px-0">
            <v-layout ma-2 align-center justify-center>
              <v-card flat>
                <v-scale-transition>
                  <v-img style="width:100%height:80%" :src="product.img"></v-img>
                </v-scale-transition>
              </v-card>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex style="text-align:left;" xs6>
        <v-card style="padding:35px" flat>
          <v-card-text class="px-0">
            <v-layout row wrap align-content-center justify-space-between>
              <v-flex style="font-family:Poppins;font-size:35px" md8>
                <span>{{product.title}}</span>
                <br />
                <br />
                <span style="font-size:20px">{{product.desc}}</span>
              </v-flex>
              <v-flex style="text-align:right;font-family:Poppins;font-size:25px" md3>
                <span>RM {{product.price}}</span>
                <br/>
                <br/>
                <v-layout ma-0 pa-0 align-start justify-end>
                  <v-rating
                    dense
                    length="1"
                    empty-icon="mdi-heart-outline"
                    full-icon="mdi-heart"
                    color="red"
                    background-color="red"
                    clearable
                  ></v-rating>
                </v-layout>

              </v-flex>
            </v-layout>
            <br />
            <v-layout row wrap align-content-center>
              <v-flex sm9
                grow-shrink-0>
                <h5>Size: </h5>
                <v-btn-toggle mandatory>
                  <v-btn
                    v-for="i in 7"
                    :key="i"
                    v-on:click.native="sendSize(product.id, i+38)"
                    :value="i+38"
                  >{{i+38}}</v-btn>
                </v-btn-toggle>
              </v-flex>
              <v-flex sm3
                grow-shrink-0>
                <h5>Quantity: </h5>
                <v-select  @change="onSelectQuantity()" solo v-model="selected" :items="quantityArray" >
                </v-select>
              </v-flex>
            </v-layout>
            <router-link to="#">
              <span style="color:#555555!important">View Size Guide</span>
            </router-link>

            <v-card-actions class="mx-0 px-0 my-5">
              <v-btn
                block
                class="white--text"
                color="primary accent-4"
                v-if="!isAddedBtn"
                @click="addToCart(thisProduct.id, thisProduct.quantity, thisProduct.size)"
              >{{ addToCartLabel }}</v-btn>
              <v-btn
                block
                class="white--text"
                color="red accent-4"
                v-if="isAddedBtn"
                @click="removeFromCart(product.id)"
              >{{ removeFromCartLabel }}</v-btn>
            </v-card-actions>

            <v-expansion-panels multiple :value="[0]">
              <v-expansion-panel>
                <v-expansion-panel-header>Description</v-expansion-panel-header>
                <v-expansion-panel-content class="mx-6 mb-6">{{ product.longDesc }}</v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Shipping</v-expansion-panel-header>
                <v-expansion-panel-content class="mx-6 mb-6">Some content</v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Additional Information</v-expansion-panel-header>
                <v-expansion-panel-content class="mx-6 mb-6">Some content</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "products",
  props: ["product"],

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    }
  },

  mounted() {
    this.thisProduct["id"] = this.product.id;
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  methods: {
    addToCart(id, quantity, size) {
      this.snackbar = true;
      alert(
        this.thisProduct.id +
          " " +
          this.thisProduct.quantity +
          " " +
          this.thisProduct.size
      );
      this.$store.commit("addToCart", { id, quantity, size });
    },
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
    sendSize(id, size) {
      // this.$store.commit('cartProductSize', {id,size});
      this.thisProduct["size"] = size;
    },
    onSelectQuantity() {
      // let data = {
      //   id: id,
      //   quantity: this.selected
      // }
      // this.$store.commit('cartQuantity', data);
      this.thisProduct["quantity"] = this.selected;
    },
  },

  data: () => ({
    thisProduct: {
      id: 0,
      quantity: 1,
      size: 39
    },
    breadcrumbs: [
      {
        text: "HOME",
        disabled: false,
        href: "breadcrumbs_dashboard"
      },
      {
        text: "MEN",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        text: "SHOES",
        disabled: false,
        href: "breadcrumbs_link_2"
      },
      {
        text: "NAMES",
        disabled: true,
        href: "breadcrumbs_link_3"
      }
    ],
    addToCartLabel: "Add to cart",
    removeFromCartLabel: "Remove from cart",
    quantityArray: [],
    selected: 1,
    selectedSize: 39,
    snackbar: false,
    timeout: 4000,

  })
};
</script>
