var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("megican".concat(magicians[i]));
    }
    ;
}
show_magicians(magicians);
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
console.log("\nmodify magicians list.");
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Great megician ".concat(magicians[i], " "));
    }
}
// Call show_magicians() to see that the list has actually been modified.
make_great();
