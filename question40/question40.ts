/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in 
an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function 
to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new 
function call that includes the number of tracks on an album.*/



interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artistName: string, albumTitle: string, numTracks?: number): Album {
    const album: Album = { artist: artistName, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}

// Example function calls of different artist
const album1: Album = makeAlbum("Ahmed", "morning",103);
const album2: Album = makeAlbum("Ahsan", "day", 126);
const album3: Album = makeAlbum("umair", "night",137);

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
