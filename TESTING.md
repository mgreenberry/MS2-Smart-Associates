# Smart Associates - Testing document

**Note from the author**
The original idea was to create a game based on learning Sign Language similar to my MS1 website. However, I was unable to get images and content that wasn't copyrighted and free to use. Secondly, I was unable to work out how to write the required JavaScript for any type of game. The company I work for has never had a website despite being over 50 years old. Therefore I wanted to provide them with a website that would use the required amount of JavaScript.

On meeting with my mentor, we discussed this idea and the thought was that having an index.html, services.html, etc would not be enough for a good grade and I then decided to use JavaScript to enable as much content as possible and try to use code from other sources such as Stack Overflow, W3Schools, etc.

Therefore there are some aspects of the coding that may not work despite much work on it. Tutor Assistance was sought as well as asking help from others in Slack. As my knowledge of JavaScript is still very poor I wasn't always able to discern exactly what was needed. I have tried to capture the biggest challenges under the **bugs** section of this TESTING.md document.

[README.md file](/README.md)

## Table of contents
1. [Validation Testing](#validation-testing)
2. [Lighthouse Testing](#lighthouse-testing)
   * [Mobile Phone](#mobile-phone)
   * [Desktop](#desktop)
3. [Chrome DevTools](#chrome-devtools)
3. [Manual Testing](#manual-testing)
   * [All Pages](#all-pages)
   * [projects](#projects)
   * [contact-us](#contact-us)
      * [form in contact us](#form)
4. [User Story Testing](#user-story-testing)
5. [Bugs](#bugs)

## Validation Testing
* [html testing with W3C Markup Validation Service](https://validator.w3.org/)
  * [index.html](docs/w3c-html/index-html-test1.png) - type="text/javascript" deleted in both lines 24 & 25. Deleted the duplicate 'class' use in line 73. Deleted the duplicate use of an id="menu-text" in lines 76 & 59.
  * [services](docs/w3c-html/services-errors.png) - Changed 'section' to 'div'.
  * [projects](docs/w3c-html/mainprojects-errors.png) - added 'ul' before and after the 'li' tags on all projects functions, mainly lines 155, 158 & 161. Added a '; (semi colon) on line 166 and other places required. Deleted (<i>) from the code as not required.
  * [contact-us](docs/w3c-html/contactUs-errors.png) - Deleted the width="" in line 120. Changed for="from_name" to for="fullname". Changed for="from_email" to for="email".
  * [404.html](docs/w3c-html/404-no-errors.png) No errors

All errors listed were resolved. [contactUs.js](docs/w3c-html/contactUs-solved.png), [index.hmtl](docs/w3c-html/index-html-solved.png), [projects.js](docs/w3c-html/mainprojects-solved.png), [services](docs/w3c-html/services-solved.png),

* [css testing using W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
All CSS code was put through the W3C Validation Service. The following message was shown: -
![css testing results](docs/css-test.png)

* [JavaScript testing using jshint.com](https://jshint.com/). The following messages were found on the javascript code: -
  * [contactUs.js](docs/jshint/contactUs-jshint.png) - 9 warnings listed relate to the use of 'let' or 'template literal syntax'. Underfined and unused variables checked, variables required for function to work.
  * [homePage.js](docs/jshint/homePage-jshint.png) - 6 warnings listed. Missing semicolon added to code for warning 3 and 11. Other warnings related to 'let'. Undefined variables checked agains functionality.
  * [map.js](docs/jshint/maps-jhint.png) - 5 warnings listed. All warnings relate to the use of 'let'. 2 undefined variables checked and unused variables are required.
  * [projects.js](docs/jshint/projects-jhint-errors.png) - 8 warnings listed. Missing semicolon added. Other errors list 'template literal syntax' as message. 2 undefined variable and 6 unused all checked but required.
  * [services.js](docs/jshint/services-jhint.png) - 1 warning listed. 'template literal syntax' message.

Warnings were checked and unused code was also checked. Very often there wasn't anything that could be done to stop the warnings from displaying. All unused variables appeared to be called when required and code was seen to be functioning as intended.

[Back to content](#table-of-contents)
## Lighthouse Testing
### Mobile phone
* 1st test
  * [index.html](docs/lighthouse/mobile-lighthouse1.png)

The main issues were the performance and Best Practices which both scored under 90% on all pages. The errors were mainly that the pictures were too big and that I was calling a lot of javascript pages. As all other pages were loaded via javascript I was unable to run lighthouse on any of the folloiwng pages: -
  services.js
  projects.js
  contactUs.js 

I also noticed that running more than one lighthouse test on this page delivered a different set of results.

* 2nd test
  * [index.html](docs/lighthouse/lighthouse-mobile2.png) - Performance now at 80% and Best Practices at 100% depending on how many times the test was run.
 
### Desktop
* 1st test
  * [index.html](docs/lighthouse/desktop-lighthouse1.png)

All scores were over 90% apart from Best Practices. This was then tweaked to improve the scores by amending how the website ran.

* 2nd test
  * [index.html](docs/lighthouse/lighthouse-desktop2.png) - All scores were over 90% at the time of the 2nd test.

* [Warning Message](docs/lighthouse/console-warning-lighthouse.png) - This message appeared in the console when running the lighthouse tests. These javascript errors were not from the user code but appeared to come from the navigation via bootstrap.

[Back to content](#table-of-contents)

## Chrome DevTools
The following warning messages were displayed in the console when loading some of the javascript pages: -

* [Projects Page Console Messages](docs/console-message-projects.png) - 2 warnings realted to non-passive listeners.
* [Contact Us Page Console Messages](docs/console-message-contactUs.png) - 23 warnings related to non-passive listeners.

## Manual Testing  

The layout of the website is as follows: -
[layout](docs/ms2-website-layout.pdf)

The most common path through the website is: -
* Home > Services > Projects > Contact Us
  * On completion of the form in Contact Us a message should appear to the user to show them an email was sent successfully
  * On entering the wrong address in the web browser > 404.html

### All Pages
**Each page contains a navigation bar at the top of the page.**
* Expectation: -  
  * A user can go directly to any part of the website by clicking the relevant page link within the navigation bar. 
  * On a mobile device, this will mean clicking the 'hamburger' icon, which will then display all the pages for a user to choose from.
* Test: - Each page link was clicked to go to the chosen page, i.e. services clicked should take user to services information.
* Result: - Each page link took me to the page I had clicked on. No link was broken and each page was reachable as intended.
* Verdict: - Working as intended

**Each page contained an image and 'Smart Associates' text within the navigation bar in the header**
* Expectation: - The  'Smart Associates' text should take a user back to the home (index.html) page
* Test: - I clicked the text on every page
* Result: -  I then directed me back to the home (index.html) page, i.e - clicking the 'Smart Associates' text on projects (projects.js) directed me back to the Home (index.html) page
* Verdict: - Working as intended

**Each page also contains the following links within the navigaiton bar**
1. Services
   * Expectation: - A user clicks the 'Services' link and is directed to the 'Services' content
   * Test: - Click the link and be directed to the 'Services' content
   * Result: - I clicked this button on every page and was directed to the correct content
   * Verdict: - Working as intended

2. Projects
   * Expectation: - A user clicks the 'Projects' link and is directed to the 'Projects' content
   * Test: - Click the link and be directed to the 'Projects' content
   * Result: - I clicked this button on every page and was directed to the correct content
   * Verdict: - Working as intended

3. Contact Us
   * Expectation: - A user clicks the 'contact us' link and is directed to the 'Contact Us' content
   * Test: - Click the link and be directed to the 'Contact Us' content
   * Result: - I clicked this button on every page and was directed to the correct content
   * Verdict: - Working as intended

[Back to content](#table-of-contents)

### projects

This has six 'call-out' buttons: -

1. All of the six 'call-out buttons perform the same function. They close/hide the carousel/slideshow and refresh the called javascript.
   * Expectation: - A user clicks the 'close' button and the extra information (slideshow/carousel and extra paragraph is hidden).
   * Test: - Clicked this button
   * Result: - Closed the extra content and refreshed the page.
   * Verdict: - Working as intended

It was my intention to use Event Listenerers for each project that would then load the carousel/slideshow and extra information. Sadly, the projects html content is also using an Event Listener so the extra javascript didn't seem to want to work as an additional listener. To solve this I added an 'onclick="myFunc();"' to each image and to the end of the slideshow/carousel information. 

[Back to content](#table-of-contents)

### contact us
There are two 'call-out' buttons: -
1. The first **reset** button resets the form and deletes any input from the user in the form above
   * Expectation: - A user fills in the form, makes an error and clicks the 'call-out' **Reset** button and deletes any input from the user in the form above
   * Test: - I entered some dummy information and clicked the **Reset** button
   * Result: - The information was cleared
   * Verdict: - Working as intended
2. The second **submit** button 'sends' the information in the form and sends an email to the company. There should also be a **success.message**
   * Expectation: - A user fills in the form correctly and clicks the 'call-out' **Submit** button and an email is sent to the company email account. The user then receives a success message within the HTML under the form.
   * Test: - I filled out all form sections correctly and clicked this button
   * Result: -  I was able to send an email and received a success message
   * Verdict: - Working as intended.

[Back to content](#table-of-contents)
#### form
This form contained 4 fields to be filled in by the user. All fields were set to **'required'**

**First Test - Correct Information added to all fields**
1. Full Name - Text entered
2. Email Address - Text entered with an "@" email dummy address
3. Confirm Email Address - Text entered with an "@" email dummy address
4. Message - Text entered
   * Expectation 1: - Entering text in the right format in all fields and then pressing 'Submit' button allows the form to be submitted
   * Expectation 2: - Entering the correct email address in both email address and confirm email address fields.
   * Test: - Filled in form using my name, email address and dummy message
   * Result: - I accessed the google account and saw messages I had typed.
   * Result: - A message 'Thank you for confirming your email address' appears in the form
   * Verdict: - Working as intended

**Second Test - Incorrect/Information missing**
1. Full Name - Text 'NOT' entered
2. Email Address - Text entered with an "@" email dummy address
3. Confirm Email Address - Text entered with an "@" email dummy address
4. Message - Text entered
   * Expectation: - Missing text in the right format in the 'First Name' field and then pressing the **Submit** button brings up an error message and won't submit the form.
   * Test: - Filled in form without filling in the 'First Name' field and using my last name only, email address and dummy message
   * Result: - A warning message displayed asking me to fill in the 'First Name' field
   * Verdict: - Working as intended

**This test was repeated for 'Last Name', 'Email Address' 'Repeat Email Address' and 'Message' with the same warning/error message. The form would not allow me to submit with missing fields.**

**Third Test - Incorrect Email entered in 'Confirm Email Address' field**
1. Full Name - Text entered
2. Email Address - Text entered with an "@" email dummy address
3. Confirm Email Address - Incorrect Text entered with an "@" email dummy address
4. Message - Text entered
   * Expectation 1: - Entered the correct email address in the first 'email address' box and an incorrect eamil address in the 'confirm email address' field.
   * Test: - Filled in form using my name, email address and dummy message
   * Result: - A message 'Sorry the email addresses don't match. Please enter the same email address and confirm the email address' appears in the form
   * Verdict: - Working as intended

**Email Address - '@' symbol must be used** 
* Expectation: - Incorrectly entering an email address without the '@' symbol displays an error
* Test: - Entered a dummy email address without the '@' part of the address
* Result: - An error/warning message was displayed asking me to type an email address with a '@' symbol
* Verdice: - Working as intended. The form would not allow me to submit with a missing '@' symbol

[Back to content](#table-of-contents)

## User Story Testing

The following are the User Stories from the README.md page and the resulting Test and Result

* As a user visiting the site for the first time:
  1. I want to be able to use the website on any device I own or use
     * Test: - I tested the website on a Samsung Note 8, an iPad Pro and a MacBook Pro 2021 model
     * Result: - The website worked on all devices
     * Verdict: - Success
  2. I want to able to learn and easily understand what the website is about
     * Test: - To make sure that all headers, paragraphs and other content was clear and readable
     * Result: - I created the website using Bootstrap v.4 and the "row" and "col" tags to make the site responsive to all devices, but especially mobile
     * Verdict: - Success
  3. I want to easily understand what the company is
     * Test: - The **Home Page or About Us Page** describes the company with a strapline and interactive rotating gallery of images.
     * Result: - Clicking the 'Smart Associates' text within the navigation bar directed to the 'Home Page (index.html) page.
     * Verdict: - Success
  4. I want an attractive 'services' page explaining the types of services the company offers
     * Test: - Every page should have a hero image and page header title text and subheading
     * Result: - A hero image and text appeared on every page
     * Verdict: - Success
  5. I want to click on navigation links to be taken to the correct page/section and to be able to return to the home page or another page without using the brower forward/backward buttons
     * Test: - Each link was tested for each page, i.e. the 'services' text directs me to the 'services' section
     * Result: - Each link directed to the correct page
     * Verdict: - Success
  6. I want these navigation links to include user friendly menus which are easy to uderstand and use
     * Test: - I tested the navigation links on a Samsung Note 8, an iPad Pro and a MacBook Pro 2021 model
     * Result: - The navigation links worked on all devices
     * Verdict: - Success
  7. I want the content to be easy to read and have a predictable layout so that each page can be navigated easily
     * Test: - I tested the website on a Samsung Note 8, an iPad Pro and a MacBook Pro 2021 model
     * Result: - The website worked on all devices and was responsive so that all content was easily readable
     * Verdict: - Success
  8. I want to see some of the projects that the company have been involved with
     * Test: - Clicked the 'projects' link, was taken to the 'projects' content. I clicked on each image to display extra information, a carousel and a closing button
     * Result: - Each project picture displayed a carousel of extra images and information with a 'close' button to close the function.
     * Verdict: - Success
  9. I want to access contact information, such as address, phone numbers and location
     * Test: - Clicked on the 'Contact Us' wording/link and was directed to the correct content. Address, Phone Number and Map were under the form
     * Result: - Page displayed contact information
     * Verdict: - Success
  10. I want to send an email to the company using th form provided.
      * Test: - The 'Contact Us' links in the top Navigation and Footer bars directed to the 'Contact Us' content. I entered information into the form
      * Result: - The information in the form was then available to see in the email
      * Verdict: - Success

* For the above, when designing the website I did the following to resolve the User Story desires:-
  1. Designed a responisive website focussed for mobile devices and responsive to larger screens.
  2. Designed a home page (index.html) with a interactive changing picture and static text and strapline
  3. Designed 2 distinct sections which highlight the services provided by the company
  4. Designed 1 section on the home page about the company Smart Associates as an 'about us'
  5. Designed and implimented a navigation bar which contains links to different pages and sections in the website 
  6. Designed and labelled the navigation bar with clear and understandable text to direct users to the correct page  
  7. Designed the website to have good readability throughout
  8. Designed a projects page that shows a sample of projects the company have been involved in with extra information 
  9. Designed a contact us page with contact details
  10. Designed a contact form which can be submitted (or cleared if errors made) which will then send an email to the company

* As a user returning to the site:
  1. I want to be able to see additional projects when returning to the website
  2. I want to be able to easily find content I am interested in

* I will do this by:
  1. Design extra content that will display when more project infromation is available from the directors
  2. Design an easy to use and friendly navigation bar and clickable buttons on each page

[Back to content](#table-of-contents)

## Bugs

JavaScript presented many challenges for me in understanding. I have really struggled to understand how it works. This was especially true of JSQuery. So I am sure that the majority of 'bugs' and code could have been simplified. On top of this I am quite often calling a function on top of a function, one after another. I have tried to write about as many of the issues as I can. Please see a list below:-

* index.html
  1. Navigation Bar. I created a navigation which I designed to load javascript content rather than html. I did this by using the following code: -

  E.G - document.getElementById("contact-us").addEventListener("click", contactUs);

  This then would load the contactUs function (javascript) when the user clicked on the 'Contact Us' link in the navigation bar. There were a few teething issues with doing this, such as missing 'div' elements which would have been easier to spot had I just created html pages instead. The reason I didn't do this was that I wanted to have as much javascript in my website as possible and wasn't sure how much I would need to include and how good it would be.

  2. Picture. I created a main picture that I wanted to change via a javascript function when the user clicked on other pages. I did this with the following code: -

   document.getElementById("services").addEventListener("click", choosePic);
   document.getElementById("projects").addEventListener("click", choosePic);
   document.getElementById("contact-us").addEventListener("click", choosePic);
  
   let projectImages = new Array("assets/images/index/coverimage1.jpg", "assets/images/index/coverimage2.jpg", "assets/images/index/coverimage3.jpg","assets/images/index/coverimage4.jpg", "assets/images/index/coverimage5.jpg", "assets/images/index/coverimage6.jpg");

   function choosePic() {
      let randomPix = Math.floor(Math.random() * projectImages.length);
      document.getElementById("myImg").src = projectImages[randomPix];
   }

   This would then load a random image from a selection of 6 images of various projects that the company have been involved with. There were a few bugs with images appearing at different sizes and positions but creating an id=#myImg seemed to solve this.

   I also realised quite late that the image on desktop was very big and stretched. Also I received feedback that the image was quite below the 'fold' of the website so tried to remedy that by reducing the image using css.

   The original idea was to have the main image in the css as a background-image. However, I did have issues targeting this and changing the image to a random one. Moving the image into the html worked a lot better.

   This was the original code used for the main image which wouldn't work. Moving into the html and using a different function worked better. The new function used can be found in the homePage.js file.

   #main-image {
   background: url(../images/index/cover-image1.jpg) no-repeat center center fixed;
   background-size: cover;
   margin-left: 10rem;
   padding: 25rem;
   }

   // Change the cover picture for different picture
   document.body.style.backgroundImage = "url('../assets/images/index/cover-image2.jpg')";

   const coverImages = ['../assets/images/index/cover-image1', '../assets/images/index/cover-image2', 'cover-image3', 'cover-image4', 'cover-image5', 'cover-image6', 'cover-image7', 'cover-image8'];

   const image = document.querySelector("main-image");
   window.onload = () => generateRandomPicture(coverImages);

   function generateRandomPicture(array) {
      let randomNum = Math.floor(Math.random() * array.length);
      image.setAttribute("img", array[randomNum]);
   }

* Services page. I had to change the layout several times to get it to display as intended. This meant removing the 'centered' class from some elements as this didn't display so well on desktop appliances.

* Projecs page. Loading the 6 projects didn't create too many issues. However, I did have to adjust the size of the pictures, resolution and make sure they were all the same for each project. I wanted to be able to display more information and a slideshow/carousel of images of the building to the user for each project. As all of this would be loaded to the innerHTML of the index page, I would need to make sure that all 'div' elements had matching end tags. Most of the main issues were reasoanably easy to fix. Images displaying full width rather than in columns was fixed by adding missing end 'div' tags. I also tried to use a javascript function to run the slideshow/carousel and had reasoanble success but found that I was getting a lot of errors where the website would try to call this additional function but not finding it as the content hadn't been loaded that it was attached to. The javascript for such a carousel is found here: - http://kenwheeler.github.io/slick/

The main issues however were: - 
  1. The Individual Project Information. The extra information on each project would display until a user clicked the 'close' button which worked fine. However, if the user opened a second project after already opening a first project then clicking the 'close' button on 1 project would close all other projects.

  This was solved by calling the function projects(); from each project function, e.g. functionInfo1() had the projects(); at the end of the fomula so that this would be called after the user clicked the 'close' button. The function was amended with help from my mentor.

  2. The Interactive Map. The map function, although taken directly from Code Institute and only slightly amended wasn't displaying as intended. Also I was getting the following error: -

  /#projects:1 Uncaught (in promise) lf {message: “Map: Expected mapDiv of type Element but was passed null.“, name: “InvalidValueError”, stack: “Error\n    at new lf (https://maps.googleapis.com/m…d7aOY&callback=initMap&libraries=&v=weekly:165:50”} 

  The issue appears that the projects.js script hasn't finished loading before the initMap function was being was called. Removing the initMap text from the 'script' in line 140 from the index.html fixed the error message from showing. Thanks to Matt from ci who helped me work out the issue. 

* Contact Us Page
   1. I had an issue displaying the map correctly as would stay very small as I decided to use an 'iframe' to hold the map as when I used a 'div' it would not display as intended. 

   2. Contact Form. The form has 2 javascript functions. The first checks that the user has entered the same email address into both the 'email' and 'confirm email' fields (this was created solely to add javascript to the website and will not be used for the company). The main issue was that the clicking submit on an empty form would bring a 'Thank you for confirming your email address' message even though no email addresses were added. I was also using a onmouseenter to activate the function but this wasn't working as intended.

   With help from another student, as credited in the javascript code, I was able to create a function that would check that the email fields were filled in before any other check was made. This javascript also then checks that the email address in the 'email' field matches that entered in the 'confirm email' and vice versa.

   The 2nd bug was that the submit button was sending an email message as intended but the user was unaware that their message had been sent successfully. With help from Igor, Tutor Support, and others, I was able to get a javascript function that would display the following message: - 'Thank you for your message. We will get back to you as soon as possible' when submitting a correctly filled form.

* Log in page
I had the following problems with creating a log in page - 

When a user clicks the projects and contact us links they get new html which replaced the existing html. This was done with javascript I have.

However, for the log in. I wanted to have a modal type form pop up in front of the picture, and then run a javascript validation to check if correct details were submitted like repeat email address or password, then click the submit button on the modal form (not the link on the website) would then direct them to a dedicated staff.html.

I would then create a staff.js for this page with some extra interactivity like a time sheet as an example.

Most w3school ideas on running a modal use an on click button which I've been told I cant use and instead must use a Event Listener but haven't been able to get this to work.

I can create an alert using the event Listener which says hello but if I swap this text with my sign in form it doesn't work.

I abadoned this in the end as didn't have enough time and skill to create it. I also wanted to check if a user was registered with the website and allow cookies to be collected.

**Other Bugs**

There were lots of smaller issues mainly with the javascript functions. Most of these issues were due to the fact I was already using an Event Listener to create the new html and then trying to run more functions on this newly created html. However, this caused multiple issues of 'event listener null' errors as the additonal functions were loading and not finding the id that was required.

[Back to content](#table-of-contents)