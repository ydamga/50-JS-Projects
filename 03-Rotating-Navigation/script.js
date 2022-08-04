const body = document.querySelector(".bg")
const ulDom = document.querySelector(".nav")
const circle = document.querySelector(".menu")

console.log(ulDom.classList)

function menu() {
    if (body.style.transform == "rotate(-20deg)") {
        body.style.transform = "rotate(0deg)"
        circle.style.transform = "rotate(0deg)"
        ulDom.classList.remove("active");

    }
    else {
        body.style.transform = "rotate(-20deg)"
        circle.style.transform = "rotate(-70deg)"
        ulDom.classList.add("active");
    }
}
