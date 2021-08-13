# Happy Hands - Testing document

[README.md file](/README.md)

## Table of contents
1. [Validation Testing](#validation-testing)
2. [Lighthouse Testing](#lighthouse-testing)
   * [Mobile Phone](#mobile-phone)
   * [Desktop](#desktop)
3. [Manual Testing](#manual-testing)
   * [All Pages](#all-pages)
   * [index.html](#index)
   * [services](#services)
   * [projects](#projects)
   * [contact-us](#contact-us)
      * [form in contact us](#contact-us-form)
   * [success](#success)
   * [404.html](#404)
4. [User Story Testing](#user-story-testing)
5. [Bugs](#bugs)
   * [Github](#github)
   * [Hero Image](#hero-image)
   * [Buttons](#buttons)
   * [Navigation Bar](#navigation-bar)
   * [Footer Errors](#footer-errors)

## Validation Testing
* [html testing with W3C Markup Validation Service](https://validator.w3.org/)
  * [index.html](/assets/images/testing-images/index.html.pdf)
  * [services](/assets/images/testing-images/services.html.pdf)
  * [projects](/assets/images/testing-images/projects.html.pdf)
  * [contact-us](/assets/images/testing-images/contact.pdf)
  * [success](/assets/images/testing-images/http-no-errors.png)
  * [404.html](/assets/images/testing-images/http-no-errors.png)

* [css testing using W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
All CSS code was put through the W3C Validation Service. The following message was shown: -
![css testing results](/assets/images/testing-images/css-results.png)

* [JavaScript testing using jshint.com](https://jshint.com/). The following messages were found on the javascript code: -
  * [contactUs.js]()
  * [homePage.js]()
  * [map.js]()
  * [projects.js]()
  * [services.js]()

[Back to content](#table-of-contents)
## Lighthouse Testing
### Mobile phone
#### (1st test)
  * [index.html](/assets/images/testing-images/lighthouse-index-1st.png)
  * [services](/assets/images/testing-images/lighthouse-services-1st.png)
  * [projects](/assets/images/testing-images/lighthouse-projects-1st.png)
  * [contact-us](/assets/images/testing-images/lighthouse-contact-us-1st.png)
    * [success](/assets/images/testing-images/lighthouse-success-1st.png)
    * [404.html](/assets/images/testing-images/lighthouse-404-1st.png)

The main issues were the performance and Best Practices which both scored under 90% on all pages. The errors were mainly that the pictures were too big and that MORE TESTING REQUIRED. 

I fixed this by ........

#### (2nd test)
  * [index.html](/assets/images/testing-images/lighthouse-index-2nd.png)
  * [services](/assets/images/testing-images/lighthouse-services-2nd.png)
  * [projects](/assets/images/testing-images/lighthouse-projects-2nd.png)
  * [contact-us](/assets/images/testing-images/lighthouse-contact-us-2nd.png)
    * [success](/assets/images/testing-images/lighthouse-success-2nd.png)
    * [404.html](/assets/images/testing-images/lighthouse-404-2nd.png)

After the fixes described above all scores accross all pages were over 90% with my index.html scoring 94%. With more time and manipulation I think I could have got all scores over 95%. Most of the issues were in Best Practices for the image used in the nav bar and hero-image.

I also noticed that running more than one lighthouse test on each page delivered a different set of results, so was unsure if any extra work on these pages, would have a major inpact on my scores.
 
### Desktop
* [index.html](assets/images/testing-images/desktop-index.html.png)
* [services](assets/images/testing-images/desktop-services.png)
* [projects](assets/images/testing-images/desktop-projects.png)
* [contact-us.html](assets/images/testing-images/desktop-contact-us.png)
   * [success.html](assets/images/testing-images/desktop-success.png)
   * [404.html](assets/images/testing-images/desktop-404.html.png)

[Back to content](#table-of-contents)
## Manual Testing  

The layout of the website is as follows: -
![](assets/images/testing-images/website-layout-plans.jpg)

The most common path through the website is: -
* Home > Services > Projects > Contact Us
  * On completion of the form in Contact Us > Success (Thank You) - However at the time of writing this TESTING document this is still not working. Please see the javascript testing section.
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

**Each page also contained an 'accessability' button in the footer**
* Expectation: - The 'accessability' button should enable a user to change the font size on the page they are viewing
* Test: - NOT YET IMPLEMENTED
* Result: - 
* Verdict: - 

**Each page also contains the following links within the navigaiton bar**
1. Contact Us
   * Expectation: - A user clicks the 'contact us' link and is directed to the 'Contact Us' content
   * Test: - Click the link and be directed to the 'Contact Us' content
   * Result: - I clicked this button on every page and was directed to the correct content
   * Verdict: - Working as intended


[Back to content](#table-of-contents)

## Buttons

**The following sections contain 'call-out' buttons** 

These buttons are placed in the contact us section to encourage user interactivity. For example: -

### footer (NOTE: This has not been implemented at time of writing)

This has one 'call-out' button: -

1. This button should allow a user to change the text size and colours that are used in the website
   * Expectation: - A user clicks and enters their preferred text size and background colours by using JavaScript to manipulate the CSS of these sections - THIS HAS NOT BEEN IMPLEMENTED
   * Test: - Clicked this button to change the desired text size and colours
   * Result: - Nothing changed and the code was then corrupting the display completely
   * Verdict: - Not working as desired. Several attempts were made to fix this and solutions were sourced from the Code Institute videos, YouTube, Google, etc. The function wasn't working at the time of submission.

[Back to content](#table-of-contents)
### projects

This has six 'call-out' buttons: -

1. All of the six 'call-out buttons perform the same function. They close/hide the carousel/slideshow and refressh the called javascript.
   * Expectation: - A user clicks the 'close' button and the extra informaiton (slideshow/carousel and extra paragraph is hidden).
   * Test: - Clicked this button
   * Result: - Closed the extra content and refreshed the page.
   * Verdict: - Working as intended

It was my intention to use Event Listenerers for each project that would then load the carousel/slideshow and extra information. Sadly, the projects html content is also using an Event Listener so the extra javascript didn't seem to want to work as an additional listener.

[Back to content](#table-of-contents)
### services
There is no 'call-out' button: -

### contact us
There are two 'call-out' buttons: -
1. The first **reset** button resets the form and deletes any input from the user in the form above
   * Expectation: - A user fills in the form, makes an error and clicks the 'call-out' **Reset** button and deletes any input from the user in the form above
   * Test: - I entered some dummy information and clicked the **Reset** button
   * Result: - The information was cleared
   * Verdict: - Working as intended
2. The second **submit** button 'sends' the information in the form and sends an email to the company. There should also be a **success.message**
   * Expectation: - A user fills in the form correctly and clicks the 'call-out' **Submit** button and an email is sent to the company email account. The 'Success' message is currently not working as the function is not being called.
   * Test: - I filled out all form sections correctly and clicked this button
   * Result: -  I was able to send an email but not get a success message
   * Verdict: - Partly working as intended.

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
   * Result: - I accessed the google account - smartassociates4@gmail.com (password - SmartAss32) and saw messages I had typed.
   * Result: - A message 'Thank you for confirming your email address' appears in the form
   * Verdict: - Partly working as intended - At the time of writing this TESTING.md the form submits and sends the message as an email but the 'Thank you for you email/success' message does not appear.

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

Verdict: - Working as intended

**Email Address - '@' symbol must be used** 
* Expectation: - Incorrectly entering an email address without the '@' symbol displays an error
* Test: - Entered a dummy email address without the '@' part of the address
* Result: - An error/warning message was displayed asking me to type an email address with a '@' symbol
* Verdice: - Working as intended. The form would not allow me to submit with a missing '@' symbol

[Back to content](#table-of-contents)
### success
There is one 'call-out' button: -
1. This button allows the user to return back to the **contact-us.html** page
   * Expectation: - Clicking on the 'call-out' button directs the user back to the 'Contact Us' (contact-us.html) page
   * Test: - Clicked the 'call-out' button
   * Result: - I was taken to the 'Contact Us' (contact-us.html) page
   * Verdict: - Working as intended

### 404
There is one 'call-out' button: -
1. This button allows the user to navigate back to the **index.html** of the main website
   * Expectation: - Clicking on the 'call-out' button takes user to the 'Home' (index.html) page
   * Test: - Clicked the 'call-out' button
   * Result: - Each time the button was clicked I was directed to the 'Home' (index.html) page
   * Verdict: - Working as intended

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
  3. I want to easily understand about the courses provided
     * Test: - The **Lessons** 'Call-out' button on the 'Home' (index.html) page and within the navigation bar were clicked
     * Result: - Clicking the 'call-out' button and/or using the links within the navigation bar directed to the 'Lessons (lessons.html) page. Some additional information about the classes/courses was provided on the 'Home' page (index.html)
     * Verdict: - Success
  4. I want an attractive home page introducing HAPPY HANDS
     * Test: - Every page shoudl have a hero image and page header title text and subheading
     * Result: - A hero image and text appeared on every page
     * Verdict: - Success
  5. I want to click on navigation links to be taken to the correct page/section and to be able to return to the home page or another page without using the brower forward/backward buttons
     * Test: - Each link was tested for each page, i.e. the 'Lessons' text directs me to the 'Lessons' (lessons.html) page
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
  8. I want to be able to click and visit social media, Facebook, Twitter and others for more content and to keep up to date with future postings and developments
     * Test: - Clicked all the social media 'Font Awesome' icons
     * Result: - Each icon directed to a new tab which matched the icon and link text
     * Verdict: - Success
  9. I want to access sample lessons and other content for various age ranges
     * Test: - User controls and no autoplay on any video content
     * Result: - No video autoplayed on website loading
     * Verdict: - Success
  10. I want to provide make contact with the business owner for more information
      * Test: - The 'Contact Us' links in the top Navigation and Footer bars directed to the 'Contact Us' (contact-us.html) page
      * Result: - The links directed to the correct page
      * Verdict: - Success
  11. I want to see the people involved with teaching the lessons
      * Test: - To make sure images of the tutors loaded correctly
      * Result: - Images loaded in the correct sections
      * Verdict: - Success
  12. I want to see reviews and testimonials from other users
      * Test: - To make reviews stand out from other content
      * Result: - The reviews are styled separately from other content
      * Verdict: - Success
  13. I want to access contact information, such as address, phone numbers and location
      * Test: - To click and be directed to a map and a phone call
      * Result: - A map loads but doesn't not have an address marked. This was corrected by supplying the address in the text for this clickable link.
      * Verdict: - Phone number successful. Map required some additional work - corrected by having address as text.
  14. I want to be able to access this information if I am deaf and rely on BSL
      * Test: - To click and be directed to a video call
      * Result: - Clicking the 'Video Call Us' link opens a new tab for a Zoom video call
      * Verdict: - Success
  15. I want to know the price for and time for each lessons
      * Test: - To find prices
      * Result: - Prices included in bottom section of 'Tutors' (tutors.html) page
      * Verdict: Partially Successful. Preferred options would have been an additional download, or call-out button. May have time to implement post-testing
  16. I want to know that my child is safe and that tutors have the necessary qualificaitons and checks in place
      * Test: - To easily find information about the teachers/tutors
      * Result: - Links to the Tutors (tutors.html) page is available within the navigation bar and on the 'Home' (index.html) page
      * Verdict: - Success

* For the above, when designing the website I did the following to resolve the User Story desires:-
  1. Design a responisive website focussed for mobile devices and responsive to larger screens.
  2. Design an easy to read home page (index.html) which gives some brief information about the website and it's aims and goals
  3. Design 2 distinct sections which highlight the language (BSL) and the courses available
  4. Design 1 section on the home page about the company Happy Hands as an 'about us'
  5. Design and impliment a navigation bar which contains links to different pages and sections in the website 
  6. Design and label the navigation bar with clear and understandable text to direct users to the correct page  
  7. Design the website to have good readability throughout and avoid using black on white text for those with Meares-Irlen Syndrome, Dyslexia or other reading difficulties
  8. Design Social Media interactive buttons which direct user to the social media platform they wish to interact with.
  9. Design and create videos and packs for users to watch and download  
  10. Design a contact form which can be submitted (or cleared if errors made)
  11. Design a 'tutors.html' page with information on teachers 
  12. Design a reviews and testimonials section
  13. Design a footer with contact details such as address, phone number and location via a map 
  14. Design a link in the footer to a Zoom call for BSL users and video content
  15. Design a section within the lessons.html page with information on prices and times
  16. Design a seciton within the tutors.html and index.html which offers confirmation of checks and tutor information

* As a user returning to the site:
  1. I want to be able to watch video content provided by the business
     * Test & Result: - All videos work correctly
  2. I want to be able to easily find content I am interested in
     * Test & Result: - All content is easily found by means of a 'Sticky Navigation bar'
  3. I want to be able to contact the business owner by various means, such as contact form, social media, video call, etc
     * Test & Result: - All these details are at the bottom of each page as Social Media (Font Awesome) Icons. There is also a contact form on the 'Contact Us'(contact-us.html) page accessed from the top and bottom navigation bars and from the Tutors page

* For the above, when designing the website I did the following to resolve the Returning User Story desires:-
  1. Design and provide embedded YouTube videos with user controls
  2. Design an easy to use and friendly navigation bar and clickable buttons on each page
  3. Design a contact form section/page. Also provide social media buttons and a contact us on each page at the bottom

[Back to content](#table-of-contents)
## Bugs

### Github
Problems committing to GitHub.
* During the first week of using GitPod I encoutered issues commiting and pushing the work I was doing on my website. I therefore created the following [report](/assets/images/readme-images/website-design-steps)

### Hero Image
The Hero Image
* On each page the hero image was too bright which made reading the header text and subheading very difficulties
    ![](assets/images/testing-images/hi-too-bright.png)

      > .hero-image {
      background: url(../images/logos-images/happy-hands.jpg) no-repeat center center;
      background-size: cover;
      height: 36rem;
      width: 100%;
      position: relative;
      }
* On correcting this I found some code from css-tricks which made the image darker, however, the image would not stay center and adding 'center center' to this new code didn't work.
   ![](assets/images/testing-images/hi-image-error.png) 
   
  * This was even worse on a mobile device: -

   ![](assets/images/testing-images/hi-mobile.png)
 
        .hero-image {
        background-image: linear-gradient(rgba(0, 0, 0, 0.40),
            rgba(0, 0, 0, 0.40)),
        url(../images/logos-images/happy-hands.jpg);
        /*background-image influenced by css-tricks.com*/
        background-size: cover;
        height: 36rem;
        width: 100%;
        position: relative;
        }

* By combining these two codes I was able to produce a hero image I wanted: -
  ![](assets/images/testing-images/hi-desired-image.png)

      .hero-image {
      background: url(../images/logos-images/happy-hands.jpg) no-repeat center center;
      background-image: linear-gradient(rgba(0, 0, 0, 0.40),
            rgba(0, 0, 0, 0.40)),
        url(../images/logos-images/happy-hands.jpg);
      /*background-image influenced by css-tricks.com*/
      background-size: cover;
      height: 36rem;
      width: 100%;
      position: relative;
      }

[Back to content](#table-of-contents)
### Buttons
The buttons on my form were not appearing the same as the other buttons on my website although the code was the same: -

* Existing code from Bootstrap (adapted by me for colour, style, position, etc): -

      .btn {
      /*influenced by Bootstrap*/
      background-color: #FFFB0F;
      border: 2px solid #3066BE;
      border-radius: 2rem;
      color: #3066BE;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.5rem;
      margin-top: .5rem;
      }
* However, the **Reset** and **Submit** buttons looked like this: -
![](assets/images/testing-images/bug-submit-reset-btn-fail.png)

* My mentor helped with some ideas and eventually I decided to style each button for the form separately: -
       
      .btn-reset {
      background-color: #3066BE;
      border: 2px solid #FFFB0F;
      border-radius: 2rem;
      color: #FFFB0F;
      margin-bottom: 1rem;
      text-align: center;
      }

      .btn-submit {
      background-color: #FFE66D;
      border: 2px solid #3066BE;
      border-radius: 2rem;
      color: #3066BE;
      margin-bottom: 1rem;
      text-align: center;
      }

This then gave me the final button design I had wanted: -
![](assets/images/testing-images/reset-submit-btns.png)

[Back to content](#table-of-contents)
### Navigation Bar
The navigation bar was not responsive and wouldn't move down when scrolling (sticky). I had tried adding a 'sticky-top' to my code in several places to try to make it work as intended. It took me quite a few tries but eventually I had a working 'sticky' nav bar.

* Original nav bar code with 'header class="container fixed"': -
        
        <header class="container fixed">
            <nav class=“navbar navbar-expand-lg navbar-dark bg-primary”>
                <a class=“navbar-brand” href=“index.html”>
                    <img class=“happy-hands” src=“assets/images/logos-images/happy-hands.jpg” alt=“Happy Hands Logo”></a>
                <h6 class=“yellow”>Happy Hands</h6>
                <button class=“navbar-toggler” type=“button” data-toggle=“collapse” data-target=“#navbarSurpportedContent”
                aria-controls=“navbarSurpportedContent” aria-expanded=“false” aria-label=“Toggle navigation”>
                   <span class=“navbar-toggler-icon”></span>
                </button>
                <div class=“collapse navbar-collapse justify-content-end” id=“navbarSurpportedContent”>
                    <ul class=“nav-centre navbar-nav”>
                        <li class=“nav-item active”>
                            <a class=“nav-link” href=“index.html”>Home</a>
                        </li>
                        <li class=“nav-item”>
                            <a class=“nav-link” href=“lessons.html”>Lessons</a>
                        </li>
                        <li class=“nav-item”>
                            <a class=“nav-link” href=“tutors.html”>Tutors</a>
                        </li>
                        <li class=“nav-item”>
                            <a class=“nav-link” href=“free-content.html”>Free Content</a>
                        </li>
                        <li class=“nav-item”>
                            <a class=“nav-link” href=“contact-us.html”>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

I tried adding 'class="sticky-top" to all aspects of the navigation bar and had the following unusual results: -

![](assets/images/testing-images/nav-outside-site.png)
![](assets/images/testing-images/nav-too-big.png)

Until thankfully I managed to get it all to work: -

![](assets/images/testing-images/nav-working.png)

My final code with 'nav class="sticky-top"' at the beginning of this code: -

    <nav class="sticky-top">
        <div class="container navbar-dark navbar navbar-expand-lg bg-primary">
            <a class="navbar-brand" href="index.html">
                <img class="happy-hands" src="assets/images/logos-images/happy-hands.jpg" alt="Happy Hands Logo"></a>
            <a href="index.html">
                <h6 class="yellow">Happy Hands</h6>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSurpportedContent"
                aria-controls="navbarSurpportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSurpportedContent">
                <ul class="nav-centre navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="lessons.html">Lessons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tutors.html">Tutors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="free-content.html">Free Content</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact-us.html">Contact Us</a>
                    </li>
                </ul>
            </div>
    </nav>
    
### Footer Errors
    
Footer text would show yellow. However, on clicking the text and then returning to the original page, the text was now black. The issue was a piece of css code over riding the desired effect. This was deleted.

[Back to content](#table-of-contents)