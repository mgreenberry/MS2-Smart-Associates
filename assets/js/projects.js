document.getElementById("projects").addEventListener("click", projects);

function projects() {
    document.getElementById('menu-text').innerHTML=`
    <section class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="centered">Projects</h1>
        </div>
      </div>
      <div id="existing-projects">
        <div class="row">
          <div class="col-md" id="project1" onclick="projectInfo1()">
            <img src="assets/images/index/cover-image1.jpg" id="project-main-image" alt="Existing Projects">
            <h3 class="centered">Ex. Archbishop McGrath School</h3>
          </div>
          <div class="col-md" id="project2" onclick="projectInfo2()">
            <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Existing Projects">
            <h3 class="centered">Durham Road</h3>
          </div>
        </div>   
        <div class="row">
          <div class="col-md" id="project3" onclick="projectInfo3()">
            <img src="assets/images/index/cover-image3.jpg" id="project-main-image" alt="Existing Projects">
            <h3 class="centered">Merthyr Street</h3>
          </div>
          <div class="col-md">
            <img src="assets/images/index/cover-image4.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <img src="assets/images/index/cover-image5.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
          </div>
          <div class="col-md">
            <img src="assets/images/index/cover-image6.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
  

  /*$(document).ready(function(){
    $("#project1-info").click(function(){
      $("project1").hide();
    });
    $("#project1-info").click(function(){
      $("project1").show();
    });
  });*/

  function projectInfo1() {
      document.getElementById("project1").innerHTML = `
      <div id="project1-info">
      <h3 class="centered">Ex. Archbishop McGrath School</h3>
      <img id="project-main-image" src="assets/images/index/cover-image1.jpg" alt="Ex. Archbishop McGrath School">
            <li>Location: Brynmenyn</li>
            <li>Client: Linc-Cymru</li>
            <li>Contractor: Jehu</li>
            <p>A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.</p>
      </div>
      `;
  }
  function projectInfo2() {
    document.getElementById("project2").innerHTML = `
    <div id="project2-info">
    <h3 class="centered">Durham Road</h3>
    <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Durham Road Construction">
          <li>Location: Newport</li>
          <li>Client: Linc-Cymru</li>
          <li>Contractor: Jehu</li>
          <p>A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.</p>
    </div>
    `;
}
function projectInfo3() {
  document.getElementById("project3").innerHTML = `
  <div id="project3-info">
  <h3 class="centered">Merthyr Street</h3>
        <li>Location: Barry</li>
        <li>Client: Linc-Cymru</li>
        <li>Contractor: W.K. Plasterers</li>
        <p>A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.</p>
  </div>
  `;
}