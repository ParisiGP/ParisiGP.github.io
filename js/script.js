function lightMode(element) {
    console.log(document.body.classList)

    if (element.checked) {
        document.body.classList.remove('light')
    } else {

        document.body.classList.add('light')
    }
}