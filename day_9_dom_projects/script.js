let btn = document.getElementById("btn");
let birthdate = document.getElementById("birthday");
// console.log(birthdate);
let para = document.getElementById("para")


function calculateAge(){
    let currDate = new Date();
    console.log(currDate)
    let birthDate = new Date(birthdate.value);
    console.log(birthDate)
    let ans = currDate.getFullYear() - birthDate.getFullYear();
    let month = currDate.getMonth() - birthDate.getMonth();
    console.log(month);
    // console.log(ans);
    // console.log(currDate.getFullYear(), birthDate.getFullYear());

    // console.log(currDate.getMonth(), birthDate.getMonth());

    // console.log(currDate.getDate(), birthDate.getDate());

    if(month < 0 || month === 0 && currDate.getDate() <  birthDate.getDate()){
        ans--;
    }
    
    para.innerText = `Your age is ${ans} years old`
}

btn.addEventListener("click", calculateAge);