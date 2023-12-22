// singleton
// Object.create

// object literals

const mSym=Symbol("some value")

let user={
    name:"Abhishek",
    age:44,
    [mSym]:"some new value",
    "full name":"Abhishek Mishra",
    email:"abhishek@google.com",
    add:"near something",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user);
// console.log(user.name);
// console.log(user["full name"]);
// console.log(user[mSym]);

user.age=55
// console.log(user.age);
//Object.freeze(user)

user.age=66
// console.log(user.age);

user.greeting=function () {
    console.log("Hi From Funcation");
}

user.greetingtwo=function () {
    console.log(`Hi From ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingtwo());