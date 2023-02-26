class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const products = [
  new Product('apple', 1.2, 10, 'Fresh green apples'),
  new Product('orange', 0.8, 15, 'Juicy oranges'),
  new Product('banana', 0.5, 20, 'Sweet bananas'),
  new Product('strawberry', 2.0, 5, 'Delicious strawberries'),
];

function filterProducts(query) {
  const [nameCondition, priceCondition, quantityCondition, descriptionCondition] = query.split('&');
  return products.filter(product => {
    let isMatched = true;
    if (nameCondition) {
      const [, nameOperator, nameValue] = nameCondition.match(/name-(contains|starts|ends)-(.+)/);
      if (nameOperator === 'contains') {
        isMatched = isMatched && product.name.includes(nameValue);
      } else if (nameOperator === 'starts') {
        isMatched = isMatched && product.name.startsWith(nameValue);
      } else if (nameOperator === 'ends') {
        isMatched = isMatched && product.name.endsWith(nameValue);
      }
    }
    if (priceCondition) {
      const [, priceOperator, priceValue] = priceCondition.match(/price-([<>=]=?)-([\d.]+)/);
      isMatched = isMatched && eval(`${product.price}${priceOperator}${priceValue}`);
    }
    if (quantityCondition) {
      const [, quantityOperator, quantityValue] = quantityCondition.match(/quantity-([<>=]=?)-(\d+)/);
      isMatched = isMatched && eval(`${product.quantity}${quantityOperator}${quantityValue}`);
    }
    if (descriptionCondition) {
      const [, descriptionOperator, descriptionValue] = descriptionCondition.match(/description-(contains|starts|ends)-(.+)/);
      if (descriptionOperator === 'contains') {
        isMatched = isMatched && product.description.includes(descriptionValue);
      } else if (descriptionOperator === 'starts') {
        isMatched = isMatched && product.description.startsWith(descriptionValue);
      } else if (descriptionOperator === 'ends') {
        isMatched = isMatched && product.description.endsWith(descriptionValue);
      }
    }
    return isMatched;
  });
}

console.log(filterProducts('name-contains-ap&price>=1.0&quantity>10'));
