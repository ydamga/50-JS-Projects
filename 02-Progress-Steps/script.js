const bar = document.querySelector(".progress")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const circles = document.querySelectorAll(".circle")
var step = 1;

stepCheck();
function stepCheck() {
    if (step == 4){
        nextBtn.disabled = true;
    }   
    else if (step == 1){
        prevBtn.disabled = true;
    }
    else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

function next() {
    bar.style.width = step * 30 + "%";
    step++;
    circles[step-1].classList.add("active")
    stepCheck();
}

function prev() {
    step--;
    bar.style.width = (step-1) * 30 + "%";
    circles[step].classList.remove("active")
    stepCheck();
}