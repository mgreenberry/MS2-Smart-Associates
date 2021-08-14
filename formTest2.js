//Change content of div/paragraph under each menu option:
document.getElementById("contact-us").addEventListener("click", contactUs);
// Function to change text displayed depending on which option use has clicked:
function contactUs() {
  document.getElementById('menu-text').innerHTML=`
  <div id="contact-us" class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col col-md-8 col-lg-6 col-xl-4">
          <h1 id="get-in-touch" class="text-md-center">Get In Touch</h1>
          <div>
            <!-- Credit: Bootstrap - Forms -> https://getbootstrap.com/docs/4.6/components/forms/ -->
            <form id="get-in-touch-form" onsubmit="return sendMail(this);" class="overlay">
              <p class="form-text d-none d-sm-block">Fill out this form to get in touch with us.</p>
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" required>
              </div>
              <div class="form-group">
                <label for="emailaddress" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="emailaddress" aria-describedby="email" required>
                <div id="email" class="form-text text-white"><small>We'll never share your email with anyone
                    else.</small></div>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea name="message" class="form-control" id="message" aria-describedby="message" rows="2" cols="20"
                  required></textarea>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label text-white" for="exampleCheck1"><small>Receive discounted offers on
                    Ocean Thrills Activities.</small></label>
              </div>
              <div class="d-flex justify-content-md-center">
                <button class="submit" type="submit" class="btn contact-btn text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      `;
  }

  // Credit: Code Intitute "Sending Emails Using EmailJS" -> https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?child=last
function sendMail(contactForm) {
  preventDefault();
  emailjs.send("gmail", "contact_form", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "message": contactForm.message.value 
  })
  .then(
    function(response) {
      console.log("Success", response);
    },
    function(error) {
      console.log("Failed", error);
    });
    return false;
}

// Credit: Email.JS Docs "https://www.emailjs.com/docs/rest-api/send-form/"
$("#get-in-touch-form").on("submit", function(event) {
  event.preventDefault(); // prevent reload
  
  let formData = new FormData(this);
  formData.append("service_id", "default_service");
  formData.append("template_id", "contact_form");
  formData.append("user_id", "user_nTcvajeY7PQ5MtA4jOtXF");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
    let name = document.getElementById("name").value;
      $("#get-in-touch").html("SUCCESS!").css("color", "white");
      $("#get-in-touch-form").html(`
      <h4>Hi ${name},</h4>
      <p>Thank you for getting in touch! We will get back to you shortly...</p>`
      ).css("color", "white").css("background-color", "rgba(0, 0, 0, 0.25");
  }).fail(function() {
    $("#get-in-touch").html("Oops...").css("color", "white");
    $("#get-in-touch-form").html(`<p>There was an error, please try again.</p>
    <div class="d-flex justify-content-md-center">
    <a class="btn contact-btn text-white" href="contact.html">Try Again</a>
    </div>`).css("color", "white");
  });
});