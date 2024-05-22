let car: string = 'subaru';
// test 1: Equality Comparision  (True)
console.log("is car != 'subaru'? i predict True");
console.log(car == 'subaru'); // I predict True.

// test 2: Stric Equality Comparision  (True)
console.log("is car != 'subaru'? i predict True");
console.log(car === 'subaru'); // true

// test 3: Inequality Comparision  (False)
console.log("is car !='subaru'? i predict False");
console.log(car != 'subaru') // False

// test 4: Stric Inequality Comparision  (False)
console.log("is car !== 'subaru'? i predict False");
console.log(car !== 'subaru'); // False

//test 5: Less then Comparision  (False)
console.log("is car < 'subaru'? i predict False")
console.log(car < 'subaru') // False (Iexicographic comparision)

//test 6:Greater then Comparision  (False)
console.log("is car > 'subaru'? i predict False")
console.log(car > 'subaru') // False (Iexicographic comparision)

//test 7: Less then or Equal Comparision  (True)
console.log("is car <= 'subaru'? i predict True")
console.log(car <= 'subaru') // True 

//test 8: Greater then or Equal Comparision  (True)
console.log("is car >= 'subaru'? i predict True")
console.log(car >= 'subaru') // True 

//test 9: checking truthiness (True)
console.log("is car ? i predict False");
console.log(!!car); // true (non-empty string is truthy)

//test 10: checking Falsinees (False)
console.log("is car ? i predict False");
console.log(!car); // true (Negation of a truth value)


