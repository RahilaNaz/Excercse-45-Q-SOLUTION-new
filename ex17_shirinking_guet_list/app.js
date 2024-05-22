var Guest_List = ["Sania", "Asifa", 'Shama', 'Sumera'];
// for (let i=0; i<Guest_List.length; i++){
// }
var not_present = "Asifa";
var new_guest = "Kashaf";
Guest_List[1] = new_guest;
//for (let i = 0; i < Guest_List.length; i++) {
//console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n');
//}
Guest_List.unshift("Meerab", "Amna", "Amal");
//for (let i = 0; i < Guest_List.length; i++) {
//console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow. We found big table now so we decided toinvite few more guests.\n\nThank You\n');
//} 
//console.log("Miss ".concat(not_present, " will not coming tommorow on dinner. "));
for (var i = 0; i < Guest_List.length; i++)
    console.log("Respected Madam " + Guest_List[i] + ',\nUnfortunately we cannot find big table on time only two gusets allow for dinner now. \n\nThank You\n');
while (Guest_List.length > 2) {
    var remove_Guest = Guest_List.pop();
    console.log("Sorry Madam. ".concat(remove_Guest, " You are not invited for dinner. "));
}
for (var i = 0; i < Guest_List.length; i++) {
    console.log("\n\nRespected Madam " + Guest_List[i] + ',\nYes you are still invited on tommorow dinner.\n\nThank You\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
