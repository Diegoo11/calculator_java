let uwu =document.documentElement.clientHeight -16

body = document.querySelector('body')
body.setAttribute('style', `height: ${uwu}px;`);    
let evento
let timenumb
let sigevento
let timesig
let numsigno = 2
let onoff = 1
let punto_onoff = 1
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let prueba = document.getElementById("1")
let buton = document.querySelectorAll('.btn')

window.addEventListener("click", function(e){

    sigevento = e.target.classList[1]
    evento = Number(e.target.id)
    switch(evento){
        case 1 :
            timenumb = '7'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb
            onoff = 1  
            break;
        case 2 :
            timenumb = '8'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1  
            break;
        case 3 :
            timenumb = '9'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1            
            break;
        case 4 :
            if(numsigno===2){
                timenumb = '÷'
                screen2.innerHTML = screen2.innerHTML + timenumb
                numsigno++
                screen1.innerHTML = screen2.innerHTML
                screen2.innerHTML = ""
            }else{
                nose("÷")
            }
            timesig = "entre"
            punto_onoff = 1
            break;
        case 5 :
            timenumb = '4'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1  
            break;
        case 6 :
            timenumb = '5'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb    
            onoff = 1          
            break;
        case 7 :
            timenumb = '6'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1  
            break;
        case 8 :
            if(numsigno===2){
                timenumb = '×'
                screen2.innerHTML = screen2.innerHTML + timenumb
                numsigno++
                screen1.innerHTML = screen2.innerHTML
                screen2.innerHTML = ""
            }else{
                nose("×")
            }
            timesig = "x"
            punto_onoff = 1
            break;
        case 9 :
            timenumb = '1'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1            
            break;
        case 10 :
            timenumb = '2'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1  
            break;
        case 11 :
            timenumb = '3'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1  
            break;
        case 12 :
            if(numsigno===2){
                timenumb = '−'
                screen2.innerHTML = screen2.innerHTML + timenumb
                numsigno++
                screen1.innerHTML = screen2.innerHTML
                screen2.innerHTML = ""
            }else{
                nose("−")
            }
            timesig = "-"
            punto_onoff = 1
            break;
        case 13 :
            if(punto_onoff===1){
                timenumb = '.'
                if(onoff===2){
                    screen2.innerHTML = ""
                }
                screen2.innerHTML = screen2.innerHTML + timenumb
                punto_onoff++
            }
            onoff = 1 
            break;
        case 14 :
            timenumb = '0'
            if(onoff===2){
                screen2.innerHTML = ""
            }
            screen2.innerHTML = screen2.innerHTML + timenumb  
            onoff = 1            
            break;
        case 15 :
            timenumb = '='
            if(!(screen1.innerHTML==='')){
                switch(timesig){
                    case "+" :
                        screen2.innerHTML = add(Number(sinsigno(screen1)),Number(screen2.innerHTML))
                        screen1.innerHTML = ''
                        break;   
                    case "-" :
                        screen2.innerHTML = subtract(Number(sinsigno(screen1)),Number(screen2.innerHTML))
                        screen1.innerHTML = ''
                        break;  
                    case "x" :
                        screen2.innerHTML = multiply(Number(sinsigno(screen1)),Number(screen2.innerHTML))
                        screen1.innerHTML = ''
                        break; 
                    case "entre" :
                        screen2.innerHTML = divi(Number(sinsigno(screen1)),Number(screen2.innerHTML))
                        screen1.innerHTML = ''
                        break; 
                }
            }

            if(screen2.innerHTML === "0"){
                screen2.innerHTML = ""
            }
            onoff = 2           
            numsigno = 2
            punto_onoff = 1
            break;
        case 16 :
            if(numsigno===2){
                timenumb = '+'
                screen2.innerHTML = screen2.innerHTML + timenumb
                numsigno++
                screen1.innerHTML = screen2.innerHTML
                screen2.innerHTML = ""
            }else{
                nose("+")
            }
            timesig = "+"
            punto_onoff = 1
            break;
        case 21 :
            screen2.innerHTML = sinsigno(screen2)
            if(screen2.innerHTML === "0"){
                screen2.innerHTML = ""
            }
            break;
        case 22 :
            screen1.innerHTML = ""
            screen2.innerHTML = ""
            break;
    }

    switch(sigevento){
        case "signo" :      
            //screen1.innerHTML = screen2.innerHTML
            //screen2.innerHTML = ""
            break;

    }
})

const add = function(num1, num2) {
	return(num1+num2)
};

const subtract = function(num1, num2) {
        return(num1-num2)
};

const divi = function(num1, num2) {
    return(num1/num2)
};

const sum = function(...num) {
  let rpta = 0
  if(isNaN(num[0])){
      for(i=0;i<num[0].length;i++){
          rpta += num[0][i]
      }
      return Number(rpta)
  }
  for(i=0;i<num.length;i++){
      rpta += num[i]
  }
  return Number(rpta)
};

const multiply = function(...num) {
  let total = 1
  if(isNaN(num[0])){
      for(i=0;i<num[0].length;i++){
          total *= num[0][i]
      }
      return(total)
  }
for(i=0;i<num.length;i++){
      total *= num[i]
  }
  return(total)
};

const power = function(num1, num2) {
	return(num1**num2)
};

const factorial = function(num) {
    let facto = 1
	for(i=num;i>=1;i--){
        facto *= i
    }
    return(facto)
};

function sinsigno (pantalla){
    return (Number(pantalla.innerHTML.substr(0, pantalla.innerHTML.length -1)))
}

function nose (sign){
    switch(timesig){
        case "+" :
            screen1.innerHTML = add(Number(sinsigno(screen1)),Number(screen2.innerHTML)) + sign
            screen2.innerHTML = ''
            break;   
        case "-" :
            screen1.innerHTML = subtract(Number(sinsigno(screen1)),Number(screen2.innerHTML)) + sign
            screen2.innerHTML = ''
            break;  
        case "x" :
            screen1.innerHTML = multiply(Number(sinsigno(screen1)),Number(screen2.innerHTML)) + sign
            screen2.innerHTML = ''
            break; 
        case "entre" :
            screen1.innerHTML = divi(Number(sinsigno(screen1)),Number(screen2.innerHTML)) + sign
            screen2.innerHTML = ''
            break; 
    
    }
}