// Document elements
const songEl = document.getElementById("song"); 
const artistEl = document.getElementById("artist"); 
const coverArtEl = document.getElementById("cover-art");
const releaseDateEl = document.getElementById("release-date");
const lyricsEl = document.getElementById("lyrics");
const sampleInfoEl = document.getElementById("sample-info");

// APIs
    // Genius API
const genURL = "https://api.genius.com/";
const genToken = "0mnLuVjVhj3q71HPoO4qeXl5XHowzNHG87dc1Vr9VfLCKYy_apxIFSsGRajaCKh9";
const genSearch = "search?q=";
    // CORS Proxy API
const corsProxyURL = "https://api.codetabs.com/v1/proxy?quest=";    // This is to get around CORS policy error

// User input
var song = "helter skelter"
var artist = "the beatles";

// Misc.
var lyricsURL;
var lyrics;

SearchGenius();

// Get data from Genius API
function SearchGenius() {
    fetch(genURL + genSearch + song + " " + artist + "&access_token=" + genToken)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Update page content
            songEl.textContent = data.response.hits[0].result.title;                            // Song Title
            artistEl.textContent = "by " + data.response.hits[0].result.artist_names;           // Artist
            coverArtEl.setAttribute("src", data.response.hits[0].result.header_image_url);      // Cover Art
            releaseDateEl.textContent = data.response.hits[0].result.release_date_for_display;  // Release Date
            // URL for lyrics
            lyricsURL = "https://genius.com" + data.response.hits[0].result.path;
            GetLyrics();
        });
}

// Scrape lyrics from Genius
function GetLyrics() {
    $.get(corsProxyURL + lyricsURL, function(html) {
        lyrics = ($(html).find('#lyrics-root').html());
        lyricsEl.innerHTML = lyrics;
        // Remove unecessary elements
        $('.LyricsHeader__Container-ejidji-1').remove();    
        $('.RightSidebar__Container-pajcl2-0').remove();
        $('.InreadContainer__Container-sc-19040w5-0').remove();
        $('.Lyrics__Footer-sc-1ynbvzw-1').remove();
        // Remove all hrefs from Genius lyrics
        $("#lyrics > div> a").removeAttr("href");                
    });
}