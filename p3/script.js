let fileinp = document.querySelector("#fileinp");
let upload = document.querySelector("#upload");

upload.addEventListener("click",function(){
    fileinp.click();
})

fileinp.addEventListener("change", function(detls){
    const file = detls.target.files[0];
    if (file) {
        upload.textContent = file.name
    }
})