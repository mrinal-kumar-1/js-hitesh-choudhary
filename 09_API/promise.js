// let promiseOne = new Promise(function(resolve, reject){

//     setTimeout(() => {
//         console.log('Inside Promise')
//         resolve()
//     }, 1000);
    
// })

// promiseOne.then(function(){
//     console.log('Inside Resolve')
// })

// let promiseTwo = new Promise(function(resolve, reject){
  
//     setTimeout(() => {
//         resolve({name: 'Anju', roll_no : 23})
//     }, 1000);

// })

// promiseTwo.then(function(value){
//     console.log(value.name)
// })

// let promiseThree = new Promise(function(resolve, reject){

//     // let error = true;
//     let error = false;
//     setTimeout(function(){
//          if(!error){
//             resolve({
//                 username: "Happy", id: 67
//             })
//          }else{
//             reject('OOPS! Error Occurred')
//          }
//     }, 1000)
// })

// promiseThree.then(function(value){
//     return value.id
// }).then(function(value){
//     console.log(`Id is ${value}`)
// }).catch(function(e){
//    console.log(e)
// }).finally(function(){
//     console.log('Promise is either fulfilled or rejected ')
// // })

// let promiseFour = new Promise(function(resolve, reject){
//     let error = true;
//     setTimeout(function(){
//          if(!error){
//             resolve({
//                 username: "Harman", id: 78
//             })
//          }else{
//             reject('OOPS! Error Occurred')
//          }
//     }, 1000)
// })

// async function consumingPromiseFour(){

//     try{
//         let response = await promiseFour;
//         console.log(response.username)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// consumingPromiseFour()

//fetch call in async function
// async function jsonApi(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let res = await response.json()
//         console.log("Fetch Call", res)

//     }
//     catch(e){
//         console.log(e,": When error comes, I run")
//     }
// }

// jsonApi()

//performing fetch call through then and catch

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => {
//     return response.json()
// }).then((response) => {
//     console.log("Fetch Call:", response);
// }).catch((error) => {
//     console.log("When error comes, I run")
// })



