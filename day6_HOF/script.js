// function c(){
//     console.log("c");
// }

// function b(){
//     c();
//     console.log("b");
// }

// function a(){
//     b();
//     console.log("a");
// }

// console.log("Hello World!!");
// console.log("hi!!");
// a()

// let arr = [1,2,3,4,5];

// let sum = arr.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
// console.log(sum);

// let filteredArray = arr.filter((ele)=>ele%2===0);
// console.log(filteredArray);

// arr.forEach((number, index, arr)=>{
//     console.log(number, index, arr);
// });

// let arrGiven = arr.map((number)=>number * 2);
// console.log(arrGiven);

// console.log(arr);

let students = [
  { name: "Piyush", rollNumber: 31, mark: 80 },
  { name: "Jenny", rollNumber: 1, mark: 90 },
  { name: "kauhsaul", rollNumber: 23, mark: 89 },
  { name: "akhil", rollNumber: 34, mark: 60 },
  { name: "Rachit", rollNumber: 11, mark: 8 },
  { name: "Krishna", rollNumber: 51, mark: 40 },
];
// q4 return total marks for studnets with marks greater than 60 after 20 marks have been added to tose who scored less than 60
let total = students.map((stu)=>{
    if(stu.mark < 60){
    stu.mark +=20;
    }
    return stu;
}).filter((stu)=>stu.mark > 60)
.reduce((acc,cur)=>acc+cur.mark, 0);
console.log(total);








// q3:- return only names of students who scored more than 30
// let filteredArr = students.filter((stu) => stu.mark > 60);
// let namesArray = filteredArr.map((stu)=> stu.name);
//   .map((stu) => stu.name);
// console.log(namesArray);

//q2:- sum of marks of all students
// let sum = students.reduce((acc,cur)=>acc+cur.mark, 0);
// console.log(sum);

// Q1:- return student with capital
// let array = students.map((stu)=>stu.name.toUpperCase());
// console.log(array);
