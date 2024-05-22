let usernames: string []=  ["Uzma", "Rahila", "Ansa", "Ayesha", "Fariya" ];

usernames.forEach(username =>{
    if (username == "Uzma"){
        console.log(`Hello ${username} would you like to see a status report?`);
}
else {
   console.log (`Hello ${username} , thank you for loging in again`);
}
});