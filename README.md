# Js-playlist
Lab 2 music playlist renderer 1
<!DOCTYPE html>
<html lang="en"
<head>
 <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Music Playlist</title>
    <link rel="stylesheet" href="styles.css">
    </head
<body>
 <h1>My Music Playlist</h1>
 <div id="Playlist"></div>
 <script src="script.js" defer></script>
 </body>
</html>

body {
  font-family: Arial, sans-serif;
  background   
  padding: 2rem;
  margin: auto;
  }
  h1{
    text-align: center;
     color:#333;
     }
     .song{
     background:hsl(221, 53%, 54%);
border:1px solid hsl(247, 39%, 43%);
 padding:1rem;
 margin-bottom:1rem
 border-radius:8px;
 }
 .song h3{
 margin:0;
color:#0077cc;
}
 .song p {
  margin:0.3rem0;
   color:#555;
   }




header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  }

  header h1 {
    margin: 0;
    font-size: 2rem;
   }

/* Playlist Container */
.playlist-container {
    max-width: 800px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    overflow: hidden;
    }

    /* Playlist Items */
.playlist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    }

   .playlist-item:last-child {
    border-bottom: none;
    }

    .playlist-item:hover {
    background-color: #f9f9f9;
    }

   .song-title {
    font-size: 1rem;
    font-weight: bold; 
    }

    .song-duration {
    font-size: 0.9rem;
    color: #666;
    }


 button {
  background-color: #007bff; 
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px
  cursor: pointer;
  font-size: 0.9rem;
  }

  button: hover {
    background-color: #0056b3;
    }


let playlist = [
    {
title: "Blinding Lights",
        {
 title: "Blinding Lights",
artist: "The Weeknd",
duration: "3:20",
liked: true,
playCount: 0,
     audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview221/v4/d6/87/41/d687410c-4714-afld-e005-3296d4777226/mzaf_389996",
     image: "http://is1-ssl.mzstatic.com/image/thumb/music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fdo-66cfff32f679/20umgim12176.rgb.jpg/100x100bb"
     },
     {
 title: "Levitating",
 artist: "Dua Lipa",
 duration: "3:23",
 liked: false,
 playCount: 0,
      audio: "http://audio-ssl.itune.apple.com/tunes-assets/AudioPreview116/v4/13/da/fa/13daf417-4af6-9c03-4bd7-ba42bb8c878e/mzaf_144975",
     image: "http://is1-ssl.mzstatic.com/image/thumb/music116/v4/16/c9/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb"
     },
     {
   title: "Don't Start Now",
  artist: "Dua Lipa",
  duration: "3:03",
  liked: true,
  playCount: 0,
          audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview221/v4/01/55/e1/0155e17e-3b4e-734d-126d-7c68855334c4/mzaf_921296",
        image: "http://is1-ssl.mzstatic.com/image/thumb/music116/v4/16/c9/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb"
        },
        {
 title: "Watermelon Sugar",
 artist: "Harry Styles",
 duration: "2:54",
 liked: false,
 playCount: 0,
        audio: "https://audio-ssl.itune.apple.com/tunes-assets/AudioPreview116/v4/16/86/f5/1686f50d-8b77-7e32-85f7-5f0e804d68fe/mzaf_158109",
        image: "http://isl.mzstatic.com/image/thumb/music115/v4/2b/c4/c9/-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb"
    },
    {
     title: "Circles",
 artist: "Post Malone",
  duration: "3:35",
 liked: true,
 playCount: 0,
     audio: "http://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/fb/e6/78fbe613-9elc-6a99-227d-fe8blec2a971/mzaf_121030",
   image: "http://isl.mzstatic.com/image/thumb/music123/v4/97/e6/11/97e6112a-c6bb-81d6-9364-373627df6a83/artwork.jpg/100x100bb.jpg"
   },
   {
     title: "Adore You",
  artist: "Ed Sheeran",
    duration: "3:23",
  liked: true,
  playCount: 0,
   audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/59/1f/1b591fec-7157-fo69-02fd-46a77c8638af/mzaf_152274",
    image: "https://isl.mzstatic.com/image/thumb/music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb"
    },
    {
    title: "Savage Love",
artist: "Jason Derulo",
duration: "2:51",
 liked: true,
 playCount: 0,
   audio: "https://audio-ss1.itune.apple.com/itune-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c22e82/mzaf_173788",
       image: "http://isl.mzstatic.com/image/thumb/music126/v4/b8/6a/31/b86a31f3-56a3-9e69-7159-0a44cd36b66c/886448554769.jpg/100x100bb"
},
{
  title: "Rockstar",
  artist: "DaBaby feat... Roddy Ricch",
   duration: "3:01",
     liked: false,
  playCount: 0,
    audio: "https://audio-ss1.itune.apple.com/itune-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c22e82/mzaf_173788",
        image: "http://isl.mzstatic.com/image/thumb/music126/v4/b8/6a/31/b86a31f3-56a3-9e69-7159-0a44cd36b66c/886448554769.jpg/100x100bb"
},
{
    title: "Rockstar",
    artist: "DaBaby feat.. Roddy Ricch",
    duration: "3:01",
    liked: false,
    playCount: 0, // Initialize play count
     audio: "http://audio-ssl.itune.apple.com/itunes-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c23e82/mzaf_173788",
 image: "http://isl-ssl.mzstatic.com/image/thumb/music125/v4/53/0e/d0/530ed031-316d-a32b-d603-c11af9ad235d/20UMGIM28169.rgb.jpg/100x100bb"
 }
 ];
  


 function addSong(title, artist) {
    playlist.push({ title, artist });
    console.log(`Added: "${title}" by ${artist}`);
}

function removeSong(title) {
    const index = playlist.findIndex(song => song.title === title);
    if (index !== -1) {
        const removed = playlist.splice(index, 1);
        console.log(`Removed: "${removed[0].title}" by ${removed[0].artist}`); 
           } else {
       console.log(`Song "${title}" not found in the playlist.`);
        } else {
       console.log(`Song "${title}" not found in the playlist.`);
       }
       }
       
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
       function renderPlaylist() {
const playlistContainer = document.getElementById("Playlist"); 
playlistContainer.innerHTML = ""; // Clear any exi
playlist.forEach((song, index) => {
        // Create a new div for the song
        const songDiv = document.createElement("div");
        

        
