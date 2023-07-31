<h1 align="center">
  Simple Lyric Finder
</h1>

<p align="center">
    <img src="https://img.shields.io/badge/jQuery-0769AD.svg?style=for-the-badge&logo=jQuery&logoColor=white" alt="jQuery">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License">
</p>

<h4 align="center">A simple way to search for song lyrics.</h4>

## Table of Contents
1. [Description](#description)
2. [Usage](#usage)
3. [Screenshots](#screenshots)
4. [Technologies Used](#technologies-used)
5. [Credits](#credits)
6. [License](#license)
7. [Contact Information](#contact-information)

## Description
Lets users search for song lyrics by providing the song and artist. Lyrics are found by searching the song & artist in Genius's database with the use of Genius's API. Turns out that Genius's API does not provide lyrics, but rather the path to the web page for the lyrics of that song. In order to get the lyrics, the lyrics are scraped straight from the web page using jQuery's .get() method with the additional help of a CORS proxy to get around the issue of being blocked by CORS policy. Styling was created with a combination of both vanilla CSS and Tailwind CSS framework.<br>

There were issues with the Spotify API since it involved OAuth and Node JS, subjects which we haven't covered yet, to create player for a user to sing along to a song. Our incomplete work involving the Spotify API can be found in the spotify-api branch.

## Usage
To use this web application, either access the web app [here](https://example.com) or clone the repository locally and open the `index.html` file in your browser. To search for lyrics, type in the song and artist in the input fields and click the "Search" button. The lyrics will be displayed in the text area below the input fields. If the song is not found, a message will be displayed saying "Song not found". If the song is found, a message saying "Searching..." will be displayed while the lyrics are being scraped from Genius. If there's an issue scraping the lyrics, a message saying "Trying to reach Genius.com..." will be displayed. If there's a bad URL, a basic error message will be displayed. The last searched song is stored locally and is pulled up again the next time the user opens up the page.

## Screenshots
<p align="center">
    <img src="https://github.com/cwchilvers/SimpleLyricFinder/assets/59628271/6615a2ee-0216-482e-82c1-0fc651dc5c48">
    <img src="https://github.com/cwchilvers/SimpleLyricFinder/assets/59628271/f913f327-4985-48f6-9c58-a63c870a5c65">
</p>

## Technologies Used
- HTML
- CSS
- JavaScript
- jQuery
- Tailwind CSS
- Genius API
- CodeTabs CORS Proxy

## Credits
- [jQuery](https://jquery.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Genius API](https://docs.genius.com/)
- [CodeTabs CORS Proxy](https://codetabs.com/cors-proxy/cors-proxy.html)

## License
This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/mit/) page for details.

## Contact Information
<h4 align="center">Chandler Chilvers:</h4>
<p align="center">
    <a href="mailto:cwchilvers@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a>
    <a href="https://github.com/cwchilvers"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub"></a>
</p>
<h4 align="center">Dung Tran:</h4>
<p align="center">
    <a href="https://github.com/dungt13"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub"></a>
</p>
<h4 align="center">Alvaro Vazquez:</h4>
<p align="center">
    <a href="https://github.com/Avazquez736"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub"></a>
</p>
