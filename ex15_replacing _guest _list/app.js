var Guest_List = ["Sania", "Asifa", 'Shama', 'Sumera'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n');
}
var not_present = "Asifa";
var new_guest = "Kashaf";
Guest_List[1] = new_guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Respected Madam " + Guest_List[i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n');
}
console.log("Miss ".concat(not_present, " will not coming tommorow on dinner. "));
