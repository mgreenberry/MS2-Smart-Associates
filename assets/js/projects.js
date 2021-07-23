//create an array of images
window.onload = randomImage;

let projectImages = new Array("assets/images/index/cover-image1.jpg", "assets/images/index/cover-image2.jpg", "assets/images/index/cover-image3.jpg","assets/images/index/cover-image4.jpg", "assets/images/index/cover-image5.jpg", "assets/images/index/cover-image6.jpg", "assets/images/index/cover-image7.jpg", "assets/images/index/cover-image8.jpg");

function choosePic() {
    let randomPix = Math.floor(Math.random() * projectImages.length);
    document.getElementById("project-main-image").src = projectImages[randomPix];
}