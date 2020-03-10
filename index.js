// document.querySelector(".app").innerText = "Hello World!"

const form = document.querySelector(".item-form");
const itemList = document.querySelector(".item-list");
const itemInput = document.querySelector(".item-form__name");

loadEvents();

function loadEvents() {
    form.addEventListener("submit", addItem);
    itemList.addEventListener("click", deleteItem);
}

function addItem(event) {
    const li = document.createElement("li");
    li.className = "item-list__item";
    li.appendChild(document.createTextNode(itemInput.value));

    const deleteButton = document.createElement("button");
    deleteButton.className = "item-list__delete";
    deleteButton.innerText = "x";
    li.appendChild(deleteButton);

    itemList.appendChild(li);


    event.preventDefault(); //prevent default behavior of a form submit
}

function deleteItem(event){
    //TDD
    //console.log("event firing"); 
    console.log(event.target); //sends us back to delete button
    //if(event.target.className === "item-list__delete"){
       // console.log(event.target.parentElement);
      
    if(event.target.classList.contains("item-list__delete")){ //more flexible 

       event.target.parentElement.remove();
   
    }
}
