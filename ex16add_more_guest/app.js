var Guest_List = ["Sania", "Asifa", 'Shama', 'Sumera'];
// for (let i=0; i<Guest_List.length; i++){
// }
var not_present = "Asifa";
var new_guest = "Kashaf";
Guest_List[1] = new_guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n');
}
Guest_List.unshift("Meerab", "Amna", "Amal");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow. We found big table now so we decided to invite few more guests.\n\nThank You\n');
}
console.log("Miss ".concat(not_present, " will not coming tommorow on dinner. "));
