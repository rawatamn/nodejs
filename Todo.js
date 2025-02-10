const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : []; //agar item exist kregi to ye data ko json format mn parse krega otherwise single array print krega
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item");
  createItem(item);
});
function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}
function displayItems(){
    let items=""
    for(let i=0;i<itemsArray.length;i++){
        items+=`<div class="item">
        <div class="input-controller">
            <textarea disabled>${itemsArray[i]}</textarea>
            <div class="edit-controller">
              <i class="fa-solid fa-trash deleteBtn" data-index="${i}"></i>


                <i class="fa-solid fa-pen-to-square editBtn" data-index="${i}"></i>
            </div>
        </div>
        <div class="update-controller">
            <button class="saveBtn">Save</button>
            <button class="cancelBtn">Cancel</button>
        </div>
    </div>`
    }
    document.querySelector(".to-do-list").innerHTML=items
    activateDeleteListener();
    activateEditListener();
    activateSaveListener();
    activateCancelListener()
}
function activateEditListener(){
    let editBtns=document.querySelectorAll(".editBtn")
    const updateControllers=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    editBtns.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateControllers[i].style.display="block"
            inputs[i].disabled=false
        })
    })
}
function activateDeleteListener() {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            let index = event.target.getAttribute("data-index");
            deleteItem(index);
        });
    });
}
function activateCancelListener(){
    const cancelBtns=document.querySelectorAll(".cancelBtn")
    const updateControllers=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    cancelBtns.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
            updateControllers[i].style.display="none"
            inputs[i].disabled=true
        })
    })
}
function activateSaveListener(){
    const saveBtns=document.querySelectorAll(".saveBtn")
    const inputs=document.querySelectorAll(".input-controller textarea")
    saveBtns.forEach((sb,i)=>{
    sb.addEventListener("click",()=>{
        updateItems(inputs[i].value,i)
    })
    })
}
function updateItems(text,i){
    itemsArray[i]=text
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(); // Update UI instead of reloading
}


function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
}
window.onload = function () {
  displayDate();
  displayItems()
};