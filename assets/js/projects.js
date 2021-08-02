document.getElementById("projects").addEventListener("click", projects);

function projects() {
    document.getElementById('menu-text').innerHTML=`
    <section class="container-fluid">
      <div id="existing-projects">
        <div class="row">
          <div class="col-md">
            <div id="project1" onmouseenter="projectInfo1()">
            <img src="assets/images/index/cover-image1.jpg" id="project-main-image" alt="Ex. Archbishop McGrath School">
            <h3 class="centered">Ex. Archbishop McGrath School</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div id="project2" onmouseenter="projectInfo2()">
            <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Durham Road">
            <h3 class="centered">Durham Road</h3>
            </div>
          </div>
          <div class="col-md">
            <div id="project3" onmouseenter="projectInfo3()">
            <img src="assets/images/index/cover-image3.jpg" id="project-main-image" alt="Merthyr Street">
            <h3 class="centered">Merthyr Street</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
          <div id="project4" onmouseenter="projectInfo4()">
            <img src="assets/images/index/cover-image4.jpg" id="project-main-image" alt="Ex. Blue Dragon Hotel">
            <h3 class="centered">Ex. Blue Dragon Hotel</h3>
            </div>
          </div>
          <div class="col-md">
          <div  id="project5" onmouseenter="projectInfo5()">
            <img src="assets/images/index/cover-image5.jpg" id="project-main-image" alt="Ex. Magistrates Court">
            <h3 class="centered">Ex. Magistrates Court</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <div class="col-md">
        <h3 class="centered">Existing Projects</h3>
        <div class="centered" id="projectMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6056426408882!2d-3.1920048160162846!3d51.523808837444314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c7a6c693d49%3A0xc822c6a85083c034!2s32%20Lambourne%20Cres%2C%20Llanishen%2C%20Cardiff%20CF14%205GG!5e0!3m2!1sen!2suk!4v1627903017792!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
        </div>
      </div>
    </section>
    `;
  }
  
  function projectInfo1() {
      document.getElementById("project1").innerHTML = `
      <div onmouseout="projects()">
      <img id="project-main-image" src="assets/images/index/cover-image1.jpg" alt="Ex. Archbishop McGrath School">
      <h3 class="centered">Ex. Archbishop McGrath School</h3>
            <li>Location: Brynmenyn</li>
            <li>Client: Linc-Cymru</li>
            <li>Contractor: Jehu</li>
            <p>A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.</p>
      </div>
      `;
  }
  function projectInfo2() {
    document.getElementById("project2").innerHTML = `
    <div onmouseout="projects()">
    <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Durham Road Construction">
    <h3 class="centered">Durham Road</h3>
          <li>Location: Newport</li>
          <li>Client: Linc-Cymru</li>
          <li>Contractor: Jehu</li>
          <p>A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.</p>
    </div>
    `;
}
function projectInfo3() {
  document.getElementById("project3").innerHTML = `
  <div onmouseout="projects()">
  <img src="assets/images/index/cover-image3.jpg" id="project-main-image" alt="Merthyr Street">
  <h3 class="centered">Merthyr Street</h3>
        <li>Location: Barry</li>
        <li>Client: Linc-Cymru</li>
        <li>Contractor: W.K. Plasterers</li>
        <p>A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.</p>
  </div>
  `;
}
function projectInfo4() {
  document.getElementById("project4").innerHTML = `
  <div onmouseout="projects()">
  <img src="assets/images/index/cover-image4.jpg" id="project-main-image" alt="Ex Blue Dragon">
  <h3 class="centered">Ex. Blue Dragon Hotel</h3>
        <li>Location: Newport Road</li>
        <li>Client: Wales and West Housing Association</li>
        <li>Contractor: Hale Construction</li>
        <p>A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association. This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process. Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.</p>
  </div>
  `;
}
function projectInfo5() {
  document.getElementById("project5").innerHTML = `
  <div onmouseout="projects()">
  <img src="assets/images/index/cover-image5.jpg" id="project-main-image" alt="Existing Projects">
  <h3 class="centered">Ex. Magistrates Court</h3>
        <li>Location: Caerphilly</li>
        <li>Client: Linc-Cymru</li>
        <li>Contractor: Jehu</li>
        <p>A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly. A challenging, loadbearing masonry, Passivhaus project, with piled foundations and heave precautions on this original infilled quarry, overshadowed with many trees to the boundaries.</p>
  </div>
  `;
}