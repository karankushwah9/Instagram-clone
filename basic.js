const image = ['screenshot1.png', 'screenshot2.png', 'screenshot3.png'];

let imgElement = document.querySelector("#scrImage");

let currentIndex = 0;
function changeImg(){
    imgElement.src = image[currentIndex];
    currentIndex = (currentIndex + 1) % image.length;
}
    setInterval(changeImg, 2000);

// Sign-in and sign-up start

let 
