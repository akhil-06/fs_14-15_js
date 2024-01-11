// console.log("hello World!!");

// let btns = document.querySelectorAll("button");
// console.log(btn);
// btns.forEach((btn)=>{
//     // console.log(btn);
//     btn.addEventListener("click", function(e){
//         console.log(e.target.innerText);
//     })
// })


let div = document.querySelector("div");
// console.log(div);

div.addEventListener("click", function(e){
    // console.log("Div IS clicked", event.target.innerText);
    if(e.target.tagName === "BUTTON"){
        if(e.target.innerText === "Button 1"){
            console.log("btn1 is clicked!!");
        }
        console.log(e.target.innerText);
    }

    console.log(e);
})

