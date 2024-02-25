//Qno40: Album: Write a function called make_album() that builds a Object describing a
// music album. The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information 
// correctly. Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number 
// of tracks, add that value to the album’s Object. Make at least one new function call
//  that includes the number of tracks on an album.
function make_album(artist, title, num_tracks) {
    var album = {
        artist_name: artist,
        title_name: title
    };
    if (num_tracks) {
        album.num_tracks = num_tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album 1');
console.log(album1);
var album2 = make_album('Artist 2', 'Album 2', 12);
console.log(album2);
var album3 = make_album('Artist 3', 'Album 3', 8);
console.log(album3);
/*
tsc tsQ40.ts
node tsQ40.js
*/
