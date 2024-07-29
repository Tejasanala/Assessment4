const customMap = (array, callback) => {
  return array.reduce((acc, current) => {
    acc.push(callback(current));
    return acc;
  }, []);
};

const customFilter = (array, callback) => {
  return array.reduce((acc, current) => {
    if (callback(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
};

// Example data: an array of products
const products = [
  { name: "Laptop", price: 899, category: "Electronics" },
  { name: "Phone", price: 499, category: "Electronics" },
  { name: "Desk", price: 150, category: "Furniture" },
];

const productNames = customMap(products, (product) => product.name);
console.log("Product Names:", productNames); // Output: ['Laptop', 'Phone', 'Desk', 'Chair', 'Notebook']

const furnitureProducts = customFilter(
  products,
  (product) => product.category === "Furniture"
);
console.log("Furniture Products:", furnitureProducts);

const expensiveProducts = customFilter(
  products,
  (product) => product.price > 100
);
console.log("Expensive Products:", expensiveProducts);
