/* When the user scrolls the page, execute myFunction
Code adapted from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
window.onscroll = function() {menuOptions()};
// Get the navbar
let navbar = document.getElementById("navbar");
// Get the offset position of the navbar
let sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function menuOptions() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Ends adapted code from w3schools.com//
//create an array of images
window.onload = function() {choosePic()};
document.getElementById("about-us").addEventListener("click", choosePic);
document.getElementById("services").addEventListener("click", choosePic);
document.getElementById("projects").addEventListener("click", choosePic);
document.getElementById("contact-us").addEventListener("click", choosePic);

let projectImages = new Array("assets/images/index/cover-image1.jpg", "assets/images/index/cover-image2.jpg", "assets/images/index/cover-image3.jpg","assets/images/index/cover-image4.jpg", "assets/images/index/cover-image5.jpg", "assets/images/index/cover-image6.jpg", "assets/images/index/cover-image7.jpg", "assets/images/index/cover-image8.jpg");

function choosePic() {
    let randomPix = Math.floor(Math.random() * projectImages.length);
    document.getElementById("myImg").src = projectImages[randomPix];
}