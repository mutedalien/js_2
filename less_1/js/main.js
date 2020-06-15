const products = [
    {id: 4, title: 'Shirt', price: 150, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Shirt'},
    {id: 4, title: 'Socks', price: 50, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Socks'},
    {id: 4, title: 'Jacket', price: 350, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Jacket'},
    {id: 4, title: 'Shoes', price: 250, img: 'https://dummyimage.com/150x150/edba91/242424.png&text=Shoes'}
];

const renderProduct = (title, price, img) => {
    return `<div class="product">
        <img src="${img}" alt="product_image">
        <h3>${title}
        <p>${price} руб.</p>
        <button class="product__atc">Добавить в корзину</button>
    </div>`;
};

const renderProducts = list => {
    let productList = list.map(item => renderProduct(item.title, item.price, item.img));
    document.querySelector('.products').innerHTML = productList.join("\n");
};

renderProducts(products);

// Запятая выводится из-за того, что мы помещаем в HTML целый массив, а его элементы разделены запятой.