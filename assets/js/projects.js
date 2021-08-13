document.getElementById("projects").addEventListener("click", projects);

function projects() {
    document.getElementById('menu-text').innerHTML=`
    <div class="container-fluid" id="menu-content">
      <div id="existing-projects">
        <div class="row">
          <div class="col-md">
            <div id="project1">
              <img onmouseenter="projectInfo1()" src="assets/images/projects/magistrates/em02.jpg" class="project-main-image" alt="Ex. Magistrates Court, Caerphilly">
              <h3 class="centered">Ex. Magistrates Court, Caerphilly</h3>
            </div>
          </div>
          <div class="col-md">
            <div id="project2">
              <img onmouseenter="projectInfo2()" src="assets/images/projects/archbishop/ab07.jpg" class="project-main-image" alt="Ex. Archbishop McGrath School, Brynmenyn">
              <h3 class="centered">Ex. Archbishop McGrath School, Brynmenyn</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div id="project3">
              <img onmouseenter="projectInfo3()" src="assets/images/projects/durham/dh05.jpg" class="project-main-image" alt="Durham Road Build">
              <h3 class="centered">Durham Road Build, Newport</h3>
            </div>
          </div>
          <div class="col-md">
            <div id="project4">
              <img onmouseenter="projectInfo4()" src="assets/images/projects/merthyr/me04.jpg" class="project-main-image" alt="Merthyr Street Build">
              <h3 class="centered">Merthyr Street Build, Barry</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div  id="project5">
              <img onmouseenter="projectInfo5()" src="assets/images/projects/harrison/ha03.jpg" class="project-main-image" alt="Ex. Blue Dragon Hotel, Newport Road">
              <h3 class="centered">Ex. Blue Dragon Hotel, Cardiff</h3>
              </div>
          </div>
          <div class="col-md">
            <div  id="project6">
              <img onmouseenter="projectInfo6()" src="assets/images/projects/lanelay/la05.jpg" class="project-main-image" alt="Lanelay Road, Llantrisant">
              <h3 class="centered">Lanelay Road Build, Llantrisant</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <div class="centered">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    initMap();
  }
  /* The following Carousel code used in the following functions adapted from the following: - 
  https://getbootstrap.com/docs/4.5/components/carousel/ 
  Extra content and code by user */
  function projectInfo1() {
      document.getElementById("project1").innerHTML = `
      <div id="carouselExampleCaptions1" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/images/projects/magistrates/em01.jpg" class="project-main-image d-block w-75" alt="Ex. Magistrates Court, Caerphilly">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/projects/magistrates/em02.jpg" class="project-main-image d-block w-75" alt="IMAGE">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/projects/magistrates/em03.jpg" class="project-main-image d-block w-75" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>        
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions1" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <h3 class="centered">Ex. Magistrates Court, Caerphilly</h3>
          <li>
            Location: Caerphilly
          </li>
          <li>
            Contractor: Jehu
          </li>
          <li>
            Client: Linc-Cymru
          </li>
          <p>A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly. A challenging, loadbearing masonry, Passivhaus project, with piled foundations and heave precautions on this original infilled quarry, overshadowed with many trees to the boundaries.</p>
          <div class="centered padding">
          <button class="button cancel" onclick="projects()">&times close</i></button>
          </div>     
          `;
  }
  function projectInfo2() {
    document.getElementById("project2").innerHTML = `
    <div id="carouselExampleCaptions2" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/images/projects/archbishop/ab07.jpg" class="project-main-image d-block w-75" alt="Ex. Archbishop McGrath School, Brynmenyn">
        <div class="carousel-caption d-none d-md-block">
        </div>
        </div>
      <div class="carousel-item">
        <img src="assets/images/projects/archbishop/ab01.jpg" class="project-main-image d-block w-75" alt="Project Images">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/projects/archbishop/ab02.jpg" class="project-main-image d-block w-75" alt="Project Images">
        <div class="carousel-caption d-none d-md-block">
        </div>        
      </div>
      <div class="carousel-item">
        <img src="assets/images/projects/archbishop/ab03.jpg" class="project-main-image d-block w-75" alt="Project Images">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab05.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block">
      </div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab06.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
    <img src="assets/images/projects/archbishop/ab08.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
  <div class="carousel-item">
    <img src="assets/images/projects/archbishop/ab09.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block">
    </div>        
  </div>
  <div class="carousel-item">
    <img src="assets/images/projects/archbishop/ab10.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <h3 class="centered">Ex. Archbishop McGrath School, Brynmenyn</h3>
          <li>
            Location: Brynmenyn
          </li>
          <li>
            Contractor: Jehu
          </li>
          <li>
            Client: Linc-Cymru
          </li>
          <p>A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.</p>
          <div class="centered padding">
          <button class="button cancel" onclick="projects()">&times close</i></button>
        </div>
          `;
}
function projectInfo3() {
  document.getElementById("project3").innerHTML = `
<div id="carouselExampleCaptions3" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/durham/dh05.jpg" class="project-main-image d-block w-75" alt="Durham Road Build">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
    <img src="assets/images/projects/durham/dh06.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block"></div>
  </div>
  <div class="carousel-item">
    <img src="assets/images/projects/durham/dh07.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block"></div>        
  </div>
  <div class="carousel-item">
    <img src="assets/images/projects/durham/dh08.jpg" class="project-main-image d-block w-75" alt="Project Images">
    <div class="carousel-caption d-none d-md-block"></div>
  </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions3" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions3" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Durham Road Build, Newport</h3>
<li>
  Location: Newport
</li>
<li>
  Contractor: Jehu
</li>
<li>
  Client: Linc-Cymru
</li>
<p>A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times close</i></button>
</div>
  `;
}
function projectInfo4() {
  document.getElementById("project4").innerHTML = `
  <div id="carouselExampleCaptions4" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/merthyr/me04.jpg" class="project-main-image d-block w-75" alt="Merthyr Street, Barry">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me05.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions4" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions4" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Merthyr Street Build, Barry</h3>
<li>
  Location: Barry
</li>
<li>
  Contractor: W K Plasterers
</li>
<li>
  Client: W K Plasterers
</li>
<p>A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times close</i></button>
</div>
  `;
}
function projectInfo5() {
  document.getElementById("project5").innerHTML = `
  <div id="carouselExampleCaptions5" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/harrison/ha03.jpg" class="project-main-image d-block w-75" alt="Ex. Blue Dragon Hotel, Newport Road">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/harrison/ha01.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/harrison/ha04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions5" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions5" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Ex. Blue Dragon Hotel, Newport Road</h3>
<li>
  Location: Cardiff
</li>
<li>
  Contractor: Hale Construction
</li>
<li>
  Client: Wales and West Housing Association
</li>
<p>A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association. This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process. Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times close</i></button>
</div>
  `;
}

function projectInfo6() {
  document.getElementById("project6").innerHTML = `
  <div id="carouselExampleCaptions6" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/lanelay/la05.jpg" class="project-main-image d-block w-75" alt="Lanelay Road, Llantrisant">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la01.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions6" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions6" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Lanelay Road Build, Llantrisant</h3>
<li>
  Location: Llantrisant
</li>
<li>
  Contractor: Hafod
</li>
<li>
  Client: Holbrook Homes
</li>
<p>This three/four storey, 15-unit, apartment block is split level due to site levels and planning constraints. A former car sale, this tight site is sloping with the rear lane access being elevated some 2.5 m above the general site level. Concerns regarding vehicular safety of the existing lane access were fully mitigated after consultations with the Highway Authority.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times close</i></button>
</div>
`;
}

$('.carousel').carousel()