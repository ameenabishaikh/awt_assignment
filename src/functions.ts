// Functions and Scope

// 1. Calculate discount with a default value of 10%
function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));

// 2. Apply bulk discount using map
function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map(price =>
        calculateDiscount(price, discountRate)
    );
}

const prices: number[] = [100, 200, 300, 400];

console.log("Bulk Discount:", applyBulkDiscount(prices, 10));

// 3. Block scope demonstration
for (let i = 0; i < 3; i++) {
    let message: string = "Inside the loop";
    console.log(message);
}

// console.log(message);
// Error: message is only available inside the loop.