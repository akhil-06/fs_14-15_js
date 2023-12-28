// console.log("Strings");

// let s1 = "Geekster Educator :- Akhil Sharma";
// console.log(s.charAt(11));
// console.log(s1);
// s1[2] = 'R';
// console.log(s1);

//256 characters

// 3ways to declare a string
// let s2 = 'Funtion name is String';
// console.log(s2);

// let s3 = `Akhil Sharma web developer`;
// console.log(s3);

//template strings
// let name = "akhil";
// let notification = `${name} send you a notifictation on instagram`;
// console.log(notification);

//long strings
// let s1 = "My name is Anuj. I live in India.I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too.";
// console.log(s1);

//string concatenation
// let firstName = "Akhil";
// let hello = "Hello";
// let num = 10
// // let message = hello + firstName;
// let message = `${hello} ${firstName} ${num}`;
// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
//ipHonE -> iphone :-  iphone -> iphone

//search  and icludes
// let text = "Hi there today we will learn about String and its method let’s see:-";
// let keyword = "today";
// if(text.includes(keyword) !== false){
//     console.log(`${keyword} was found in the text`);
// }else{
//     console.log(`${keyword} :- No match found`);
// }
// console.log(text.includes(keyword));

//replace
// let text = "Hi there, today we will learn about today String and its method let’s see:-";
// let keyword = "today";
// let replacedString = text.replace("learn", "in today's session");
// console.log(replacedString);
// console.log(text);

//slice, substring, substr

//slice
// let text = "I've been developing WordPress themes for more\
//  than 2 years and based from my own experience and personal \
// preferences, here are the most common WordPress code snippets\
//  that I use. Please do check it out and you learn a thing or two, \
// let me know in the comments. carbon.sh, VsCode";
// let slicedText = text.slice(0, 250);
// console.log(slicedText + " ...read more");
// let text = "Hello World!!!";
// console.log(text.slice(-2));

//substring
// let text = "Hello World!!!"
// console.log(text.substring(6, 1));   //-> 0,6

//substr
// let text = "Hello World!!!"
// console.log(text.substr(60));

// let str = "sjdbc aejc jecvjeavjvmsvdj gke gvke gvlkevklgevk gekv ekgrv ek grvckegvk gdkvaec"
// function truncate(str, maxLength){
//     if(str.length > maxLength){
//         let ans = str.substring(0, maxLength) + "...";
//         console.log(ans);
//     }else{
//         console.log(str);
//     }
// }

// truncate(str, 11);

// function extractCurrency(str){
//     let str1 = str.slice(1);
//     let num = Number(str1);
//     return num;
// }

// console.log(extractCurrency('$120') === 120);

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("akhil "));
