function hey(){
   console.log("Welcome")
}

// hey()

let calculateCartValue = function(a,...num){
    return num
}

// console.log(calculateCartValue(300,5999,39993))


function returnSecondValue(newArray)
{
    if(!newArray[1])
        {
    console.log("please give proper value") 
    return
        }
    return newArray[1];
}

let thisIsArray = [23,]
console.log(returnSecondValue(thisIsArray))