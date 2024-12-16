//1.Write an arrow function that takes two parameters, a and b, and returns their sum.
let sum = (a,b)=>`The Sum of a+b is: ${a+b}`;
console.log(sum(10,30)); 

//2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let greet = (name)=>`Hello ${name}`;
console.log(greet('Pavan Kalyan'))

//3.Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
let isEven = (a)=>(a%2==0)?true:false;
console.log(isEven(4));
console.log(isEven(5));

//4.Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
let isGreaterThan10 = (num)=>(num>10)?true:false;
console.log(isGreaterThan10(11));
console.log(isGreaterThan10(5));

//5.Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”

let strLength = (str1,str2)=>{
    if(str1.length>str2.length){
        return str1;
    }
    else if(str2.length>str1.length){
        return str2;
    }
    else{
        return 'Equal  Length'
    }
}
console.log(strLength('pavan','pavanK'));

//Method -2

let strLength2 = (str1,str2)=>(str1.length == str2.length)?'Equal Length':(str1.length>str2.length)?str1:str2;
console.log(strLength2('PAVAN', 'PAVANK'));