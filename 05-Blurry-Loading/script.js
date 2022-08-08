const text = document.querySelector(".pc")
const imgDom = document.querySelector("img")

var i = 0;

setInterval(() => {    
    if (i != 100) {
    i++
    imgDom.style.filter = `blur(${100 - i}px)`
    text.innerHTML = `%${i}`
    text.style.opacity = (100 - i) / 100;
    }              
}, 30);
