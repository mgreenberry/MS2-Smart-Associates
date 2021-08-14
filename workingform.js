//Change content of div/paragraph under each menu option:
document.getElementById("contact-us").addEventListener("click", contactUs);
// Function to change text displayed depending on which option use has clicked:
function contactUs() {
  document.getElementById('menu-text').innerHTML=`
  <div class="container-fluid" id="menu-content">
  <div class="container-fluid">
  <h3 class="centered">Contact Us</h3>
  <form id="myForm" onsubmit="myFunc(this)">
  <div class="form-row">
    <div class="col-md">
      <label class="col-md" for="from_name">Full Name</label>
      <input class="col-md" type="text" name="from_name" placeholder="Full Name" id="fullname" required>
    </div>
    <div class="col-md">
        <label class="col-md" for="from_email">Email address</label>
        <input class="col-md" id="email" type="email" name="from_email" placeholder="Email Address" required>
    </div>
    <div class="col-md">
        <label class="col-md" for="confirm-email">Confirm Email address</label>
        <input class="col-md" id="confirm-email" type="email" name="confirm-email" placeholder="Confirm Email Address" required>
    </div>
  </div>
  <div class="centered" id="alert"></div>
  <div class="form-group">
      <label class="col-12" for="message">Message</label>
      <textarea onclick="check()" class="col-12" rows="8" name="message" placeholder="Please enter your question, comments or request here" id="message" required></textarea>
  </div>
  <div class="form-row-md centered">
    <div class="enter">
      <input class="cancel formbutton centered" type="reset" value="Cancel" onclick="contactUs()">
      <input class="submit formbutton centered" type="submit" id="send" value="Enter" onclick="emailjs.sendForm('service_su0k99k', 'template_yndu7aq', '#myForm')">
    </div>
  </div>
</form>
</div>
<div class="container-fluid">
<div class="row">
  <div class="col-12">
    <h3 class="centered">Smart Associates</h3>
    <p class="centered">32 Lambourne Crescent, Cardiff Business Park, Llanishen, Cardiff, CF14 5GG</p>
    <p class="centered">029 2075 4321</p>
    <div class="centered">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6056426408882!2d-3.1920048160162846!3d51.523808837444314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c7a6c693d49%3A0xc822c6a85083c034!2s32%20Lambourne%20Cres%2C%20Llanishen%2C%20Cardiff%20CF14%205GG!5e0!3m2!1sen!2suk!4v1627903017792!5m2!1sen!2suk"></iframe>
    </div>
  </div>
</div>
  </div>
  </div>
      `;
  }
  /* Function adapted from the following websites: -
  https://www.w3schools.com/js/js_validation.asp & https://www.javatpoint.com/confirm-password-validation-in-javascript 
  adapted by Michael Greenberry and with help from @Scott Böning_lead */
  function check() {
    let email1 = document.getElementById("email");
    let email2 = document.getElementById("confirm-email");
    if (email1.value.length === 0 || email2.value.length === 0) {
        document.getElementById(
            "alert"
        ).innerHTML = `<p id="errors">Pease enter your email address into both the email address and confirm email address field</p>`;
    } else if (email1.value !== email2.value) {
        document.getElementById(
            "alert"
        ).innerHTML = `<p id="errors">Sorry the email addresses don't match. Please enter the same email address into both the email address and confirm email address</p>`;
    } else if (email1.value === email2.value) {
        document.getElementById(
            "alert"
        ).innerHTML = `<p id="success">Thank you for confirming your email address</p>`;
    }
    console.log(email1);
    console.log(email2);
}

myFunc(form) {
preventDefault();


}
  emailjs.sendForm('service_su0k99k', 'template_yndu7aq', '#myForm')
    preventDefault().then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });