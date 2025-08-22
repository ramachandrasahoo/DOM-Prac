// query selector for profile card stack
const btnPlus = document.querySelector(".plus");
// const card = document.querySelector(".card");
const cardSelf = document.querySelector(".card-self");
const btnForeward = document.querySelector(".up");
const btnBackward = document.querySelector(".down")
// query selector for form
const imgUrl = document.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullName = document.querySelector("input[placeholder='Enter full name']");
const homeTown = document.querySelector("input[placeholder='Enter home town']");
const purpose = document.querySelector("input[placeholder='e.g., Quick appointment note']");
const category = document.querySelectorAll("input[name='typeofcategory']");

const form = document.querySelector("form");
const shut = document.querySelector(".shut");
const createNote = document.querySelector(".open");

function savetoLocalStorage(obj){
    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks))
    }
    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
};



btnPlus.addEventListener("click", function(){
    form.style.display = "initial";
});

shut.addEventListener("click", function() {
    form.style.display = "none";

});


// form validation section 

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let selected = false ;
    category.forEach(function(cat){
        if(cat.checked){
            selected = cat.value;
        }
    })
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i;
    const urlAns = urlRegex.test(imgUrl.value.trim());

    const nameRegex = /^[A-Z][a-zA-Z]*(?: [a-zA-Z]+){0,3}$/;
    const nameAns = nameRegex.test(fullName.value.trim());

    const townRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
    const townAns = townRegex.test(homeTown.value.trim());

    const purposeRegex = /^[A-Za-z]+(?: [A-Za-z]+){0,4}$/;
    const purposeAns = purposeRegex.test(purpose.value.trim());

    // validation section 

    if(!urlAns){
        alert("Invalid img url");
        return;
    }
    if (!nameAns){
        alert("Enter a valid name");
        return;
    }
    if (!townAns){
        alert("Enter a valid town name");
        return;
    }
    if (!purposeAns){
        alert("Enter a valid purpose");
        return;
    }
    if(!selected){
        alert("select a category");
        return;
    }

    // save to localStorage
    savetoLocalStorage({
        imgUrl: imgUrl.value.trim(),
        fullName: fullName.value.trim(),
        homeTown: homeTown.value.trim(),
        purpose: purpose.value.trim(),
        category: selected
    });
    showCards();
    // formCard.submit();
    form.reset();
    form.style.display = "none";
});

function showCards() {
    let allTask = localStorage.getItem("tasks");
    allTask = JSON.parse(allTask);

    allTask.forEach(function (task) {
        let card = document.createElement("div");
        card.classList.add("card");

        // profile section
        let profile = document.createElement("div");
        profile.classList.add("profile");

        let img = document.createElement("img");
        img.setAttribute("src", task.imgUrl);
        img.setAttribute("alt", "profile");
        let h2 = document.createElement("h2");
        h2.textContent = task.fullName;

        //info hometown
        let infoHometown = document.createElement("div");
        infoHometown.classList.add("info");
        let labelHometown = document.createElement("span");
        labelHometown.textContent = "Home town";
        let valueHometown = document.createElement("span");
        valueHometown.textContent = task.homeTown;

        //info booking
        let infoBooking = document.createElement("div");
        infoBooking.classList.add("info");
        let labelBooking = document.createElement("span");
        labelBooking.textContent = "Purpose";
        let valueBooking = document.createElement("span");
        valueBooking.textContent = task.purpose;

        // buttons
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        let btnCall = document.createElement("button");
        btnCall.classList.add("btn", "call");
        btnCall.textContent = "Call"
        let btnMessage = document.createElement("button");
        btnMessage.classList.add("btn", "message");
        btnMessage.textContent = "Message"

        // append child
        profile.append(img, h2);
        infoHometown.append(labelHometown, valueHometown);
        infoBooking.append(labelBooking, valueBooking);
        buttons.append(btnCall, btnMessage);
        card.append(profile, infoHometown, infoBooking, buttons);
        cardSelf.appendChild(card);
    })


}
showCards();

btnForeward.addEventListener("click", function(){
    let lastChild = cardSelf.lastElementChild;
    if(lastChild){
        cardSelf.insertBefore(lastChild, cardSelf.firstElementChild)
    }
})

btnBackward.addEventListener("click", function(){
    let firstChild = cardSelf.firstElementChild;
    if(firstChild){
        cardSelf.appendChild(firstChild)
    }
})