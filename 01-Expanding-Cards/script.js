const imgDom = document.querySelectorAll(".panel")

imgDom.forEach(panel => {
    panel.addEventListener("click", imgSelector)
});

function imgSelector() {
    if (!this.classList.contains("active")) {
        var activeDom = document.querySelector(".active")       
        activeDom.classList.remove("active")  
        this.classList.add("active")          
    }   
}