const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 49.99,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Organic Green Tea",
    price: 14.99,
    category: "Grocery",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Fitness Smartwatch",
    price: 129.99,
    category: "Wearable Tech",
    inStock: true,
    rating: 4.6,
  },
];



const totalPriceInStock = products
  .filter(product => product.inStock)  // Get products that are in stock
  .reduce((sum, product) => sum + product.price, 0);  // Sum their prices

console.log(`Total price of products in stock: $${totalPriceInStock.toFixed(2)}`);
