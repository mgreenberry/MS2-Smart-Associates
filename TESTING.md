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
  * [index.html]()
  * [services]()
  * [projects]()
  * [contact-us]()
  * [404.html]()

* [css testing using W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
All CSS code was put through the W3C Validation Service. The following message was shown: -
![css testing results](/)

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
  * [index.html]()
    * [404.html]()

I fixed this by reducing the size of the photographs again using online image reduciton software.

The main issues were the performance and Best Practices which both scored under 90% on all pages. The errors were mainly that the pictures were too big. As all other pages were loaded via javascript I was unable to run lighthouse on any of the folloiwng pages: -
  services.js
  projects.js
  contactUs.js 

#### (2nd test)
  * [index.html]()
    * [404.html]()

After the fixes described above all scores accross all pages were over 90%. With more time and manipulation I think I could have got all scores over 95%. Most of the issues were in Best Practices for the image used in the nav bar and hero-image.

I also noticed that running more than one lighthouse test on each page delivered a different set of results, so was unsure if any extra work on these pages, would have a major inpact on my scores.
 
### Desktop
* [index.html]()
   * [404.html]()

[Back to content](#table-of-contents)
## Manual Testing  

The layout of the website is as follows: -
![](docs/ms2-website-layout.pdf)

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

**Each page also contained an 'accessability' button in the footer**
* Expectation: - The 'accessibility' button should enable a user to change the font size on the page they are viewing
* Test: - Click the accessibility icon
* Result: - Brings up a menu to change the settings of the website
* Verdict: - Working as intended

**Each page also contains the following links within the navigaiton bar**
1. Contact Us
   * Expectation: - A user clicks the 'contact us' link and is directed to the 'Contact Us' content
   * Test: - Click the link and be directed to the 'Contact Us' content
   * Result: - I clicked this button on every page and was directed to the correct content
   * Verdict: - Working as intended

[Back to content](#table-of-contents)

### projects

This has six 'call-out' buttons: -

1. All of the six 'call-out buttons perform the same function. They close/hide the carousel/slideshow and refressh the called javascript.
   * Expectation: - A user clicks the 'close' button and the extra informaiton (slideshow/carousel and extra paragraph is hidden).
   * Test: - Clicked this button
   * Result: - Closed the extra content and refreshed the page.
   * Verdict: - Working as intended

It was my intention to use Event Listenerers for each project that would then load the carousel/slideshow and extra information. Sadly, the projects html content is also using an Event Listener so the extra javascript didn't seem to want to work as an additional listener. To solve this I added an 'onclick="myFunc();"' to each image and to the end of the slideshow/carousel information. 

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
   * Result: - I accessed the google account - 
        username: -smartassociates4@gmail.com 
        password - SmartAss32 
    and saw messages I had typed.
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
        username: -smartassociates4@gmail.com 
        password - SmartAss32 
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



[Back to content](#table-of-contents)