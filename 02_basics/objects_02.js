// single ton object
// let obj = new Object();
// obj.name = "harsh"
// obj.roll_no = 2

// console.log(obj)

let obj1 = {
    hi : "hello",
    bado : "baddi"
}

let obj2 = {
    mauka : 'mile',
    kadi : 'kadi'
}

let obj3 = {...obj1, ...obj2}



// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

// console.log(Object.values(obj3)[1])
// console.log(obj3)

let objx = {
    o : 'a',
    i : 'a'
}

let objy = {
    o : 'a',
    i : 'a',
}

let obj4 = Object.assign({}, objx, objy)
// console.log(objy)

const {o : e} = objy;
console.log(e)