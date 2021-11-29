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
    for(var i = 1; i<11; i++){
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
var c1 = document.getElementById("checks1")
var c2 = document.getElementById("checks2")
var c3 = document.getElementById("checks3")
 // Declaring the checkmark/X //
var c1One = document.getElementById("checks1One")
var c11One = document.getElementById("checks11One")
var c111One = document.getElementById("checks111One")
var c22Two = document.getElementById("checks22Two")
var c222Two = document.getElementById("checks222Two")
var c333Three = document.getElementById("checks333Three")
function checkAnswer(check){           //Checks answer
    let theAnswer = document.getElementById("Wednesday")
    let wrong = document.getElementById("Monday")
    console.log(check.id)
    if(check.id == "Wednesday"){    //Checks to see if button clicked is "Wednesday"
    check.className = "correct"    //Makes correct answer green
    c1One.className = "fa fa-check-circle fa-2x green"
    c11One.className = "fa fa-check-circle fa-2x green"
    c111One.className = "fa fa-check-circle fa-2x green"
}
    else{   //If button clicked is not correct, mark answer green, and clicked button red
        check.className = "incorrect"
        theAnswer.className = "correct"
        c1One.className= "fa fa-times-circle fa-2x red"
        c11One.className= "fa fa-times-circle fa-2x red"
        c111One.className= "fa fa-times-circle fa-2x red"
    }
    console.log(check)
    theAnswer.removeAttribute("onclick") //makes all buttons unclickable
    wrong.removeAttribute("onclick")
    console.log(check)
    c1.style.display = "none"
    openQ2()
}

//same as last function but with more buttons//
function checkAnswer2(check){
    let theAnswer = document.getElementById("Sunday")
    let wrong = document.getElementById("Thursday")
    let wrong2 = document.getElementById("Wednesday")
    console.log(check.id)
    if(check.id == "Sunday"){
    check.className = "correct"
    c22Two.className = "fa fa-check-circle fa-2x green"
    c222Two.className = "fa fa-check-circle fa-2x green"  
  
}
    else{
        check.className = "incorrect"
        theAnswer.className = "correct"
        c22Two.className = "fa fa-times-circle fa-2x red"
        c222Two.className = "fa fa-times-circle fa-2x red"
    }
    c2.style.display = "none"
    openQ3()
    theAnswer.removeAttribute("onclick")
    wrong.removeAttribute("onclick")
    wrong2.removeAttribute("onclick")  
}

function checkAnswer3(check){
    let theAnswer = document.getElementById("Friday")
    let wrong = document.getElementById("Tuesday")
    let wrong2 = document.getElementById("Monday")
    let wrong3 = document.getElementById("Saturday")
    console.log(check.id)
    if(check.id !== "Friday"){
    check.className = "incorrect"
    theAnswer.className = "correct"
    c333Three.className = "fa fa-times-circle fa-2x red"
    }
    else{
        check.className = "correct"
        c333Three.className="fa fa-check-circle fa-2x green"
    }
    theAnswer.removeAttribute("onclick")
    wrong.removeAttribute("onclick")
    wrong2.removeAttribute("onclick")
    wrong3.removeAttribute("onclick")

    myFunction()
}
var borders = document.getElementsByClassName("divide")
//functions to display questions as required//
function openQ1(){
    let Q1 = document.getElementById("question1")
    Q1.style.display = "block"
}

function openQ2(){
    let Q2 = document.getElementById("question2")
    Q2.style.display = "block"
    borders[0].style.display = "block"
}

function openQ3(){
    let Q3 = document.getElementById("question3")
    Q3.style.display = "block"
    borders[1].style.display = "block"
}

function daySound(sound){
    let noise = document.getElementById(sound)
    console.log(sound)
    console.log(noise)
    noise.play()
}
var question = [0,"3","3","3"]
var tut = {
    One1: "W",
    One2: "e",
    One3: "a",
    Two1: "a",
    Two2: "r",
    Two3: "y",
    Thr1: "T",
    Thr2: "e",
    Thr3: "d",
}
var whatQuestion = 0
function jump(field, autoMove){
    if (field.value.length >= field.maxLength){
        var answerKey = field.id.slice(field.id.length-4)
        whatQuestion = question[field.id.slice(field.id.length-5,field.id.length-4)]
    if(field.id.slice(field.id.length-1) !== 1){
        if(field.value !== tut[answerKey]){
        field.className = "fillInBlank red ul"
    }
    else{
        field.className = "fillInBlank green"
    }
}
    if(field.id.slice(field.id.length-1) == 1){
        if(field.value !== tut[answerKey]){
            field.className = "fillInBlankCapital red ul"
        }
        else{
            field.className = "fillInBlankCapital green"
        }
    }
    
    if(field.id.slice(field.id.length-1) !== question[field.id.slice(field.id.length-5, field.id.length-4)]){
    document.getElementById(autoMove).focus()
    }
    else{
        field.blur()
    }
}
}
//Carter match (section 7)//
var y1 = 0
var y2 = 0
var cc1 = []
var cc2 = []
function click1(dayClick){
	console.log(dayClick.id.slice(dayClick.id.length-3))
	console.log(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3))
	if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) !== "A"){
	y1=dayClick.id.slice(dayClick.id.length-3)
	y1 = parseInt(y1)
	cc1 = dayClick.className
	dayClick.removeAttribute("onclick")
	dayClick.className = "disable"
	}
