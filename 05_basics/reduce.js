let myNum = [ 93, 83, 9, 3, 33]

let a = myNum.reduce( (acc, val) => {
    return acc+val
}, 0)

console.log(a)