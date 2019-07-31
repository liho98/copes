<template>
  <v-container fluid grid-list-md text-center>
    <v-layout wrap>
      <v-flex xs12>
        <v-card flat>
          <v-card-text class="px-0">
            <v-layout mx-5 mt-10 style="float:right" my-3>
              <v-spacer></v-spacer>
              <v-subheader>Sort</v-subheader>
              <v-select style="max-width:200px" :items="select" label="Recommended" solo></v-select>
            </v-layout>

            <v-layout mx-5 my-0>
              <v-subheader>SHOES</v-subheader>
            </v-layout>
            <v-layout mx-3 my-0>
              <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-layout justify-center>
        <v-flex xs3>
          <v-card flat>
            <v-card-text class="px-5">
              <v-layout mb-5>
                <v-subheader style="padding: 20px;padding-top:30px;">F I L T E R</v-subheader>
              </v-layout>
              <v-layout ma-4 justify-center style="text-align:left">
                <v-expansion-panels accordion>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Categories</v-expansion-panel-header>
                    <v-expansion-panel-content style="padding:20px">
                      <v-list flat subheader>
                        <v-list-item-group v-model="settings" multiple active-class>
                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Male</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Female</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Kids</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>Color</v-expansion-panel-header>
                    <v-expansion-panel-content style="padding:20px">
                      <div class="d-flex justify-center">
                        <v-color-picker></v-color-picker>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Price</v-expansion-panel-header>
                    <v-expansion-panel-content style="padding: 0!important;margin: 0;">
                      <v-card style="padding: 0;margin: 0;" flat color="transparent">
                        <v-card-text style="padding: 0;margin: 0;">
                          <v-layout>
                            <v-flex class="px-4">
                              <v-range-slider
                                v-model="range"
                                :max="max"
                                :min="min"
                                hide-details
                                class="align-center"
                              >
                                <template v-slot:prepend>
                                  <v-subheader>RM</v-subheader>

                                  <v-text-field
                                    v-model="range[0]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 60px"
                                  ></v-text-field>
                                </template>
                                <template v-slot:append>
                                  <v-subheader>RM</v-subheader>
                                  <v-text-field
                                    v-model="range[1]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 60px"
                                  ></v-text-field>
                                </template>
                              </v-range-slider>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Brands</v-expansion-panel-header>
                    <v-expansion-panel-content style="padding:20px">
                      <v-list flat subheader>
                        <v-list-item-group v-model="settings" multiple active-class>
                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Nike</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Adidas</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>Puma</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Size</v-expansion-panel-header>
                    <v-expansion-panel-content style="padding:20px">
                      <v-list flat subheader>
                        <v-list-item-group v-model="settings" multiple active-class>
                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>30 - 35</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>36 - 40</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>

                          <v-list-item>
                            <template v-slot:default="{ active }">
                              <v-list-item-action>
                                <v-checkbox v-model="active"></v-checkbox>
                              </v-list-item-action>

                              <v-list-item-content>
                                <v-list-item-title>41 - 50</v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card flat>
            <v-card-text>
              <v-subheader>Shoes</v-subheader>
              <v-container fluid grid-list-sm>
                <v-layout wrap>
                  <v-flex v-for="i in 6" :key="i" xs3>
                    <router-link :to="'/product?id='+newArrivals[i-1].id">
                      <v-layout style="margin-bottom:60px" align-center justify-center>
                        <v-card flat height="300" width="250">
                          <v-scale-transition>
                            <v-img style="width:250px" :src="newArrivals[i-1].img"></v-img>
                          </v-scale-transition>
                        </v-card>
                      </v-layout>
                      <v-card style="margin-bottom:20px;text-decoration:none!important" flat>
                        <div class="overline">{{newArrivals[i-1].title}}</div>
                        <v-list-item-title class="overline mb-1">{{newArrivals[i-1].desc}}</v-list-item-title>
                        <v-list-item-subtitle>RM {{newArrivals[i-1].price}}</v-list-item-subtitle>
                      </v-card>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>

              <div class="text-center">
                <v-pagination
                  color="grey"
                  v-model="page"
                  :length="4"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                ></v-pagination>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"],
    socials: [
      {
        icon: "fab fa-facebook",
        color: "indigo"
      },
      {
        icon: "fab fa-linkedin",
        color: "cyan darken-1"
      },
      {
        icon: "fab fa-instagram",
        color: "red lighten-3"
      }
    ],
    page: 1,

    items: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" }
            ]
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" }
        ]
      }
    ],
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
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ],
    select: [
      "Price (High first)",
      "Price (Low first)",
      "New in",
      "Recommended",
      "Hightlight"
    ],
    min: 0,
    max: 2000,
    slider: 40,
    range: [-20, 300],
    newArrivals: [
      {
        id: 1,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      },
      {
        id: 2,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Toes",
        price: 232
      },
      {
        id: 3,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      },
      {
        id: 4,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      },
      {
        id: 5,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      },
      {
        id: 6,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      },
      {
        id: 7,
        img:
          "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22
      }
    ]
  })
};
</script>

<style >
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
