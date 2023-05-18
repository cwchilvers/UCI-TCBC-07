// Document elements
const element = {
    main: document.querySelector("#lyrics-container"),
    input: document.querySelector("#input"),
    submit: document.querySelector("#submit"),
    song: document.createElement("h1"), 
    artist: document.createElement("h2"), 
    releaseDate: document.createElement("p"),
    imageContainer: document.createElement("div"),
    coverArt: document.createElement("img"),
    lyrics: document.createElement("div"),
    searching: document.createElement("h3"),
}

// APIs
// -- Genius API
const genius = {
    url: "https://api.genius.com/",
    token: "0mnLuVjVhj3q71HPoO4qeXl5XHowzNHG87dc1Vr9VfLCKYy_apxIFSsGRajaCKh9",
    search: "search?q="
}

// -- CORS Proxy Server API
const corsProxyURL = "https://api.codetabs.com/v1/proxy?quest=";    // This is to get around CORS policy error

// Load last search (if it exists)
if (localStorage.getItem("lastSearch") !== null) {
    SearchGenius(JSON.parse(localStorage.getItem("lastSearch")));
}

// When user clicks submit button
element.submit.addEventListener("click", function(event) {
    event.preventDefault()
    let input = element.input.value;
    SearchGenius(input);
  });

// Search and retrieve data from Genius API
function SearchGenius(input) {
    fetch(genius.url + genius.search + input + "&access_token=" + genius.token)
        .then(function (response) {
            // No Errors
            if (response.ok) {
                return response.json();
            }
            // Error
            throw ErrorMessage();
        })
        .then(function (data) {
                ClearContent();

                // Display searching message
                element.main.appendChild(element.searching);
                element.searching.textContent = "Searching...";

                // Create empty object for song info
                let info = {
                    song: null,
                    artist: null,
                    releaseDate: null,
                    coverArt: null,
                } 
                
                // If song could not be found in Genius database
                if (data.response.hits.length === 0) {
                    SongNotFound();
                } else {
                // Get song info and store into object
                info.song = data.response.hits[0].result.title;                              // Song Title
                info.artist = data.response.hits[0].result.artist_names;                     // Artist
                info.releaseDate = data.response.hits[0].result.release_date_for_display;    // Release Date
                info.coverArt = data.response.hits[0].result.header_image_url;               // Cover Art

                // URL for Genius lyrics page
                let lyricsURL = corsProxyURL + "https://genius.com" + data.response.hits[0].result.path;
                GetLyrics(lyricsURL, info);
                }
            }
        );
}

// Scrape lyrics from Genius and display on page with song information
function GetLyrics(lyricsURL, info) {
    fetch(lyricsURL)
        .then(function (response) {
            // No Errors
            if (response.ok) {
                $.get(lyricsURL, function(html) {
                    ClearContent();
    
                    // Create elements (Create and update elements under this function so that everything loads at once)
                    element.main.appendChild(element.song);                         // Song Title
                    element.main.appendChild(element.artist);                       // Artist
                    element.main.appendChild(element.releaseDate);                  // Release Date
                    element.main.appendChild(element.imageContainer);               // Cover Art-|
                    element.imageContainer.setAttribute("id", "image-container");   //           |                     
                    element.imageContainer.appendChild(element.coverArt);           //           |
                    element.coverArt.setAttribute("id", "cover-art");               //           V      
                    element.main.appendChild(element.lyrics);                       // Lyrics----|
                    element.lyrics.setAttribute("id", "lyrics");                    //           V
                    
                    // Update element content
                    element.song.textContent = info.song;                   // Song Title
                    element.artist.textContent = "by " + info.artist;       // Artist     
                    element.releaseDate.textContent = info.releaseDate;     // Release Date
                    element.coverArt.setAttribute("src", info.coverArt);    // Cover Art-|
                    element.coverArt.setAttribute("height", "300px");       //           V
    
                    // Retrieve HTML from lyrics page
                    let lyrics = ($(html).find('#lyrics-root').html());
                    element.lyrics.innerHTML = lyrics;
    
                    // Remove unecessary junk
                    $('.LyricsHeader__Container-ejidji-1').remove();    
                    $('.RightSidebar__Container-pajcl2-0').remove();
                    $('.InreadContainer__Container-sc-19040w5-0').remove();
                    $('.Lyrics__Footer-sc-1ynbvzw-1').remove();
                    $("a").removeAttr("href");

                    // Store recent search in local storage
                    localStorage.setItem("lastSearch", JSON.stringify(info.song + " " + info.artist));
                })
            }            
            // Error
            throw ErrorMessage();
        })
        .catch(() => { SearchIssue(); })
}
    
function ClearContent() {
    // Clear main content
    element.main.innerHTML = "";    
}

function SongNotFound () {
    ClearContent();

    // Display search error message
    element.main.appendChild(element.searching);
    element.searching.textContent = "Song not found";
}

function ErrorMessage () {
    ClearContent();

    // Display search error message
    element.main.appendChild(element.searching);
    element.searching.textContent = "ERROR";
}

function SearchIssue() {
    ClearContent();

    // Display search error message
    element.main.appendChild(element.searching);
    element.searching.textContent = "Trying to reach Genius.com..."; 
}