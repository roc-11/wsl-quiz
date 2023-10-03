# Women's Super League (WSL) Quiz

## Developer: Róisín O'Connell 

![WSL Quiz Mockup Images](assets/readme-files/wsl-quiz-mockup.png)
[View the live project here](https://roc-11.github.io/wsl-quiz/)

## Table of Contents

- [Women's Super League (WSL) Quiz](#womens-super-league-wsl-quiz)
  - [Developer: Róisín O'Connell](#developer-róisín-oconnell)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Aim](#aim)
    - [Application Goals](#application-goals)
    - [User Goals](#user-goals)
  - [UX](#ux)
    - [User-Stories](#user-stories)
    - [Development-Planes](#development-planes)
      - [Strategy](#strategy)
      - [Scope](#scope)
      - [Structure](#structure)
      - [Skeleton](#skeleton)
    - [Design](#design)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
      - [Imagery](#imagery)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Main Languages Used](#main-languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
  - [Testing](#testing)
  - [Responsiveness](#responsiveness)
  - [Bugs/Known Issues](#bugsknown-issues)
  - [Deployment](#deployment)
    - [Deploying on GitHub Pages](#deploying-on-github-pages)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
  - [Acknowledgements](#acknowledgements)

***

## Introduction

"WSL Quiz" is an interactive quiz that users can take to test their knowledge of the Women's Super League - England's top tier professional women's football league.

The quiz dynamically presents the user with questions, provides visual and auditory feedback for a correct/incorrect answer, tracks what question users are currently on and also tracks the user's score. The user can earn a maximum of 100 points. 

The purpose of the quiz is to test the knowledge of WSL fans. With the women's game growing at a rapid pace after the World Cup 2023, this quiz also serves to increase knowledge for anyone who would like to learn more about the WSL. 

This website was made for the second of five Milestone projects required to complete the Diploma in Full Stack Software Development (e-Commerce Applications) program at [Code Institute](https://codeinstitute.net/ie/ "Link to Code Institute homepage").

The main requirements of this project are to build an interactive, responsive application using Javascript.

## Aim

The aim of the WSL Quiz is mainly to test user’s knowledge of the Women's Super League, in an interactive and fun way. The quiz also serves to let user’s learn more about the WSL by taking part in the quiz. 

### Application Goals

* To provide user’s with an interactive quiz, testing their knowledge of the Women's Super League.
* To provide feedback to user’s who take part in the quiz.
* To challenge user’s to get a high score, so that they can get added to the leaderboard.
* To increase a user’s knowledge about the WSL, if they are interested in learning more. 

### User Goals

- Navigate easily through the website
- Take part in the quiz; selecting answers and getting feedback
- Add high score to the leaderboard (if it qualifies)
- Control whether sound is on/off
- Enjoy taking part in an interactive quiz game

[Back to top ⇧](#womens-super-league-wsl-quiz)

## UX

### User-Stories

User Story 1: User new to the women's football environment and looking to build knowledge and test what I already know about the sport. I want to play a WSL Quiz to learn more about the WSL and enjoy the quiz experience.

User Story 2: User who is a fan of the WSL or women's football in general. I want to test my knowledge but I also want to challenge myself by achieving a high score and earning a place on the leaderboard.

### Development-Planes

To create a comprehensive application that fulfills the above user stories and identifies the functionality of the site.

#### Strategy

Strategy incorporates user needs as well as service objectives. This website will focus on the following target audience:
- Roles:
  - User Story 1
  - User Story 2
- Demographic:
  - All ages
  - Fans of the Women's Super League (mainly residing in England and Ireland)
  - New to women's football (probably off the back of the success of the Women's World Cup 2023)

The application needs to enable the user to:

- Navigate easily through the website
- Take part in the quiz; selecting answers and getting feedback
- Add high score to the leaderboard (if it qualifies)
- Control whether sound is on/off
- Enjoy taking part in an interactive quiz game

#### Scope

The scope plane is about determining the requirements based on the goals established on the strategy plane.
* Content Requirements - the user will need to find the information defined above.
* Functionality Requirements - the user will need to be able to easily navigate the site to take part in the quiz and view the leaderboard.

#### Structure

<details>
<summary>Strategy Plane</summary>

![Strategy Table](assets/readme-files/sitemap.png)

</details>

#### Skeleton

The appearance of each page of the application was planned by making wireframes. It was essential to provide a positive user experience for the user. 

Initially, wireframes plans were hand-drawn on a notepad. More detailed wireframes were then created using a desktop version of [Balsamiq](https://balsamiq.com/ "Link to Balsamiq homepage"). 

Some layout modifications were made during site development, however, most planned features are included in the final WSL Quiz application. They can be found below:

<details>
<summary>Balsamiq Wireframe - Desktop</summary>

![Site Wireframes - Desktop](assets/readme-files/wireframe-all-pages.png)

</details>

<details>

<summary>Balsamiq Wireframe - Mobile</summary>

![Site Wireframes - Mobile](assets/readme-files/wireframe-all-page-mobile.png)

</details>

### Design

#### Colour Scheme

The colourscheme was inspired by the theme 'Burnt Sienna Orange + Bedazzled Blue Color Palette' on [venngage.com](https://venngage.com/blog/blue-color-palettes/). The shades of blue mixed with burnt orange provide a high contrast and complementary colours. I thought the orange/blue contrast gave the quiz the pop I wanted and found it to be visually appealing for the user.

As the wesbite development progressed, I decided to combine the blue/orange shades with simple white font and a black navigation bar. 

All text is coloured either charcoal (#3a3a3a) or white, depending on which background colour it needs to contrast with (essential for accessibility).

Details of the full colour palette can be found below:
<details>
<summary>Colour Palette</summary>

![Colour Palette](assets/readme-files/colour-palette.png)

</details>

#### Typography

The pairing chosen for the site are:

- [Palanquin Dark](https://fonts.google.com/specimen/Palanquin+Dark)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- A backup of 'Lato' and sans-serif are applied in case of failure.
- [Rubik](https://fonts.google.com/specimen/Rubik) is used for the leaderboard table.

Palanquin Dark is used for title headings, while Roboto is used for almost all other text (aside from Rubik on the leaderboard). Both were imported from[Google Fonts](https://fonts.google.com/).

#### Imagery

The background image was sourced from [Pexels](https://www.pexels.com/). The image is called 'Sky Sunset Field Sunrise' by [Markus Spiske](https://www.pexels.com/@markusspiske/). All images have been compressed in order to speed up loading and processing times, particularly on mobile devices. The images chosen are in line with the theme of the site.

I used Adobe Photoshop to resize the background image for better display on smaller device screens. 

[Back to top ⇧](#womens-super-league-wsl-quiz)

## Features

## Technologies Used

### Main Languages Used

* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries & Programs Used

* [Google Fonts](https://fonts.google.com/)
  * Google fonts was used to import the fonts "Chivo", "Krub", and "Lato" into the style.css file. These fonts were used throughout the project.
* Font Awesome
  * [Font Awesome](https://fontawesome.com/) was used on almost all pages throughout the website to import icons (e.g. social media icons) for UX purposes.
* CodeAnywhere
  * [CodeAnywhere](https://codeanywhere.com/signin) was used for writing code, commiting, and then pushing to GitHub.
  * IDE used to code the project.
* [GitHub](https://github.com/)
  * GitHub was used to store the project after pushing
* [Adobe Photoshop](https://www.adobe.com/ie/ "link to the adobe homepage")
  * Adobe Photoshop was used to resize images
* [Balsamiq](https://balsamiq.com/)
  * Balsamiq was used to create the wireframes during the design phase of the project.
* [Am I Responsive?](https://ui.dev/amiresponsive)
  * 'Am I Responsive' was used to visualise responsive design throughout the process and to generate mockup imagery.
* [Looka](https://looka.com/)
  * Looka was used to generate a logo for the website.
* [TinyPNG](https://tinypng.com/)
  * TinyPNG was used for image compression and to improve wesbite load speed.
* [CloudConvert](https://cloudconvert.com/webp-converter)
  * Cloud Convert was used to convert images to webp files (to reduce file size and increase load speed).
* [EZgif](https://ezgif.com)
  * EZgif was used to convert screen recording videos to .gif files for the TESTING.md file

## Testing

## Responsiveness

[Back to top ⇧](#womens-super-league-wsl-quiz)

## Bugs/Known Issues

[Back to top ⇧](#womens-super-league-wsl-quiz)

## Deployment

This project was developed using [CodeAnywhere](https://codeanywhere.com/ "Link to CodeAnywhere site"), which was then committed and pushed to GitHub using the GitPod terminal.

### Deploying on GitHub Pages

In oder to deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log in to [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository: WSL Quiz](https://roc-11.github.io/wsl-quiz/ "Link to GitHub Repo").
3. At the top of the repository, locate 'Settings' from the menu items.
4. Scroll down the settings page until you reach 'Pages' in 'Code and
automation' section.
1. Under 'Source' click the drop-down menu labelled 'Select Branch' and select 'Main'. Click the dropdown called 'Select folder' and select '/root'.
2. Upon selection, the page will automatically refresh meaning that the website is now deployed.
3. Scroll back down to the 'Pages' section to retrieve the deployed [link](https://roc-11.github.io/wsl-quiz/)

[Back to top ⇧](#womens-super-league-wsl-quiz)

## Credits

### Content

### Media

### Code

## Acknowledgements

* My family for assisting me in the testing of the website.
* Code Institute Slack community for their helpful opinions, advice and feedback.

[Back to top ⇧](#womens-super-league-wsl-quiz)
