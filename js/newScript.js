var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var beta = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function playSound(letter){
    let wawa = alpha.indexOf(letter)
    console.log(wawa)
    console.log(beta[wawa])
    var letId = document.getElementById(beta[wawa]).play()
}

var numRow = document.getElementById("numRow")
function loadNumbers(){
    for(var i = 1; i<101; i++){
    var div = document.createElement("div")
    div.setAttribute("class", "col-sm-2")
    var number = document.createElement("p")
    number.innerHTML = i
    var audio = document.createElement("audio")
    audio.setAttribute("preload","auto")
    audio.setAttribute("id", "num " + i)
    audio.setAttribute("src","Audio/Numbers/" + i + ".m4a")
    var a = document.createElement("a")
    var eye = document.createElement("i")
    eye.setAttribute("class","fa fa-play-circle fa-2x")
    eye.setAttribute("onclick","playSoundNumbers('" + i + "')") 
    numRow.appendChild(div)
    div.appendChild(number)
    div.appendChild(audio)
    div.appendChild(a)
    a.appendChild(eye)
    }
}

function playSoundNumbers(four){
    document.getElementById("num " + four).play()
}