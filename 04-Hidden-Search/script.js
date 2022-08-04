const bar = document.querySelector(".search")
const btn = document.querySelector(".button")
const input = document.querySelector(".search")

btn.addEventListener("click", () => {
    bar.classList.toggle("active")
    input.focus(); 
})   
    
    
