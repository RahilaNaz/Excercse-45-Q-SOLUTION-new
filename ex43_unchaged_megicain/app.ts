let magicians: string [] = ["Alice", "David", "Chris"];
function show_magicians(magicians:string []) {
    for(let i=0; i<magicians.length; i++){
    console.log(`megician ${magicians[i]}`)   
    }
};

console.log("\nmodify magicians list.");
function make_great(){
   
    for(let i=0; i<magicians.length; i++){
        console.log(`Great megician ${magicians[i]} `);   
        }
        return magicians
    }

    //Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
    let great_magicians: string []=make_great();
    
    //all show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

    console.log("\nOrignal magaicians name")
    show_magicians(magicians);


