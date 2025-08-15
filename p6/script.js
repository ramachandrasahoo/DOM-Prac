let main = document.querySelector("#main");

let ul = document.querySelector("ul");

ul.addEventListener("click", function(evt) {
    evt.target.classList.toggle("li");
});