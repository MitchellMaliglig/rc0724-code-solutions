const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const price = prices.map((pizza) => ({ price: pizza, salePrice: pizza / 2 }));
console.log(price);

const pizzaMoney = new Intl.NumberFormat('en-Us', {
  style: 'currency',
  currency: 'USD',
});
const pizzas = prices.map((pizza) => pizzaMoney.format(pizza));
console.log(pizzas);
