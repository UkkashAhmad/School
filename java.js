let IncEl= document.getElementById("Heading")
let counter=0

function Increase() {
    counter++
   IncEl.innerHTML=counter
}
function Decrease() {
    counter--
    IncEl.innerHTML=counter
}
function TwoPlus() {
     counter+=2
     IncEl.innerHTML=counter
}
function TableTwo() {
    IncEl.innerHTML="";
    for (let U=1 ;U<11; U++){
        IncEl.innerHTML+= "2" + " x " + U  + " = " + U*2 + "<br>"

    }
}
function TableThree() {
    IncEl.innerHTML="";
    for (let V = 1; V < 11; V++) {
        IncEl.innerHTML+= + "3" + " x " + V + " = " + V*3 + "<br>"
        
    }
}

function Odd() {
    IncEl.innerHTML="";
    for (let O = 1; O < 100; O+=2) {
        IncEl.innerHTML+= O + "--"
        
    }
}
function Even() {
    IncEl.innerHTML="";
    for (let E = 2; E < 100; E+=2) {
        IncEl.innerHTML+= E + "--"
        
    }
}
function SqaureNumbers() {
    IncEl.innerHTML="";
    for (let S = 1; S < 11; S++) {
        
        IncEl.innerHTML+=  S + " x " + S + " = " + S*S + "<br>"
        
    }
}
function Clear() {
    IncEl.innerHTML=counter="0"
}
let Table4=4
function Tables(Table4) {
    IncEl.innerHTML="";
    
    for (let Q=1 ;Q<11; Q++)
        IncEl.innerHTML+= Table4 + " x " + Q  + " = " + Q*Table4 + "<br>"

}

