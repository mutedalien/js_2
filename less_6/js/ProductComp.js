Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150/e6d67a/FF7F50/?text=GeekBrains',
        }
    },
    methods: {
        FilterGoods(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <p v-if="$root.$refs.search.searchText && !$root.$refs.search.filtered.length">
            По вашему запросу ничего не найдено</p>
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },

    template: `
    <div class="product-item" :data-id="product.id_product">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
                </div>
            </div>
    `
});