else if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) == "A"){
	console.log("helo")
	y2 = dayClick.id.slice(dayClick.id.length-3)
	y2 = parseInt(y2)
	cc2 = dayClick.className
	dayClick.removeAttribute("onclick")
	dayClick.className = "disable"
}
console.log(cc1+ ":" +cc2)
console.log(y1 + ":" + y2)
if (y1 !== 0 && y2 !== 0){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//Change color here//
if (cc1 !== cc2){
ctx.strokeStyle = "rgb(255,0,0)"
}
else{
ctx.strokeStyle = "rgb(0,255,0)"
}
ctx.beginPath();
ctx.moveTo(0, y1);
ctx.lineTo(200, y2);
ctx.stroke();
y1 = 0
y2 = 0
}
}
// function resetLines(){
// 	var par = document.getElementsByClassName("disable")
// 	console.log(par)

// 	for(let quick = 0; quick<14; quick++){
// 		console.log(par[quick] + " : " + helpdays[quick] + " : " +quick)
// 		par[quick].className=par[quick].id
// 	}
// 	console.log(par)
// 	var canva = document.getElementById("myCanvas")
// 	const context = canva.getContext('2d');
// context.clearRect(0, 0, canva.width, canva.height);
//}
// reset class of the buttons//


//Carter drag and drop (section 5)//
function allowDrop(ev) {
    ev.preventDefault();
  }
  var checkStore = 0
  function autostuff(){
      console.log("running")
      for(let bigI = 0; bigI <2; bigI++){
      for(let i = 0; i<50; i++){
  var rng = Math.random()*10
  rng = Math.floor(rng)
  if(rng > 7 || rng == 0 || rng == checkStore){
      i-1
  }
  else{
      i = 500
  }
  console.log(rng)
  }
  let appendThis = document.getElementById("drag" + rng)
  let appendHere = document.getElementById("div" + rng)
  document.getElementById("drag" + rng).parentElement.style.visibility = "hidden"
  document.getElementById("div" + rng).appendChild(document.getElementById("drag" + rng))
  document.getElementById("div" + rng).className = "dropsCorrect"
  document.getElementById("drag" + rng).removeAttribute("ondragstart")
  document.getElementById("drag" + rng).removeAttribute("draggable")
  
  
  checkStore = rng
  rng = 0
  }
  }
  autostuff()
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.parentElement.className)
    console.log(ev.target.parentElement.hasAttribute("ondrop"))
    if((ev.target.parentElement.className == "drops" || ev.target.parentElement.className == "dragDiv") && ev.target.parentElement.hasAttribute("ondrop") == false){
        ev.target.parentElement.setAttribute("ondrop","drop(event)")
        ev.target.parentElement.style.border = "1px solid #aaaaaa"
        if(ev.target.parentElement.hasAttribute("ondragover") == false){
            ev.target.parentElement.setAttribute("ondragover","allowDrop(event)")
            ev.target.parentElement.style.border = "2px solid black"
        }
      }
      if(ev.target.parentElement.className == "dragDiv" || ev.target.parentElement.className.slice(0, ev.target.parentElement.className.length-1) == "dragDiv drag"){
          ev.target.parentElement.className = "dragDiv " + ev.target.id
          ev.target.parentElement.id = "dragDropDistance" + ev.target.id.slice(ev.target.length-1)
          console.log(document.getElementsByClassName("drag1"))
      }
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target.firstChild)
    if(ev.target.id.slice(ev.target.id.length-1) !== ev.target.firstChild.id.slice(ev.target.firstChild.id.length-1)){
        ev.target.style.border = "2px solid red"
    }
    else{
        ev.target.style.border = "2px solid greenyellow"
        ev.target.className = "dropsCorrect"
         ev.target.firstChild.removeAttribute("ondragstart")
      ev.target.firstChild.draggable = "false"
      console.log(ev.target.firstChild.id)
      document.getElementsByClassName("dragDiv " + ev.target.firstChild.id)[0].style.visibility = "hidden"
      console.log(document.getElementsByClassName("dragDiv").length)
      if(document.getElementsByClassName("dropsCorrect").length == 7){
          let confirm = document.createElement("p")
          confirm.setAttribute("id","confirmMessage")
          confirm.innerHTML = "Correct!"
          document.getElementById("dragAndDropContainer").appendChild(confirm)
          for(let k = 1; k<8; k++){
              console.log(document.getElementsByClassName("dragDiv drag" + k)[0])
              document.getElementsByClassName("dragDiv")[0].style.display = "none"
          }
      }
      }
    ev.target.removeAttribute("ondrop")
  }
  