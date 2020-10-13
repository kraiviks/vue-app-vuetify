import * as fb from 'firebase'

class Order {
    constructor(title, description, promo = false, ownerId, imageSrc = '', id = null){
        this.title = title
        this.description = description
        this.promo = promo
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.id = id
    }
}

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
        async createOrder({commit, getters}, payload){
            commit('clearError')
            commit('setLoading', true)

            try {
                const newOrder = new Order(
                    payload.title, 
                    payload.description, 
                    getters.user.id, 
                    payload.imageSrc, 
                    payload.promo
                    )

                const order = await fb.database().ref('orders').push(newOrder)

                commit('setLoading', false)
                commit('createOrder', {
                    ...newOrder,
                    id: order.key
                })
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
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