const products = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: 49.99, category: "Electronics", inStock: true, rating: 4.5 },
  { id: 2, name: "Stainless Steel Water Bottle", price: 19.99, category: "Home & Kitchen", inStock: true, rating: 4.8 },
  { id: 3, name: "Gaming Keyboard", price: 89.99, category: "Electronics", inStock: false, rating: 4.3 },
  { id: 4, name: "Organic Green Tea", price: 14.99, category: "Grocery", inStock: true, rating: 4.7 },
  { id: 5, name: "Fitness Smartwatch", price: 129.99, category: "Wearable Tech", inStock: true, rating: 4.6 },
];


const bubbleSortDesc = (arr) => {
  const n = arr.length;
  // Outer loop to iterate over the array
  for (let i = 0; i < n; i++) {
    // Inner loop to perform comparisons
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare the adjacent elements (reverse the comparison for descending order)
      if (arr[j].price < arr[j + 1].price) {
        // Swap the elements if they're in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const sortedByPriceDesc = bubbleSortDesc(products);
console.log(sortedByPriceDesc);
