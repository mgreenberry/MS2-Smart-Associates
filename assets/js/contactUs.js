//Change content of div/paragraph under each menu option:
document.getElementById("contact-us").addEventListener("click", contactUs);
// Function to change text displayed depending on which option use has clicked:
function contactUs() {
  document.getElementById('menu-text').innerHTML=`
  <div class="container-fluid" id="menu-content">
    <div class="container-fluid">
    <h3 class="centered">Contact Us</h3>
    <p class="centered">Please fill in the contact form below</p>
    <form id="myForm" onsubmit="check(this);">
      <div class="row">
        <div class="col-md-8 offset-md-2">
        <label class="col-12" for="fullname">Full Name</label>
        <input class="col-12 field" type="text" name="from_name" placeholder="e.g. Rhys Jones" id="fullname" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
        <label class="col-md" for="email">Email address</label>
        <input class="col-md field" id="email" type="email" name="from_email" placeholder="e.g. you@your_email.com" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
        <label class="col-md" for="confirm-email">Confirm Email address</label>
        <input class="col-md field" id="confirm-email" type="email" name="confirm-email" placeholder="e.g. you@your_email.com" required>
        </div>
      </div>
      <div class="centered" id="alert"></div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
        <label class="col-12" for="message">Message</label>
        <textarea class="col-12" rows="8" name="message" placeholder="Please enter your question, comments or request here" id="message" required></textarea>
        </div>
      </div>
      <div class="form-row centered">
        <div class="col-md-8 offset-md-2">
        <input class="cancel formbutton centered" type="reset" value="Reset" onclick="contactUs()">
        <input class="submit formbutton centered" type="submit" id="send" value="Submit">
        </div>
      </div>
    </form>
    </div>
    <div class="centered" id="email-sent"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3 class="centered">Smart Associates</h3>
          <p class="centered">32 Lambourne Crescent, Cardiff Business Park, Llanishen, Cardiff, CF14 5GG</p>
          <p class="centered">029 2075 4321</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="centered">
          <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6056426408882!2d-3.1920048160162846!3d51.523808837444314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c7a6c693d49%3A0xc822c6a85083c034!2s32%20Lambourne%20Cres%2C%20Llanishen%2C%20Cardiff%20CF14%205GG!5e0!3m2!1sen!2suk!4v1627903017792!5m2!1sen!2suk"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
  }
  /* Function adapted from the following websites: -
  https://www.w3schools.com/js/js_validation.asp & https://www.javatpoint.com/confirm-password-validation-in-javascript 
  adapted by Michael Greenberry and with fantastic help from @Scott Böning_lead */
  function check(form) {
    event.preventDefault(); //stops the page refreshing to index.html
    let email1 = document.getElementById("email"); 
    let email2 = document.getElementById("confirm-email");
    if (email1.value.length === 0 || email2.value.length === 0) { // captures the entry in the 'email' and 'confirm email' fields and checks if blank
        document.getElementById(
            "alert"
        ).innerHTML = `
        <br>
        <div class="col-md-8 offset-md-2">
        <p id="errors">Pease enter your email address into both the email address and confirm email address field</p>
        </div>
        `;
    } else if (email1.value !== email2.value) { // if the two fields ('email' & 'confirm email') do not match then the user will get an error message
        document.getElementById(
            "alert"
        ).innerHTML = `
        <br>
        <div class="col-md-8 offset-md-2">
        <p id="errors">Sorry the email addresses don't match. Please enter the same email address into both the email address and confirm email address</p>
        </div>
        `;
    } else if (email1.value === email2.value) { // if both fields match then a success message appears to the user
        document.getElementById(
            "alert"
        ).innerHTML = `
        <br>
        <div class="col-md-8 offset-md-2">
        <p id="success">Thank you for confirming your email address</p>
        </div>
        `;
        contactForm(form);
    }
    
}
/* Function to send form once the 'check()' function has completed. 
Code heavily influenced from Code Institute with amendments by Michael Greenberry with help form Igor from the Tutor Support*/
function contactForm(form) {
  emailjs.send("service_su0k99k", "template_yndu7aq", {// details from the emailjs template.
    "from_name": form.from_name.value,
    "from_email": form.from_email.value,
    "message": form.message.value 
  }).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);// Then display a success message to the user
       document.getElementById("email-sent").innerHTML = `
       <br>
       <div class="col-md-8 offset-md-2">
       <p id="success">Thank you for your message. We will get back to you as soon as possible</p>
       </div>
       `;
       form.reset();
    }, function(error) {
       console.log('FAILED...', error); // Then display a failed message to the user
       document.getElementById("email-sent").innerHTML = `
       <br>
       <div class="col-md-8 offset-md-2">
       <p id="errors">Sorry your message failed. Please try again</p>
       </div>
       `;
    });
    return false;
  }