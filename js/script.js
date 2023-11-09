function lightMode(element) {
    console.log(document.body.classList)

    if (element.checked) {
        document.body.classList.remove('light')
    } else {

        document.body.classList.add('light')
    }
}

function playVideo(ID_) {
    document.querySelector('.ReactImage'+ID_).style.display = 'none';
    document.querySelector('.ReactVideo'+ID_).style.display = 'block';
    document.querySelector('.ReactVideo'+ID_).play();

  }

  function pauseVideo(ID_) {
    document.querySelector('.ReactVideo'+ID_).pause();
    document.querySelector('.ReactVideo'+ID_).currentTime = 0;
    document.querySelector('.ReactVideo'+ID_).style.display = 'none';
    document.querySelector('.ReactImage'+ID_).style.display = 'block';
  }


