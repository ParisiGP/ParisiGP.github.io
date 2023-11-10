function lightMode(element) {
    console.log(document.body.classList)

    if (element.checked) {
        document.body.classList.remove('light')
    } else {

        document.body.classList.add('light')
    }
}


function playVideo(ID_) {
    document.querySelector('.ReactVideo' + ID_).play();
    document.querySelector('.ReactVideo' + ID_).controls = true;

}

function pauseVideo(ID_) {
    document.querySelector('.ReactVideo' + ID_).pause();
    document.querySelector('.ReactVideo' + ID_).currentTime = 0;
    document.querySelector('.ReactVideo' + ID_).controls = false;
}

var meuVideo = document.getElementById("meuVideo");

// Adiciona um listener para detectar alterações no estado fullscreen


// Adiciona um listener para detectar a tecla ESC para sair do fullscreen
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.fullscreenElement) {
        exitFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        enterFullscreen(meuVideo);
    } else {
        exitFullscreen();
    }
}

function enterFullscreen(element) {
    document.querySelector('.ReactVideo1').style.display = 'block';
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}



