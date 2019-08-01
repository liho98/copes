<template>
  <v-container grid-list-md text-center>
    <v-layout wrap>
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
                  <v-layout justify-center align-center column fill-height>
                    <v-subheader style="font-size:20px;">Shopping Cart Is Empty</v-subheader>
                  </v-layout>
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
                                    :src="shoppingProductGet(product.productId).img"
                                    width="140"
                                    height="200"
                                    contain
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
                              <v-list-item-title
                                class="overline mb-1 mt-3"
                                style="font-size:14px!important"
                              >{{ shoppingProductGet(product.productId).desc }}</v-list-item-title>

                              <v-list-item-title 
                                class="overline mb-1 mt-6"
                                style="font-size:13px!important"
                                >Size: {{product.size}}</v-list-item-title>
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
                      <td
                        class="text-center"
                      >RM {{ shoppingProductGet(product.productId).price * product.quantity}}</td>

                      <td class="text-center">
                        <v-btn @click="removeFromCart(product.id)" small icon>
                          <v-icon>clear</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>

              <v-divider></v-divider>

              <v-simple-table style="margin-top:10px">
                <tbody>
                  <tr style="border-bottom:none;">
                    <td rowspan="2" colspan="3" class="text-left">
                      <v-btn color="primary" @click="e1 = 2">Proceed to checkout</v-btn>

                      <v-btn text>Continue Shopping</v-btn>
                    </td>

                    <td class="text-center">Subtotal</td>
                    <td class="text-left">RM {{ subtotal }}</td>
                  </tr>
                  <tr style="border-bottom:none;">
                    <td class="text-center">Grand Total</td>
                    <td class="text-left">RM {{ grandtotal}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-container grid-list-md text-center>
                <v-layout wrap>
                  <v-flex xs8>
                    <v-card>
                      <v-card-text>
                        <v-form>
                          <v-layout mb-0 justify-start>
                            <v-subheader style="font-size:18px">Billing Address</v-subheader>
                          </v-layout>

                          <v-layout ma-7 mt-5 mb-0 wrap>
                            <v-flex xs6>
                              <v-text-field :rules="[rules.required]" clearable hint="eg. Li Ho" label="First Name" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field :rules="[rules.required]" clearable hint="eg. Tan" label="Last Name" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                              <v-text-field v-model="email" :rules="[rules.required, rules.email]" clearable hint="eg. tanlh-wa16@example.com" label="Email Address" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                              <v-text-field :rules="[rules.required]" clearable hint="eg. Jalan Sungai Buluh, Taman Sejahtera" label="Address" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field :rules="[rules.required]" clearable hint="eg. Klang" label="City" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field
                              :rules="[rules.required]"
                                clearable
                                hint="eg. 53300"
                                maxlength="5"
                                counter="5"
                                label="Zip / Postal Code"
                                outlined
                              ></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-autocomplete
                                outlined
                                ref="country"
                                v-model="country"
                                :rules="[() => !!country || 'Required']"
                                :items="countries"
                                label="Country"
                                required
                              ></v-autocomplete>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field :rules="[rules.required]" clearable hint="eg. 012 850 0711" maxlength="12" counter="12" label="Telephone" outlined></v-text-field>
                            </v-flex>
                            <v-flex class="my-0" xs12>
                              <v-checkbox
                                v-model="selected"
                                style="margin-top:0"
                                color="blue"
                                label="Ship to this address"
                              ></v-checkbox>
                            </v-flex>
                          </v-layout>

                          <v-layout mb-2 justify-start>
                            <v-subheader style="font-size:18px">Payment Method</v-subheader>
                          </v-layout>

                          <v-layout justify-center wrap>
                            <v-flex
                              style="border:1px solid rgba(0,0,0,0.3);padding:20px;border-radius:5px;margin:20px"
                              xs5
                            >
                              <div id="paypal-button-container"></div>
                              <script type="application/javascript">
  paypal.Buttons().render("#paypal-button-container");
                              </script>
                            </v-flex>

                            <v-flex
                              style="border:1px solid rgba(0,0,0,0.3);padding:20px;border-radius:5px;margin:20px;"
                              xs5
                            >
                              <v-btn
                                flat
                                color="#FAFAFA"
                                style="width:100%;height:100%;text-align:center;"
                              >
                                <v-layout column fill-height>
                                  <v-flex xs12>
                                    <v-icon>fas fa-exchange-alt</v-icon>
                                  </v-flex>
                                  <v-flex xs12>
                                    <v-subheader>Online Transfer Payment</v-subheader>
                                  </v-flex>
                                </v-layout>
                              </v-btn>
                            </v-flex>

                            <v-flex class="ml-7 my-0" xs12>
                              <v-checkbox style="margin-top:0" color="blue">
                                <template v-slot:label>
                                  I agree to the&nbsp;
                                  <a
                                    style="font-family: inherit;"
                                    href="#"
                                    @click.stop.prevent="dialog = true"
                                  >Terms of Service</a>
                                  &nbsp;and&nbsp;
                                  <a
                                    style="font-family: inherit;"
                                    href="#"
                                    @click.stop.prevent="dialog = true"
                                  >Privacy Policy</a>
                                </template>
                              </v-checkbox>
                            </v-flex>
                          </v-layout>
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs4>
                    <v-card>
                      <v-card-text class="px-0">
                        <v-layout mb-2 mx-3 justify-start>
                          <v-subheader style="font-size:18px">Review your order</v-subheader>
                        </v-layout>

                        <v-simple-table class="ml-4 mr-4" fixed-header>
                          <thead>
                            <tr>
                              <th class="text-left">Product</th>
                              <th class="text-center">Qty</th>
                              <th class="text-right">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in $store.state.shoppingCart" :key="item.id">
                              <td class="text-left">
                                <v-card
                                  style="margin-top:10px;margin-bottom:10px;text-decoration:none!important;background-color:rgba(0,0,0,0)"
                                  flat
                                >
                                  <div
                                    class="overline"
                                    style="font-size:13px!important;"
                                  >{{ shoppingProductGet(item.productId).title }}</div>
                                  <v-list-item-title
                                    class="overline mb-1 mt-2"
                                  >{{ shoppingProductGet(item.productId).desc }}</v-list-item-title>

                                  <v-list-item-title class="overline mb-1">Size: {{item.size}}</v-list-item-title>
                                </v-card>
                              </td>
                              <td class="text-center">
                                <v-layout justify-center>
                                  <span class="ma-2" v-text="item.quantity"></span>
                                </v-layout>
                              </td>
                              <td class="text-right">RM {{ subtotal }}</td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                        <v-divider></v-divider>
                        <v-simple-table class="ml-4 mr-4 mt-3" fixed-header>
                          <tbody class="hoverNone">
                            <tr style="border-bottom:none">
                              <td class="text-left">
                                <span class="ma-2">Subtotal</span>
                              </td>
                              <td class="text-right">RM {{ subtotal }}</td>
                            </tr>

                            <tr style="border-bottom:none">
                              <td class="text-left">
                                <span class="ma-2">Shipping</span>
                              </td>
                              <td class="text-right">RM 22</td>
                            </tr>

                            <tr style="border-bottom:none">
                              <td class="text-left">
                                <span class="ma-2">Grand Total</span>
                              </td>
                              <td class="text-right">RM {{ grandtotal + 22}}</td>
                            </tr>

                            <tr style="border-bottom:none">
                              <td class="text-left"></td>
                              <td class="text-right">
                                <span style="font-size:11px">GST included</span>
                              </td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-layout ma-5 align-center justify-start row fill-height>
                <v-btn color="primary" @click="e1 = 3" v-on:click.native="checkout" >Checkout</v-btn>

                <v-btn text @click="e1 = 1">Back</v-btn>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-layout mb-5 align-center justify-center column fill-height>
                <v-icon class="ma-5" color="green" size="30">check_circle</v-icon>
                <v-subheader
                  style="font-size:20px;font-weight:300;margin-bottom:15px"
                >Your order has been placed successfully.</v-subheader>
              </v-layout>
              
              <v-btn color="primary" @click="e1 = 3" v-on:click.native="goBack" >Continue Shopping</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.state.shoppingCart.forEach(el => {
      this.subtotal +=
        this.shoppingProductGet(el.productId).price * el.quantity;
      this.grandtotal = this.subtotal;
    });
  },

  computed: {
    ...mapGetters(["shoppingProductGet"])
  },

  data() {
    return {
      e1: 0,
      subtotal: 0,
      grandtotal: 0,
        countries:['Malaysia'],
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },

    };
  },
  methods: {
    decrement(product) {
      if (product.quantity > 1) {
        let data = {
          id: product.id,
          quantity: product.quantity--
        };
        this.$store.commit("cartQuantity", data);
        this.resubtotal();
      }
    },
    increment(product) {
      let data = {
        id: product.id,
        quantity: product.quantity++
      };
      this.$store.commit("cartQuantity", data);
      this.resubtotal();
    },
    removeFromCart(id) {
        this.$store.commit("removeFromCart", id);
        this.resubtotal();
    },
    resubtotal() {
      this.subtotal = 0;
      this.$store.state.shoppingCart.forEach(el => {
        this.subtotal +=
          this.shoppingProductGet(el.productId).price * el.quantity;
      });
      this.grandtotal = this.subtotal;
    },
    goBack() {
      this.$router.push({ name: 'home'})
    },
    checkout() {
      this.$store.commit('clearCart')
    }
  }
};
</script>

<style scoped>
.theme--light.v-data-table
  tbody
  tr:hover:not(.v-data-table__expand-row):not(.v-data-table__empty-wrapper) {
  background-color: transparent !important;
}
</style>
