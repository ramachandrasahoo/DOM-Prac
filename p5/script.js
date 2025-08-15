let card = document.querySelector("#card");
let main = document.querySelector("#main")

main.addEventListener("mousemove", function (detail) {
    card.style.top = detail.clientY - card.offsetHeight / 2 + "px";
    card.style.left = detail.clientX - card.offsetWidth / 2 + "px";
});
