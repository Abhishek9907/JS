// Immediately Invoke Funcation Expression

(function iifyCheck() {
    console.log(`SOMETHING ABOUT THE IIFY`);
})();

(()=>{
    console.log(`NEW IFFY`);
})();

((name)=>{
    console.log(`NEW IFFY ${name}`);
})("Abhishek")