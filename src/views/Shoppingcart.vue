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
                <v-simple-table fixed-header height="450px">
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
                    <tr v-for="item in desserts" :key="item.name">
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
                              >name</div>
                              <v-list-item-title class="overline mb-1 mt-5">Desc</v-list-item-title>

                              <v-list-item-title class="overline mb-1">Shoe size 41</v-list-item-title>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </td>
                      <td class="text-center">RM {{ item.calories }}</td>
                      <td class="text-center">
                        <v-layout justify-center>
                          <v-flex>
                            <v-btn @click="decrement" small icon>
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            <span class="ma-2" v-text="qty"></span>
                            <v-btn @click="increment" small icon>
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </td>
                      <td class="text-center">RM {{ item.calories }}</td>

                      <td class="text-center">
                        <v-btn @click="decrement" small icon>
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
                    <td class="text-left">RM 123</td>
                  </tr>
                  <tr style="border-bottom:none;">
                    <td class="text-center">Grand Total</td>
                    <td class="text-left">RM 456</td>
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
                          <v-layout mb-2 justify-start>
                            <v-subheader style="font-size:18px">Billing Address</v-subheader>
                          </v-layout>

                          <v-layout ma-7 mb-0 wrap>
                            <v-flex xs6>
                              <v-text-field label="First Name" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field label="Last Name" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                              <v-text-field label="Email Address" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                              <v-text-field label="Address" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field label="City" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field label="Zip / Postal Code" outlined></v-text-field>
                            </v-flex>

                            <v-flex xs6>
                              <v-autocomplete
                                outlined
                                ref="country"
                                v-model="country"
                                :rules="[() => !!country || 'This field is required']"
                                :items="countries"
                                label="Country"
                                required
                              ></v-autocomplete>
                            </v-flex>

                            <v-flex xs6>
                              <v-text-field label="Telephone" outlined></v-text-field>
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
                              <v-btn flat color="#FAFAFA" style="width:100%;height:100%;text-align:center;">
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
                            <tr v-for="item in desserts" :key="item.name">
                              <td class="text-left">
                                <v-card
                                  style="margin-top:10px;margin-bottom:10px;text-decoration:none!important;background-color:rgba(0,0,0,0)"
                                  flat
                                >
                                  <div class="overline" style="font-size:13px!important;">name</div>
                                  <v-list-item-title class="overline mb-1 mt-2">Desc</v-list-item-title>

                                  <v-list-item-title class="overline mb-1">Shoe size 41</v-list-item-title>
                                </v-card>
                              </td>
                              <td class="text-center">
                                <v-layout justify-center>
                                  <span class="ma-2" v-text="qty"></span>
                                </v-layout>
                              </td>
                              <td class="text-right">RM {{ item.calories }}</td>
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
                              <td class="text-right">RM 100</td>
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
                              <td class="text-right">RM 122</td>
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
                <v-btn color="primary" @click="e1 = 3">Checkout</v-btn>

                <v-btn text @click="e1 = 1">Back</v-btn>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
<v-layout mb-5 justify-center>
                <v-subheader style="font-size:20px;font-weight:300">
                  Your order has been placed successfully.

                </v-subheader>
</v-layout>

              <v-btn color="primary" @click="e1 = 3">Continue Shopping</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      e1: 0,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ],
      qty: 1
    };
  },
  methods: {
    decrement() {
      this.qty--;
    },
    increment() {
      this.qty++;
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
