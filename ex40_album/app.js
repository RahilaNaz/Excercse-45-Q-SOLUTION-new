function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The First Album"));
console.log(make_album("Artist two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
