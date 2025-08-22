const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("formModal");
const closeBtn = document.querySelector(".closeBtn");

addBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});
