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
        require('@/assets/prods/adidas_men/ultraboost19_men.jpg'),
        title: "Adidas",
        desc: "Ultraboost 19",
        longDesc: 'Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energised ride.',
        price: 850,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 2,
        img:
        require('@/assets/prods/adidas_men/Whiteultraboost19_men.jpg'),
        title: "Adidas",
        desc: "Ultraboost 19",
        longDesc: 'The iconic Ultraboost silhouette gets reinvented with these men\'s Ultra Boost 19 trainers from adidas. In a fresh white colourway, they\'re built with a sock-like, Primeknit 360 upper, which uses motion-weave technology for the ultimate balance between stretch and supportiveness. These responsive runners feature a tonal lace up fastening and dual-density Boost cushioning underfoot for maximum cushioning and a lightweight, ultra-smooth ride. Embedded with a Torsion spring for essential stability, these trainers are finished with a grippy Continental rubber Stretchweb sole, which gives you a flexible, natural feel, as well as a 3D heel frame and 3-Stripes to the sidewalls.',
        price: 850,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 3,
        img:
        require('@/assets/prods/adidas_men/yung96_men.jpg'),
        title: "Adidas",
        desc: "Yung 96",
        longDesc: 'A love for 1990s fashion gives the Yung-96 a look that\'s bold and a bit eccentric. These shoes are made of a mix of mesh, faux suede and nubuck. They offer a wide, chunky silhouette that\'s distinctly \'90s. A lightweight midsole makes them comfortable enough for all-day wear. Inspired by playful \'90s fashion A layered upper and chunky outsole recall \'90s style trends Built for all-day comfort Cushioned with a lightweight EVA midsole.',
        price: 850,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 4,
        img:
        require('@/assets/prods/adidas_women/1.jpg'),
        title: "Adidas",
        desc: "Ultraboost 19 Women's",
        longDesc: 'Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energised ride.',
        price: 850,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 5,
        img:
        require('@/assets/prods/adidas_women/2.jpg'),
        title: "Adidas",
        desc: "NMD R1 Women's",
        longDesc: 'Made for urban adventures, the NMD series combines \'80s running heritage with modern materials. These shoes feature a soft, stretchy knit upper that rides on a responsive Boost midsole, delivering energy return with every stride. As a nod to cycling culture, the front midsole plug has a look that\'s inspired by street race bikes.',
        price: 750,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 6,
        img:
        require('@/assets/prods/adidas_women/3.jpg'),
        title: "Adidas",
        desc: "Originals Continental 80 Women's",
        longDesc: 'The YUNG series continues with these women\'s Continental 80 trainers from adidas Originals. Straight out of adi\'s archives, this one-for-one remake brings retro vibes to your fits. With a premium leather upper in a clean new colourway, these throwback sneakers have a tonal lace up fastening and a split rubber cupsole for supreme cushioning and a flexible feel. They\'re finished up with a woven yellow stripe, adidas branding to the sidewalls and the legendary Trefoil logo to the tongue and heel.',
        price: 450,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 7,
        img:
        require('@/assets/prods/nike_men/1.jpg'),
        title: "Nike",
        desc: "Shox TL",
        longDesc: 'Back from 2003 and guaranteed to make waves, check out these men\'s Shox TL trainers from Nike. With the same design lines as the OG, these sneakers have a breathable mesh upper with glossy TPU overlays to the sidewalls. In a fresh white colourway, they feature a tonal lace up fastening and a full-length Shox sole unit underfoot, which takes the same cushioning from the first Shox in 2000, but takes it up a level with multiple columns for premium cushioning and an unmissable look. With a grippy rubber tread, these trainers are finished with a silver-tone Swoosh embroidered to the sidewalls and Nike Shox branding to the tongue.',
        price: 649,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 8,
        img:
        require('@/assets/prods/nike_men/2.jpg'),
        title: "Nike",
        desc: "Air More Uptempo 96",
        longDesc: 'Nike\'s \'96 icon gets refreshed with these men\'s Air More Uptempo 96 sneakers. Evolving from the b-ball courts to the streets, this silhouette is one of Nike\'s loudest to date. Keeping the same design lines as the OG, these trainers are built with a tumbled leather upper in a stealthy black colourway. They feature a contrasting lace up fastening and Nike\'s legendary, visible Air cushioning underfoot for supreme impact protection and maximum, all-day comfort. With a grippy rubber tread, these sneakers are finished with oversized \'AIR\' branding to the sidewalls in a camo design with white trim for a bold look.',
        price: 649,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 9,
        img:
        require('@/assets/prods/nike_men/3.jpg'),
        title: "Nike",
        desc: "Air Max 270 React",
        longDesc: 'Experimenting with their iconic tech, Nike just dropped these men\'s Air Max 270 React trainers. Taking inspiration from the React Element 87, they\'re built with a textile upper that reps bold, floating overlays created using a streamlined, bar tach technique. These sneakers come in a Phantom colourway with contrasting colour block panels for an unmissable look. With a secure lace up fastening, this futuristic mash-up is equipped with a full-length React foam midsole, as well as the visible Air cushioning taken from the Air Max 270. Smashing expectations of comfort, they\'re finished with a grippy rubber tread, branding embroidered to the tongue and the iconic Swoosh in University Gold to the sidewalls.',
        price: 609,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 10,
        img:
        require('@/assets/prods/nike_women/1.jpg'),
        title: "Nike",
        desc: "Air Max 270 Women's",
        longDesc: 'Give your footwear faves a summer refesh with these women\'s Air Max 270 trainers from Nike. Inspired by the iconic Air Max 180 and Air Max 93, these trainers are built with a breathable mesh upper in a gradient University Gold, Blue and Psychic Pink colourway. They feature a secure lace up fastening and a lightweight, 2-piece midsole with Nike\'s tallest, heel Air unit for a super comfy feel. With a grippy rubber tread, these sneakers are finished with mini Swoosh branding and Air 270 branding to the tongue and heel.',
        price: 609,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 11,
        img:
        require('@/assets/prods/nike_women/2.jpg'),
        title: "Nike",
        desc: "Air Force 1 '07 LV8 Women's",
        longDesc: 'Evolving from the courts to the streets, step out in a retro icon with these women\'s Air Force 1 \'07 LV8 trainers from Nike. Updating the \'82 classic, these high-profile sneakers are built with a smooth leather upper in a white colourway. They feature a tonal lace up fastening and a Velcro-secured ankle strap for a supportive feel. With breathable forefoot perforations, these trainers are sat on a tonal midsole, which uses Nike\'s encapsulated Air for lightweight cushioning. They\'re finished with a grippy rubber tread and Swoosh branding to the sidewalls.',
        price: 415,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 12,
        img:
        require('@/assets/prods/nike_women/3.jpg'),
        title: "Nike",
        desc: "Air Force 1 '07 LV8 Women's",
        longDesc: 'Get the essential \'82 look with a standout edge in these women\'s Air Force 1 \'07 LV8 trainers from Nike. In a white colourway with reflective, metallic detailing to the sidewalls and heel, these trainers are made with a leather upper to keep your feet feelin\' supported and lookin\' luxe. With perforations throughout for a cool wear and tonal lacing for a locked-in fit, these creps are sat on a foam midsole with an encapsulated Air unit to the heel for a responsive and cushioned ride. With a grippy rubber outsole for traction on the streets, these sneakers are finished with Nike Air branding to the tongue, along with the iconic Swoosh to the sidewalls.',
        price: 389,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 13,
        img:
        require('@/assets/prods/Puma_men/1.jpg'),
        title: "Puma",
        desc: "Ralph Sampson Low",
        longDesc: 'Step up your sneaker style and rep a Houston Rockets legend in these men\'s Ralph Sampson trainers from PUMA. In a black colourway with white accents to the heel, these creps are made with a leather upper for premium support and style. With tonal lacing and a low-cut design, these trainers bring you revived archival style with a retro court edge. Sat on a rubber sole, these creps bring you responsive cushioning in every step, along with essential traction on the streets. Finished with a contrasting Formstrip to the sidewalls along with golden Ralph Sampson signature branding.',
        price: 379,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 14,
        img:
        require('@/assets/prods/Puma_men/2.jpg'),
        title: "Puma",
        desc: "Anthem One 5.4 TT",
        longDesc: 'Reach the peak of your game in these men\'s Anthem One 5.4 TT football boots from PUMA. In a red colourway with black detailing, these boots are built with a soft yet durable synthetic upper. They feature a secure lace up fastening for a locked-in fit, as well as a low-profile midsole with short rubber studs for traction and speed on hard natural surfaces and artificial grass pitches. These football boots are finished with a silver Formstrip to the sidewalls for a true PUMA look.',
        price: 219,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 15,
        img:
        require('@/assets/prods/Puma_men/3.jpg'),
        title: "Puma",
        desc: "Basket Vulc",
        longDesc: 'Exclusive to JD, these men\'s Basket Vulc trainers from PUMA freshen up your summer rotation. With clean design lines like the OG, these low-profile sneakers are built with a premium leather upper in a fresh white colourway. They feature a tonal lace up fastening, midfoot perforations and a tonal midsole for lightweight cushioning. With a grippy rubber tread for durable, everyday traction, these sneakers are finished up with the iconic Formstrip to the sidewalls, as well as a PUMA Basket wordmark.',
        price: 369,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 16,
        img:
        require('@/assets/prods/Puma_women/1.jpg'),
        title: "Puma",
        desc: "Nova 2 Women's",
        longDesc: 'Throw it back to the \'90s with these women\'s Nova 2 trainers from PUMA. Bringing a summer vibe to your \'fits, these sneakers are built with a sporty mesh upper in a white colourway. They feature premium leather overlays and a tonal lace up fastening for a snug fit. Sat on a chunky IMEVA midsole, these trainers offer lightweight, all-day cushioning, while a rubber tread keeps you gripped. Adding a pop of colour, they\'re finished with a woven heel and tongue pull in yellow with pink PUMA branding.',
        price: 469,
        isNewArrival: true,
        quantity: 1
    },
    {
        id: 17,
        img:
        require('@/assets/prods/Puma_women/2.jpg'),
        title: "Puma",
        desc: "Storm Pulse Women's",
        longDesc: 'Step out in bold, retro style with these women\'s Storm Pulse trainers from PUMA. With a breathable textile upper, these chunky trainers come in a Wine colourway with synthetic leather overlays. They feature a tonal lace up fastening and an exaggerated CMEVA midsole for cloud-like cushioning and an ultra-comfy feel. With a grippy rubber tread, these trainers are finished with PUMA branding to the tongue and the iconic Formstrip to the sidewalls.',
        price: 469,
        isNewArrival: false,
        quantity: 1
    },
    {
        id: 18,
        img:
        require('@/assets/prods/Puma_women/3.jpg'),
        title: "Puma",
        desc: "RS-9.8 Women's",
        longDesc: 'Retro yet futuristic, these women\'s RS-9.8 trainers from PUMA guarantee to make waves. In a white and grey colourway with hits of green and unmissable neon pink, these space-inspired sneaks are built with a durable ripstop upper with synthetic suede and leather overlays. They feature a secure lace up fastening and a chunky yet lightweight midsole that uses PUMA\'s archive Running System tech for all-day cushioning. With a grippy rubber tread, these sneaks are finished with RS-9.8 branding to the tongue and the legendary Formstrip to the sidewalls.',
        price: 439,
        isNewArrival: false,
        quantity: 1
    },
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

