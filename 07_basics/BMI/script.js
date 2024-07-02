const form = document.querySelector("form")

form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const result2 = document.querySelector('#results2')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `<span>Please enter valid height</span>`
    }
   else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `<span>Please enter valid weight</span>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is : ${bmi}</span>`
        
        if(bmi < 18.6)
            {
                result2.innerHTML = 'Under Weight'
            }
        else if(bmi >= 18.6 && bmi <=24.9){
            result2.innerHTML = 'Normal Range'
        }  
        else{
            result2.innerHTML = 'Over Weight'
        }  
    }

})