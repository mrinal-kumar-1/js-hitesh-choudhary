let body = document.querySelector('body');

let change = document.querySelectorAll('.button')

console.log(change)

change.forEach(function (value) {
    
    value.addEventListener('click', function (e){

        if(e.target.id === 'grey')
      body.style.backgroundColor = e.target.id

        if(e.target.id === 'white')
      body.style.backgroundColor = e.target.id

        if(e.target.id === 'blue')
      body.style.backgroundColor = e.target.id
    
        if(e.target.id === 'yellow')
      body.style.backgroundColor = e.target.id
    });


})