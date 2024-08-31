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

//Task 4: Comparison Operators

let employeeScore1 = 3
let employeeScore2 = 4
console.log(employeeScore1>employeeScore2); //i tried doing the output on a straight line but it was too messy and i couldnt figure out how to separate outputs without getting an error if i used commas
console.log(employeeScore1<employeeScore2);
console.log(employeeScore1>=employeeScore2);
console.log(employeeScore1<=employeeScore2);
console.log(employeeScore1===employeeScore2);
console.log(employeeScore1!=employeeScore2);

//Task 5: Logical Operators

let hasKeyCard = true
let hasPermission = false
console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard||hasPermission);

console.log(!hasKeyCard);
console.log(!hasPermission);

console.log(!hasKeyCard&&!hasPermission);
console.log(!hasKeyCard||!hasPermission);
