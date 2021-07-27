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
          <div class="col-md">
            <img src="assets/images/index/cover-image1.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
          </div>
          <div class="col-md">
            <img src="assets/images/index/cover-image2.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
          </div>
        </div>   
        <div class="row">
          <div class="col-md">
            <img src="assets/images/index/cover-image3.jpg" id="project-main-image" alt="Existing Projects">
            <p class="centered">Describing image using javascript</p>
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
  