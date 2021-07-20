/* When the user scrolls the page, execute myFunction
Code adapted from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
window.onscroll = function() {myFunction()};
// Get the navbar
let navbar = document.getElementById("navbar");
// Get the offset position of the navbar
let sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Ends adapted code from w3schools.com//
/* My code
// Change content of div/paragraph under each menu option:*/
document.getElementById("projects").addEventListener("click", contactUs);

// Function to change text displayed depending on which option use has clicked:
function contactUs() {
    document.getElementById('menu-text').innerHTML=`
    <div class="container background">
    <form action="post">
        <div class="form-row">
            <div class="form-group col-md">
                <label class="col-md link-text" for="first-name">First Name</label>
                <input class="col-md link-text" type="text" name="fname" placeholder="First Name" id="first-name"
                    required>
            </div>
            <div class="col-md">
                <label class="col-md link-text" for="last-name">Last Name</label>
                <input class="col-md link-text" type="text" name="lname" placeholder="Last Name" id="last-name"
                    required>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md">
                <label class="col-md link-text" for="email">Email address</label>
                <input class="col-md link-text" type="email" name="email" placeholder="Email Address" id="email"
                    required>
            </div>
        </div>
        <div class="form-group">
            <label class="col-12 link-text" for="text">Message</label>
            <textarea class="col-12" rows="6" name="message"
                placeholder="Please enter your question, comments or request here" id="text" required></textarea>
        </div>
        <div class="form-row-md link-text">
            <input class="formbutton btn-info btn-reset" type="reset" value="Reset">
            <input class="formbutton btn-primary btn-submit" type="submit" value="Submit">
        </div>
    </form>
  </div>
      `;
  }