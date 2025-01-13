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

// 1. Display All Products
//    Write a function to iterate over the `products` list and display each product's details in the console.

const displayProducts = (prod) => {
  prod.map((value, index) => console.log(value))
}

displayProducts(products);


// 2. Find Products In Stock
//    Create a function to filter and return only the products that are in stock.

const inStockProducts = (prod) => {
  console.log(prod.filter((value) => value.inStock === true))
}
inStockProducts(products);

// 3. Sort Products by Price
//    Write a function to sort the `products` list in ascending order of price.
// const sortedProducts = (prod) => {
//   let i = 0;
//   let j = 0;
//   for (i = 0; i < prod.length; i++) {
//     for (j = i; j < prod.length; j++) {
//       if (prod[i].price > prod[j].price) {
//         let temp = prod[j];
//         prod[j] = prod[i];
//         prod[i] = temp;
//       }

//     }

//   }

//   console.log(prod)

// }

// sortedProducts(products);



// 4. Find Highly Rated Products
//    Write a function to return products with a rating of 4.5 or higher.
const highlyratedProducts = (prod) => {
  console.log(prod.filter((value) => value.rating >= 4.5))
}
highlyratedProducts(products);

// 5. Add a New Product
//    Create a function to add a new product to the `products` list with all necessary details.

// const addNewproduct = (products, newid, newname, newprice, newcategory, newinStock, newrating) => {

//   const newProduct = {
//     id: newid,
//     name: newname,
//     price: newprice,
//     category: newcategory,
//     inStock: newinStock,
//     rating: newrating
//   }

//   products.push(newProduct);

//   console.log(`the new product has been added to the  list with all necessary details.  `)
// }
// addNewproduct(products, 6, "iPhone", 999.99, "Electronics", true, 4.4);
// console.log(products)

// 6. Calculate Average Rating
//    Write a function to calculate the average rating of all products in the list.
const avgRating = (prod) => {
  const totalrating = prod.reduce((acc, currVal) => acc += currVal.rating, 0)
  const avgrating = totalrating / prod.length;
  console.log(avgrating);
}

avgRating(products);

// 7. Search for a Product by Name
//    Create a function to find and return a product by its name.

const productByname = (prod, name) => {
  const searchedproduct = prod.filter((value, index) => value.name === name)
  console.log(searchedproduct);
}
productByname(products, 'Organic Green Tea');

// 8. Categorize Products
//    Write a function to group products by their categories into separate arrays.
const catagorizedProducts = (prod) => {
  let cp = {};
  for (let value of prod) {
    let categoryHeading = value.category
    if (!cp[categoryHeading]) {
      cp[categoryHeading] = []; // seperate array for categories
    }
    cp[categoryHeading].push(value);
  }
  console.log(cp);
}

catagorizedProducts(products);