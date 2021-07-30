document.getElementById("services").addEventListener("click", services);

function services() {
    document.getElementById('menu-text').innerHTML=`
    <section class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="centered">Services</h1>
          <p>Smart Associates are able to offer a full range of Civil and Structural Engineering Consultancy Services, which are not limited to the following: -</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <h3>Civil Engeneering</h3>
          <ul>
            <li>Site Inspections</li>
            <li>Feasability Studies</li>
            <li>Highways and Infrastructure</li>
            <li>Drainage Designs and Hydraulic Modelling</li>
            <li>Sustainable Drainage (SuDs) and SAB Submission</li>
            <li>External Works</li>
            <li>Earth and Water Retaining Structures</li>
          </ul>
        </div>
        <div class="col-md">
          <h3>Structural Engineering</h3>
          <ul>
            <li>Site Inspections</li>
            <li>Structural Analysis</li>
            <li>Structural Design and Detailing</li>
            <li>Structural Surveys and Reports</li>
            <li>Foundation Designs and Advice</li>
            <li>Listed Buildings</li>
            <li>Extensions and Alterations</li>
            <li>New Build Developments</li>
          </ul>
        </div>
      </div>
    </section>
    `;
  }