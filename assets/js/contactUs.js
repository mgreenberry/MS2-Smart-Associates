//Change content of div/paragraph under each menu option:*/
document.getElementById("contact-us").addEventListener("click", contactUs);
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
            <input class="submit formbutton btn-info btn-reset" type="reset" value="Cancel">
            <input class="cancel formbutton btn-primary" type="submit" value="Submit">
        </div>
    </form>
  </div>
      `;
  }