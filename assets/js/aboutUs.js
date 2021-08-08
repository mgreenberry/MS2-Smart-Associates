document.getElementById("about-us").addEventListener("click", aboutUs);
function aboutUs() { 
    document.getElementById('menu-text').innerHTML=`
    <section class="container-fluid" id="menu-content">
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
    </section>
    `;
  }