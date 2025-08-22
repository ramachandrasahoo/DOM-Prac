const users = [
{
    name : "amisha rathore",
    pic: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsfGVufDB8fDB8fHww",
    bio : "silent chaos in a loud world ⚫🖤 | not for everyone"
},
{
    name: "kiara mehata",
    pic: "https://images.unsplash.com/photo-1570840934411-dcd8116cb41b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsfGVufDB8fDB8fHww",
    bio: "main character energy 🏈 | coffe > everything 🍵"
},
{
    name: "karishma oberoi",
    pic: "https://plus.unsplash.com/premium_photo-1731492051217-450ced5b7431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsfGVufDB8fDB8fHww",
    bio: "walking through dreamsin doc martens 🌨️ | late night thinker"
},
{
    name: "ojin oklowa",
    pic: "https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D   ",
    bio: "too glam to give glam 🎆 | filter free soul"
},
{
    name: "diya bansal",
    pic: "https://images.unsplash.com/photo-1723200166097-4eed8c141f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "a little chaos, alot of art 💫 | just vives"
},
{
    name: "divya rawat",
    pic: "https://images.unsplash.com/photo-1722329434628-5cc2d041ff09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "don't text just vive 👻 | soft heart sharp mind "
},
{
    name: "sunidhi sethi",
    pic: "https://images.unsplash.com/photo-1714722728088-9f56f0dcca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "asthetic overloaded 🗽 | living in lowercase"
}
];
const main = document.querySelector(".main");
const inp = document.querySelector("input");

// function to create element
function createEl(tag, className, content) {
    let el = document.createElement(tag);
    if(className)el.classList.add(className);
    if(content)el.textContent = content;
    return el;
};

function showUsers(arrs) {
    // clear old cards
    main.innerHTML = ""; 

    arrs.forEach(function(user) {
        // create card 
        const card = createEl("div", "card");

        // create img
        const img = createEl("img","bg-img");
        img.src = user.pic;

        // create blurred-layer div 
        const blurredLayer = createEl("div", "blurred-layer");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        // create content div 
        const content = createEl("div", "content");

        // create h3 an p and append to content 
        content.append(createEl("h3", "", user.name), createEl("p", "", user.bio));

        // append all to card 
        card.append(img, blurredLayer, content)

        // append card to main 
        main.appendChild(card);
    });
};

showUsers(users);

inp.addEventListener("input", function () {
    let search = inp.value.trim().toLowerCase()
    let filtered = users.filter((user)=>user.name.toLowerCase().includes(search));
    
    if(filtered.length === 0) {
        main.innerHTML = "";
        let nouser = createEl("div", "no-user", "no user found");
        main.appendChild(nouser);
    }
    else{
        showUsers(filtered);
    }
});
