var checkBoxes = document.querySelectorAll(".controls input");
var slides = document.querySelectorAll(".slider .slide");

function clearAll(){
    for(var i = 0; i < slides.length; i++){
        slides[i].className = "slide";
    }
}

function myFunc(){
    for(var i = 0; i < checkBoxes.length; i++){
        if(i == 0 && checkBoxes[i].checked){
            clearAll()
            slides[i].classList.add("active");
            document.body.style.backgroundColor = slides[i].dataset.bgcolor;
        }
        else if(i == 1 && checkBoxes[i].checked){
            clearAll()
            slides[i].classList.add("active");
            document.body.style.backgroundColor = slides[i].dataset.bgcolor;
        }
        else if(i == 2 && checkBoxes[i].checked){
            clearAll()
            slides[i].classList.add("active");
            document.body.style.backgroundColor = slides[i].dataset.bgcolor;
        }
    }
}

for(var i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener("click", myFunc);
}


