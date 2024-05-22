let Guest_List : string [] =  ["Sania", "Asifa", 'Shama', 'Sumera'];
for (let i=0; i<Guest_List.length; i++){
    console.log (`Respected Madam `+ Guest_List [i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n')
}
let not_present: string = "Asifa";
let new_guest: string = "Kashaf";
Guest_List [1] = new_guest;
for (let i=0; i<Guest_List.length; i++){
    console.log (`Respected Madam `+ Guest_List [i] + ',\nWe invite you on dinner tommorow.\n\nThank You\n')
}
console.log(`Miss ${not_present} will not coming tommorow on dinner. `)