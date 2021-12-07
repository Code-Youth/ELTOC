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
    let wrong = document.getElementById("Wednesday")
    let wrong2 = document.getElementById("Thursday")
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
    let wrong = document.getElementById("Monday")
    let wrong2 = document.getElementById("Tuesday")
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
ctx.lineTo(document.getElementById("myCanvas").width, y2);
ctx.stroke();
//Reset y1 and y2//
y1 = 0
y2 = 0
}
}