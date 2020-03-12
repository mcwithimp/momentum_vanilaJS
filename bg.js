const body = document.querySelector("body");

const IMG_NUM = 3
const genRN = (min, max) => Math.floor(Math.random() * (max - min)) + min

const paintImage = imgNum => {
    const image = new Image()
    image.src = `images/${imgNum + 1}.jpg`
    image.classList.add("bgImage")
    body.prepend(image)
}

function init(){
    const RN = genRN(0, IMG_NUM)
    paintImage(RN)
}

init();