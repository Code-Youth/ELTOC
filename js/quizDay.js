// var c1 = document.getElementById("checks1")
// var c2 = document.getElementById("checks2")
// var c3 = document.getElementById("checks3")
//  // Declaring the checkmark/X //
// var c1One = document.getElementById("checks1One")
// var c11One = document.getElementById("checks11One")
// var c111One = document.getElementById("checks111One")
// var c22Two = document.getElementById("checks22Two")
// var c222Two = document.getElementById("checks222Two")
// var c333Three = document.getElementById("checks333Three")
// function checkAnswer(check){           //Checks answer
//     let theAnswer = document.getElementById("Wednesday")
//     let wrong = document.getElementById("Monday")
//     console.log(check.id)
//     if(check.id == "Wednesday"){    //Checks to see if button clicked is "Wednesday"
//     check.className = "correct"    //Makes correct answer green
//     c1One.className = "fa fa-check-circle fa-2x green"
//     c11One.className = "fa fa-check-circle fa-2x green"
//     c111One.className = "fa fa-check-circle fa-2x green"
// }
//     else{   //If button clicked is not correct, mark answer green, and clicked button red
//         check.className = "incorrect"
//         theAnswer.className = "correct"
//         c1One.className= "fa fa-times-circle fa-2x red"
//         c11One.className= "fa fa-times-circle fa-2x red"
//         c111One.className= "fa fa-times-circle fa-2x red"
//     }
//     console.log(check)
//     theAnswer.removeAttribute("onclick") //makes all buttons unclickable
//     wrong.removeAttribute("onclick")
//     console.log(check)
//     c1.style.display = "none"
//     openQ2()
// }

// //same as last function but with more buttons//
// function checkAnswer2(check){
//     let theAnswer = document.getElementById("Sunday")
//     let wrong = document.getElementById("Wednesday")
//     let wrong2 = document.getElementById("Thursday")
//     console.log(check.id)
//     if(check.id == "Sunday"){
//     check.className = "correct"
//     c22Two.className = "fa fa-check-circle fa-2x green"
//     c222Two.className = "fa fa-check-circle fa-2x green"  
  
// }
//     else{
//         check.className = "incorrect"
//         theAnswer.className = "correct"
//         c22Two.className = "fa fa-times-circle fa-2x red"
//         c222Two.className = "fa fa-times-circle fa-2x red"
//     }
//     c2.style.display = "none"
//     openQ3()
//     theAnswer.removeAttribute("onclick")
//     wrong.removeAttribute("onclick")
//     wrong2.removeAttribute("onclick")  
// }

// function checkAnswer3(check){
//     let theAnswer = document.getElementById("Friday")
//     let wrong = document.getElementById("Monday")
//     let wrong2 = document.getElementById("Tuesday")
//     let wrong3 = document.getElementById("Saturday")
//     console.log(check.id)
//     if(check.id !== "Friday"){
//     check.className = "incorrect"
//     theAnswer.className = "correct"
//     c333Three.className = "fa fa-times-circle fa-2x red"
//     }
//     else{
//         check.className = "correct"
//         c333Three.className="fa fa-check-circle fa-2x green"
//     }
//     theAnswer.removeAttribute("onclick")
//     wrong.removeAttribute("onclick")
//     wrong2.removeAttribute("onclick")
//     wrong3.removeAttribute("onclick")

//     myFunction()
// }
// var borders = document.getElementsByClassName("divide")
// //functions to display questions as required//
// function openQ1(){
//     let Q1 = document.getElementById("question1")
//     Q1.style.display = "block"
// }

// function openQ2(){
//     let Q2 = document.getElementById("question2")
//     Q2.style.display = "block"
//     borders[0].style.display = "block"
// }

// function openQ3(){
//     let Q3 = document.getElementById("question3")
//     Q3.style.display = "block"
//     borders[1].style.display = "block"
// }

// //Carter match (section 7)//
// var y1 = 0
// var y2 = 0
// var cc1 = []
// var cc2 = []
// //Function runs onclick//
// function click1(dayClick){
// 	console.log(dayClick.id.slice(dayClick.id.length-3))
// 	console.log(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3))
// 	//if button clicked does not have A in the id, the button is from the first column//
//     if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) !== "A" && y1==0){
// 	//sets y1 to the three numbers at the end of dayclick id (ex: 175)//
//         y1=dayClick.id.slice(dayClick.id.length-3)
// 	y1 = parseInt(y1)
// 	cc1 = dayClick.className
// 	//removing clickability from buttons//
//     dayClick.removeAttribute("onclick")
// 	dayClick.className = "disable"
// 	}
//     //Same as above but if button clicked is from column 2//
// else if(dayClick.id.slice(dayClick.id.length-4,dayClick.id.length-3) == "A" && y2==0){
// 	console.log("helo")
// 	y2 = dayClick.id.slice(dayClick.id.length-3)
// 	y2 = parseInt(y2)
// 	cc2 = dayClick.className
// 	dayClick.removeAttribute("onclick")
// 	dayClick.className = "disable"
// }
// console.log(cc1+ ":" +cc2)
// console.log(y1 + ":" + y2)
// if (y1 !== 0 && y2 !== 0){
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// //Change color here//
// if (cc1 !== cc2){
// ctx.strokeStyle = "rgb(255,0,0)"
// }
// else{
// ctx.strokeStyle = "rgb(0,255,0)"
// }
// //Drawing line from (x,y) to (x,y)//
// ctx.beginPath();
// ctx.moveTo(0, y1);
// ctx.lineTo(document.getElementById("myCanvas").width, y2);
// ctx.stroke();
// //Reset y1 and y2//
// y1 = 0
// y2 = 0
// }
// }


