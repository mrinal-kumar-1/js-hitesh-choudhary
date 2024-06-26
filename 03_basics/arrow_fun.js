// let a = {
//     username : "Pratik",
//     standard : 2,
//     stand : function(){
//         console.log(`hey, ${this.username}`);
//         console.log(this)
//     }
// }

// a.stand()

// console.log(this)

// function a(){
//     let name = 'harry'
//     console.log(this.name)
// }

// a()

// let b = () => {
//     console.log(this)
// }

// const another = (a , b) => {
//     return a*b;
// }

// const another = (a, b) => a*b

const another = (a,b) => ({this : "is syntax",
    very : "useful"
})

console.log(another(3,5));