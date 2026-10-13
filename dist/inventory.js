"use strict";
// Basic Types and Variables
let productName = "Laptop";
let price = 45000;
let inStock = true;
let tags = ["Electronics", "Computer"];
let productId = 101;
// Function to display product information
function printProductInfo() {
    console.log(`Product: ${productName}, Price: ₹${price}, ` +
        `In Stock: ${inStock}, Tags: ${tags.join(", ")}, ` +
        `Product ID: ${productId}`);
}
// Call the function
printProductInfo();
// Using any type
let item = "Mobile";
// Refactoring to a specific type
let itemName = "Mobile";
console.log(itemName);
//# sourceMappingURL=inventory.js.map