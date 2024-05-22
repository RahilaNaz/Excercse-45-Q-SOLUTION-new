var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("megician ".concat(magicians[i]));
    }
}
;
console.log("\nmodify magicians list.");
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Great megician ".concat(magicians[i], " "));
    }
    return magicians;
}
//Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
var great_magicians = make_great();
//all show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\nOrignal magaicians name");
show_magicians(magicians);
