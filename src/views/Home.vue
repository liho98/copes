<template>
  <div class="home">
    <v-carousel cycle height="425" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-img :src="carouselImages[i]" height="100%">
            <div
              style="z-index:-1;position:absolute;width:100%;height:100%;background-color:black;opacity:0.6"
            ></div>

            <v-layout align-center fill-height justify-center>
              <div class="display-3">{{ slide }}</div>
            </v-layout>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- <v-container fluid grid-list-sm>
        <v-layout wrap>
          <v-flex v-for="n in 3" :key="n" xs12 md4>
            <v-item v-slot:default="{ active, toggle }">
              <v-card :color="active ? 'primary' : ''" dark @click="toggle">
                <v-scroll-y-transition>
                  <div>
                    <v-img height="100" :src="carouselImages[n-1]">
                      <div
                        style="z-index:-1;position:absolute;width:100%;height:100%;background-color:black;opacity:0.6"
                      ></div>
                      <v-layout align-center fill-height justify-center>
                        <div class="display-3">{{categories[n-1]}}</div>
                      </v-layout>
                    </v-img>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-flex>
        </v-layout>
    </v-container>-->

    <v-sheet class="my-5 mx-auto">
      <h1 class="display-1 font-weight-thin" style="text-align:center;padding-top:20px">New Arrivals</h1>
      <v-slide-group class="pa-4" mandatory show-arrows>
        <v-slide-item v-for="n in 7" :key="n" v-slot:default="{ active, toggle }">
          <v-item-group>
            <v-card
              flat
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="308"
              @click="toggle"
            >
              <v-layout align-center fill-height justify-center>
                <v-scale-transition>
                  <v-img height="200" :src="newArrivals[n-1].img"></v-img>
                </v-scale-transition>
              </v-layout>
            </v-card>

            <v-card flat class="ma-4">
              <div class="overline mb-4">{{newArrivals[n-1].title}}</div>
              <v-list-item-title class="headline mb-1">{{newArrivals[n-1].desc}}</v-list-item-title>
              <v-list-item-subtitle>{{newArrivals[n-1].price}}</v-list-item-subtitle>
            </v-card>
          </v-item-group>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-parallax
      dark
      src="https://i0.wp.com/hypebeast.com/image/2016/09/timberland-boot-sneaker-hybrid-the-killington-hiker-05.gif?w=1600"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-4">Copes x Vuetify</h1>
        <h4 class="subheading">We have everything you want on your foots</h4>
      </v-layout>
    </v-parallax>

    <v-sheet class="my-5 mx-auto">
      <h1 class="display-1 font-weight-thin" style="text-align:center;padding-top:20px">Our Partner</h1>
      <v-slide-group class="pa-4" mandatory show-arrows>
        <v-slide-item v-for="n in 4" :key="n" v-slot:default="{ active, toggle }">
          <v-item-group>
            <v-card style="padding-left:150px;padding-right:150px;" flat height="100" width="440">
              <v-layout align-center fill-height justify-center>
                <v-scale-transition>
                  <v-img :src="brandImg[n-1]"></v-img>
                </v-scale-transition>
              </v-layout>
            </v-card>
          </v-item-group>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-sheet class="my-5 mx-auto">
      <h1 class="display-1 font-weight-thin" style="text-align:center;padding-top:20px">Reviews</h1>
      <v-slide-group class="pa-4" mandatory show-arrows>
        <v-slide-item v-for="n in 7" :key="n" v-slot:default="{ active, toggle }">
          <v-item-group>
            <v-card class="ma-4" width="535">
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

              <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Read</v-btn>
                <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-item-group>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      carouselImages: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
        "https://images.unsplash.com/photo-1557266454-9be2926ea971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1546458714-14fd86f50a05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551747777-458b63c6ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1554735490-d8fe7bd657e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      ],
      slides: [
        "Summer Sale",
        "20% off",
        "Spring_Summer",
        "19 collection",
        "Show your style"
      ],
      categories: ["Women", "Men", "Kid"],
      newArrivals: [
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Toes",
          price: 232
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        },
        {
          img:
            "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
          title: "Entrudo",
          desc: "Camel Sandals Chama",
          price: 22
        }
      ],
      brandImg: [
        "/brand-img/brand1.png",
        "/brand-img/brand2.png",
        "/brand-img/brand3.png",
        "/brand-img/brand4.png"
      ]
    };
  }
};
</script>
