// Basic Types and Variables

let productName: string = "Laptop";
let price: number = 45000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer"];
let productId: number | string = 101;

// Function to display product information
function printProductInfo(): void {
    console.log(
        `Product: ${productName}, Price: ₹${price}, ` +
        `In Stock: ${inStock}, Tags: ${tags.join(", ")}, ` +
        `Product ID: ${productId}`
    );
}

// Call the function
printProductInfo();

// Using any type
let item: any = "Mobile";

// Refactoring to a specific type
let itemName: string = "Mobile";

console.log(itemName);