document.getElementById("projects").addEventListener("click", projects);
const existingProjectsRef = document.querySelector('#existing-projects');

  const projects = [
    {
      id: '1',
      title: "Ex. Archbishop McGrath School",
      image: "assets/images/projects/7513-ARCHBISHOP-LCA/JEHU12.12.1836.jpg",
      imageAlt: "Photograph of Ex Archbishop McGrath School",
      location: "Brynmenyn",
      client: "Linc-Cymru",
      contractor: "Jehu",
      information: `A 48 bed Care/Extra Care and 18 unit associated housing project for Linc and Jehu post-contract. All surface water taken to infiltration systems, with foul drainage taken to adoptable sewers within the neighbouring road. Dealings with DCWW included for the diversion of a pumping main serving the adjacent College and liaison with the nearby school being built at the same time to coordinate interface issues. The past history of the site left an abandoned mine shaft which was treated and capped. All foundations were rafted to guard against mining subsidence.`
    },
    {
      id:'2',
      title: "Durham Road",
      image: "assets/images/projects/7574-DURHAM ROAD-LCA/JEHU12.2.20-59.jpg",
      imageAlt: "Photograph of Durham Road Apartment Block",
      location: "Newport",
      client: "Linc-Cymru",
      contractor: "Jehu",
      information: `A 38 four storey apartment block of timber frame construction founded on piled ground beams due to the presence of fill overlying soft alluvial deposits. Much drainage survey work was required and liaison with Railtrack and Newport land drainage to allow restricted discharge to an existing surface water culvert on the boundary of the site.`
    },
    {
      id: '3',
      title: "Merthyr Street",
      image: "assets/images/projects/7699-MERTHYR STREET-NHA/IMG_20210625_150445_3.jpg",
      imageAlt: "Photograph of Merthyr Street Four Storey Building",
      location: "Barry",
      client: "Linc-Cymru",
      contractor: "W & K Plasterers",
      information: `A four storey proprietary metal frame system build on this previously developed site. The original building, with roads to three sides, and having a part basement and adjacent to the end of a terrace presented engineering difficulties in devising a suitable piled foundation system, requiring cantilevered and stepped foundation details.`
    },
    {
      id: '4',
      title: "Ex. Blue Dragon Hotel",
      image: "assets/images/projects/7683-HARRISON DRIVE-UWHA/IMG_20200917_133928_6.jpg",
      imageAlt: "Photograph of Ex. Blue Dragon Hotel",
      location: "Newport Road",
      client: "Wales and West Housing Association",
      contractor: "Hale Construction",
      information: `A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association. This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process. Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.`
    },
    {
      id: '5',
      title: "Ex. Magistrates Court",
      image: "assets/images/projects/7644-EX-MAGISTRATES-LCHA/IMG_20201215_131645_1.jpg",
      imageAlt: "Photograph of Ex Magistrates Court, Caerphilly",
      location: "Caerphilly",
      client: "Linc-Cymru",
      contractor: "Jehu",
      information: `A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly. A challenging, loadbearing masonry, Passivhaus project, with piled foundations and heave precautions on this original infilled quarry, overshadowed with many trees to the boundaries.`
    }
  ];

  const createProjects = (projects) => {
    projects.forEach((project) => {
      const html= `
      <div class="col-md-6">
      <img src="assets/images/${project.image}" id="project-${project.id}" alt="project-${project.imageAlt}">
      <p class="centered">${project.information}</p>
      </div>
      `;

      existingProjectsRef.insertAdjacentElement('beforeend', html);
    });
  }





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
  <button class="button cancel" onclick="projects()">&times;</button>
</div>
</div>



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