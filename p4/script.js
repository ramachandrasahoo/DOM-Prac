let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(detail) {
    detail.preventDefault();
    let empty = false;
    input.forEach(function(inp) {
        if (inp.type !== "submit" && inp.value.trim() === "") {
            empty = true;
        }
    });

    if (empty) {
        alert("Please fill in all the fields.");
        return; 
    }
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);

    let name = document.createElement("h3");
    name.classList.add("name");
    name.textContent =  input[1].value;

    let profession = document.createElement("h3");
    profession.classList.add("profession");
    profession.textContent = input[2].value

    let location = document.createElement("h3");
    location.classList.add("location");
    location.textContent = input[3].value

    let p = document.createElement("p");
    p.textContent = input[4].value

    card.appendChild(profile);
    profile.appendChild(img);
    card.appendChild(name);
    card.appendChild(profession);
    card.appendChild(location);
    card.appendChild(p);
    main.appendChild(card);

    input.forEach(function(inp){
        if(inp.type !== "submit") {
            inp.value = "";
            
        }
    });
});

