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




//  Find Products In Stock

//    Create a function to filter and return only the products that are in stock.

const aInStockProducts = (prod) => {
  console.log(prod.filter((value) => value.inStock === true))
}
aInStockProducts(products);


// Other way 
const inStockProducts = products.filter(product => product.inStock);

inStockProducts.forEach(product => {
  console.log(`${product.name} is in stock at $${product.price}`);
});
