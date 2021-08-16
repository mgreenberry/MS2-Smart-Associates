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
document.getElementById("services").addEventListener("click", choosePic);
document.getElementById("projects").addEventListener("click", choosePic);
document.getElementById("contact-us").addEventListener("click", choosePic);

let projectImages = new Array("assets/images/index/coverimage1.jpg", "assets/images/index/coverimage2.jpg", "assets/images/index/coverimage3.jpg","assets/images/index/coverimage4.jpg", "assets/images/index/coverimage5.jpg", "assets/images/index/coverimage6.jpg");

function choosePic() {
    let randomPix = Math.floor(Math.random() * projectImages.length);
    document.getElementById("myImg").src = projectImages[randomPix];
}
// Collapse navbar when user clicks on a selection - Code used from
// https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/
$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});