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


// =======================| Type Aliases |=======================


// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee : Employee = { 
//     id: 1,
//     name: "Ammar",
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }

// console.log(employee)


// =======================| Union Types |=======================


// const kgToLbs = (weight: number | string): number => {
//     // Narrowing
//     if (typeof weight === "number") {
//         return weight * 2.20462
//     } else {
//         return parseInt(weight) * 2.20462
//     }
// }

// console.log(kgToLbs(10))
// console.log(kgToLbs("10kg"))


// =======================| Intersection Types |=======================

// type Draggable = {
//     drag: () => void
// }
// type Resizable = {
//     resize: () => void
// }
// type UIWidget = Draggable & Resizable

// let textBox : UIWidget = {
//     drag: () => {
//         console.log("Dragging")
//     },
//     resize: () => {
//         console.log("Resizing")
//     }
// }

// console.log(textBox.drag())



// =======================| Literal Types |=======================

// type Quantity = 50 | 100
// let quantity : Quantity = 100
// console.log(quantity)
// // quantity = 10 // Error: Type '10' is not assignable to type '50 | 100'.


// =======================| Nullable Types |=======================

// function greet(name: string | null | undefined) {
    //     if (name) {
//         console.log(name.toUpperCase())
//     } else {
    //         console.log("Hello, Guest")
//     }
// }
// greet(null)
// greet(undefined)
// greet("Ammar")



// =======================| Optional chaining |=======================

// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(1)
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear())

// // Optional element access operator
// // customers?.[0]

// // Optional callback
// let log: any = null
// log?.("a")