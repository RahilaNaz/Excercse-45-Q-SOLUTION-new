//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car: string = 'subaru';
let age : number = 25
let numbers: number  [] =  [1, 2, 3, 4]


//**Tests for equality and inequality with strings**



//Test 1: Equality (True)
console.log ("Is car !== 'Subaru'? I predict True");
console.log(car !== 'Subaru'); // True (case- insensitive)

//Test 2: Stric Equality (False)
console.log ("Is car === 'Subaru'? I predict False");
console.log(car === 'Subaru'); // False (case- insensitive)


//Test 3: Inequality (True)
console.log ("Is car != 'Toyota'? I predict True");
console.log(car != 'Toyota'); //True (case-sensitive)

//Test 4: Inequality (False)
console.log ("Is car !== 'subaru'? I predict False");
console.log(car !== 'subaru'); //False (case-sensitive)


//**Lowercase Function Tests**


// Test 5: Lowercase Conversion (True)
console.log ("Is car === car.toLowerCase()? I predict True");
console.log (car.toLowerCase() == 'subaru')// True  (Orignal value reamains upper)

// Test 6: Lowercase Conversion (False)
console.log ("Is car !== car.toLowerCase()? I predict False.");
console.log (car !== car.toLowerCase());// False  (Orignal value reamains upper)


// **Numerical Tests**


//Test 7: Equality (True)
console.log("Is age == 25? I predict True");
console.log(age == 25);// True

//Test 8: Inequality (False)
console.log("Is age != 30? I predict True");
console.log(age != 30);// True

//Test 9: Greater than (False)
console.log("Is age > 30? I predict False");
console.log(age > 30);// false

//Test 10: Less than (True)
console.log("Is age <= 25? I predict True");
console.log(age <= 25);// True


//** Logical Opreators**


//Test 11: "and" (True)
console.log("Is age > 20 && age < 30? I predict true");
console.log(age > 20 && age < 30); // (both condition met)


//Test 12: "or" (False)
console.log("Is age > 30 || age < 18? I predict False");
console.log(age > 30 || age < 18); // (neither condition met)



// **Array Tests**

//Test 13: In Array (True)
console.log("Is 3 in numbers? Ipredict True");
console.log(3 in numbers);// True (check for index existence)


//Test 14: Not in Array (False)
console.log("Is 5 not in numbers? I predict False");
console.log(5 in numbers);// False (negation of "in" Opreators)







