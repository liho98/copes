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

    <v-sheet class="my-5 mx-auto">
      <h1 class="display-1 font-weight-thin" style="text-align:center;padding-top:20px">New Arrivals</h1>
      <v-slide-group class="pa-4" mandatory show-arrows>
        <v-slide-item
          v-for="product in newArrivals"
          :key="product.id"
          v-slot:default="{ active, toggle }"
        >
          <v-item-group>
            <router-link
              :to="{
                name: 'product',
                params: {product: product}
                }"
              @click.native="scrollToTop"
            >
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
                    <v-img height="200" :src="product.img"></v-img>
                  </v-scale-transition>
                </v-layout>
              </v-card>

              <v-card flat class="ma-4">
                    <v-layout @click.prevent="null" align-start row fill-height style="float:right;margin:0;">
                      <v-rating
                        length="1"
                        empty-icon="mdi-heart-outline"
                        full-icon="mdi-heart"
                        color="red"
                        background-color="red"
                        clearable
                        dense
                      ></v-rating>
                    </v-layout>

                <div class="overline mb-4">{{product.title}}</div>
                <v-list-item-title class="headline mb-1">{{product.desc}}</v-list-item-title>
                <v-list-item-subtitle>RM {{product.price}}</v-list-item-subtitle>
              </v-card>
            </router-link>




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
        <v-slide-item v-for="n in 6" :key="n" v-slot:default="{ active, toggle }">
          <v-item-group>
            <v-card class="ma-4" width="535">
              <v-list-item>
                <v-list-item-avatar color="grey">

                  <v-img :src="review[n-1].avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{review[n-1].title}}</v-list-item-title>
                  <v-list-item-subtitle>{{review[n-1].username}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img :src="review[n-1].image" height="194"></v-img>

              <v-card-text>{{review[n-1].desc}}</v-card-text>

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
      brandImg: [
        "/brand-img/brand1.png",
        "/brand-img/brand2.png",
        "/brand-img/brand3.png",
        "/brand-img/brand4.png"
      ],
      review:[
      {
        "username": "Eryn Bolf",
        "avatar": "https://robohash.org/quieumet.bmp?size=50x50&set=set1",
        "title": "Twilight Saga: Eclipse, The",
        "desc": "Vestibulum sed magna at nunc commodo placerat.",
        "image": "https://images.unsplash.com/photo-1558599577-7884a4e31e79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Adrian Garber",
        "avatar": "https://robohash.org/fugiatquitotam.bmp?size=50x50&set=set1",
        "title": "Somewhere Between",
        "desc": "Aliquam sit amet diam in magna bibendum imperdiet. ",
        "image": "https://images.unsplash.com/photo-1559629074-96b8ba745631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Lonnie Pettwood",
        "avatar": "https://robohash.org/autacommodi.jpg?size=50x50&set=set1",
        "title": "Deaths of Ian Stone, The",
        "desc": "Vestibulum rutrum rutrum neque. ",
        "image": "https://images.unsplash.com/photo-1543995821-3d219c270fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Bertrand McCowen",
        "avatar": "https://robohash.org/nequeoccaecatiquisquam.png?size=50x50&set=set1",
        "title": "Moustache, La",
        "desc": "Morbi sem mauris, laoreet ut, rhoncus aliquet.",
        "image": "https://images.unsplash.com/photo-1557266454-9be2926ea971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Annabela Downey",
        "avatar": "https://robohash.org/velquialiquid.png?size=50x50&set=set1",
        "title": "R.I.P.D.",
        "desc": "Vestibulum ante ipsum primis in faucibus.",
        "image": "https://images.unsplash.com/photo-1546367564-ade1880f8921?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Petronella Filipyev",
        "avatar": "https://robohash.org/suntautemvel.png?size=50x50&set=set1",
        "title": "Walk Among the Tombstones, A",
        "desc": "Morbi vestibulum, velit id pretium iaculis.",
        "image": "https://images.unsplash.com/photo-1543125940-dca0ba1cd786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }, {
        "username": "Marylin Stapells",
        "avatar": "https://robohash.org/eavelitat.bmp?size=50x50&set=set1",
        "title": "Hatchet",
        "desc": "In tempor, turpis nec euismod scelerisque.",
        "image": "https://images.unsplash.com/photo-1555081890-cdd2b59853f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      }]
    };
  },
  computed: {
    newArrivals: function() {
      return this.$store.state.products.filter(function(u) {
        return u.isNewArrival;
      });
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
