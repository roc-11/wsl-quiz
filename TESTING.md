# WSL Quiz - Testing

[Main README.md file](/README.md)

[View live project](https://roc-11.github.io/wsl-quiz/)

[View GitHub repository](https://github.com/roc-11/wsl-quiz)

***

## Table of contents

- [WSL Quiz - Testing](#wsl-quiz---testing)
  - [Table of contents](#table-of-contents)
  - [Browser Compatibility](#browser-compatibility)
  - [User Testing](#user-testing)
  - [Testing User Stories](#testing-user-stories)
    - [Current User](#current-user)
    - [New User](#new-user)
  - [Manual Testing](#manual-testing)
    - [Common Elements Testing](#common-elements-testing)
    - [Home Page](#home-page)
    - [About Us Page](#about-us-page)
    - [Our Services Page](#our-services-page)
    - [Contact Us Page](#contact-us-page)
    - [Error Pages - 404 and 500 Error Pages](#error-pages---404-and-500-error-pages)
  - [Validator Testing](#validator-testing)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
  - [Performance](#performance)
  - [Accessibility](#accessibility)

***

## Browser Compatibility

The website has been tested on a range of browers: Google Chrome, Safari & Microsoft Edge. The results were satisfactory.

## User Testing

The entired project was manually tested by the developer to ensure all it appears correctly on a range of devices/screen size, and to ensure that all links work as expected.

The project was manually tested and reviewed by my mentor Koko during three separate mentor sessions. Her expert opinion was greatly appreciated and small changes were made to the site after each session.

The project was also user tested by a some class colleagues on the [Slack](https://slack.com/intl/en-ie/) Code Institute community, and some of my family members. Their helpful advice and suggestions led to a few small UX changes in order to create a better experience.

## Testing User Stories

### Current User

1. As a current user, I want to be able to contact/book a physiotherapy session easily.
   - The Home Page has a "Book Now" button under the main hero image. Users can simply click this to take them to the contact us form and make a booking. If the site were real, an integrated booking system would also exist.
   - The user can click on the "Contact Us" link in the main navigation bar to take them to the contact us/booking form.
   - The user can find contact details in the form of an email address & phone number in the main footer. Both of these are clickable and perform actions.

2. As a current user, I want to easily navigate through the site and access the information I require.
   - The navigation bar is clearly defined and easily navigable for users to find and use.
   - The footer menu is easy to use with appropriate icons for easy identification.

3. As a current user, I want to easily navigate to content I have previously viewed within a small number of steps.
   - On all site pages there is a naviagtion bar with links to each required page.

### New User

1. As a new user, I want to easily navigate the entire site intuitively.
   - The navigation bar is clearly defined and easily navigable for users to find and use.
   - The footer menu is easy to use with appropriate icons for easy identification.
  
2. As a new user, I want to easily understand the main purpose of the site.

- The main purpose of the site is clear on the home page (hero image of physio, site slogan).
- The "how can we help you" section on the homepage clearly defines the services offered to clients.

3. As a new user, I want the information I seek to be easily accessible and relevant.

- The navigation bar is clearly defined and easily navigable for users to find and use.
- The footer menu is easy to use with appropriate icons for easy identification.
  
4. As a new user, I want attractive and relevant visuals and colour schemes that work with the content.
   - An attractive colour palette was created inpsired by the theme 'Close to Nature' on [Visme.com](https://visme.co/blog/website-color-schemes/).
   - Relavant images were found using [Pexels](https://www.pexels.com/ "Link to Pexels.com"), [Pixabay](https://pixabay.com/ "Link to Pixabay.com") and [Adobe Stock](https://stock.adobe.com "Link to Adobe Stock").
   - An attractive, professional logo image was created using [Looka.com](https://looka.com/onboarding "Link to Looka Home Page").

5. As a new user, I want to be able to contact/book a physiotherapy session easily.
   - The Home Page has a "Book Now" button under the main hero image. Users can simply click this to take them to the contact us form and make a booking. If the site were real, an integrated booking system would also exist.
   - The user can click on the "Contact Us" link in the main navigation bar to take them to the contact us/booking form.
   - The user can find contact details in the form of an email address & phone number in the main footer. Both of these are clickable and perform actions.

[Back to top ⇧](#wsl-quiz---testing)

## Manual Testing

### Common Elements Testing

Manual testing was conducted on the following elements that appear on every page:

- Clicking on the Navigation Bar's links will bring the user to the specified page.

     ![Navigation Bar page links](assets/readme-files/manual-testing-navigation-bar.gif)

- Clicking and dragging on the map will move the area shown on the map. Clicking the plus and minus buttons changes the zoom of the map.

     ![iFrame Google Maps Functionality](assets/readme-files/manual-testing-map.gif)

- Clicking on the Social Media links will open a new tab

     Facebook:

    ![Facebook Social Media link](assets/readme-files/manual-testing-socials-facebook.gif)

     Twitter:

    ![Twitter Social Media link](assets/readme-files/manual-testing-socials-twitter.gif)

     Instagram:

    ![Instagram Social Media link](assets/readme-files/manual-testing-socials-instagram.gif)

- Clicking on the telephone number in the footer will allow the user to directly call the company on mobile devices, and give the user the option to open Skype or other such applications (if they are installed)

    ![Telephone link Functionality](assets/readme-files/manual-testing-telephone.gif)

- Clicking on the email address in the footer will open the default email application on the user's device
  
    ![Email link Functionality](assets/readme-files/manual-testing-email.gif)

### Home Page

Manual testing was conducted on the following elements of the [Home Page](index.html):

- Clicking the "book now" button will bring you to the Contact Us page.

    ![Book Now Button - Home Page](assets/readme-files/manual-testing-booknow-button.gif)

- Clicking the "view all services" button will bring you to the Our Services page.

    ![View All Services Button - Home Page](assets/readme-files/manual-testing-allservices-button.gif)

- The responsiveness of the Home page

    ![Responsiveness - Home Page](assets/readme-files/manual-testing-homepage-responsive.gif)

### About Us Page

Manual testing was conducted on the following elements of the [About Us Page](about.html):

- The responsiveness of the About Us page

    ![Responsiveness - About Us Page](assets/readme-files/manual-testing-aboutus-responsive.gif)

### Our Services Page

Manual testing was conducted on the following elements of the [Our Services Page](services.html):

- Clicking on the YouTube video controls will allow the user to play and pause the video, among other controls.
  
    ![YouTube Video - Our Services Page](assets/readme-files/manual-testing-services-youtube.gif)

- The responsiveness of the Our Services page

    ![Responsiveness - Our Services Page](assets/readme-files/manual-testing-services-responsive.gif)

### Contact Us Page

Manual testing was conducted on the following elements of the [Contact Us Page](contact.html):

- When filling out the contact form, the user must complete all fields before submitting. Hovering over the submit button will trigger `hover` effect, highlighting the button for the user.

    ![Form required fields - Contact Us Page](assets/readme-files/manual-testing-contactus-form.gif)

- The responsiveness of the Contact Us page

    ![Responsiveness - Contact Us Page](assets/readme-files/manual-testing-contact-responsive.gif)

### Error Pages - 404 and 500 Error Pages

- The 404 and 500 error pages have a home button. Clicking on the "home" button will bring the user to the home page [index.html](index.html).
  
    ![Home Button - Error Pages](assets/readme-files/manual-testing-errorpages-home-button.gif)
  
- The responsiveness of the error pages.

[Back to top ⇧](#max-rehab-physiotherapy---testing)

## Validator Testing

### HTML Validation

All pages of the website were tested using the [W3C official HTML validation tool](https://validator.w3.org/). No errors were shown when the site was passed through this tool.

A previous pass through this tool showed multiple errors related to 'trailing slash on void elements'. An autoformat option has to be changed on the CodeAnywhere IDE in order to rectify these.

![Screenshot of W3C HTML Validation - Home Page](assets/readme-files/html-validation.png)
![Screenshot of W3C HTML Validation - Game Page](assets/readme-files/html-validation-game.png)
![Screenshot of W3C HTML Validation - End Page](assets/readme-files/html-validation-end.png)
![Screenshot of W3C HTML Validation - Leaderboard Page](assets/readme-files/html-validation-leaderboard.png)

### CSS Validation

The Cascading Stylesheet code was tested using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). No errors were found when the CSS was passed through this tool.
![Screenshot of W3C CSS Validation](assets/readme-files/css-validation.png)

[Back to top ⇧](#wsl-quiz---testing)

## Performance

[Lighthouse](https://www.webpagetest.org/lighthouse) Google Webdev tools were used to test the performance of the website.
![Screenshot of Lighthouse Peformance Testing](assets/readme-files/wsl-quiz-performance-testing.png)

[Back to top ⇧](#wsl-quiz---testing)

## Accessibility

[Wave](https://wave.webaim.org/) Web Accessibility Evaluation tool was used to check accessibility. It detected a minor alert where I have 2 home links on the nav bar (Home and Logo). The contrast check passed, as did all other accessibility checks.

Semantic markup was used when developing the site to ensure the site is readable for the visually impaired/those using screen readers and other forms of assistive technology. Alt text descriptions are included for all images and aria-labels for all links.

![Screenshot of Wave Accessibility Testing](assets/readme-files/wave-accessibility-testing.png)

[Back to top ⇧](#wsl-quiz---testing)
