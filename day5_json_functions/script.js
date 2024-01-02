// console.log("hello");
// JSON:- javascript object notation


// const myInfo = {
//     name: "John",
//     age:20,
//     city:"new york"
// }
// console.log(typeof myInfo);
// let obj = JSON.stringify(myInfo);
// console.log(typeof obj);
// let obj2 = JSON.parse(obj);
// console.log(typeof obj2);


//functions

// 1. function declaration
// function sum(a,b){
//     // let a = 10;  a-> 10, b->undefined => 10 + undefined
//     // let b = 20;
//     // console.log(a+b);
//     return a+b;
// }

// let ans  = sum(10,70);
// console.log(ans);


// 2 anonynous functions and function expression
// let a = 10;
// let add = function(){
//     console.log("hello world!!!");
// }

// // console.log(add);
// add()


// 3. higher order functions
// function gc(fun){
//     console.log(fun);
//     fun()
// }

// gc(function(){
//     console.log("hello world!!!!");
// })

// function returnFun(){
//     return function(){
//         // console.log("hi!!!!");
//         // return "hiii!!!";
//         return function(){
//             // console.log("inner most function");
//             return function(){
//                 console.log("innermost inner function")
//             }
//         }
//     }
// }

// let f1 = returnFun();
// // console.log(f1());
// let ans = f1();
// // console.log(ans());
// let f2 = ans();
// console.log(f2());

// arrow functions
// function show(language){
//     // console.log("I love Javascript!!!");
//     return `I love  ${language}` ;
// }

// // let show = (language)=>`I love  ${language}`;

// let addTwoNumbers = (num1,num2)=> num1+num2;


// let ans = addTwoNumbers(20,30)
// console.log(ans);



// iife:- immediately invoked function expression

// (()=> {
//     console.log('IIFE');
// })()

// var b = 10

// function print(){
//     let b = 8
//     console.log(b) 
// }

// print()

// console.log(b)


// var a = 8;

// ((a)=>{
//     a = 9;
//     console.log(a);
// })(a);

// console.log(a);


// var b = 10

// function print(){
//      b = 8
//     console.log(b) // output: 8
// }

// print()

// console.log(b) // output: 8