//need to pick x days, randomize which day is the answer and push to answer array, attach sound to first to letters
var qq = 2
var quest = 1
var quizKey = []
var quizBank = []
var monthBank = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
var dayBank = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var dayzMonthz = 6
function startQuiz(){
    console.log(document.getElementById("startoButton"))
        if(document.getElementById("startoButton").className == "day"){
        dayzMonthz = 6
        dayBank = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    }
    else if(document.getElementById("startoButton").className == "month"){
        dayzMonthz = 11
        dayBank = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
    }
    document.getElementById("startoButton").removeAttribute("onclick")
    //setting the answers randomly//
    for(let i = 0; i<qq;i++){
        min = Math.ceil(0);
        max = Math.floor(dayzMonthz);
    let qSelections = Math.floor(Math.random()* (max - min + 1) + min);
    console.log(dayBank[qSelections])
    console.log(quizBank.includes(dayBank[qSelections]))
    if(quizBank.includes(dayBank[qSelections]) == true ){
        i-=1
        console.log(i)
    }
    else if(quizBank.includes(dayBank[qSelections]) == false){
        console.log("why")
    quizBank.push(dayBank[qSelections])
    console.log(qSelections)
}
    }
    console.log(quizBank)
    //Choosing which will be the answer randomly//
    let rnd = Math.floor(Math.random()*10)
    if(quest == 1){
    if(rnd <= 5){
        rnd = 0
    }
    else{
        rnd = 1
    }
}
else if(quest == 2){
    if(rnd <= 3){
        rnd = 0
    }
    else if(rnd >= 7){
        rnd = 2
    }
    else{
        rnd = 1
    }
}
else if(quest == 3){
    if(rnd == 0 || rnd == 1 || rnd == 2){
        rnd = 0
}
else if(rnd == 3 || rnd == 4 || rnd ==5){
    rnd = 1
}
else if(rnd == 6 || rnd == 7){
    rnd = 2
}
else if(rnd == 8 || rnd == 9 || rnd == 10){
    rnd = 3
}
}
    quizKey.push(quizBank[rnd])
    console.log(quizKey[0])
    let Aa = quizKey[quest - 1].slice(0,2)
    console.log(Aa)
    document.getElementById("play" + quest).setAttribute ("onclick","dayPlay(" + Aa + ")")
    for(let i = 0; i<document.getElementsByClassName("select" + quest).length;i++){
        document.getElementsByClassName("select" + quest)[i].innerHTML = quizBank[i]
        document.getElementsByClassName("select" + quest)[i].id = quizBank[i] + quest

    }
document.getElementById("question1").style.display = "block"
}

function czechAnswer(selected){
    if(selected.innerHTML !== quizKey[quest - 1]){
        selected.style.backgroundColor = "red"
        document.getElementById(quizKey[quest - 1] + quest).style.backgroundColor = "greenyellow"
        for(let i = 0; i<3;i++){
            console.log(document.getElementsByClassName("Check" + quest)[0])
        document.getElementsByClassName("Check" + quest)[0].className = "fa fa-times-circle fa-2x red"
    }
}
    else{
        selected.style.backgroundColor = "greenyellow"
        for(let i = 0; i<3;i++){
            console.log(document.getElementsByClassName("Check" + quest)[0])
        document.getElementsByClassName("Check" + quest)[0].className = "fa fa-check-circle fa-2x green"
    }
    }
    for(let i = 0; i<document.getElementsByClassName("select" + quest).length;i++){
        document.getElementsByClassName("select" + quest)[i].removeAttribute("onclick");
        document.getElementsByClassName("select" + quest)[i].style.cursor = "not-allowed";
        };
    if(quest !== 3){
        
        document.getElementById("checks" + quest).style.visibility = "hidden";
    quest+=1
    qq+=1
    quizBank.length = 0
document.getElementById("question" + quest).style.display = "block"
    startQuiz()
    }
}

/*
onclick="daySound('We')" style="background-color: greenyellow;"
<table style="margin-bottom:1em;">
							<tr class="playButton">
								<th onclick="daySound('We')" style="background-color: greenyellow;"><i
										style="margin-left: 5.5%; color:white" class="fa fa-play-circle fa-2x"></i>
								</th>
								<!--Button to play sound-->
							</tr>
						</table>

						<table class="border">
							<tr>
								<th onclick="checkAnswer(this)" class="answers0" id="Monday">Monday</th>
								<!--Possible answers-->
							</tr>
							<tr>
								<th onclick="checkAnswer(this)" class="answers1" id="Wednesday">Wednesday</th>
								<!--Possible answers-->
							</tr>
						</table>
						<br>
						<div style="width: 150px; text-align: center;" id="checks1">
							<!--Checkmarks for visual confirmation-->
							<i id="checks1One" class="fa fa-circle fa-2x"></i>
							<i class="fa fa-circle fa-2x"></i>
							<i class="fa fa-circle fa-2x"></i>
							<!-- <i class="fa fa-times-circle"></i>
		<i class="fa fa-check-circle"></i>-->
						</div>
                        */

                        function dayPlay(day){
                     day.play()
                        }