const boxes = document.querySelectorAll(".content")

window.addEventListener('scroll', boxCheck)

boxCheck()

function boxCheck() {
    const triggerPoint = window.innerHeight - 250;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerPoint) {
            box.classList.add("show")            
        } else {
            box.classList.remove("show")
        }
    });
}
