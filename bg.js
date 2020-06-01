const body = document.getElementsByTagName('body')[0];

const IMG_NUMBER = 7;

// function paintImage(imgNumber) {
//     const image = new Image();
//     // image.src = `images/${imgNumber}.jpg`;
//     image.src = `images/7.jpg`;
//     image.classList.add("bgImage");
//     body.appendChild(image);
// }

function paintImage(imgNumber) {
    // body.style.backgroundImage = `url('images/${imgNumber}.jpg')`
    body.style.backgroundImage = `url('images/7.jpg')`
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    // body.style.backgroundSize = "100% 100%"
    body.style.backgroundAttachment = "fixed"
}

function genRandom(params) {
    const number = parseInt(Math.random()*IMG_NUMBER+1);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
