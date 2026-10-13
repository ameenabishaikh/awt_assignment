// Error 1: Assigning a string to a number
let productPrice: number = "500";

// Error 2: Passing a string instead of a number
function calculateTotal(price: number): number {
    return price * 2;
}

calculateTotal("100");