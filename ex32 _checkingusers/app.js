var current_users = ["saba", "hania", "furqan", "misbah"];
var new_users = ["saba", "misbah", "aliza", "muskan"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) {
        return currentUsers.toLowerCase() ===
            newUser.toLowerCase();
    })) {
        console.log("".concat(newUser, " will need to enter a new username. "));
    }
    else {
        console.log("".concat(newUser, " is available. "));
    }
});
