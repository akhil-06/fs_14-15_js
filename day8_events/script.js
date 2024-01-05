// console.log("Hello World!! Events");
// let h1 = document.getElementById("heading1");
// console.log(h1);
// h1.style.color = "red";





let text = document.getElementById("text");
text.addEventListener("keyup", function(e){
    console.log(e);
    // if(e.key === 'a'){
    //     console.log("a is pressed", e);
    // }
})

let btn = document.getElementById("head1");
console.log(btn);


function clickFun(akhil){
    alert("button is clicked!!!")
    console.log(akhil);
}

btn.addEventListener("click", clickFun);




// let para = document.querySelector("p");
// // console.log(para);
// para.addEventListener("mouseover", (e)=>{
//     console.log("mouseEnter event!!!");
//     console.log(e);
// })

