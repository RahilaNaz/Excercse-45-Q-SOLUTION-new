//Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let Alien_color: string = "Green";

//Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.

if (Alien_color == "Green"){
    console.log("the player just earned 5 points.");
}

//Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)

let Alien_color1 : string = "Red";
if (Alien_color1 == "Green"){
    console.log("the player just earned 5 points.");
}