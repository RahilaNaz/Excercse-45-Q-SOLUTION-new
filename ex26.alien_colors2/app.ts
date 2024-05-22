//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.

let Alien_color: string = "Green";


//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (Alien_color == "Green"){
    console.log("the player just earned 5 points for shooting the alien.");
}


//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else{
    console.log("the player just earned 10 points.")
}

 Alien_color = "Red";
if (Alien_color == "Green"){
    console.log("the player just earned 5 points for shooting the alien.");
}