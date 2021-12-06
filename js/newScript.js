var answerKey = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var posData = 0
var dato = []
var appendee = ""
var positionBank = []
var alphaBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pos = 0
var tB = document.getElementById("testBox")
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
var tut = { One1: "W", One2: "e", One3: "a", Two1: "a", Two2: "r", Two3: "y", Thr1: "T", Thr2: "e", Thr3: "d", For1: "c", For2: "b", For3: "r", Fiv1: "A", Fiv2: "u", Fiv3: "t", Six1: "a", Six2: "c", Six3: "h"}
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

  //<h6 style="letter-spacing: 3px;">abcdefghijklmnopqrstuvwxyz</h6>

//loop append alphabet, rngI decide position for fill in blank,
/*
<h6></h6>
*/

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
    let theAnswer = document.getElementById("February")
    let wrong = document.getElementById("July")
    console.log(check.id)
    if(check.id == "February"){    //Checks to see if button clicked is "Wednesday"
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
    let theAnswer = document.getElementById("September")
    let wrong = document.getElementById("January")
    let wrong2 = document.getElementById("December")
    console.log(check.id)
    if(check.id == "September"){
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
    let theAnswer = document.getElementById("August")
    let wrong = document.getElementById("June")
    let wrong2 = document.getElementById("April")
    let wrong3 = document.getElementById("May")
    console.log(check.id)
    if(check.id !== "August"){
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

var numSoundBank = ["zero","one","two","three","four","five","six","seven","eight","nine"]
var checkNum = []
var wpw = 0
var checkNumA = []
var wpwA = 0

function AnswerTheQuestionA(ww){
if(ww.innerHTML == ww.parentElement.firstElementChild.title){
    for(let c = 1; c<4; c++){
        ww.className = "correct"
    ww.parentElement.children[c].removeAttribute("onclick")
}
}
else{
    ww.className="incorrect"
    for(let c2 = 1; c2<4; c2++){
        if(ww.parentElement.children[c2].innerHTML == ww.parentElement.firstElementChild.title){
            ww.parentElement.children[c2].className = "correct"
        }
        ww.parentElement.children[c2].removeAttribute("onclick")

    }
}
}



function s2RngA(){
// let qBank = {one1:[1,2,3],two2:[4,5,6],three3:[7,8,9]}
    for(let s2i2 = 0; s2i2 < 10; s2i2++){
        //Rng for what position the playbutton should refrence for audio//
        let audioNumberA = Math.random()*10
        audioNumberA = Math.floor(audioNumberA)
        if(audioNumberA <= 3){
            audioNumberA = 0
        }
        else if(audioNumberA >= 4 && audioNumberA <= 7){
            audioNumberA = 1
        }
        else if(audioNumberA >= 8){
            audioNumberA = 2
        }
        //loops 3 times too randomize each 3 possible answers//
    for(let s2i = 0; s2i<3; s2i++){
    let numboidA = Math.random()*100
    numboidA = Math.floor(numboidA)
    //checking if number has been used for this question//
    if(checkNumA.includes(beta[numboidA]) == false && numboidA < 26){
    checkNumA.push(beta[numboidA])
    console.log(checkNumA)
    document.getElementsByClassName("s2NumA")[wpwA].innerHTML = beta[numboidA]
        console.log(wpwA)
    document.getElementsByClassName("s2NumA")[wpwA].id = "an" + beta[numboidA]
        wpwA+=1
    }
    else if((checkNumA[0] == "F" && checkNumA[1] == "A" && checkNumA[2] == "G") || (checkNumA[0] == "G" && checkNumA[1] == "A" && checkNumA[2] == "Y") || (checkNumA[0] == "C" && checkNumA[1] == "U" && checkNumA[2] == "M")){
        s2i-= 1
    }
    else{
        s2i -= 1
        console.log("issue" + s2i)
    }
}
//passNum is the argument that will decide what audio file to play//
passNum = checkNumA[audioNumberA]
if (passNum == undefined){
    console.log(audioNumberA)
    console.log("undefined at:" +s2i2)
}
//	console.log(passNum)
//adds onclick to play button
document.getElementById("playA" + s2i2).setAttribute("onclick","s2playsoundA(" + passNum + ")")
document.getElementById("playA" + s2i2).setAttribute("title",passNum)
if(checkNumA.length == 3){
console.log("= 3")
checkNumA.length = 0;
}
else if(checkNumA.length >3){
    console.log("> 3")
    checkNumA.length =0
}
}
}
function s2playsoundA(letter){
    l1 = letter.id
    document.getElementById(l1).play()
}
// 	console.log(document.getElementsByClassName("s2Num")[0].innerHTML)
// function AnswerTheQuestionN(numAnswer){
// 	console.log(numAnswer.parentElement.childNodes)
// 	let ax = numAnswer.parentElement.childNodes[1].title
// 	if(numAnswer.innerHTML == ax){
// 		numAnswer.className = "correct"
// 		for(let c = 1; c<11; c++){
// 			for(let c2 = 0; c2<3; c2++){
// 				console.log(c + " " + c2)
// 				console.log(document.getElementsByClassName("q" + c))
// 			document.getElementsByClassName("q" + c)[c2].removeAttribute("onclick")
// 	//  let y = numAnswer.parentElement.childNodes[c].id
// 	//  console.log("removing onclick for:" + numAnswer.className)
// 	// 	document.getElementById(y).removeAttribute("onclick")
// 	// 	console.log(document.getElementById(y))
// 	}
// }
// 	}
// 	else{
// 		numAnswer.className = "incorrect"
// 	}
// }

function AnswerTheQuestionN(ww){
if(ww.innerHTML == ww.parentElement.firstElementChild.title){
    for(let c = 1; c<4; c++){
        ww.className = "correct"
    ww.parentElement.children[c].removeAttribute("onclick")
}
}
else{
    ww.className="incorrect"
    for(let c2 = 1; c2<4; c2++){
        if(ww.parentElement.children[c2].innerHTML == ww.parentElement.firstElementChild.title){
            ww.parentElement.children[c2].className = "correct"
        }
        ww.parentElement.children[c2].removeAttribute("onclick")

    }
}
}



function s2RngN(){
// let qBank = {one1:[1,2,3],two2:[4,5,6],three3:[7,8,9]}
    for(let s2i2 = 0; s2i2 < 10; s2i2++){
        //Rng for what position the playbutton should refrence for audio//
        let audioNumberN = Math.random()*10
        audioNumberN = Math.floor(audioNumberN)
        if(audioNumberN <= 3){
            audioNumberN = 0
        }
        else if(audioNumberN >= 4 && audioNumberN <= 7){
            audioNumberN = 1
        }
        else if(audioNumberN >= 8){
            audioNumberN = 2
        }
        //loops 3 times too randomize each 3 possible answers//
    for(let s2i = 0; s2i<3; s2i++){
    let numboid = Math.random()*10
    numboid = Math.floor(numboid)
    //checking if number has been used for this question//
    if(checkNum.includes(numboid) == false){
    checkNum.push(numboid)
    document.getElementsByClassName("s2Num")[wpw].innerHTML = numboid
    document.getElementsByClassName("s2Num")[wpw].id = "an" + numboid
        wpw+=1
    }
    else{
        s2i -= 1
    }
}
//passNum is the argument that will decide what audio file to play//
passNum = checkNum[audioNumberN]
if (passNum == undefined){
    console.log(audioNumberN)
    console.log("undefined at:" +s2i2)
}
//adds onclick to play button
document.getElementById("play" + s2i2).setAttribute("onclick","s2playsoundN(" + passNum + ")")
document.getElementById("play" + s2i2).setAttribute("title",passNum)

checkNum.length = 0;
}
}
function load(){
    s2RngA()
    s2RngN()
    runtheSimulation()
}
function s2playsoundN(numSound){
    console.log(document.getElementById(numSoundBank[numSound]))
    document.getElementById(numSoundBank[numSound]).play()
}


  function runtheSimulation (){
    for(let rngI = 0; rngI < 5; rngI++){
        pos = Math.random()*100
        pos = Math.floor(pos)
        if (pos > 25 || pos == 0){
            rngI-=1
        }
		else if(dato.includes(pos)){
			rngI-=1
		}
        else{
			positionBank.push(rngI)
			dato.push(pos)	//pushing in order, not big to small
			console.log(pos)
            alphaBank[pos] = pos
        }
    }
	console.log(dato)
	dato.sort(function(a, b){return a - b});
	for(let h =0;h<5;h++){
	dato[h] = answerKey[dato[h]]
	}
	console.log(dato)
	for(let appendI = 0; appendI<26;appendI++){
		if(typeof alphaBank[appendI] == "string"){
		appendee = document.createElement("p")
		appendee.setAttribute("style","display: inline; margin-left: 10px; font-size: 150%")
		appendee.innerHTML = alphaBank[appendI]
		}
		else{
			appendee = document.createElement("input")
			appendee.setAttribute("maxLength","1")
			appendee.setAttribute("type","text")
			appendee.setAttribute("onkeyup","jumpCheck(this)")
			appendee.setAttribute("style","display: inline; margin-left: 10px; font-size: 150%; width: 3%; border-bottom: 1px solid black; text-align: center")
			appendee.setAttribute("id","Position" + posData)
			posData+=1
		}
		tB.appendChild(appendee)
		
	}

}
function jumpCheck(cH){
	if(cH.value.length >= cH.maxLength){
		console.log(dato[cH.id.slice(cH.id.length-1)])
		if(cH.value == dato[cH.id.slice(cH.id.length-1)]){
		cH.style.color = "yellowGreen"
		}
		else{
			cH.style.color = "red"
		}
		let next = cH.id.slice(cH.id.length-1)
		next = parseInt(next)
		next+=1
	
		console.log(next)
		if(next !== 5){
		document.getElementById("Position" + next).focus()
		}
		else{
			document.getElementById("Position4").blur()
		}
	}
}
runtheSimulation()
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

function order_1(item, autoMove) { // '' references the entire input, autoMove is the ID of the next input box
    if (item.value == 'A' || item.value=='a') {
        item.className='right_order', item.setAttribute('readonly','disabled' )
    }
    else {
        item.className='wrong_order'
    }
    if (item.value.length == item.maxLength) {
        document.getElementById(autoMove).focus()
    }
}
function order_2(item, autoMove) {
    if (item.value == 'B' || item.value=='b') {
        item.className='right_order', item.setAttribute('readonly','disabled' )
    }
    else {
        item.className='wrong_order'
    }
    if (item.value.length == item.maxLength) {
        document.getElementById(autoMove).focus()
    }
}

function order_3(item, autoMove) {
    if (item.value == 'C' || item.value=='c') {
        item.className='right_order', item.setAttribute('readonly','disabled' )
    }
    else {
        item.className='wrong_order'
    }
    if (item.value.length == item.maxLength) {
        document.getElementById(autoMove).focus()
    }
}

function order_4(item,) {
    if (item.value == 'D' || item.value=='d') {
        item.className='right_order', item.setAttribute('readonly','disabled' )
    }
    else {
        item.className='wrong_order'
    }
    if (item.value.length == item.maxLength) {
    }
}

/* How this function works?
It's focused around the two parameters, item and autoMove
item: It references the entire input box thanks to putting (this) in the function name
autoMove: It references the ID of the next input, I put in the second parameter of the function the ID of the next input in HTML

- The disabled attribute is have them not be able to change their answer

- The last line for the first three function is a document.getElement function where I add the focus method which goes to the next input (using 
    its parameter name automove), the reason I believe we had to use document.getElement here when normally we don't is because it's referencing
    something that is not attached to the function.
*/
