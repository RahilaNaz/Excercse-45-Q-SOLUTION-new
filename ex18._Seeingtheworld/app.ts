let places : string [] =    ["Turkey", "Zurich", "Japan", "Bali", "Lahore"];
//.print your array in its oignal order
console.log("orignal order:" , places);
//.print your array in alphabatical order without modifying the actuall list
console.log("Alphabatical order:" +  [...places].sort());
//show he array is still in its orignal order
console.log("orignal order after sorting: " , [ places]);
////.print your array in reverse alphabtaical order 
console.log("Reverse Alphabtical order:", [...places].sort().reverse());
//show that arrey still in its orignal order
console.log("orignal order after reverse sorting:", [places]);
//reverse the order of the list
places.reverse();
console.log("reversed order:", places);
//sort the array in alphabatical order
console.log("Sorted in Alphabatical order:", places);
places.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabatical order:", places);