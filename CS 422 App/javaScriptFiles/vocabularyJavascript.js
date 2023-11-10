const container = document.querySelector(".container");

const addWordCard = document.getElementById("add-word-card");

const cardButton = document.getElementById("save-btn");

const word = document.getElementById("word");

const definition = document.getElementById("definition");

const example = document.getElementById("example");

const errorMessage = document.getElementById("error");

const addWord = document.getElementById("add-flashcard");

const closeBtn = document.getElementById("close-btn");

let editBool = false;

//Add word when the user clicks 'Add flashcard' button

addWord.addEventListener("click",()=>{
    container.classList.add("hide");
    word.value = "";
    definition.value = "";
    example.value = "";
    addWordCard.classList.remove("hide");
});

// Hide create flashcard card
closeBtn.addEventListener("click",(hideWord = () =>{
    container.classList.remove("hide");
    addWordCard.classList.add("hide");
    if(editBool){
        editBool = false;
        submitWord();
    }
}));

// Submit Word
cardButton.addEventListener("click", (submitWord = () =>{
    editBool = false;
    tempWord = "Word: " + word.value.trim();
    tempDef = "Definition: " + definition.value.trim();
    tempEx = "Example: " + example.value.trim();
    if(!tempWord || !tempDef || !tempEx){
        errorMessage.classList.remove("hide");
    } else {
        container.classList.remove("hide");
        errorMessage.classList.add("hide");
        viewlist();
        word.value = "";
        definition.value = "";
        example.value = "";
    }
}));

// Card Generate
function viewlist(){
    var listCard = document.getElementsByClassName("card-list-container");
    var div = document.createElement("div");
    div.classList.add("card");
    //Word
    div.innerHTML += `<p class="word-div">${word.value}</p>`

    //Definition
    var displayDefinition = document.createElement("p");
    displayDefinition.classList.add("definition-div","hide");
    displayDefinition.innerText = definition.value;

    //Example
    var displayExample = document.createElement("p");
    displayExample.classList.add("example-div","hide");
    displayExample.innerText = example.value;

    //Link to show/hide definition 
    var deflink = document.createElement("a");
    deflink.setAttribute("href","#");
    deflink.setAttribute("class","show-hide-btn");
    deflink.innerHTML = "Show/Hide";
    deflink.addEventListener("click", ()=>{
        displayDefinition.classList.toggle("hide");
        displayExample.classList.toggle("hide");
    });
    div.appendChild(deflink);
    div.appendChild(displayDefinition);
    div.appendChild(displayExample);

    //Edit Button
    let buttonsCon = document.createElement("div");
    buttonsCon.classList.add("buttons-con");
    var editButton = document.createElement("button");
    editButton.setAttribute("class","edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.addEventListener("click",()=>{
        editBool = true;
        modifyElement(editButton,true);
        addWordCard.classList.remove("hide");
    });

    buttonsCon.appendChild(editButton);
    disableButtons(false);

    //Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","delete");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.addEventListener("click", ()=>{
        modifyElement(deleteButton);
    });
    buttonsCon.appendChild(deleteButton);


    div.appendChild(buttonsCon);
    listCard[0].appendChild(div);
    hideWord();
}

const modifyElement = (element,edit=false) => {
    let parentDiv = element.parentElement.
    parentElement;
    let parentWord = parentDiv.querySelector(".word-div").innerText;
    if (edit){
        let parentDef = parentDiv.querySelector(".definition-div").innerText;
        let parentEx = parentDiv.querySelector(".example-div").innerText;
        word.value = parentWord;
        definition.value = parentDef;
        example.value = parentEx;
        disableButtons(true);
    }
    parentDiv.remove();
};

//Disable edit and delete buttons
const disableButtons = (value) =>{
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) =>{
        element.disabled = value;
    });
};