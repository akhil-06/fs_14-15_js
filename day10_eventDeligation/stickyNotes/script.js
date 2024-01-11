// console.log("hello word!!");

let ct = document.querySelector(".color_and_text").children;
// console.log(ct);
// console.log(ct[0].value);
// let textAreaValue = ct[0].value;
// console.log(colorValue);

let btn = document.querySelector("button");
// console.log(btn);
let rightContainer = document.querySelector(".right-container-notes");

let btn2 = document.querySelectorAll(".btn2");
console.log(btn2);

btn.addEventListener("click", () => {
  let colorValue = ct[1].children[0].value;
  if (ct[0].value === "") {
    alert("Please enter some text!!!");
    return;
  }
  makeStickyNotes(ct[0].value, colorValue);
  ct[0].value = "";
  document.querySelector(".notesNotAdded").style.display = "none";
  removeStickyNotes();
});

function removeStickyNotes() {
  //   btn2 = document.querySelectorAll(".btn2");
  //   btn2.forEach((singleBtn) => {
  //     singleBtn.addEventListener("click", (e) => {
  //       e.target.parentElement.remove();
  //     });
  //   });  

  let rc = document.querySelector(".right-container");

  rc.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    if(e.target.innerText === "X"){
        e.target.parentElement.remove();
    }
  });
}

function makeStickyNotes(text, color) {
  console.log(text, color);
  let div = document.createElement("div");
  div.innerHTML = `
    <p>${text}</p>
    <button class="btn2">X</button>
    `;
  div.style.backgroundColor = color;
  rightContainer.appendChild(div);
}
