class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Shirt', price: 150, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Shirt'},
            {id: 2, title: 'Socks', price: 50, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Socks'},
            {id: 3, title: 'Jacket', price: 350, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Jacket'},
            {id: 4, title: 'Shoes', price: 250, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Shoes'},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
    sum() {
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        return sum;
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }

    render() {
        return `<div class="product" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="product__atc">Добавить в корзину</button>
                </div>
            </div>`;

    }
}

const products = new ProductList();
//  Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
console.log("Сумма товаров " + products.sum());

//  Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
class Cart {
    constructor() {
        this.goodsInCart = [];
    }
    add(item) {}
    remove(item) {}
    _render() {}
}

class CartItem {
    constructor(item, qty = 1) {
        this.qty = qty;
    }
    _render() {}
    changeQty() {}
}