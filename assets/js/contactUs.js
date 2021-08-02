//Change content of div/paragraph under each menu option:*/
document.getElementById("contact-us").addEventListener("click", contactUs);
// Function to change text displayed depending on which option use has clicked:
function contactUs() {
    document.getElementById('menu-text').innerHTML=`
    <div class="container-fluid" id="menu-content">
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
            <div class="col-md">
            <label class="col-md link-text" for="email">Repeat Email address</label>
            <input class="col-md link-text" type="email" name="email" placeholder="Repeat Email Address" id="email"
                required>
        </div>
          </div>
          <div class="form-group">
            <label class="col-12 link-text" for="text">Message</label>
            <textarea class="col-12" rows="6" name="message"
                placeholder="Please enter your question, comments or request here" id="text" required></textarea>
          </div>
          <div class="form-row-md link-text centered">
            <input class="submit formbutton btn-info btn-reset centered" type="reset" value="Cancel">
            <input class="cancel formbutton btn-primary centered" type="submit" value="Submit">
          </div>
      </form>
    </div>
    <div class="container-fluid">
    <div class="centered" id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6056426408882!2d-3.1920048160162846!3d51.523808837444314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c7a6c693d49%3A0xc822c6a85083c034!2s32%20Lambourne%20Cres%2C%20Llanishen%2C%20Cardiff%20CF14%205GG!5e0!3m2!1sen!2suk!4v1627903017792!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    </div>
      `;
  }