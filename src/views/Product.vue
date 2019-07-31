<template>
  <v-container grid-list-md text-center>
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
        <v-card style="padding:20px" flat>
          <v-card-text class="px-0">
            <h1>{{product.title}}</h1>
            <br />
            <h3>{{product.desc}}</h3>
            <br />
            <span>RM {{product.price}}</span>
            <br />
            <br />
            <v-btn-toggle mandatory>
              <v-btn v-for="i in 7" :key="i" v-on:click.native="sendSize(product.id, i+38)" :value="i+38" >{{i+38}}</v-btn>
            </v-btn-toggle>
            <br />
            <br />
            <v-select @change="onSelectQuantity(product.id)" outlined v-model="selected" :items="quantityArray" >
            </v-select>
            <br />
            <br />
            <router-link style="color:#55555!important" to="#">View Size Guide</router-link>

    <v-card-actions class="mx-0 px-0 my-5">
      <v-btn
        block
        class="white--text"
        color="grey accent-4"
        v-if="!isAddedBtn" @click="addToCart(thisProduct.id, thisProduct.quantity, thisProduct.size)">
        {{ addToCartLabel }}
      </v-btn>
      <v-btn
        block
        class="white--text"
        color="grey accent-4"
        v-if="isAddedBtn" @click="removeFromCart(product.id)">
        {{ removeFromCartLabel }}
      </v-btn>
    </v-card-actions>



    <v-expansion-panels
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Description</v-expansion-panel-header>
        <v-expansion-panel-content class="mx-6 mb-6">
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Shipping</v-expansion-panel-header>
        <v-expansion-panel-content class="mx-6 mb-6">
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Additional Information</v-expansion-panel-header>
        <v-expansion-panel-content class="mx-6 mb-6">
          Some content
        </v-expansion-panel-content>
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
  name: 'products',
  props: ['product'],

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
    },
  },

  mounted () {
    this.thisProduct["id"] = this.product.id
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  methods: {
    addToCart (id, quantity, size) {
      alert(this.thisProduct.id + " " + this.thisProduct.quantity + " " + this.thisProduct.size)
      this.$store.commit('addToCart', {id, quantity, size});
    },
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id);
    },
    sendSize(id, size) {
      // this.$store.commit('cartProductSize', {id,size});
      this.thisProduct["size"] = size
    },
    onSelectQuantity (id) {
      // let data = {
      //   id: id,
      //   quantity: this.selected
      // }
      // this.$store.commit('cartQuantity', data);
      this.thisProduct["quantity"] = this.selected
    },
  },

  data: () => ({
    thisProduct: {
      'id' : 0,
      'quantity' : 1,
      'size' : 39
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
    addToCartLabel: 'Add to cart',
    removeFromCartLabel: 'Remove from cart',
    quantityArray: [],
    selected: 1,
    selectedSize: 39
  })
};
</script>

