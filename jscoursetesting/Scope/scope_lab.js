// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();
    
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

// Practice task
{
    // Exercise 1
    var practiceBlockVar = "I'm a practice block-scoped var";
    let practiceBlockLet = "I'm a practice block-scoped let";
    const practiceBlockConst = "I'm a practice block-scoped const";

    // Exercise 2
    practiceBlockVar = "I'm changed block-scoped var";
    practiceBlockLet = "I'm changed block-scoped let";
    //practiceBlockConst = "I'm changed block-scoped const"; // Throws TypeError --> const can not be reasigned

    console.log(practiceBlockVar)
    console.log(practiceBlockLet)
    console.log(practiceBlockConst)
}

// Exercise 3
practiceBlockVar = "I'm changed block-scoped var again";
practiceBlockLet = "I'm changed block-scoped let again";
practiceBlockConst = "I'm changed block-scoped const again"; // can be reasigned again

console.log(practiceBlockVar)
console.log(practiceBlockLet)
console.log(practiceBlockConst)