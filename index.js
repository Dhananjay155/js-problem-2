function printName(name) {
    console.log(name);
}

printName("John"); 

function printDynamicType(value) {
    console.log(typeof value);
}

printDynamicType(10); 
printDynamicType("Hello"); 

function printDataType(value) {
    console.log(typeof value);
}

printDataType("Hello"); 
printDataType(10); 
printDataType(true); 
printDataType([1, 2, 3]); 
printDataType({ key: "value" });
printDataType(null); 
printDataType(undefined); 

function printNullableType(value) {
    if (value === null) {
        console.log("null");
    } else if (value === undefined) {
        console.log("undefined");
    } else {
        console.log(typeof value);
    }
}

printNullableType(null); 
printNullableType(undefined); 
printNullableType("Hello");
printNullableType(10); 

function checkTruthy(value) {
    console.log(Boolean(value));
}

checkTruthy(""); 
checkTruthy(0); 
checkTruthy(null); 
checkTruthy(undefined); 
checkTruthy("Hello"); 
checkTruthy(10); 
checkTruthy({}); 

function generateMessage(name, age, language) {
    console.log(`My name is ${name}, I am ${age} years old, and my favorite programming language is ${language}.`);
}

generateMessage("John", 25, "JavaScript"); 
