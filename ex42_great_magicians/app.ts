let magicians: string [] = ["Alice", "David", "Chris"];

function show_magicians(magicians:string []) {
    for(let i=0; i<magicians.length; i++){
    console.log(`megician ${magicians[i]}`)};   
    }
    

show_magicians(magicians);
 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.

console.log("\nmodify magicians list.");
function make_great(){
   
    for(let i=0; i<magicians.length; i++){
        console.log(`Great megician ${magicians[i]} `);   
        }
        
    }
    // Call show_magicians() to see that the list has actually been modified.

make_great();
