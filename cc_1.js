//Task 1: Variables and Data Types

let employeeName = "Harrison Lloyd"
const employeeID = "0123"
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

//Task 2: Compound Data Types

let products = ["Fanta Soda", "Nutter Butter cookies", "Bananas"];
const productDetails = {
    name: products,
    price: 35.20,
    inStock: true,

}
console.log(products, productDetails);

//Task 3: Assignment Operators

let accountBalance = 145000.50
accountBalance+= 7500
console.log(accountBalance);

accountBalance-=300
console.log(accountBalance);

accountBalance*=0.3
console.log(accountBalance);

accountBalance/=0.1
console.log(accountBalance);

accountBalance%=7
console.log(accountBalance);