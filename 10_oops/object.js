// function checkingIsFunctionAnObject(num){
//    return num+2;
// }

// checkingIsFunctionAnObject.power = 5;

// console.log(checkingIsFunctionAnObject.power)
// console.log(checkingIsFunctionAnObject.prototype)
// console.log(checkingIsFunctionAnObject)

//linking another function with a function

function product(name, value){
    this.name = name;
    this.value = value

    console.log(`my value is ${this.value}`)

}

product.prototype.addLink = function(link){
    console.log(`Link successfully add, access it ${link}`)
}

product.prototype.increaseValue = function(){
    this.value++;
    console.log(`Value is increased: ${this.value}`)
}

let product1 = new product("mobile", 5000);
let product2 = new product("macbook", 100000);

product2.addLink("abc");
// console.log(product2.increaseValue().value)
product2.increaseValue()
product()