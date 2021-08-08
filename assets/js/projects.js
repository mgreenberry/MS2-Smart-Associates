document.getElementById("projects").addEventListener("click", projects);

function projects() {
    document.getElementById('menu-text').innerHTML=`
    <section class="container-fluid">
      <div id="existing-projects" onmouseenter="initMap()">
        <div class="row">
          <div class="col-md">
            <div id="project1">
              <img src="assets/images/index/cover-image1.jpg" class="project-main-image" alt="Ex. Archbishop McGrath School">
              <h3 class="centered">Ex. Archbishop McGrath School</h3>
              <button class="centered fas fa-angle-double-down button submit" onclick="projectInfo1()"></button>
            </div>
          </div>
          <div class="col-md">
            <div id="project2">
              <img src="assets/images/index/cover-image2.jpg" class="project-main-image" alt="Durham Road">
              <h3 class="centered">Durham Road</h3>
              <button class="button submit fas fa-angle-double-down" onclick="projectInfo2()"></button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div id="project3">
              <img src="assets/images/index/cover-image3.jpg" class="project-main-image" alt="Merthyr Street">
              <h3 class="centered">Merthyr Street
              <button class="button submit" onclick="projectInfo3()"></button></h3>
            </div>
          </div>
          <div class="col-md">
            <div id="project4">
              <img src="assets/images/index/cover-image4.jpg" class="project-main-image" alt="Ex. Blue Dragon Hotel">
              <h3 class="centered">Ex. Blue Dragon Hotel
              <button class="button submit" onclick="projectInfo4()"></button></h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div  id="project5">
              <img src="assets/images/index/cover-image5.jpg" class="project-main-image" alt="Ex. Magistrates Court">
              <h3 class="centered">Ex. Magistrates Court
              <button class="button submit" onclick="projectInfo5()"></button></h3>
              </div>
          </div>
          <div class="col-md">
            <div  id="project6">
              <img src="assets/images/projects/7665-LANELAY ROAD-HHA/IMG_20210621_161616_3.jpg" class="project-main-image" alt="Lanelay Road">
              <h3 class="centered">Lanelay Road
              <button class="button submit" onclick="projectInfo6()"></button></h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div class="container">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
  
  function projectInfo1() {
      document.getElementById("project1").innerHTML = `
      <div class="col-md">
      <img class="project-main-image" src="assets/images/index/cover-image1.jpg" alt="Ex. Archbishop McGrath School">
      <h3 class="centered">Ex. Archbishop McGrath School</h3>
            <li>Location: Brynmenyn</li>
            <li>Client: Linc-Cymru</li>
            <li>Contractor: Jehu</li>
            <p>A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.</p>
            <button class="button cancel" onclick="projects()"><i class="fas fa-angle-double-up"></i></button>
      </div>
      `;
  }
  function projectInfo2() {
    document.getElementById("project2").innerHTML = `
    <div>
    <img src="assets/images/index/cover-image2.jpg" class="project-main-image" alt="Durham Road Construction">
    <h3 class="centered">Durham Road</h3>
          <li>Location: Newport</li>
          <li>Client: Linc-Cymru</li>
          <li>Contractor: Jehu</li>
          <p>A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.</p>
          <button class="button cancel" onclick="projects()"><i class="fas fa-angle-double-up"></i></button>
    </div>
    `;
}
function projectInfo3() {
  document.getElementById("project3").innerHTML = `
  <div>
  <img src="assets/images/index/cover-image3.jpg" class="project-main-image" alt="Merthyr Street">
  <h3 class="centered">Merthyr Street</h3>
        <li>Location: Barry</li>
        <li>Client: Linc-Cymru</li>
        <li>Contractor: W.K. Plasterers</li>
        <p>A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.</p>
        <button class="button cancel" onclick="projects()"></i></button>
        </div>
  `;
}
function projectInfo4() {
  document.getElementById("project4").innerHTML = `
  <div>
  <img src="assets/images/index/cover-image4.jpg" class="project-main-image" alt="Ex Blue Dragon">
  <h3 class="centered">Ex. Blue Dragon Hotel</h3>
        <li>Location: Newport Road</li>
        <li>Client: Wales and West Housing Association</li>
        <li>Contractor: Hale Construction</li>
        <p>A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association. This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process. Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.</p>
        <button class="button cancel" onclick="projects()"></button>
        </div>
  `;
}
function projectInfo5() {
  document.getElementById("project5").innerHTML = `
  <div>
  <div class="slideshow-container">
  <img src="assets/images/index/cover-image5.jpg" class="project-main-image" alt="Existing Projects">
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7665-LANELAY ROAD-HHA/LANELAY.JPG" alt="Lanelay Road">
    <div class="text">Site before build</div>
  </div>
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7644-EX-MAGISTRATES-LCHA/IMG_20201215_131645_1.jpg" alt="Lanelay Road">
    <div class="text">Site under construction</div>
  </div>
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7665-LANELAY ROAD-HHA/IMG_20210621_161616_3.jpg" alt="Lanelay Road">
    <div class="text">Completed construction</div>
  </div>
   <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
   <!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
<h3 class="centered">Ex. Magistrates Court</h3>
        <li>Location: Caerphilly</li>
        <li>Client: Linc-Cymru</li>
        <li>Contractor: Jehu</li>
        <p>A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly. A challenging, loadbearing masonry, Passivhaus project, with piled foundations and heave precautions on this original infilled quarry, overshadowed with many trees to the boundaries.</p>
        <button class="button cancel" onclick="projects()"></i></button>
</div>
</div>
  `;
}

function projectInfo6() {
  document.getElementById("project6").innerHTML = `
  <div>
  <div class="slideshow-container">
  <img src="assets/images/projects/7665-LANELAY ROAD-HHA/IMG_20210621_161616_3.jpg" class="project-main-image" alt="Lanelay Road">
  
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7665-LANELAY ROAD-HHA/LANELAY.JPG" alt="Lanelay Road">
    <div class="text">Site before build</div>
  </div>
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7665-LANELAY ROAD-HHA/IMG_20201028_162908_4.jpg" alt="Lanelay Road">
    <div class="text">Site under construction</div>
  </div>
  <div class="mySlides">
    <img class="project-main-image" src="assets/images/projects/7665-LANELAY ROAD-HHA/IMG_20210621_161616_3.jpg" alt="Lanelay Road">
    <div class="text">Completed construction</div>
  </div>
   <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
   <!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
<h3 class="centered">Lanelay Road</h3>
  <li>Location: Llantrisant</li>
  <li>Client: Holbrook Homes</li>
  <li>Contractor: Hafod</li>
  <p>This three/four storey, 15-unit, apartment block is split level due to site levels and planning constraints. A former car sale, this tight site is sloping with the rear lane access being elevated some 2.5 m above the general site level. Concerns regarding vehicular safety of the existing lane access were fully mitigated after consultations with the Highway Authority.</p>
  <button class="button cancel" onclick="projects()"></button>
</div>
</div>
`;
}

let slideIndex = 1;
  showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}