let current_users: string [] = ["saba", "hania", "furqan", "misbah"];
let new_users: string  [] =  ["saba", "misbah", "aliza", "muskan"];

new_users.forEach(newUser => {
    if
    (current_users.some(currentUsers => 
     currentUsers.toLowerCase () ===
     newUser.toLowerCase ())) {
        console.log(`${newUser} will need to enter a new username. `);
    } else {
        console.log(`${newUser} is available. `);
    }
});