export default {
    state: {
        orders: [
            {
              title: "Хот-Дог",
              description: "Описссссссссссссссс",
              price: '20',
              promo: false,
              imageSrc: require("@/assets/img/HotDog.jpg"),
              id: "1",
            },
            {
              title: "Паніні",
              description: "Lorem leo",
              price: '30',
              promo: true,
              imageSrc: require("@/assets/img/panini.jpg"),
              id: "2",
            },
            {
              title: "Лаваш",
              description: "Lorem lavash",
              price: '40',
              promo: true,
              imageSrc: require("@/assets/img/lavash.webp"),
              id: "3",
            },
          ]
    },
    mutations: {
        createOrder(state, payload){
            state.orders.push(payload)
        }
    },
    actions: {
        createOrder({commit}, payload){
            payload.id = 'asds'
            commit('createOrder', payload)
        }
    },
    getters: {
        orders(state){
            return state.orders
        },
        promoOrders(state){
            return state.orders.filter(order => order.promo)
        },
        myOrders(state){
            return state.orders
        },
        orderById(state){
            return orderId => {
                return state.orders.find(order => order.id === orderId)
            }
        }
    }
    
}