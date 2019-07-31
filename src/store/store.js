import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'vue-uuid';

Vue.use(Vuex)

const state = {
    count: 0,
    products: [
    {
        id: 1,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: true,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 2,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Toes",
        price: 232,
        isNewArrival: false,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 3,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: false,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 4,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: true,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 5,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: false,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 6,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: true,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    },
    {
        id: 7,
        img:
        "https://mintysquare.com/media/catalog/product/cache/1/small_image/450x607/0dc2d03fe217f8c83829496872af24a0/s/a/sandalias_1.jpg",
        title: "Entrudo",
        desc: "Camel Sandals Chama",
        price: 22,
        isNewArrival: true,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    }
    ],
    shoppingCart: [{}],
  }

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    productsAdded: state => {
      return state.shoppingCart.count
    },
  }

const mutations = {
    addToCart: (state, {id, quantity, size}) => {
        var obj = {}
        obj["id"] = uuid.v1()
        obj["productId"] = id
        obj["quantity"] = quantity
        obj["size"] = size
        state.shoppingCart.push(obj)
        },
    setAddedBtn: (state, data) => {
        state.products.forEach(el => {
            if (data.id === el.id) {
            el.isAddedBtn = data.status;
            }
        });
    },
    removeFromCart: (state, id) => {
        var filtered = state.shoppingCart.filter(function(value){
            return value["id"] != id
        })
        state.shoppingCart = filtered
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
  })

