# Lyric Finder
## Description
Lets users search for song lyrics by providing the song and artist. Lyrics are found by searching the song & artist in Genius's database with the use of Genius's API. Turns out that Genius's API does not provide lyrics, but rather the path to the web page for the lyrics of that song. In order to get the lyrics, the lyrics are scraped straight from the web page using jQuery with the help of a CORS proxy to get around the issue of being blocked by CORS policy. The last searched song is stored locally and is pulled up again the next time the user opens up the page. Styling was created with both vanilla CSS and Tailwinds CSS framework.

## Screenshots

## Deployed Web App
[Lyric Finder](https://cwchilvers.github.io/LyricFinder/)
