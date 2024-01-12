//keyup event is handled here
function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
    // return false;
}


//displaying the meojis from here
function displayResult(searchQuery= ""){

    //filtering the emojis with filter on the basis of tags, aliases, desc
    let filteredData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    })

    console.log(filteredData);

    //where we need to append the tr
    let parent = document.getElementById("search_result_container");
    // console.log(parent);

    //so that the previous data got removed
    parent.innerHTML = "";

    //shoing the filtered data 
    filteredData.forEach((e)=>{

        //making the elements in js 
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_desc = document.createElement("td");


        //giving the innerText to elements
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;

        // new_row.classList.add("emoji");
        // new_desc.classList.add("desc");
        // new_aliases.classList.add("aliases");

        // console.log(new_emoji,new_aliases,new_desc);


        //appending those tds to the tr
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        //appending the tr to parent (tbody)
        parent.appendChild(new_row);
    })
}

// console.log(emojiList);

//keyup event is applied here
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

//first time to show all the emojis
window.onload = () => displayResult();