const product = { 
    name: 'Клавиатура', 
    price: 5000 
};

function showProduct(discount, city) {
    const finalPrice = this.price * (1 - discount / 100);
    
    console.log(`Товар: ${this.name}, Цена со скидкой: ${finalPrice} руб., Город: ${city}`);
}

console.log("Вызов через call");
showProduct.call(product, 10, 'Москва'); 

console.log("Вызов через apply");
showProduct.apply(product, [20, 'Санкт-Петербург']); 
