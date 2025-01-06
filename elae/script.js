let red = document.querySelector("#red");
let orange = document.querySelector("#orange");
let black = document.querySelector("#black");
let img = document.querySelector("img");
let btn = document.querySelector("button");

red.addEventListener("click", () => {
   img.setAttribute('src', './img/shoes1.png');
   btn.style.backgroundColor = "red";
})

orange.addEventListener("click", () => {
   img.setAttribute('src', './img/shoes2.png');
   btn.style.backgroundColor = "orange";
})

black.addEventListener('click', () => {
   img.setAttribute('src', './img/shoes3.png');
   btn.style.backgroundColor = "black";
})