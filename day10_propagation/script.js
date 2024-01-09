let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
// console.log(div1,div2,div3);

div1.addEventListener("click", (e)=>{
    console.log("Grand Parent");
    e.stopPropagation();
    //third argument is useCapture
}, true)

div2.addEventListener("click", (e)=>{
    console.log("Parent");
    e.stopPropagation();
}, true)

div3.addEventListener("click", (e)=>{
    console.log("Children");
    e.stopPropagation();
}, true)