// let num : number = 20
// this is a comment
// console.log(num)

// =======================| Data Types |=======================

// 1- Boolean
// let isTrue : boolean = true
// console.log(isTrue)

// --------------------------------------------------------------

// 2- Number
// let decimal : number = 6
// console.log(decimal)

// --------------------------------------------------------------


// // 3- String
// let color : string = "blue"
// color = 'red'
// let fullName : string = `Ammar`
// let age : number = 22
// let sentence : string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`
// console.log(color, fullName, age, sentence)

// --------------------------------------------------------------


// // 4- Array
// let list1 : number[] = [1, 2, 3,]
// // let list1 : number[] = [1, 2, 3, "string"] -- ❌
// console.log(list1)


// --------------------------------------------------------------


// // 5- Tuple
// let x : [string, number]
// x = ["hello", 10] // OK
// // x = [10, "hello"] // Error
// console.log(x[0].substring(1)) // OK
// // console.log(x[1].substring(1)) // Error, 'number' does not have 'substring'


// --------------------------------------------------------------


// // 6- Enum
// enum Color {Red = 1, Green, Blue}
// let c : Color = Color.Green
// console.log(c)


// --------------------------------------------------------------

// // 7- Any
// let notSure : any = 4
// notSure = "maybe a string instead"
// notSure = false // okay, definitely a boolean
// notSure.toUpperCase() --- no error
// console.log(notSure)



// --------------------------------------------------------------

// // 8- Unknown
// let notSure : unknown = 4
// notSure = "maybe a string instead"
// notSure = false // okay, definitely a boolean
// // notSure.toUpperCase() // Error: Object is of type 'unknown'.
// console.log(notSure)




// --------------------------------------------------------------


// 9- Functions
// function add(x: number, y: number): number {
//     return x + y;
// }
// console.log(add(5, 10));
// function add(x: number, y: number): number {
//     return x + y;
// }
// console.log(add(5, "10")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// function add(x: number, y: any): number {
    //     return x + y;
    // }
    // console.log(add(5, "10")); // No Error



// --------------------------------------------------------------


// 10- Objects
// let person : {
//     name: string
// } = {name: "Ammar"}
// person.name = "Ahmed"
// console.log(person.age) // Error: Property 'age' does not exist on type '{ name: string; }'.
// let person : {
//     name: string,
//     age: number
// } = {name: "Ammar"} // Gives error cuz age is missing in initialization can work with ?
// person.age = 22
// console.log(person)