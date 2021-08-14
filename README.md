![image](assets/images/index/sa-logo.jpg)

# Smart Associates
> ## Consulting Civil & Structural Engineers

[View the website here](https://mgreenberry.github.io/MS2-Smart-Associates/)

## About

This is a MS2 Interactive Frontend Development Milstone Project website created as part of a Full Stack Software Development in Code Institute by [Michael Greenberry](https://www.linkedin.com/in/michael-greenberry-637299108/).

I created this interactive website to provide a professional and simple website for a Civil and Structural Engineering company I work for. The client had quite exacting demands on the style and colouring of the website.

The website targets customers and clients that would require the use of a civil and/or structural engineering services provided by the company I work for. 

The goal of this website is to provide information about Smart Associates, and the services it provides. It also provides interactive pages showing some of the projects the company has been involved in and a contact us page. 

This website must be professional for the target audience and contain the information needed to complete the goals of the business owner and site visitors. It must also stand out and be memorable for future visits and for recommendations to other potential users.

![Mockup](readme&testing-images/responsive-website.png)

## Table of contents
1. [UX - User Experience](#ux-user-experience)
   * [Project Goals](#project-goals)
   * [User Stories](#user-stories)
   * [Design Choices](#design-choices)
     1. [Typography](#typography)
     2. [Colours](#colours)
     3. [Imagery](#imagery)
     4. [Icons](#icons)
     5. [Layout](#layout)
   * [Wireframes](#wireframes)
2. [Features](#features)
   * [Existing Features](#existing-features)
     1. [All Pages](#all-pages)
     2. [index.html](#index)
     3. [services.html](#services)
     4. [projects.html](#projects)
     5. [contact-us.html](#contact-us)
     6. [404.html](#404)
   * [Features Left To Implement](#features-left-to-implement)
3. [Technologies Used](#technologies-used)
   * [Languages](#languages)
   * [Framework Library](#framework-library)
   * [Tools](#tools)
   * [Testing Tools](#testing-tools)
4. [Testing](TESTING.md)
5. [Deployment](#deployment)
   * [Project creation](#project-creation)
   * [Deployment of existing site](#deployment-of-existing-site)
   * [Forking](#forking)
   * [Cloning and Implementing Locally](#cloning-and-implementing-locally)
6. [Credits](#credits)
   * [Content](#content)
   * [Media](#media)
   * [Icons](#icons)
   * [Code](#code)
     1. [HTML](#html)
     2. [CSS](#css)
     3. [JavaScript](*javascript)
7. [Acknowledgements](#acknowledgements)
8. [Author Information](#author-information)

## UX (User Experience)

For this website and business I was provided the following brief from one of the directors: - 

"Hi Michael,

We are just looking for a simple, clean, website. One of our competitors has a website which is the kind of thing we are looking for.

https://njpuk.com/

It needs to load fast and be OK for all browsers. Not looking for any 'dynamic' links, with things bobbing about on the screen - like this from one of our other competitors, which I think is too busy and distracting.  https://quadconsult.co.uk/

White background, crisp and clean is best.

Project photos with links to the text for the project rather than lots of boring content."

Therefore, this website was created with these instructions in mind.

### Project Goals
* To provide a simple, clean website for the user
* To introduce Smart Associates, a Civil and Structural Engineering Services
* To provide an 'About Us' page to explain the history of the company
* To provide a 'Services' page to display some of the services the company provides
* To provide a 'Projects' page to show off some of the projects the company has helped build.
* To provide a contact form which when filled in would send an email to the company.

### User Stories

* As a user visiting the site for the first time:
  1. I want to be able to use the website on any device I own or use
  2. I want to able to learn and easily understand what the website is about
  3. I want to easily understand about the the company
  4. I want to easily understand what the company does and the services it offers.
  5. I want to click on navigation links to be taken to the correct page/section and to be able to return to the home page or another page without using the brower forward/backward buttons
  6. I want these navigation links to include user friendly menus which are easy to uderstand and use
  7. I want the content to be easy to read and have a predictable layout so that each page can be navigated easily
  8. I want to see some of the projects that the company have been involved with
  9. I want to access contact information, such as address, phone numbers and location
  10. I want to send an email to the company using a form provided.

* Smart Associates will do this by:-
  1. Design a responisive website focussed for mobile devices and responsive to larger screens.
  2. Design a home page (index.html) with a interactive changing picture and static text and strapline
  3. Design 2 distinct sections which highlight the services provided by the company
  4. Design 1 section on the home page about the company Smart Associates as an 'about us'
  5. Design and impliment a navigation bar which contains links to different pages and sections in the website 
  6. Design and label the navigation bar with clear and understandable text to direct users to the correct page  
  7. Design the website to have good readability throughout
  8. Design a projects page that shows a sample of projects the company have been involved in with extra information 
  9. Design a contact us page with contact details
  10. Design a contact form which can be submitted (or cleared if errors made) which will then send an email to the company

TO BE IMPLEMENTED!
* As a user returning to the site:
  1. I want to be able to see additional projects when returning to the website
  2. I want to be able to easily find content I am interested in

* Smart Associates will do this by:
  1. Design extra content that will display when more project infromation is available from the directors
  2. Design an easy to use and friendly navigation bar and clickable buttons on each page

[Back to content](#table-of-contents)
### Design Choices

#### Typography

For fonts, I used [Google Fonts](https://fonts.google.com) for my website. 

I have chosen the font-family: ['Georama'](https://fonts.google.com/specimen/Georama), sans-serif; for the Headings and Menu sections of the website as it is easy to read and has a nice cursive font which matches the style of the website. I also felt this fitted in well with the design of the website.

#### Colours

For this website I chose a colour pallette that matched similar websites that are professional and clean. The background colour is black, the Nav bar and button text is Navy Blue and menus, some text and buttons are based on the blue and red logo.

The colours I picked are as follows: -
![Coolors Palette](readme&testing-images/website-colours.png)

From: [Coolors Palette](https://coolors.co/031a6b-f71735-6b7fd7)

#### Imagery

All images and photographs were selected by the Directors of Smart Associates from several folders of more photographs which were sourced from Alan Vile, Technical Engineer, Smart Associates.

* Favicom:
  * Smart Associates: [Hero Image](assets/images/index/sa-logo.jpg) - This is taken from Letterhead logo.

* index.html
  1. Cover Images: [The main Image](assets/images/index/coverimage1.jpg) - This image changes via javascript with the following images:-
    * [2nd Image](assets/images/index/coverimage2.jpg)
    * [3rd Image](assets/images/index/coverimage3.jpg)
    * [4th Image](assets/images/index/coverimage4.jpg)
    * [5th Image](assets/images/index/coverimage5.jpg)
    * [6th Image](assets/images/index/coverimage6.jpg)

* servicess.js
  1. No images = the hero image is changed as above via javascript

* projects.js
  * [Archbishop Build](assets/images/projects/archbishop/ab07.jpg) containing 10 images of this project: -
    * [Image 1](assets/images/projects/archbishop/ab01.jpg)
    * [Image 2](assets/images/projects/archbishop/ab02.jpg)
    * [Image 3](assets/images/projects/archbishop/ab03.jpg)
    * [Image 4](assets/images/projects/archbishop/ab04.jpg)
    * [Image 5](assets/images/projects/archbishop/ab05.jpg)
    * [Image 6](assets/images/projects/archbishop/ab06.jpg)
    * [Image 7](assets/images/projects/archbishop/ab07.jpg)
    * [Image 8](assets/images/projects/archbishop/ab08.jpg)
    * [Image 9](assets/images/projects/archbishop/ab09.jpg)
    * [Image 10](assets/images/projects/archbishop/ab10.jpg)
  
  * [Durham Road Build](assets/images/projects/durham/dh05.jpg) containing 7 images of this project: -
    * [Image 1](assets/images/projects/durham/dh02.jpg)
    * [Image 2](assets/images/projects/durham/dh03.jpg)
    * [Image 3](assets/images/projects/durham/dh04.jpg)
    * [Image 4](assets/images/projects/durham/dh05.jpg)
    * [Image 5](assets/images/projects/durham/dh06.jpg)
    * [Image 6](assets/images/projects/durham/dh07.jpg)
    * [Image 7](assets/images/projects/durham/dh08.jpg)

  * [Harrison Road Build](assets/images/projects/harrison/ha03.jpg) containing 3 images of this project: -
    * [Image 1](assets/images/projects/harrison/ha01.jpg)
    * [Image 2](assets/images/projects/harrison/ha03.jpg)
    * [Image 3](assets/images/projects/harrison/ha04.jpg)

  * [Lanelay Road Build](assets/images/projects/lanelay/la05.jpg) containing 5 images of this project: -
    * [Image 1](assets/images/projects/lanelay/la01.jpg)
    * [Image 2](assets/images/projects/lanelay/la02.jpg)
    * [Image 3](assets/images/projects/lanelay/la03.jpg)
    * [Image 4](assets/images/projects/lanelay/la04.jpg)
    * [Image 5](assets/images/projects/lanelay/la05.jpg)
  
  * [Magistrates Build](assets/images/projects/magistrates/em02.jpg) containing 3 images of this project: -
    * [Image 1](assets/images/projects/magistrates/em01.jpg)
    * [Image 2](assets/images/projects/magistrates/em02.jpg)
    * [Image 3](assets/images/projects/magistrates/em03.jpg)

  * [Merthyr Road Build](assets/images/projects/merthyr/me04.jpg) containing 4 images of this project: -
    * [Image 1](assets/images/projects/merthyr/me02.jpg)
    * [Image 2](assets/images/projects/merthyr/me03.jpg)
    * [Image 3](assets/images/projects/merthyr/me04.jpg)
    * [Image 4](assets/images/projects/merthyr/me05.jpg)

* contactUs.js

  1. No images = the hero image is changed as above via javascript

### Icons

Icons were not used on this project

### Layout

This website is designed with access from the home page to all other pages from the navigation bar. The error 404.html page also includes links to other pages, i.e. index.html.

However, the 404.html is not accessed from the navigation bar or from any of the pages of the website. The 404.html page only displays when a user enters or searches for a page that doens't exist. The 404.html page allows the user to navigate to the main website.

![blueprint](readme&testing-images/ms2-website-layout.pdf) 

This blueprint was then used to design the navigation and call-out buttons featured in the website.

[Back to content](#table-of-contents)
## Wireframes
I used Balsamiq to create my wireframes. I chose to do a mobile version first with the pages I wanted and then create a desktop version after. I did this as this was going to be the way I designed my website, mobile first.

As I wanted to include this on all formats and devices I created my wireframes again for all pages and added the following to show mobile, tablet and desktop:

**Mobile**
* [Home Page](docs/mobile-wireframes/home-page.png)[About US](docs/mobile-wireframes/about-us.png)
* [Servies](docs/mobile-wireframes/services.png)
* [Projects](docs/mobile-wireframes/projects.png)
* [Contact-Us](docs/mobile-wireframes/contact-us.png)

**Tablet**
* [Home Page](docs/tablet-wireframes/home-page.png)[About US](docs/tablet-wireframes/about-us.png)
* [Servies](docs/tablet-wireframes/services.png)
* [Projects](docs/tablet-wireframes/projects.png)
* [Contact-Us](docs/tablet-wireframes/contact-us.png)

**Desktop**
* [Home Page](docs/desktop-wireframes/home-page.png)[About US](docs/desktop-wireframes/about-us.png)
* [Servies](docs/desktop-wireframes/services.png)
* [Projects](docs/desktop-wireframes/projects.png)
* [Contact-Us](docs/desktop-wireframes/contact-us.png)

I then added a '404.html. page for when the user enters an incorrect page address in the browser. I didn't create a wireframe for this page.

[Back to content](#table-of-contents)
## Features

### Existing Features

#### All pages

Every page contains the following features at the top of the website as standard: -
* Text as a header reading "Smart Associates" which also acts as a clickable event to take to the home page
* A responsive navigation bar, which reduces into a 'hamburger' navigation bar on mobiles. Allows all users to click on the page they want and access said page easily. Each navigation bar has the following links: -
  1. services - allows users to access the services by clicking the services menu option
  2. projects - allows users to access the projects page offered by the business by clicking the projects menu option
  3. contact-us.html - allows users to make contact with the business by filling in a form and pressing submit. This will send an email to the company with the users message (access is smartassociates4@gmail.com. Password is SmartAss32). Users can also clear the form if they make errors and re-submit correct details if required.
* A hero image, or main image of a selection of project photos.
* A strapline, or header, which gives the title of the page being visited

Every page contains the following features in the footer: -
* Copyright for Smart Associates
* Copyright for Michael Greenberry (creator of this website)

#### Index
* This page contains 3 sections as follows: -
  1. A strapline to introduce the business
  2. A photograph of the project
  3. An 'About Us' section

#### Services
* This page contains 1 section as follows: -
  1. This provides information about the types of services the company provides

#### Projects
* This page contains 3 sections as follows: -
  1. This page provides a selection of 6 of the projects that the company has been involved in
  2. Each section also shows a carousel/slideshow of each project with extra information
  3. An interactive map is also included

#### contact-us
* This page contains 1 section as follows: -
  1. A contact form with 'First Name', 'Last Name', 'Email Address', 'confirm Email Address' and 'Message' fields. This allows the user to input their information and find out more details, ask questions about the business.
* There are 2 call-out buttons under this form. The first button **Reset** resets the form in case of user input error. The second button **Submit** allows the user to send their form to the business. On doing this there email will be sent to the business. Users will need to provide information in all fields, with a valid @ email address in order to be able to submit forms. This allows the business to only recieve valid customer comments.

#### 404
* This page is not linked to any other page in the website
* This page is only accessed if a user types an incorrect web address in the browser navigation bar
* This page contains the following section: -
  * A message notifying the user of an error. This then allows the user to recognise that the web address doens't exist.
  * There is 1 call-out button in this section. This allows the user to return to the home page of the main website - [Smart Associates](https://mgreenberry.github.io/ms2-smart-associates/)

### Features Left to Implement
* To enable staff to record time spent on active jobs/projects
* To have more projects and better pictures on existing projects
* To edit text content

[Back to content](#table-of-contents)
## Technologies Used
### Languages
* [HTML](https://en.wikipedia.org/wiki/HTML5) Used as the main markup language of the website content
* [CSS](https://en.wikipedia.org/wiki/CSS) Used to style the content of the website
* [JavaScript](https://www.javascript.com/) Used with Bootstrap for the Navigation menu at the top and bottom of the website and for all interactive parts of the website
### Framework Library
* [Bootstrap](https://getbootstrap.com/) Used for a mobile first responsive website, display properties such as grid layout, preset css such as for containers, forms, etc
* [J Query](https://jquery.com/) Used for temperal literals in some javascript code.
### Tools
* [Wireframes with Balsamiq](https://balsamiq.com/) To create mockups of the website to aid creation
* [Github](https://github.com/) To store and host source code
* [Gitpod](https://gitpod.io/) To write the code 
* [Google Fonts](https://fonts.google.com) for the fonts used in the website
* [Coolors](https://coolors.co/) to source the main colours for the website
* [Favicons](https://www.favicon.cc) to create a favicon for the tab and website title
### Testing Tools
* [hmtl validation](https://validator.w3.org) to check the html code had no errors
* [css validation](https://jigsaw.w3.org/css-validator/) to check the css code had no errors
* [JAVASCRIPT](https://jshint.com/) to check for warnings/errors
* [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) an online validation tool that helps to improve performance and quality of the webpage with helpful tips to improve as each html page is scored.

[Back to content](#table-of-contents)
## Testing
Testing information can be found [here](TESTING.md)

[Back to content](#table-of-contents)
## Deployment

### Project creation
* To website project was created by going to [Github](https://github.com/), a code hosting platform, using the following steps: -
  1. Create an account using an email address and password or a google account
  2. Log in to account and create a new repository![](/assets/images/readme-images/creating-new-repository.png)
  3. Give this new repository a creative name. Then click the green Gitpod button which will take you to [Gitpod](https://gitpod.io/workspaces). Gitpod is an open source platform for code development ![](assets/images/readme-images/creating-respository-step-one.png) ![](assets/images/readme-images/ms2-smart-associates-gitpod.png)
  4. Then open this platform and started coding
  5. To save the work I had to do the following: - Click 'File', click 'auto save'
  6. To save the work to github I needed to do the following: -
    * git add (either the name of the file, i.e. index.html or '.' which adds everything that has been worked on that day)
    * git commit (either the name of the file, i.e. index.html or '-m' and then add a comment in parenthesis "" and enter)
    * It is recommended to commit daily. To complete the necessary steps to upload to github I needed to use the command - git push. This then 'pushed' all the saved work back to Github
### Deployment of existing site
* The following steps were taken to deploy this site and make it 'live': - 
  1. On Github.com go to the repository, go the the project main page ![](https://github.com/mgreenberry/ms2-smart-associates)
  2. Click on 'Settings' and then scroll down to the section 'GitHub Pages' ![](assets/images/readme-images/pages-in-settings.png)
  3. Click on the 'Pages' tab and then click 'Source' and choose 'Master' under the 'Branch' tab, then 'Root' and click save ![]()
  4. The link is now available for you to publish above this. ![](assets/images/readme-images/github-website-link.png)
### Forking  
* If you wish to use this repository as a starting point for your own design, or to contribute to this project, you can fork it. Follow the steps below.
  1. Navigate to the repository in [github](https://github.com/). 
  2. Choose the correct repository. In this case it is [Smart Associates](https://github.com/mgreenberry/ms2-smart-associates)
  2. Click 'Fork' in the top-right corner. ![](assets/images/readme-images/github-fork-button.png)
  4. This will then create a copy (make sure you have already created your own github account) in your repository
  5. Now follow the steps outlined in [project creation](#project-creation) 
  6. Click 'Pull Requests' and seclect 'New Pull Request' button
### Cloning and Implementing Locally
* To clone the website please use the following steps: -
  1. Navigate to the repository in [github](https://github.com/). 
  2. Choose the correct repository. In this case it is [Smart Associates](https://github.com/mgreenberry/ms2-smart-associates)
  3. Click the 'Code' button
  4. You will now be given options to make a clone of the website, to download it or to open with GitHub Desktop. You can choose to clone the 'HTTPS', the 'SSH' or 'GitHub CLI' ![](assets/images/readme-images/github-clone.png)
  5. Open Git Bash or similar
  6. Navigate to your desired directory for the cloned project.
  7. Type 'git clone' followed by the URL copied in step 3.
  8. Press 'Enter' to create your local clone.

[Back to content](#table-of-contents)
## Credits
All coding content was created for Smart Associates by Michael Greenberry, the website creator/owner.
### Content
The text and photograph content was provided by the Director - Jeff Venus
### Media
* index.html
  * All content from Smart Associates
* services.js
  * All content from Smart Associates
* projects.js
  * All content from Smart Associates
* contact-us.js
  * All content from Smart Associates
  
### Icons
All icons used were sourced form [Font Awesome](https://fontawesome.com/)
### Code
This [Bootstrap - Nav Bar](https://getbootstrap.com/docs/5.0/components/navbar/) page was used to produce the type of navigation menu I wanted. This was then adapted for my use.

#### HTML
All HTML code was written by the creator Michael Greenberry

#### CSS
All CSS code was written by the creator Michael Greenberry

#### JavaScript
The majority of the JavaScript code was adapted from multiple websites and sources. All is therefore credited within the JavaScript code.

[Back to content](#table-of-contents)
## Acknowledgements
Many thanks to the following people for their help with this project: -

Scott Boning_lead for his great help and patience - without you I wouldn't have a submission, website, javascript or a desire to carry on with this course.

Tutors at Code Institute, especially Scott and Igor who tried to guide me on how to solve the issues I had even if I didn't understand the steps I needed to take.

My mentor Spencer Barriball who went through this project with me and provided feedback throughout

Code Institute Slack Students for their feedback and help with my questions

[Back to content](#table-of-contents)
## Author information
Michael Greenberry is the creator and owner of this website. This is a Interactive Frontend Development Milstone Project website created as part of a Full Stack Software Development in Code Institute by [Michael Greenberry](https://www.linkedin.com/in/michael-greenberry-637299108/).

[Back to content](#table-of-contents)