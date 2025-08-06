let h3 = document.querySelector("h3");

let select = document.querySelector("select");

select.addEventListener("change", function(detls){
    h3.textContent = `${detls.target.value} has been selected.`
})