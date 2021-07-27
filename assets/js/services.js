document.getElementById("services").addEventListener("click", services);

function services() {
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