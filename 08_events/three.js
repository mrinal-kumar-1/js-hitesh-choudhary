function randomColor(){

   const hex = '0123456789ABCDEF';
   let color = '#';

   for(i = 0; i < 6; i++){

       color += hex[Math.floor(Math.random() * 16)]

   }
return color;
};

let body = document.querySelector('body');

let start = document.getElementById('start-button')
let stop = document.getElementById('stop-button')
let changeBackground;

start.addEventListener('click',function(){

    changeBackground = setInterval(function(){
        let styling = randomColor();
        body.style.backgroundColor = styling;
    }, 500)
    
})

stop.addEventListener('click', function(){
    clearInterval(changeBackground);
    body.style.backgroundColor = 'white'
    changeBackground = null
  })

