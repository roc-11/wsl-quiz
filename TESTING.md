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
    - [User Story 1](#user-story-1)
    - [User Story 2](#user-story-2)
  - [Manual Testing](#manual-testing)
    - [Common Elements Testing](#common-elements-testing)
    - [Home Page](#home-page)
    - [Leaderboard Page](#leaderboard-page)
    - [Quiz Page](#quiz-page)
    - [End Page](#end-page)
    - [Error Pages - 404 and 500 Error Pages](#error-pages---404-and-500-error-pages)
  - [Validator Testing](#validator-testing)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [Javascript Validation](#javascript-validation)
  - [Performance](#performance)
  - [Accessibility](#accessibility)

***

## Browser Compatibility

The website has been tested on a range of browers: Google Chrome, Safari & Microsoft Edge. The results were satisfactory.

## User Testing

The entired project was manually tested by the developer to ensure all it appears correctly on a range of devices/screen size, and to ensure that all links work as expected.

The project was manually tested and reviewed by my mentor Koko during one mentor sessions. Her opinion was greatly appreciated and changes were made to the site after the session.

The project was also user tested by a some class colleagues on the [Slack](https://slack.com/intl/en-ie/) Code Institute community, and some of my family members. Their helpful advice and suggestions led to a few small UX changes in order to create a better experience.

## Testing User Stories

### User Story 1

User Story 1: User new to the women's football environment and looking to build knowledge and test what I already know about the sport. I want to play a WSL Quiz to learn more about the WSL and enjoy the quiz experience.
* The homepage has clear navigation. The user can click on the PLAY button to begin playing the quiz.
* The quiz will provide the user with visual feedback on correct answer/incorrect answer and their score.
* Upon completion, the user is encouraged to PLAY AGAIN and improve their score, thus learning more about the Women's Super League.

### User Story 2

User Story 2: User who is a fan of the WSL or women's football in general. I want to test my knowledge but I also want to challenge myself by achieving a high score and earning a place on the leaderboard.
* The homepage has clear navigation. The user can click on the PLAY button to begin playing the quiz.
* The quiz will provide the user with visual feedback on correct answer/incorrect answer. The user is awarded 10 points for each correct answer and can clearly see their score.
* Upon completion, the user can add their score to the leaderboard.
* Upon completion, the user is encouraged to PLAY AGAIN and improve their score.

[Back to top ⇧](#wsl-quiz---testing)

## Manual Testing

### Common Elements Testing

Manual testing was conducted on the following elements that appear on every page:

- Clicking on the Navigation Bar's links will bring the user to the specified page.

     ![Navigation Bar page links](assets/readme-files/manual-testing-navigation-bar.gif)

- When the page is resized, and scaled down to a mobile device sized screen, the nav bar becomes a buger menu.

     ![Burger Menu Functionality](assets/readme-files/manual-testing-burger-menu.gif)

### Home Page

Manual testing was conducted on the following elements of the [Home Page](index.html):

- Clicking on the RULES button will open a modal. The background will display a gradient to show that it is disabled. The user can close the modal by clicking on the CLOSE button.

    ![Rules Modal Functionality](assets/readme-files/manual-testing-rules-modal.gif)

- Clicking on the PLAY button will take the user to the quiz page. A referee whistle sound will play, so the link is delayed for 80ms.

    ![Play Button Functionality](assets/readme-files/manual-testing-play.gif)

- The responsiveness of the Home page

    ![Responsiveness - Home Page](assets/readme-files/manual-testing-homepage-responsive.gif)

### Leaderboard Page

Manual testing was conducted on the following elements of the [Leaderboard Page](leaderboard.html):

- Hovering over the leaderboard rows, the user will see a transform of the row to indicate hovering.
  
    ![Leaderboard Functionality](assets/readme-files/manual-testing-leaderboard.gif)

- The responsiveness of the Leaderboard page

    ![Responsiveness - Leaderboard Page](assets/readme-files/manual-testing-leaderboard-responsive.gif)

### Quiz Page

Manual testing was conducted on the following elements of the [Quiz Page](game.html):

- The user can click on one of 4 answer buttons. Clicking a right answer will result in the answer turning green. Clicking an incorrect answer will result in the answer turning red. The user is shown their SCORE and PROGRESS in the HUD above the quiz questions & answers.

    ![Quiz Page Functionality](assets/readme-files/manual-testing-quiz.gif)

- The responsiveness of the Quiz Us page

    ![Responsiveness - Quiz Page](assets/readme-files/manual-testing-quiz-responsive.gif)

### End Page

Manual testing was conducted on the following elements of the [End Page](end.html):

- The user can enter their username to save their score in the input area provided. Clicking save will save the score and take the user back to the homepage. The save button is disabled until some text is entered in the username textbox.

    ![Form fields - End Page](assets/readme-files/manual-testing-submit-score-form.gif)

- The responsiveness of the End page

    ![Responsiveness - End Page](assets/readme-files/manual-testing-end-responsive.gif)

### Error Pages - 404 and 500 Error Pages

- The 404 and 500 error pages have a home button. Clicking on the "home" button will bring the user to the home page [index.html](index.html).
  
    ![Home Button - Error Pages](assets/readme-files/manual-testing-errorpages-home-button.gif)

[Back to top ⇧](#wsl-quiz---testing)

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

### Javascript Validation

- Script.js - no errors were found when script.js was run through jshint validator.

![Screenshot of jshint validator - script](assets/readme-files/css-val-script-js.png)

- Game.js - there were three warnings when the game.js file was run through jshint validator. However, the warnings do not impact the quiz logic and was tested extensively to ensure it does not have an impact on the site.

![Screenshot of jshint validator - game](assets/readme-files/css-val-game-js.png)

- End.js - there was one warning when the end.js file was run through jshint validator. However, PlayAgainSound was called in the html onclick, so it was in fact used.

![Screenshot of jshint validator - end](assets/readme-files/css-val-end-js.png)

- Leaderboard.js - no errors were found when leaderboard.js was run through jshint validator.

![Screenshot of jshint validator - leaderboard](assets/readme-files/css-val-leaderboard-js.png)

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
