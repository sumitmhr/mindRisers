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



//    Add a New Product

//    Create a function to add a new product to the `products` list with all necessary details.

const addNewProduct = (products, newId, newName, newPrice, newCategory, newInStock, newRating) => {

  const newProduct = {
    id: newId,
    name: newName,
    price: newPrice,
    category: newCategory,
    inStock: newInStock,
    rating: newRating
  }

  products.push(newProduct);

  console.log(`The new product has been added to the  list with all necessary details.  `)
}
addNewProduct(products, 6, "iPhone", 999.99, "Electronics", true, 4.4);
console.log(products)