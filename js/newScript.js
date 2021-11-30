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

function daySound(sound){ //The parameter refers to the argument put into the function in the html (ex: 'Fr')
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

<<<<<<< Updated upstream
//Change the circle icon below the table to indicate if person got answer right or wrong
=======

// Making boxes unclickable after answering, and highlighting right answer

    // Making first row unclickable after first attempt and show wrong choice and right answer
    // wrTu1
    // wrTh1
    // riMo1
    // wrFr1
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
    

//Change the circle icon below the table to correct or wrong
>>>>>>> Stashed changes

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
  