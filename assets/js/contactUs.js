//Change content of div/paragraph under each menu option:
document.getElementById("contact-us").addEventListener("click", contactUs);
// Function to change text displayed depending on which option use has clicked:
function contactUs() {
  document.getElementById('menu-text').innerHTML=`
  <div class="container-fluid" id="menu-content">
    <form id="enquiry-form" action="" method="POST">
      <div class="form-row">
        <div class="col-md">
          <label class="col-md link-text" for="fname">First Name</label>
          <input class="col-md link-text" type="text" name="fname" placeholder="First Name" id="fname" required>
        </div>
        <div class="col-md">
          <label class="col-md link-text" for="lname">Last Name</label>
          <input class="col-md link-text" type="text" name="lname" placeholder="Last Name" id="lname" required>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md">
          <div class="email">
            <label class="col-md link-text" for="email">Email address</label>
            <input class="col-md link-text" type="email" name="email" placeholder="Email Address" id="email" required>
          </div>
        </div>
        <div class="col-md">
          <div class="confirm-email">
            <label class="col-md link-text" for="confirm-email">Confirm Email address</label>
            <input class="col-md link-text" type="email" name="confirm-email" placeholder="Confirm Email Address" id="confirm-email" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="message">
          <label class="col-12 link-text" for="text">Message</label>
          <textarea class="col-12" rows="6" name="message" placeholder="Please enter your question, comments or request here" id="text" required></textarea>
        </div>
      </div>
      <div id="errors"></div>
      <div class="form-row-md centered">
        <div class="enter">
          <input class="cancel formbutton btn-info centered" type="reset" value="Cancel">
          <input class="submit formbutton centered" type="submit" value="Enter" onclick="handleSubmit(event)">
        </div>
      </div>
    </form>
  </div>
  <section class="container-fluid">
    <div class="row">
      <div class="col-md">
        <h3 class="centered">Smart Associates</h3>
        <p class="centered">32 Lambourne Crescent, Cardiff Business Park, Llanishen, Cardiff, CF14 5GG</p>
        <p class="centered">029 2075 4321</p>
        <div class="centered" id="projectMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6056426408882!2d-3.1920048160162846!3d51.523808837444314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c7a6c693d49%3A0xc822c6a85083c034!2s32%20Lambourne%20Cres%2C%20Llanishen%2C%20Cardiff%20CF14%205GG!5e0!3m2!1sen!2suk!4v1627903017792!5m2!1sen!2suk"></iframe></div>
      </div>
    </div>
  </section>
      `;
  }
  function handleSubmit(event) {
    event.preventDefault();
    let p1 = form.elements['email'].value;
    let p2 = form.elements['confirm-email'].value;
  
    if (p1 !== p2) {
      let errorDiv = document.getElementById('errors');
      errorDiv.innerHTML = "<p>Please ensure your email address matches previous entry.</p>";
      errorDiv.style.display = 'block';
    } else {
      console.log('Validation successful!');
      form.submit();
    }
  }
  
  let form = document.getElementById('enquiry-form');