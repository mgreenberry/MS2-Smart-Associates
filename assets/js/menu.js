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
/* My code - Changes content of div/paragraph under each menu option:*/
document.getElementById("about-us").addEventListener("click", aboutUs);
document.getElementById("services").addEventListener("click", services);
document.getElementById("projects").addEventListener("click", projects);
document.getElementById("contact-us").addEventListener("click", contactUs);

// Function to change text displayed depending on which option user has clicked:
function aboutUs() { 
  document.getElementById('myImg').src="assets/images/index/cover-image1.jpg";
  document.getElementById('menu-text').innerHTML=`
  <div class="row">
    <div class="col-md">  
      <p>Smart Associates are an independent, civil and structural engineering consultancy, with a 50 plus year track record of successfully delivering projects for our clients. 
      Based in Cardiff, we carry out work throughout South and Mid Wales for our clients, which include many RSL’s and their contractor/developer partners.</p>

      <p>The Practice specialises in Residential developments, including Care and Extra Care Homes. Project sizes vary to typically £10m schemes.</p>
      <p>As well as sub-structure and super-structure design, Sectional Agreements are secured including S104, S185, S38 and S278. SAB submissions are prepared and taken through to approval. Planning Conditions are discharged relevant to our disciplines.
      A small selection of projects. 
      </p>
      <p>In 1992 the practice was acquired by the Associates under the trading name of Smart Associates.</p>
      <p>The Directors of the Company are:- 
        <li>William LeSauteur BSc (Hons), C. Eng, M.I.C.E.</li>
        <li>Jeff Venus		BSc (Hons), C. Eng, M.I.C.E., MIStructE</li></p>
      <p>The Company currently employs 7 people (6 technical and 1 administrative). The practice is a limited company</p>
      <p>Registration No. 2492874.</p>
    </div>
  </div>
  `;
}
function services() {
  document.getElementById('myImg').src="assets/images/index/cover-image5.jpg";
  document.getElementById('menu-text').innerHTML=`
  <section class="container-fluid">
    <div id="services">
      <div class="row">
        <div class="col-12">
          <h1 class="centered">Services</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md">SERVICES
        </div>
      </div>
    </div>
  </section>
  `;
}

function projects() {
  document.getElementById('myImg').src="assets/images/index/cover-image4.jpg";
  document.getElementById('menu-text').innerHTML=`
  <section class="container-fluid">
    <div id="projects-page">
      <div class="row">
        <div class="col-12">
          <h1 class="centered">Projects</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <img src="assets/images/index/cover-image1.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Ex. Magistrates Court, Caerphilly for Linc and Jehu</h3>
          <p>A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly. A challenging, loadbearing masonry, Passivhaus project, with piled foundations and heave precautions on this original infilled quarry, overshadowed with many trees to the boundaries.</p>
        </div>
        <div class="col-md">
          <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Ex. Archbishop Mcgrath school, Brynmenyn for Linc and Jehu</h3>
          <p>A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.</p>
        </div>          
      </div>
      <div class="row">
        <div class="col-md">
          <img src="assets/images/index/cover-image3.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Durham Road, Newport for Linc and Jehu</h3>
          <p>A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.</p>
        </div>
        <div class="col-md">
          <img src="assets/images/index/cover-image4.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Merthyr Street, Barry for WK Plasterers</h3>
          <p>A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.</p>
        </div>  
      </div>
      <div class="row">
        <div class="col-md">
          <img src="assets/images/index/cover-image5.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Ex. Blue Dragon Hotel, Newport Road for Hale </h3>
          <p>A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association. This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process. Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.</p>
        </div>
        <div class="col-md">
          <img src="assets/images/index/cover-image6.jpg" id="project-main-image" alt="Existing Projects">
          <h3>Lanelay Road, Llantrisant  for Hafod and Holbrook Homes</h3>
          <p><This three/four storey 12 unit apartment block is split level due to site levels and planning constraints. A former car sales, the site is/p>
        </div>
      </div>
    </div>
  </section>
  `;
}
function contactUs() {
  document.getElementById('myImg').src="assets/images/index/cover-image2.jpg";
  document.getElementById('menu-text').innerHTML=`
  <div class="container background">
  <form action="post" id="contact-form">
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