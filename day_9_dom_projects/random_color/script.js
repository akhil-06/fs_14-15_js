let colorCOntainerParent = document.getElementById("colorContainer");

for(let i=0;i<300;i++){
    let colorContainer = document.createElement("div");
    // colorContainer.style.height = 
    colorContainer.classList.add("color-conatiner");
    colorCOntainerParent.appendChild(colorContainer);
}

let allDivs = document.querySelectorAll(".color-conatiner");

allDivs.forEach((div)=>{
    let newColor = randonColor();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;
})

function randonColor(){
    let str = "0123456789abcdef";
    let colorStr = "#";
    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random() * str.length);
        // console.log(randomNum);
        colorStr += str[randomIndex];
    }
    // console.log(colorStr);
    return colorStr;
}

randonColor();