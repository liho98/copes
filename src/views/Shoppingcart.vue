<template>
  <v-container grid-list-md text-center>
    <v-layout wrap>
      <!-- <v-flex xs12>
        <v-card>
          <v-card-text class="px-0">
            <v-layout justify-center>
              <v-subheader style="font-size:20px;">Shopping Cart</v-subheader>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>-->

      <v-flex xs12>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Shopping Cart</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Checkout</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Success</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                flat
                style="text-align:left;margin-bottom: 0!important;"
                class="mb-12"
                color="grey lighten-1"
                height="450px"
              >
                <v-card v-if="$store.state.shoppingCart.length < 1" height="450px">
                  <v-card-text class="px-0">
                    <v-layout justify-center>
                      <v-subheader style="font-size:20px;">Nothing in cart!</v-subheader>
                    </v-layout>
                  </v-card-text>
                </v-card>
                <v-simple-table v-else fixed-header height="450px">
                  <thead>
                    <tr>
                      <th class="text-center">Product</th>
                      <th class="text-center">Unit Price</th>
                      <th class="text-center">Qty</th>
                      <th class="text-center">Subtotal</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in $store.state.shoppingCart" :key="product.id">
                      <td>
                        <v-layout>
                          <v-flex xs6>
                            <v-card style="background-color:rgba(0,0,0,0)" flat>
                              <v-card-text class="px-0">
                                <v-layout px-5 my-0 justify-center>
                                  <v-img
                                    src="https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg"
                                    width="10"
                                    height="170"
                                  ></v-img>
                                </v-layout>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex xs6>
                            <v-card
                              style="margin-bottom:20px;text-decoration:none!important;background-color:rgba(0,0,0,0)"
                              flat
                            >
                              <div
                                class="overline"
                                style="font-size:20px!important;margin-top:40px"
                              >{{ shoppingProductGet(product.productId).title }}</div>
                              <v-list-item-title class="overline mb-1 mt-5">{{ shoppingProductGet(product.productId).desc }}</v-list-item-title>

                              <v-list-item-title class="overline mb-1">{{product.size}}</v-list-item-title>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </td>
                      <td class="text-center">RM {{ shoppingProductGet(product.productId).price }}</td>
                      <td class="text-center">
                        <v-layout justify-center>
                          <v-flex>
                            <v-btn @click="decrement(product)" small icon>
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            <span class="ma-2" v-text="product.quantity"></span>
                            <v-btn @click="increment(product)" small icon>
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </td>
                      <td class="text-center">RM {{ shoppingProductGet(product.productId).price * product.quantity}}</td>

                      <td class="text-center">
                        <v-btn @click="removeFromCart(product.id)" small icon>
                          <v-icon>clear</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>

              <v-divider style="margin-bottom:20px"></v-divider>

              <v-layout ml-5 align-center justify-space-between row fill-height>
                <v-flex xs8>
                  <v-layout ma-2>
                    <v-btn color="primary" @click="e1 = 2">Proceed to checkout</v-btn>
                    <v-btn text>Continue Shopping</v-btn>
                  </v-layout>
                </v-flex>
                <v-flex xs4>

                  <v-layout justify-end column fill-height style="margin-left: 170px;">
                    <v-flex xs2>
                      <v-subheader style="margin-left:20px">
                        Subtotal
                        <span style="margin-left:30px;margin-right:10px">RM {{ subtotal }}</span>
                      </v-subheader>
                    </v-flex>
                    <v-flex xs2>
                      <v-subheader>
                        Grand Total
                        <span style="margin-left:30px;margin-right:10px">RM {{ grandtotal}}</span>
                      </v-subheader>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1" height="200px">

<script type="application/javascript">paypal.Buttons().render('body');</script>


              </v-card>

              <v-btn color="primary" @click="e1 = 3">Checkout</v-btn>

              <v-btn text @click="e1 = 1">Back</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
              <v-btn color="primary" @click="e1 = 3">Continue Shopping</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: {
  	paypal: {
      sandbox: 'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
      production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
    }
  },

  mounted() {
    this.$store.state.shoppingCart.forEach(el => {
        this.subtotal += (this.shoppingProductGet(el.productId).price * el.quantity)
        this.grandtotal = this.subtotal
        })
  },

  computed: {
    ...mapGetters([
      'shoppingProductGet'
    ])
  },

  data() {
    return {
      e1: 0,
      subtotal: 0,
      grandtotal: 0
    };
  },
  methods: {
    decrement(product) {
      if(product.quantity>1){
        let data = {
          id: product.id,
          quantity: product.quantity--
        }
        this.resubtotal()
        this.$store.commit('cartQuantity', data);
      }
    },
    increment(product) {
      let data = {
        id: product.id,
        quantity: product.quantity++
      }
      this.resubtotal()
      this.$store.commit('cartQuantity', data);
    },
    removeFromCart (id) {
      this.$store.commit('removeFromCart', id);
    },
    resubtotal(){
      this.subtotal = 0
      this.$store.state.shoppingCart.forEach(el => {
        this.subtotal += (this.shoppingProductGet(el.productId).price * el.quantity)
        this.grandtotal = this.subtotal
        })
    }
  }
};
</script>