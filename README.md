# lost-pet-finder-frontend

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Netlify Status](https://api.netlify.com/api/v1/badges/b48f81f9-997e-4274-b85a-039966f3f7bf/deploy-status)](https://app.netlify.com/sites/lost-pet-app/deploys)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<!-- TODO ADD LOGO 
<div align="center">
  <a href="https://github.com/Floof-Finders">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->

# Floof Finders

<!-- TABLE OF CONTENTS -->
<div>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <!-- TODO <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

>Lost Pet Finder is an application where it is strictly about finding your lost pet. Using a React application we are to create a way for the user to add their lost or found pet and post it a board. Node.js is our backend application and we save our data to a PostgreSQL Database that posts and updates.

## UML

<img src="img/WF-Finalproject-frontend.png" width="80%" height="auto">
<img src="img/WF-Finalproject-socket-io.png" width="80%" height="auto">
<img src="img/WF-Finalproject-WireFrame.png" width="80%" height="auto">

### Built With

* [Base-64](https://www.npmjs.com/package/base-64)
* [BCrypt](https://www.npmjs.com/package/bcrypt)
* [Cors](https://www.npmjs.com/package/cors)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [ESLint](https://eslint.org/)
* [Express](https://expressjs.com/)
* [Heroku](https://heroku.com)
* [Jest](https://jestjs.io/)
* [JWT](https://jwt.io/)
* [Node Fetch](https://www.npmjs.com/package/node-fetch)
* [NodeJS](https://nodejs.org/en/)
* [REST API](https://restfulapi.net/)
* [Sequelize](https://sequelize.org/)
* [SQLite3](https://www.sqlite.org/)
* [SuperTest](https://www.npmjs.com/package/supertest)
* [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
* [Moment](https://momentjs.com/)

## Getting Started

```sh
# Install NPM
npm install npm@latest -g

# Clone the repository
git clone git@github.com:Floof-finders/lost-pet-finder-frontend.git

# Install dependencies
npm install

# Running locally
npm run dev

# Running tests
npm run test
```

## Optional for using in Production Environment

 [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) - Request API Key<br />
 [Auth0](https://auth0.com/) - Sign up and create an application, grab `Domain` and `Client ID` and add them to your ENV variables

<!-- TODO USAGE EXAMPLES  -->
## Usage

Our application is to bring animals back to their owners in the fast way using technology and not having to rely specifically on friends and posters to post around town.  
### Usage Steps:  
- Signing in by creating an auth0 account or using a google account
- Update your profile
- Add pets
- Depending on Lost or Found option
  - When posting to lost pets, they will show up under Lost or Found accordingly

### Deployment

[Netlify Deployment](https://lost-pet-app.netlify.app/)
<!-- [Heroku Deployment](https://lost-pet-finder-backend.herokuapp.com/) -->

See the [open issues](https://github.com/Floof-Finders/issues) for a full list of proposed features (and known issues).

## Testing

This repository is tested using [jest](https://jestjs.io/). An example test can be seen below.

```JavaScript
'use strict'

const supertest = require('supertest')
const server = require('./server')
const request = supertest(server.server)

describe('Given /', () => {
  describe('When GET', () => {
    it('Then returns 200 status', async () => {
      const response = await request.get('/')
      expect(response.status).toEqual(200)
    })

    it('Then returns correct response body', async () => {
      const response = await request.get('/')
      expect(response.text).toEqual('Floof-Finders')
    })
  })
})

```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Heather Bisgaard - [@vbchomp](https://github.com/vbchomp) - [LinkedIn Profile](https://www.linkedin.com/in/heather-bisgaard/) - vbchomp@gmail.com  
Charlie Fadness - [@fadnesscharlie](https://github.com/fadnesscharlie) - [LinkedIn Profile](https://www.linkedin.com/in/cfadness/) - fadness.charlie@outlook.com  
Mark Thanadabouth - [@markjackson28](https://github.com/markjackson28) - [LinkedIn Profile](linkedin.com/in/markjackson28) - mark28ten@gmail.com 

Project Link: [https://github.com/Floof-Finders](https://github.com/Floof-Finders)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* TA's:
  * Kassie Bradshaw
* [Socket.io Stack Overflow](https://stackoverflow.com/questions/62208654/notification-system-using-socket-io)
* [push notifications with socket.io](https://hetaram37.medium.com/real-time-notifications-using-socket-io-nodejs-and-angular-ec2df283d00b)
* [Placeholder.com Images](https://placeholder.com/)
* [Placehold.jp Images](http://placehold.jp/)
* [Google Maps & Google Places in React](https://www.youtube.com/watch?v=WZcxJGmLbSo)
* [SVG Silh - Paw SVG](https://svgsilh.com/image/1314467.html)
* [Bootstrap Icons](https://icons.getbootstrap.com/#usage)
* [Jest IO](https://jestjs.io/docs/tutorial-react)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Floof-Finders/lost-pet-finder-frontend.svg
[contributors-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Floof-Finders/lost-pet-finder-frontend.svg
[forks-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/Floof-Finders/lost-pet-finder-frontend.svg
[stars-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Floof-Finders/lost-pet-finder-frontend
[issues-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/issues
[license-shield]: https://img.shields.io/github/license/Floof-Finders/lost-pet-finder-frontend.svg
[license-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/blob/master/LICENSE.txt
[check-sheild]: https://github.com/Floof-Finders/actions/workflows/checks.yaml/badge.svg
[check-url]: https://github.com/Floof-Finders/lost-pet-finder-frontend/actions/workflows/checks.yaml
[codecov-sheild]: https://codecov.io/gh/Floof-Finders/lost-pet-finder-frontend/branch/main/graph/badge.svg?token=7SL7D08EZB
[codecov-url]: https://codecov.io/gh/Floof-Finders/lost-pet-finder-frontend


