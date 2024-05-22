//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item{
    name : string 
    price: number  
}
//two objects
const book: item = {
    name :  "Effective Typescript",
    price: 500
}
const Gadget: item = {
    name: "Earpods",
    price:  500
}
console.log(`book name: ${book.name}, price Rs${book.price}`);
console.log(`Gadget name: ${Gadget.name}, price Rs${Gadget.price}`);