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
                    <v-img style="width:100%height:80%" :src="newArrivals[i-1].img"></v-img>
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
                  <v-img style="width:100%height:80%" :src="newArrivals[1].img"></v-img>
                </v-scale-transition>
              </v-card>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex style="text-align:left;" xs6>
        <v-card style="padding:20px" flat>
          <v-card-text class="px-0">
            <h1>{{newArrivals[1].title}}</h1>
            <br />
            <h3>{{newArrivals[1].desc}}</h3>
            <br />
            <span>RM {{newArrivals[1].price}}</span>
            <br />
            <br />
            <v-btn-toggle v-model="toggle_exclusive" multiple>
              <v-btn v-for="i in 7" :key="i">{{i+38}}</v-btn>
            </v-btn-toggle>
            <br />
            <br />
            <router-link style="color:#55555!important" to="#">View Size Guide</router-link>

    <v-card-actions class="mx-0 px-0 my-5">
      <v-btn
        block
        class="white--text"
        color="grey accent-4"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>



    <v-expansion-panels
      v-model="panel"
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
  data: () => ({
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

