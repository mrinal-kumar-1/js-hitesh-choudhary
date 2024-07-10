// let obj1 = {
//     name: 'Krish',
//     origin: 'India',
// }

// //injecting function to all the objects
// Object.prototype.injectingFunction = function(){
//     console.log("Hey, I have been injected")
// }

// // obj1.injectingFunction()

// let array = ["hey", "hu", "ha"]

// array.injectingFunction()

//inheritance

// let obj2 = {
//     name : "Aman",
//     class: "10"
// }

// let obj3 = {
//     isAvailable : true,
//     qualification : 'net qualified'
// }

// let obj4 = {
//     name : "Dr. P Chandra",
//     experience : "5yrs.",
//     // syntax to inherit property
//     __proto__ : obj2
// }

// //inheritance modern syntax
// Object.setPrototypeOf(obj3, obj2) //inheriting properties into obj3 from obj2

String.prototype.trueLength = function(){
    console.log(`True length of string is ${this.trim().length}`)
}

let username = "Hallu   "

username.trueLength()
"Are     ".trueLength()