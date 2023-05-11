// Document elements
const songEl = document.getElementById("song"); 
const artistEl = document.getElementById("artist"); 
const coverArtEl = document.getElementById("cover-art");
const releaseDateEl = document.getElementById("release-date");
const lyricsEl = document.getElementById("lyrics");
const sampleInfoEl = document.getElementById("sample-info");

// Genius API
const url = "https://api.genius.com/";
const search = "search?q=";
const token = "0mnLuVjVhj3q71HPoO4qeXl5XHowzNHG87dc1Vr9VfLCKYy_apxIFSsGRajaCKh9";

// Search parameters
var song = "all star"
var artist = "smash mouth";

SearchGenius();

function SearchGenius() {
    fetch(url + search + song + " " + artist + "&access_token=" + token)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.response.hits[0].result);

            // Update page content
            songEl.textContent = data.response.hits[0].result.title;                                                    // Song Title
            artistEl.textContent = "by " + data.response.hits[0].result.artist_names;                                   // Artist
            coverArtEl.setAttribute("src", data.response.hits[0].result.header_image_url);                              // Cover Art
            releaseDateEl.textContent = data.response.hits[0].result.release_date_for_display;                          // Release Date
            lyricsEl.setAttribute("href", "https://genius.com" + data.response.hits[0].result.path)                     // Lyrics (External URL)
        });
}
