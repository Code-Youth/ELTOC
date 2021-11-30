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

function daySound(sound){
    let noise = document.getElementById(sound)
    console.log(sound)
    console.log(noise)
    noise.play()
}
var question = [0,"3","3","3","3"]
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
    For1: "c",
    For2: "b",
    For3: "r",
    Fiv1: "A",
    Fiv2: "u",
    Fiv3: "t",
    Six1: "a",
    Six2: "c",
    Six3: "h"
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
//Function runs onclick//
function click1(dayClick){
	console.log(dayClick.id.slice(dayClick.id.length-3))
	console.log(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3))
	//if button clicked does not have A in the id, the button is from the first column//
    if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) !== "A" && y1==0){
	//sets y1 to the three numbers at the end of dayclick id (ex: 175)//
        y1=dayClick.id.slice(dayClick.id.length-3)
	y1 = parseInt(y1)
	cc1 = dayClick.className
	//removing clickability from buttons//
    dayClick.removeAttribute("onclick")
	dayClick.className = "disable"
	}
    //Same as above but if button clicked is from column 2//
else if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) == "A" && y2==0){
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
//Drawing line from (x,y) to (x,y)//
ctx.beginPath();
ctx.moveTo(0, y1);
ctx.lineTo(189, y2);
ctx.stroke();
//Reset y1 and y2//
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
//Stops default browser behaviour//
function allowDrop(ev) {
    ev.preventDefault();
  }
  var checkStore = 0
  var autoNums = 0
  autoId = []
  //Randomizes which days are auto completed on page load//
  function autostuff(){
      console.log("running")
      //bigI runs for 2 iterations because 2 days are auto completed//
      for(let bigI = 0; bigI <2; bigI++){
          //i is set to run until rng is less than 7//
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
//Appending the randomized days and modifying the empty divs they leave behind//
  document.getElementById("drag" + rng).parentElement.style.visibility = "hidden"
  document.getElementById("drag" + rng).parentElement.setAttribute("class","dragDiv drag" + rng)
  autoId.push("drag" + rng)
  document.getElementById("div" + rng).appendChild(document.getElementById("drag" + rng))
  document.getElementById("div" + rng).className = "dropsCorrect"
  document.getElementById("drag" + rng).removeAttribute("ondragstart")
  document.getElementById("drag" + rng).removeAttribute("draggable")
  
autoNums += rng
  checkStore = rng
  rng = 0
  }
  }
  autostuff()
  autoNums -= checkStore
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
  var correctAgain = 2
  var correctId = []
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
      console.log(document.getElementsByClassName("dragDiv").length)
      correctAgain += 1
    console.log(correctAgain)
        correctId.push(ev.target.firstChild.id)
        console.log(correctId)
      if(correctAgain == 7){
    
          let confirm = document.createElement("p")
          confirm.setAttribute("id","confirmMessage")
          confirm.innerHTML = "Correct!"
          document.getElementById("dragAndDropContainer").appendChild(confirm)
          for(let k = 0; k<5; k++){
              console.log(document.getElementsByClassName("dragDiv " + correctId[k])[0])
              document.getElementsByClassName("dragDiv " + correctId[k])[0].style.display = "none"
              for(let aut = 0; aut<2; aut++){
                  document.getElementsByClassName("dragDiv " + autoId[aut])[0].style.display = "none"
              }
            }
      }
      }
    ev.target.removeAttribute("ondrop")
  }
  