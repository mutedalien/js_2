const products = [
    {id: 4, title: 'Shirt', price: 150},
    {id: 4, title: 'Socks', price: 50},
    {id: 4, title: 'Jacket', price: 350},
    {id: 4, title: 'Shoes', price: 250}
];

const renderProduct = (title, price, img = 'https://dummyimage.com/150x150/edba91/242424.png&text=GeekBrains') => {
    return `<div class="product">
        <img src="${img}" alt="product_image">
        <h3>${title}
        <p>${price} руб.</p>
        <button class="product__atc">Добавить в корзину</button>
    </div>`;
};

const renderProducts = list => {
    /* Метод map() создаёт новый массив, состоящий из результатов вызова
    * callback(item, i, arr) для каждого элемента
    */
    let productList = list.map(item => renderProduct(item.title, item.price));
    // Запятая выводится из-за того, что мы помещаем в HTML целый массив, а его
    // элементы разделены запятой.
    // TODO: преобразовать массив в строку
    document.querySelector('.products').innerHTML = productList.join("\n");
};

renderProducts(products);