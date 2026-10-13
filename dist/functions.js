"use strict";
// Functions and Scope
// 1. Calculate discount with a default value of 10%
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));
// 2. Apply bulk discount using map
function applyBulkDiscount(prices, discountRate) {
    return prices.map(price => calculateDiscount(price, discountRate));
}
const prices = [100, 200, 300, 400];
console.log("Bulk Discount:", applyBulkDiscount(prices, 10));
// 3. Block scope demonstration
for (let i = 0; i < 3; i++) {
    let message = "Inside the loop";
    console.log(message);
}
// console.log(message);
// Error: message is only available inside the loop.
//# sourceMappingURL=functions.js.map