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




function groupProductsByCategory(products) {
  // Initialize an empty object to store the grouped products
  const groupedProducts = {};

  // Loop through each product in the products array
  products.forEach(product => {
    // If the category doesn't exist in the object, create an empty array for it
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }

    // Add the current product to the appropriate category
    groupedProducts[product.category].push(product);
  });

  return groupedProducts;
}

// Example usage
const grouped = groupProductsByCategory(products);
console.log(grouped);

