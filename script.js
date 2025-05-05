// Music Playlist Script

// Updated playlist with playCount property
let playlist = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20",
        liked: true,
        playCount: 0, // Initialize play count
        audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview221/v4/d6/87/41/d687410c-4714-afld-e005-3296d4777226/mzaf_389996",
        image: "http://is1-ssl.mzstatic.com/image/thumb/music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fdo-66cfff32f679/20umgim12176.rgb.jpg/100x100bb"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        duration: "3:23",
        liked: false,
        playCount: 0, // Initialize play count
        audio: "http://audio-ssl.itune.apple.com/tunes-assets/AudioPreview116/v4/13/da/fa/13daf417-4af6-9c03-4bd7-ba42bb8c878e/mzaf_144975",
        image: "http://is1-ssl.mzstatic.com/image/thumb/music116/v4/16/c9/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb"
    },
    {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        duration: "3:03",
        liked: true,
        playCount: 0, // Initialize play count
        audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview221/v4/01/55/e1/0155e17e-3b4e-734d-126d-7c68855334c4/mzaf_921296",
        image: "http://is1-ssl.mzstatic.com/image/thumb/music116/v4/16/c9/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb"
    },
    {
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        duration: "2:54",
        liked: false,
        playCount: 0, // Initialize play count
        audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview116/v4/16/86/f5/1686f50d-8b77-7e32-85f7-5f0e804d68fe/mzaf_158109",
        image: "http://isl.mzstatic.com/image/thumb/music115/v4/2b/c4/c9/-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb"
    },
    {
        title: "Circles",
        artist: "Post Malone",
        duration: "3:35",
        liked: true,
        playCount: 0, // Initialize play count
        audio: "http://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/fb/e6/78fbe613-9elc-6a99-227d-fe8blec2a971/mzaf_121030",
        image: "http://isl.mzstatic.com/image/thumb/music123/v4/97/e6/11/97e6112a-c6bb-81d6-9364-373627df6a83/artwork.jpg/100x100bb.jpg"
    },
    {
        title: "Adore You",
        artist: "Ed Sheeran",
        duration: "3:23",
        liked: true,
        playCount: 0, // Initialize play count
        audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/59/1f/1b591fec-7157-fo69-02fd-46a77c8638af/mzaf_152274",
        image: "https://isl.mzstatic.com/image/thumb/music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb"
    },
    {
        title: "Savage Love",
        artist: "Jason Derulo",
        duration: "2:51",
        liked: true,
        playCount: 0, // Initialize play count
        audio: "https://audio-ss1.itune.apple.com/itune-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c22e82/mzaf_173788",
        image: "http://isl.mzstatic.com/image/thumb/music126/v4/b8/6a/31/b86a31f3-56a3-9e69-7159-0a44cd36b66c/886448554769.jpg/100x100bb"
    },
    {
        title: "Rockstar",
        artist: "DaBaby feat. Roddy Ricch",
        duration: "3:01",
        liked: false,
        playCount: 0, // Initialize play count
        audio: "http://audio-ssl.itune.apple.com/itunes-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c23e82/mzaf_173788",
        image: "http://isl-ssl.mzstatic.com/image/thumb/music125/v4/53/0e/d0/530ed031-316d-a32b-d603-c11af9ad235d/20UMGIM28169.rgb.jpg/100x100bb"
    }
];

// Function to add a song to the playlist
function addSong(title, artist) {
    playlist.push({ title, artist });
    console.log(`Added: "${title}" by ${artist}`);
}

// Function to remove a song from the playlist
function removeSong(title) {
    const index = playlist.findIndex(song => song.title === title);
    if (index !== -1) {
        const removed = playlist.splice(index, 1);
        console.log(`Removed: "${removed[0].title}" by ${removed[0].artist}`);
    } else {
        console.log(`Song "${title}" not found in the playlist.`);
    }
}

// Function to display the playlist
function displayPlaylist() {
    if (playlist.length === 0) {
        console.log("The playlist is empty.");
    } else {
        console.log("Current Playlist:");
        playlist.forEach((song, index) => {
            console.log(`${index + 1}. "${song.title}" by ${song.artist}`);
        });
    }
}

// Function to render the playlist in the DOM
function renderPlaylist() {
    const playlistContainer = document.getElementById("Playlist"); // Get the #Playlist container
    playlistContainer.innerHTML = ""; // Clear any existing content

    playlist.forEach((song, index) => {
        // Create a new div for the song
        const songDiv = document.createElement("div");
        songDiv.classList.add("song");

        // Add the 'favorite' class if the song is liked
        if (song.liked) {
            songDiv.classList.add("favorite");
        }

        // Create an img for the song image
        const imgElement = document.createElement("img");
        imgElement.src = song.image; // Set the image source to the song's image URL
        imgElement.alt = `${song.title} cover`; // Add an alt attribute for accessibility

        // Create an h3 for the song title
        const titleElement = document.createElement("h3");
        titleElement.textContent = song.title;

        // Create a p for the artist
        const artistElement = document.createElement("p");
        artistElement.textContent = `Artist: ${song.artist}`;

        // Create a p for the duration
        const durationElement = document.createElement("p");
        durationElement.textContent = `Duration: ${song.duration}`;

        // Create a p for the "heart favorite" if liked is true
        if (song.liked) {
            const likedElement = document.createElement("p");
            likedElement.textContent = "❤️ Favorite";
            songDiv.appendChild(likedElement);
        }

        // Create an audio element for playback
        const audioElement = document.createElement("audio");
        audioElement.controls = true; // Add controls to the audio element
        audioElement.src = song.audio; // Set the audio source to the song's audio URL

        // Append all elements to the song div
        songDiv.appendChild(imgElement);
        songDiv.appendChild(titleElement);
        songDiv.appendChild(artistElement);
        songDiv.appendChild(durationElement);
        songDiv.appendChild(audioElement); // Append the audio element

        // Append the song div to the playlist container
        playlistContainer.appendChild(songDiv);
    });
}

// Loop through the playlist and display each song's details
playlist.forEach((song, index) => {
    console.log(`${index + 1}. Title: "${song.title}", Artist: "${song.artist}", Duration: "${song.duration}", Liked: ${song.liked}`);
});

// Example usage
addSong("Shape of You", "Ed Sheeran");
addSong("Blinding Lights", "The Weeknd");
displayPlaylist();
removeSong("Shape of You");
displayPlaylist();

// Call the renderPlaylist function to display the playlist in the DOM
renderPlaylist();