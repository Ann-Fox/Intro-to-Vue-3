// const product = 'Socks'
const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            // inStock: false,
            inventory: 10,
            onSale: true,
            url: 'https://www.vuemastery.com/',
            description: 'A warm fuzzy pair of socks.',
            count: 0
        }
    }
})
