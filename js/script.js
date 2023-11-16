function lightMode(element) {

    if (element.checked) {
        document.body.classList.remove('light')
    } else {

        document.body.classList.add('light')
    }
}

function RotateCard(Card_) {

    let front = document.getElementsByClassName("frontCard");
    let back = document.getElementsByClassName("backCard");

    for (let i = 0; i < front.length; i++) {
        if (Card_.style.transform == "rotateY(180deg)") {
            Card_.style.transform = "rotateY(0deg)";

            setTimeout(() => {
                back[i].style.display = "none";
                front[i].style.display = "block";
            }, 350);
            return;
        } else {
            Card_.style.transform = "rotateY(180deg)";

            setTimeout(() => {
                back[i].style.display = "flex";
                front[i].style.display = "none";
            }, 350);
            return;
        }
    }






}


