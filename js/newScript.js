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

// This function plays the audio
function daySound(sound){ //The parameter 'sound' refers to the argument put into the daySound function in the html (ex: 'Fr')
    // and that argument is an ID of an audio tag with a recording of a month
    let noise = document.getElementById(sound)//Variable 'noise' will reference the argument 'sound'
    console.log(sound)
    console.log(noise)
    noise.play() //Noise is essentially an audio tag and we are telling it to play with the .play method
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


// Function for section 4 quiz table (days of the week)

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


// Making boxes unclickable after answering, and highlighting right answer

    // Making first row unclickable after first attempt and show wrong choice and right answer
    if (item.id == 'wrTu1') {
        item.className = 'noclick backRed' , riMo1.className = 'noclick backGreen' , wrTh1.className = 'noclick' , wrFr1.className = 'noclick'
    }
    else if (item.id == 'wrTh1') {
        item.className = 'noclick backRed' , riMo1.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrFr1.className = 'noclick'
    }
    else if (item.id == 'riMo1') {
        item.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrTh1.className = 'noclick' ,  wrFr1.className = 'noclick'
    }
    else if (item.id == 'wrFr1') {
        item.className = 'noclick backRed' , riMo1.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrTh1.className = 'noclick'
    }
  
        //Making the second row unclickable after first attempt and show wrong choice and right answer
    if (item.id == 'wrSu2') {
        item.className = 'noclick backRed' , riTu2.className = 'noclick backGreen' , wrSa2.className = 'noclick' , wrMo2.className = 'noclick'
    }
    else if (item.id == 'wrSa2') {
        item.className = 'noclick backRed' , riTu2.className = 'noclick backGreen' , wrMo2.className = 'noclick' , wrSu2.className = 'noclick'
    }
    else if (item.id == 'riTu2') {
        item.className = 'noclick backGreen' , wrMo2.className = 'noclick' , wrSa2.className = 'noclick' , wrSu2.className = 'noclick'
    }
    else if (item.id == 'wrMo2') {
        item.className = 'noclick backRed' , riTu2.className = 'noclick backGreen' , wrSu2.className = 'noclick' , wrSa1.className = 'noclick'
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
    //Making foruth row unclickable after first attempt and highlight only right and wrong answer
    if (item.id == 'wrMo4') {
        item.className = 'noclick backRed' , riFr4.className = 'noclick backGreen' , wrTu4.className = 'noclick' , wrSu4.className = 'noclick'
    }
    else if (item.id == 'riFr4') {
        item.className = 'noclick backGreen' , wrMo4.className = 'noclick' ,  wrTu4.className = 'noclick' , wrSu4.className = 'noclick'
    }
    else if (item.id == 'wrTu4') {
        item.className = 'noclick backRed' , riFr4.className = 'noclick backGreen' , wrMo4.className = 'noclick' , wrSu4.className = 'noclick'
    }
    else if (item.id == 'wrSu4') {
        item.className = 'noclick backRed' , riFr4.className = 'noclick backGreen' , wrMo4.className = 'noclick' , wrTu4.className = 'noclick'
    }
    

    // This function is a very good example of the difference between 'id' and 'class'
    // Through the use of class, we were able to change all 12 wrong answers to red with just two lines and 1 class specified
    // This caused problems with changing the icon as it needed to be changed by row by row

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


}// end of function

// Function for section 4 quiz table (Months of the year)

// The fa icons at the bottom of the sec 4 table (for the purpose of referencing them)
let icon1_2 = document.querySelector('#ic1_2')
console.log(icon1_2)

let icon2_2 = document.querySelector('#ic2_2')
console.log(icon2_2)

let icon3_2 = document.querySelector('#ic3_2')
console.log(icon3_2)

let icon4_2 = document.querySelector('#ic4_2')
console.log(icon4_2)

// The function that will be doing everything
function answer3(item) {
    
// Step 1: Highlight wrong and right answer when clicked, and make every other box unclickable in that row

    // The first row

        // When you click on February
if (item.id=='wrFe1') {
    item.className='noclick backRed' , wrDe1.className='noclick' , wrAu1.className='noclick' , riJa1.className='noclick backGreen'
}
        // When you click on December
if (item.id=='wrDe1') {
    item.className='noclick backRed' , wrFe1.className='noclick', wrAu1.className='noclick' , riJa1.className='noclick backGreen'
}
        // When you click on August
if (item.id=='wrAu1') {
    item.className='noclick backRed' , wrFe1.className='noclick' , wrDe1.className='noclick' , riJa1.className='noclick backGreen'
}
        // When you click on January
if (item.id=='riJa1') {
    item.className='noclick backGreen', wrFe1.className='noclick', wrDe1.className='noclick', wrAu1.className='noclick'
}

    // The second row

        //When you click on September
if (item.id=='wrSe2') {
    item.className='noclick backRed', wrMay2.className='noclick', riMar2.className='noclick backGreen', wrNo2.className='noclick'
}
        //When you click on May
if (item.id=='wrMay2') {
    item.className='noclick backRed', wrSe2.className='noclick', riMar2.className='noclick backGreen', wrNo2.className='noclick'
}
        // When you click on March
if (item.id=='riMar2') {
    item.className='noclick backGreen', wrSe2.className='noclick', wrMay2.className='noclick', wrNo2.className='noclick'
}
        // When you click on November
if (item.id=='wrNo2') {
    item.className='noclick backRed', wrSe2.className='noclick', wrMay2.className='noclick', riMar2.className='noclick backGreen'
}

    // The third row


        // When you click January
if (item.id=='wrJn3') {
    item.className='noclick backRed', riJl3.className='noclick backGreen', wrOc3.className='noclick', wrFe3.className='noclick'
}
       // When you click on July
if (item.id=='riJl3') {
    item.className='noclick backGreen', wrJn3.className='noclick', wrOc3.className='noclick', wrFe3.className='noclick'
}
        // When you click on October
if (item.id=='wrOc3') {
    item.className='noclick backRed', riJl3.className='noclick backGreen', wrJn3.className='noclick', wrFe3.className='noclick'
}
        // When you click on February
if (item.id=='wrFe3') {
    item.className='noclick backRed', riJl3.className='noclick backGreen', wrJn3.className='noclick', wrOc3.className='noclick'
}

    // The fourth row

        // When you click on August
if (item.id=='wrAu4') {
    item.className='noclick backRed', wrMar4.className='noclick', riOc4.className='noclick backGreen', wrJa4.className='noclick'
}
        // When you click on March
if (item.id=='wrMar4') {
    item.className='noclick backRed', wrAu4.className='noclick', riOc4.className='noclick backGreen', wrJa4.className='noclick'
}
        // When you click on October
if (item.id=='riOc4') {
    item.className='noclick backGreen', wrAu4.className='noclick', wrMar4.className='noclick', wrJa4.className='noclick'
}
        //When you click on Janurary
if (item.id=='wrJa4') {
    item.className='noclick backRed', wrAu4.className='noclick', wrMar4.className='noclick', riOc4.className='noclick backGreen'
}
    

//Step 2: Show how many answer they got right and wrong at the bottom of the table

    // Results from the first row
if (item.id=='riJa1') {
    icon1_2.className='fa fa-check-circle fa-3x green' // Could have created a class instead of typing all this out
}
else if (item.id=='wrFe1'||item.id=='wrDe1'||item.id=='wrAu1') {
    icon1_2.className='fa fa-times-circle fa-3x red'
}
    // Resutls from the second row
  
if (item.id=='riMar2') {
    icon2_2.className='fa fa-check-circle fa-3x green'
}
else if(item.id=='wrSe2'||item.id=='wrMay2'||item.id=='wrNo2') {
    icon2_2.className='fa fa-times-circle fa-3x red'
}
    // Results from the third row
 
if (item.id=='riJl3') {
    icon3_2.className='fa fa-check-circle fa-3x green'
}
else if (item.id=='wrJn3'||item.id=='wrOc3'||item.id=='wrFe3') (
    icon3_2.className='fa fa-times-circle fa-3x red'
)

    // Results from the fourth row
if (item.id=='riOc4') {
    icon4_2.className='fa fa-check-circle fa-3x green'
}
else if (item.id=='wrAu4'||item.id=='wrMar4'||item.id=='wrJa4') {
    icon4_2.className='fa fa-times-circle fa-3x red'
}
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
//   document.getElementById("drag" + rng).parentElement.style.visibility = "hidden"
//   document.getElementById("drag" + rng).parentElement.setAttribute("class","dragDiv drag" + rng)
//   autoId.push("drag" + rng)
//   document.getElementById("div" + rng).appendChild(document.getElementById("drag" + rng))
//   document.getElementById("div" + rng).className = "dropsCorrect"
//   document.getElementById("drag" + rng).removeAttribute("ondragstart")
//   document.getElementById("drag" + rng).removeAttribute("draggable")
  
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

//   Page 3: Function for exercise 3 - Writing letter from audio

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')


// The function is saying that if the what the person types in is equal to the uppcercase or lowercase letter heard in the audio,
// the black circle green and if it isn't, turn it red
function EX3_1 () {
    if (Let1.value=='A'||Let1.value=='a') {
        iconP3_1.className='fa fa-check-circle fa-3x green', btn1.className='noclick'
    }
    else {
        iconP3_1.className='fa fa-times-circle fa-3x red' , btn1.className='noclick'
    }
}

function EX3_2 () {
    if (Let2.value=='F'||Let2.value=='f') {
        iconP3_2.className='fa fa-check-circle fa-3x green', btn2.className='noclick'
    }
    else {
        iconP3_2.className='fa fa-times-circle fa-3x red' , btn2.className='noclick'
    }
}

function EX3_3 () {
    if (Let3.value=='R'||Let3.value=='r') {
        iconP3_3.className='fa fa-check-circle fa-3x green', btn3.className='noclick'
    }
    else {
        iconP3_3.className='fa fa-times-circle fa-3x red' , btn3.className='noclick'
    }
}

function EX3_4 () {
    if (Let4.value=='W'||Let4.value=='w') {
        iconP3_4.className='fa fa-check-circle fa-3x green', btn4.className='noclick'
    }
    else {
        iconP3_4.className='fa fa-times-circle fa-3x red' , btn4.className='noclick'
    }
}

// Page 3: Function for exercise 4 - Write letters in the right order

function order_1(field, autoMove) {
    if (field.value == 'A' || field.value=='a') {
        field.className='right_order', field.setAttribute('readonly','disabled' )
    }
    else {
        field.className='wrong_order'
    }
    if (field.value.length == field.maxLength) {
        document.getElementById(autoMove).focus()
    }
}
function order_2(field, autoMove) {
    if (field.value == 'B' || field.value=='b') {
        field.className='right_order', field.setAttribute('readonly','disabled' )
    }
    else {
        field.className='wrong_order'
    }
    if (field.value.length == field.maxLength) {
        document.getElementById(autoMove).focus()
    }
}

function order_3(field, autoMove) {
    if (field.value == 'C' || field.value=='c') {
        field.className='right_order', field.setAttribute('readonly','disabled' )
    }
    else {
        field.className='wrong_order'
    }
    if (field.value.length == field.maxLength) {
        document.getElementById(autoMove).focus()
    }
}

function order_4(field,) {
    if (field.value == 'D' || field.value=='d') {
        field.className='right_order', field.setAttribute('readonly','disabled' )
    }
    else {
        field.className='wrong_order'
    }
    if (field.value.length == field.maxLength) {
    }
}




