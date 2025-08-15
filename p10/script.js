let progressbar = document.querySelector("#progressbar");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");

let count = 0;

let interval = setInterval(function(){
if(count<=99){
    count++;
    progressbar.style.width = `${count}%`;
    h4.textContent = `${count}%`;
}
else{
    clearInterval(interval)
    h2.textContent = "Downloaded";
}
}, 30)