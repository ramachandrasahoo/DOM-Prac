// let body = document.querySelector("body");
// let btn = document.querySelector("button");

// function setDarkorLight () {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// }

// if(localStorage.getItem("theme")){
//     body.classList.add(localStorage.getItem("theme"));
// }
// else {
//     setDarkorLight();

// }

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function() {
//     if(!localStorage.getItem("theme")){
//         setDarkorLight();
//     }
// });

// btn.addEventListener("click", function() {
//     if(body.classList.contains("dark")){
//         body.classList.remove("dark");
//         body.classList.add("light");
//         localStorage.setItem("theme", "light");
//     }
//     else {
//         body.classList.remove("light");
//         body.classList.add("dark");
//         localStorage.setItem("theme", "dark");

//     }
// })

const body = document.body;
const btn = document.querySelector("button");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");

// Apply a given theme
function applyTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
}

// Decide theme: saved → OS preference
applyTheme(savedTheme || (prefersDark.matches ? "dark" : "light"));

// Update theme if OS preference changes (only if no saved theme)
prefersDark.addEventListener("change", (e) => {
    if (!savedTheme) applyTheme(e.matches ? "dark" : "light");
});

// Toggle on button click
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
