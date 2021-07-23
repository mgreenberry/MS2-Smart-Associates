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
document.getElementById("about-us").addEventListener("click", aboutUs);
document.getElementById("projects").addEventListener("click", projects);
document.getElementById("contact-us").addEventListener("click", contactUs);

// Function to change text displayed depending on which option use has clicked:
function aboutUs() { 
  document.getElementById('myImg').src="assets/images/index/cover-image1.jpg";
  document.getElementById('menu-text').innerHTML=`
  <div class="row">
    <div class="col-md">  
      <p>The practice was originally established in 1969 as Chapman & Smart, which subsequently evolved into David Smart & Associates.</p>
      <p>In 1992 the practice was acquired by the Associates under the trading name of Smart Associates.</p>
      <p>The Directors of the Company are:- 
        <li>William LeSauteur BSc (Hons), C. Eng, M.I.C.E.</li>
        <li>Jeff Venus		BSc (Hons), C. Eng, M.I.C.E., MIStructE</li></p>
      <p>The Company currently employs 7 people (6 technical and 1 administrative). The practice is a limited company</p>
      <p>Registration No. 2492874.</p>
    </div>
    <div class='col-md'>
      <h1>Civil Engineering</h1>
      <p>Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
      Civil engineering is traditionally broken into a number of sub-disciplines. It is considered the second-oldest engineering discipline after military engineering, and it is defined to distinguish non-military engineering from military engineering. Civil engineering can take place in the public sector from municipal public works departments through to federal government agencies, and in the private sector from locally based firms to global Fortune 500 companies</p>
      <p>Civil engineering as a discipline
      Civil engineering is the application of physical and scientific principles for solving the problems of society, and its history is intricately linked to advances in the understanding of physics and mathematics throughout history. Because civil engineering is a broad profession, including several specialized sub-disciplines, its history is linked to knowledge of structures, materials science, geography, geology, soils, hydrology, environmental science, mechanics, project management, and other fields.[6]
      Throughout ancient and medieval history most architectural design and construction was carried out by artisans, such as stonemasons and carpenters, rising to the role of master builder. Knowledge was retained in guilds and seldom supplanted by advances. Structures, roads, and infrastructure that existed were repetitive, and increases in scale were incremental.[7]
      One of the earliest examples of a scientific approach to physical and mathematical problems applicable to civil engineering is the work of Archimedes in the 3rd century BC, including Archimedes Principle, which underpins our understanding of buoyancy, and practical solutions such as Archimedes' screw. Brahmagupta, an Indian mathematician, used arithmetic in the 7th century AD, based on Hindu-Arabic numerals, for excavation (volume) computations.[8]</p>                            
    </div>
    <div class="col-md">
      <h1>Structural Engineers</h1>
      <p>Structural engineering is a branch of civil engineering that involves the application of the laws of physics, mathematics and empirical knowledge to safely design the ‘bones’ and load bearing elements of man made structures. Modern day structural engineering provides a large and detailed body of knowledge that can accurately predict the performance of different shapes and materials used in structures to resist loads and stresses on structures. The principles of structural engineering were used thousands of years ago when building structures like the pyramids in Egypt or the Acropolis in Greece.</p>
      <h2>WHAT DO STRUCTURAL ENGINEERS DO?</h2>
      <p>Structural engineers are trained professionals who are responsible for making sure that the structures we use in our daily lives, like bridges and tall buildings, are safe, stable and don’t collapse under applied loads. They do this by applying their technical knowledge to specify different types of construction materials in various shapes and geometries and design structures that can withstand the pressures and stresses of their environment such as gravity loads, storms and earthquakes.</p>
      Depending on the function of the building, standards and building codes can be used to estimate the weight of the building, and snow, wind and earthquake loads on the structures. Once the loads acting on the structure are known, the structure is analyzed to determine the effect of all these loads on the individual elements of the structure. Engineering software can be used by structural engineers to analyze different kinds of structures. It is always a good idea to check the validity of the software results using first principal knowledge and basic structural analysis formulas. The forces and stresses from the structural analysis software can be used to design the main structural elements including the floor system, vertical supports, foundations and other parts of the building.
      As a structural engineer, the safety of the public is my top priority. When it comes to buildings and infrastructure we use in our society, the consequences of a collapsed structure can be catastrophic. This is the why structural engineers use factors of safety in their design to account for uncertainty in load assumptions and unexpected deficiency in construction material or workmanship.</p>
    </div>
  </div>
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