var sec=0
var min=0
var hr=0

var intervalo

function doisdigitos(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    relogio()
    intervalo=setInterval(relogio,1000)
}

function pause(){
    clearInterval(intervalo)
}

function stop(){
    clearInterval(intervalo)
    sec=0
    min=0
    document.getElementById('rg').innerText="00:00:00"

}
function relogio(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('rg').innerText=doisdigitos(hr)+':'+doisdigitos(min)+':'+doisdigitos(sec)
}