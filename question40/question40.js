/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in
an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function
to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/
function makeAlbum(artistName, albumTitle, numTracks) {
    var album = { artist: artistName, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
// Example function calls
var album1 = makeAlbum("Ahmed", "morning", 103);
var album2 = makeAlbum("Ahsan", "day", 126);
var album3 = makeAlbum("umair", "night", 137);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
