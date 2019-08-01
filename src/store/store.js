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
        title: "Adidas",
        desc: "Ultraboost 19",
        longDesc: 'Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energised ride.',
        price: 850,
        size: 0,
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
        size: 0,
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
        size: 0,
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
        size: 0,
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
        size: 0,
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
        size: 0,
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
        size: 0,
        isNewArrival: true,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1
    }
    ],
    shoppingCart: [],
  }

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    productsAdded: state => {
      return state.shoppingCart.length
    },
    shoppingProductGet : state => pid => {
        var selected
        state.products.forEach(el => {
            if(pid === el.id) {
                selected = el
            }
        })
        return selected
    }
  }

const mutations = {
    addToCart: (state, {id, quantity, size}) => {
        var cont = true
        state.shoppingCart.forEach(el => {
            if (el.productId === id && el.size === size){
                el.quantity += quantity
                cont = false
            }
        })
        if (cont === true){
            var obj = {}
            obj["id"] = uuid.v1()
            obj["productId"] = id
            obj["quantity"] = quantity
            obj["size"] = size
            state.shoppingCart.push(obj)
        }
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
    },
    cartQuantity: (state, data) => {
      state.shoppingCart.forEach(el => {
        if (data.id === el.productId) {
          el.quantity = data.quantity;
        }
      });
    },
    cartProductSize: (state, data) => {
        state.shoppingCart.forEach(el => {
            if (data.id === el.productId) {
            el.size = data.size;
            }
        });
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
  })

