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

function daySound(sound){ //The parameter refers to the argument put into the function in the html (ex: 'Fr')
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


// Function for section 4 quiz table

// The fa icons at the bottom of the sec 4 table (for the purpose of referencing them)
let icon1 = document.querySelector('#ic1')
console.log(icon1)

let icon2 = document.querySelector('#ic2')
console.log(icon2)

let icon3 = document.querySelector('#ic3')
console.log(icon3)

let icon4 = document.querySelector('#ic4')
console.log(icon4)

// Reference to all the days in the table in row 1
let wrTu1 = document.querySelector('#wrTu1')
let wrTh1 = document.querySelector('#wrTh1')
let wrFr1 = document.querySelector('#wrFr1')
let riMo1 = document.querySelector('#riMo1')
// Reference to all the days in the table in row 2
let wrSa2 = document.querySelector('#wrSa2')
let wrSu2 = document.querySelector('#wrSu2')
let riTu2 = document.querySelector('#riTu2')
let wrMo2 = document.querySelector('#wrMo2')
// Reference to all the days row 3 of the table
let wrMo3 = document.querySelector('#wrMo3')
let wrSa3 = document.querySelector('#wrSa3')
let riWe3 = document.querySelector('#riWe3')
let wrTh3 = document.querySelector('#wrTh3')



// Changes the background color of the days in the tables
function answer2(item) {                                    // 'Item' refers to each day of the week table header
    if (item.className === 'wrong4') {                      // If the answer if wrong,
        item.className='backRed';                           // background turns red
    }
    else if (item.className ==='right4') { //If the answer is right,
        item.className='backGreen' //  background turn green
    };

//Change the circle icon below the table to indicate if person got answer right or wrong

    // This if statement is to change the first dark circle based on answer given in first row
    if (item.id == 'wrTu1' || item.id == 'wrTh1' || item.id == 'wrFr1') {  
        icon1.className = 'fa fa-times-circle fa-3x red'   // 1: Black circle changes to a red (X) 2: the color will be red 
    }
    else if (item.id == 'riMo1') {
        icon1.className = 'fa fa-check-circle fa-3x green' // 1: X changes to check mark 2: the color will be green
    }
    // This if statement is to change the second dark circle based on answer given in second row
    if (item.id === 'wrSu2' || item.id === 'wrSa2' || item.id === 'wrMo2') {
        icon2.className = 'fa fa-times-circle fa-3x red'
    }
    else if (item.id == 'riTu2') {
        icon2.className = 'fa fa-check-circle fa-3x green'
    }
    // This if statement is to change the third dark circle based on answer given in third row
    if (item.id == 'wrMo3' || item.id == 'wrSa3' || item.id == 'wrTh3') {
        icon3.className = 'fa fa-times-circle fa-3x red'
    }
    else if (item.id =='riWe3') {
        icon3.className = 'fa fa-check-circle fa-3x green'
    }
      // This if statement is to change the fourth dark circle based on answer given in fourth row
    if (item.id == 'wrMo4' || item.id == 'wrSu4' || item.id == 'wrTu4') {
        icon4.className = 'fa fa-times-circle fa-3x red'
    }
    else if (item.id == 'riFr4') {
        icon4.className = 'fa fa-check-circle fa-3x green'
    }

// Making boxes unclickable after answering, and highlighting right answer

    // Making first row unclickable after first attempt 
    if (icon1.className == 'fa fa-times-circle fa-3x red' || icon1.className == 'fa fa-check-circle fa-3x green') {
       wrTu1.className = 'noclick backRed' , wrTh1.className = 'noclick backRed' , wrFr1.className = 'noclick backRed' , riMo1.className = 'noclick backGreen'
        //Had to add background color because it disappears when I change classname to noclick
    }
    // Making second row unclickable after first attempt
    if (icon2.className == 'fa fa-times-circle fa-3x red' || icon2.className == 'fa fa-check-circle fa=3x green') {
        wrSa2.className = 'noclick' , wrSu2.className = 'noclick' , riTu2.className = 'noclick' , wrMo2.className = 'noclick'
    }
    // Making third row unclickable after first attempt and change color only of box clicked and right answer
    if (item.id == 'wrMo3') {
        item.className = 'noclick backRed' , wrSa3.className='noclick' , riWe3.className='noclick backGreen', wrTh3.className='noclick'
    }
    else if (item.id == 'wrSa3') {
        item.className = 'noclick backRed' , riWe3.className='noclick backGreen', wrTh3.className='noclick' , wrMo3.className = 'noclick'
    }
    else if (item.id == 'wrTh3') {
        item.className = 'noclick backRed' , riWe3.className='noclick backGreen', wrSa3.className='noclick' , wrMo3.className = 'noclick'
    }
    else if (item.id == 'riWe3') {
        item.className = 'noclick backGreen' , wrTh3.className='noclick',  wrSa3.className='noclick' , wrMo3.className = 'noclick'
    }
    

    // This function is a very good example of the difference between 'id' and 'class'
    // Through the use of class, we were able to change all 12 wrong answers to red with just two lines and 1 class specified
    // This caused problems with changing the icon as it needed to be changed by row by row

}// end of function

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
      for(let bigI = 0; bigI <5; bigI++){
          //i is set to run until rng is less than 7//
      for(let i = 0; i<50; i++){
  var rng = Math.random()*100
  rng = Math.floor(rng)
  if(rng > 12 || rng == 0 || rng == checkStore){
      i-1
  }
  else{
      i = 500
  }
  console.log(rng)
  }
//Appending the randomized days and modifying the empty divs they leave behind//
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
  var correctAgain = 4
  var correctId = []
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target.firstChild)
    if(ev.target.title !== ev.target.firstChild.title){
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
      if(correctAgain == 12){
    
          let confirm = document.createElement("p")
          confirm.setAttribute("id","confirmMessage")
          confirm.innerHTML = "Correct!"
          document.getElementById("dragAndDropContainer").appendChild(confirm)
          for(let k = 0; k<11; k++){
              console.log(document.getElementsByClassName("dragDiv " + correctId[k])[0])
              document.getElementsByClassName("dragDiv " + correctId[k])[0].style.display = "none"
              for(let aut = 0; aut<5; aut++){
                  document.getElementsByClassName("dragDiv " + autoId[aut])[0].style.display = "none"
              }
            }
      }
      }
    ev.target.removeAttribute("ondrop")
  }  