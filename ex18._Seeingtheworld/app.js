var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Turkey", "Zurich", "Japan", "Bali", "Lahore"];
//.print your array in its oignal order
console.log("orignal order:", places);
//.print your array in alphabatical order without modifying the actuall list
console.log("Alphabatical order:" + __spreadArray([], places, true).sort());
//show he array is still in its orignal order
console.log("orignal order after sorting: ", [places]);
////.print your array in reverse alphabtaical order 
console.log("Reverse Alphabtical order: ", __spreadArray([], places, true).sort().reverse());
//show that arrey still in its orignal order
console.log("orignal order after reverse sorting:", [places]);
//reverse the order of the list
places.reverse();
console.log("reversed order:", places);
//sort the array in alphabatical order
console.log("Sorted in Alphabatical order:", places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabatical order:", places);
