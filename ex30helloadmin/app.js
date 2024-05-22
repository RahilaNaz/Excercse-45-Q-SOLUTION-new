var usernames = ["Uzma", "Rahila", "Ansa", "Ayesha", "Fariya"];
usernames.forEach(function (username) {
    if (username == "Uzma") {
        console.log("Hello ".concat(username, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, " , thank you for loging in again"));
    }
});
