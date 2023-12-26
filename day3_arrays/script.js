let players = [
  { name: "Akash", score: 100 },
  { name: "Abhay", score: 90 },
  { name: "Shaw", score: 60 },
  { name: "Hitarh", score: 80 },
  { name: "Hussain", score: 80 },
  { name: "Preethi", score: 70 },
  { name: "Vaibhav", score: 50 },
];
//accesing the element from an array
// console.log(players[4]);
//length
// console.log("Length of the array is : "+players.length);
//add the element in the array
// players.push({name:"Jinu", score:75});
// console.log(players);

//pop
// players.pop();
// console.log(players);

//unshift
// players.unshift({name:"John Doe", score: 200});
// console.log(players);

//shift
// players.shift();
// console.log(players);

//slice
// let sliced_player = players.slice(2, 10);
// console.log(sliced_player);
// console.log(players);

//splice
// let subPlayers = players.splice(1,4,{name:"Abhishek", score:200}, {name:"Alien", score:20});
// console.log(subPlayers);
// console.log(players);

//reverse
// players.reverse();
// console.log(players);

//some
// let info = players.some(function(elem){
//     console.log(elem);
//     if(elem.score <= 70){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(info);

//every
// function greaterThan70(elem){
//     console.log(elem);
//     if(elem.score <= 70){
//         return true;
//     }else{
//         return false;
//     }
// }

// let info = players.every(greaterThan70);
// console.log(info);

//find
// function findAlien(elem) {
// //   console.log(elem);
//   return elem.name === "Hitarh";
// }

// let info = players.find(findAlien);
// console.log(info);


//sort
// console.log(players.sort());
function sortAscendingOnScore(a,b){
    return a.score - b.score;
}
players.sort(sortAscendingOnScore)
// console.log(players);
// console.log([5,2,100,10,4,3].sort());

//split and join method
// let str = 'Shaw, Mansi, Abhay, Suarj, Prahu';
// let playerString = str.split(" ");
// console.log(playerString);
// console.log(playerString.join(""));

//delete
delete players[2];
console.log(players);

