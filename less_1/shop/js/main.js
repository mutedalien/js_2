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

new ProductList();

// Запятая выводится из-за того, что мы помещаем в HTML целый массив, а его элементы разделены запятой.
