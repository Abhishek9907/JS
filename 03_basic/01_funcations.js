
function sayMyName() {
console.log("A");
console.log("b");
console.log("h");
console.log("i");
console.log("s");
console.log("h");
console.log("e");
console.log("k");    
}

//sayMyName()

function addTwoNumber(num1,num2) // num1,num2 parameter
 {
    console.log(num1+num2);
}

//addTwoNumber(2,3) // arguments

function addTwoNumberNew(num11,num12){
    return num11+num12
}

const result=addTwoNumberNew(4,4)

// console.log(result);

function loggingUserMessage(userName) {
    if(!userName){
    console.log("Please Enter a userName");
    }
    return `Just loggied in ${userName}`
}

// console.log(loggingUserMessage());

function carValues(val1,val2,...num111) {
    return num111
}

console.log(carValues(200,300,2000));

const user={
    userName:"Abhishek",
    prices:255
}

function takingObjectValue(anyObect) {
    console.log(`Hello ${anyObect.userName} and it's price ${anyObect.price}`);    
}

//takingObjectValue(user)

// takingObjectValue({
//     userName:"Sam",
//     price:399
// })

const myNewArray=[200,300,400,500]

function acceptArray(getArrary) {
    return getArrary[1]
}

console.log(acceptArray(myNewArray));

console.log(acceptArray([1000,2000,30000]));