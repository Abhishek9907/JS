const user={
    userName:"Abhishek",
    priceOfCourse:999,
    welcomeMessageg:function () {
        console.log(`Hello this user ${this.userName}`);
        console.log(this);
    }
}

// user.welcomeMessageg()
// user.userName="Sushil"
// user.welcomeMessageg()

// console.log(this);

// function noname() {
//     const funcUserName="printMyName"
//     console.log(this);
// }

// noname()

// const newFuncName=function noname() {
//     const funcUserName="printMyName"
//     console.log(this.funcUserName);
// }

// newFuncName()


// const newFuncName= () =>{
//     const funcUserName="printMyName"
//     console.log(this);
// }

// newFuncName()

const addTwo = (num1,num2) =>{
    return num1+num2
}

// console.log(addTwo(8,12));

// const addTwoNew= (num1,num2)=> num1+num2
//another way
//const addTwoNew= (num1,num2)=> (num1+num2)

const addTwoNew= (num1,num2)=> ({userNmae:"Abhishek"})
 console.log(addTwoNew(22,44));