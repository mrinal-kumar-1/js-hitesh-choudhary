// function example1(){
//     let user1 = "Harry"

//     function example2(){
//         let user2 = "A"
//         console.log(user1)
//     }

    // console.log(user2)
// }

//hoisting

console.log(sum1(6))

// below mentioned function can be accessed before initialization because of special feature known as hoisting
function sum1(a){
   return a + 1;
}

//below mentioned function can't be accessed before initialization
let sum2 = function(a){
    return a + 3;
}

console.log(sum2(4))
