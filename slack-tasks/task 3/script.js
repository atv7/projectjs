"use strict"

class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
}

const products = [
    new Product('Яблоко', 150, 10, 'Свежее, зеленое'),
    new Product('Банан', 301, 15, 'Спелый, вкусный'),
    new Product('Виноград', 450, 20, 'Сладкий, без косточек'),
    new Product('Арбуз', 500, 5, 'Крупный, сладкий'),
    new Product('Ананас', 350, 6, 'Желтый, с пальмы'),
  ];


function filterProducts(string) {
    const [nameCondition, priceCondition, quantityCondition, descriptionCondition] = string.split('&');

    let modernProducts = products.filter(product => {
        let flag = true;

        if (nameCondition) {
            const [, nameOperator, nameValue] = 
            nameCondition.match(/name-(contains|starts|ends)-(.+)/);

            if (nameOperator === 'contains') {
                flag = flag && product.name.includes(nameValue);
            } else if (nameOperator === 'starts') {
                flag = flag && product.name.startsWith(nameValue);
            } else if (nameOperator === 'ends') {
                flag = flag && product.name.endsWith(nameValue);
            }
        }

        if (priceCondition) {
            const [, priceOperator, priceValue] = priceCondition.match(/price-([<>=]=?)([\d.]+)/);

            flag = flag && eval(`${product.price}${priceOperator}${priceValue}`);
        }

        if (quantityCondition) {
            const [, quantityOperator, quantityValue] = 
            quantityCondition.match(/quantity-([<>=]=?)([\d.]+)/);

            flag = flag && eval(`${product.quantity}${quantityOperator}${quantityValue}`);
        }

        if(descriptionCondition) {
            const [, descriptionOperator, descriptionValue] = 
            descriptionCondition.match(/description-(contains|starts|ends)-(.+)/);

            if (descriptionOperator === 'contains') {
                flag = flag && product.description.includes(descriptionValue);
            } else if (descriptionOperator === 'starts') {
                flag = flag && product.description.startsWith(descriptionValue);
            } else if (descriptionOperator === 'ends') {
                flag = flag && product.description.endsWith(descriptionValue);
            }
        }
        return flag;
    });
    return modernProducts;

}

const filteredItems1 = filterProducts('name-contains-ан&price->300&quantity->=5&description-ends-мы');
console.log(filteredItems1)

const filteredItems2 = filterProducts('name-contains-ан&price->300&quantity->=5');
console.log(filteredItems2)

