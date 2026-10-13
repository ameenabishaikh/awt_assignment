// Interfaces and Objects

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 45000,
    inStock: true
};

const product2: Product = {
    id: 2,
    name: "Mobile",
    price: 15000,
    inStock: true
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);