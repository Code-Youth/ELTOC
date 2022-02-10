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


var s3DoM = 0
var tempAns = ""
var letterRng = 0
var letters = []
var removeKey = []
var s3q = []
var title = ""
                        function pickADay(){
                            if(document.getElementById("s3Check").title == "Days"){
                                s3DoM = 6
                            }
                            else{
                                s3DoM = 11
                            }
                            for(let i = 0; i<3; i++){
                            s3Min = Math.ceil(0);
                            s3Max = Math.floor(s3DoM);
                        let sec3Rng = Math.floor(Math.random()* (s3Max - s3Min + 1) + s3Min);
                        if(document.getElementById("s3Check").title == "Days"){
                            tempAns = dayBank[sec3Rng]
                        }
                        else{
                            tempAns = monthBank[sec3Rng]
                        }
                         letters = tempAns.split("");
                        s3Min1 = Math.ceil(2);
                            s3Max1 = Math.floor(tempAns.length - 3);
                         amountRng = Math.floor(Math.random()* (s3Max1 - s3Min1 + 1) + s3Min1);
                         console.log(amountRng)

                         for(let k = 0; k<amountRng;k++){
                            s3Min2 = Math.ceil(0);
                            s3Max2 = Math.floor(tempAns.length - 1);
                         removeLetter = Math.floor(Math.random()* (s3Max2 - s3Min2 + 1) + s3Min2);
                         console.log(removeKey.includes(letters[removeLetter]))
                         if(removeKey.includes(letters[removeLetter])!== true){
                         console.log(removeLetter)
                         removeKey.push(letters[removeLetter])
                         console.log(removeKey)
                         console.log(letters)
                         console.log(tempAns)
                         }
                         else{
                             k-1
                         }
                         
                        }
                       let currentQ = document.getElementsByClassName("sec3Form")[i]

                       let s3h5 = $("<h5></h5>").text("<Hint>").attr({"id":tempAns,"class":"Hint","style":"width: fit-content; color: darkgray;"})
                       $(s3h5).on("mouseenter",(event)=>{
                           console.log($(event.target).text())
                           $(event.target).text($(event.target).attr("id"))
                       })
                       $(s3h5).on("mouseleave",(event)=>{
                        $(event.target).text("<Hint>")
                       })
                        $(currentQ).append(s3h5)
                       for(let g = 0; g<letters.length;g++){
                           if(removeKey.includes(letters[g]) == false){
                               var app = document.createElement("p")
                               app.setAttribute("class","notinputs")
                               app.innerHTML = letters[g]
                           }
                           else{
                               var app = document.createElement("input")
                               app.setAttribute("class","inputs")
                               app.setAttribute("title",g)
                               app.setAttribute("maxLength","1")
                               app.setAttribute("id","s3Question" + (i))
                               app.setAttribute("onkeyup","s3Czech(this)")
                           }
                           currentQ.appendChild(app)
                       }
                       s3q.push(tempAns)
                         removeKey.length = 0
                    }
                        
                                        }
                    pickADay()


                    function s3Czech(ttle){
                        if (ttle.value.length >= ttle.maxLength){
                            console.log(document.getElementsByClassName("inputs"))
                        var arr = [].slice.call(document.getElementsByClassName("inputs"));
                        console.log(arr)
                        console.log(arr.indexOf(ttle))
                        console.log(ttle)
                        console.log(s3q)
                        console.log(s3q[ttle.id.slice(ttle.id.length-1)])
                        console.log(ttle.value)
                        console.log(s3q[ttle.id.slice(ttle.id.length-1)].charAt(ttle.title))
                        if(ttle.value == s3q[ttle.id.slice(ttle.id.length-1)].charAt(ttle.title)){
                            console.log("huzzah")
                            ttle.style.color = "greenyellow"
                        }
                        else{
                            ttle.style.color = "red"
                        }
                        let thisIndex = arr.indexOf(ttle)
                        if(document.getElementsByClassName("inputs")[thisIndex + 1].id == ttle.id){
                        document.getElementsByClassName("inputs")[thisIndex + 1].focus()
                        }
                    }
                }
                    //if the input's title == index of s3q[question]{
                    //   correct
                    // } 

                    //Drag and Dorp
                                          //<h5 class="dNDText" id="drag1" draggable="true" ondragstart="drag(event)">Tuesday</h5>
var dADBank = []    //Shuffled array
var autoArr = []    //Days/Months chosen to be completed on page load
var autoPos = 0     //Counter to check which index of autoArr to use
var three = 3       //Counter to check how many days/months are chosen to be completed on page load
var checkCount = 0  //Counter to see if all answers are correct (To be removed)
var beingDragged = ""   //This is set when user is dragging an element. It tracks which element is being dragged. This is used because drag and drop API does'nt have a built in system for this
var tempClass = ""  //Unused
                function dragAndDropRNG(){
                    //This is where the code checks if it should use Day specific variables or Month ones
                    if(document.getElementById("s3Check").title == "Days"){
                        dADBank = dayBank
                        console.log(dADBank)
                    }
                    else{
                        dADBank = monthBank
                        three = 6
                    }
                    shuffle(dADBank)
                    let bankCheck = 0   //This variable and the loop ahead will check to see if the shuffled array and the original array have to many matching positions
                    for(let i = 0; i<dADBank.length;i++){
                        if(dADBank[i] == dayBank[i]){
                            bankCheck+=1
                        }

                        if((bankCheck == 3 && dADBank.length == 7) || (bankCheck == 6 && dADBank.length == 12)){
                            shuffle(dADBank)
                            i= -1
                        }
                    }
                    for(let i = 0;i<three;i++){
                         dNDMin = Math.ceil(0);
                            dNDMax = Math.floor(dADBank.length - 1);
                         autoIndex = Math.floor(Math.random()* (dNDMax - dNDMin + 1) + dNDMin);
                         //Checks to see if a day/month has been used in the autoArr yet
                         if(dADBank[autoIndex] !== "NA"){
                         autoArr[i] = dADBank[autoIndex]
                         dADBank[autoIndex] = "NA"  //Sets the chosen word to equal NA
                         }
                         else{
                             i-=1
                         }
                         console.log(autoArr)
                    }
                    for(let i=0; i<dADBank.length;i++){
                        if(dADBank[i] !== "NA"){    //If the position at i is not NA, Create the drag box normally
                       let dragText = document.createElement("h5")
                       dragText.setAttribute("class","dNDText")
                       dragText.setAttribute("id","drag" + (i+1))
                       dragText.setAttribute("draggable","true")
                       dragText.setAttribute("ondragstart","drag(event)")
                       dragText.innerHTML = dADBank[i]
                        document.getElementsByClassName("dragDiv")[i].appendChild(dragText)
                        document.getElementsByClassName("dragDiv")[i].id = dADBank[i] + "U"
                        }
                        else{   //if the position at i is NA, Append autoArr[autoPos] to the correct answer box.
                                    let auto = document.getElementById(autoArr[autoPos].slice(0,3) + "5")
                                    console.log(autoArr[autoPos].slice(0,3) + "5")
                                    let dragText = document.createElement("h5")
                       dragText.setAttribute("class","dNDText")
                       dragText.setAttribute("id","drag" + (i+1))
                       dragText.setAttribute("style","border: none")
                       auto.setAttribute("title","Correct")
                       dragText.innerHTML = autoArr[autoPos]
                       auto.appendChild(dragText)
                        document.getElementsByClassName("dragDiv")[i].style.display = "none"
                        autoPos+=1
                        }
                        }
                    }
                    console.log(dADBank)
                dragAndDropRNG()

                    /*In the next functions ev will be set as a parameter, ev refers to an event and its not important. What is important is that ev.target will refer
                    to different things depending on the function, i will comment what it refers to at the start of each function*/

                    function allowDrop(ev) {    //allowDrop just stops the browser from doing the default action, in this case dragging and dropping something would normally open the element in a new tab
                        ev.preventDefault();
                      }
                      
                      function drag(ev) {   //drag happens when you start dragging an element. ev.target refers to the element being dragged
                          console.log(ev.target.parentElement)
                          console.log(ev.target.parentElement.id)
                          console.log(ev.target)
                          beingDragged = ev.target.innerHTML    //specifying what is being dragged
                          tempClass = ev.target.id  //Unused
                          for(let i = 0; i<document.getElementsByClassName("dragDiv").length;i++){  
                              if(document.getElementsByClassName("dragDiv")[i].id !== beingDragged + "U"){  //Changes other answer boxes to grey to specify that you cant drop the element there
                                  document.getElementsByClassName("dragDiv")[i].style.backgroundColor = "grey"
                                  document.getElementsByClassName("dragDiv")[i].addEventListener('dragenter', dragEnter, false);
                                  document.getElementsByClassName("dragDiv")[i].addEventListener('dragleave', dragLeave, false);
                                  
                              }
                          }
                          ev.target.addEventListener('dragend', dragEnd, false);    //event listener for when the user stops dragging
                        ev.dataTransfer.setData("text", ev.target.id);
                    
                      }
            /*drop happens when an element is dropped in an element with the ondragover="allowDrop()" attribute. ev.target refers to the element that is having something
            dropped into it. ev.target.firstElementChild refers to the element being dropped into it*/
                      function drop(ev) {
                          if(ev.target.className == "dragDiv" || ev.target.className == "drops"){
                            if(ev.target.firstElementChild == null){    //drop will only happen if it is empty
                                console.log(ev.target.firstElementChild)
                            ev.preventDefault();
                        var data = ev.dataTransfer.getData("text");
                        ev.target.appendChild(document.getElementById(data));   //where the data is appended, previously ev.target.firstElementChild has refered to any element in the target, After this it will refer to the dropped element
                        console.log(ev.target.firstElementChild)
                        if(ev.target.firstElementChild.innerHTML.slice(0,3) + "5" == ev.target.id){ //Checking if the dropped element is correct.
                            ev.target.style.border = "2px solid greenyellow"
                            ev.target.firstElementChild.style.border = "none"
                            ev.target.firstElementChild.removeAttribute("ondragstart")  //Making the elements undraggable
                            ev.target.firstElementChild.draggable = false
                            ev.target.title = "Correct"
                            document.getElementById(ev.target.firstElementChild.innerHTML + "U").style.display = "none" //Hiding the elements origin box
                        }
                        else{
                            ev.target.style.border = "2px solid red"
                        }
                    for(let b = 0; b<document.getElementsByClassName("drops").length;b++){  //Checking if all answers are correct
                        if(document.getElementsByClassName("drops")[b].title == "Correct"){
                            checkCount+=1
                            console.log(checkCount)
                            console.log(document.getElementsByClassName("drops").length)
                        }
                    }
                    if(checkCount == document.getElementsByClassName("drops").length){
                                     document.getElementById("dragBox").style.display="none"
                    }
                    checkCount = 0
                    for(let i = 0; i<document.getElementsByClassName("dragDiv").length;i++){    //Changes the origin boxes back to white from grey after an element is dropped
                        if(document.getElementsByClassName("dragDiv")[i].id !== beingDragged + "U"){
                            document.getElementsByClassName("dragDiv")[i].style.backgroundColor = "white"
                        }
                    }
                      }
                    }
                }


                      function shuffle(array) {
                        let currentIndex = array.length,  randomIndex;
                      
                        // While there remain elements to shuffle...
                        while (currentIndex != 0) {
                      
                          // Pick a remaining element...
                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex--;
                      
                          // And swap it with the current element.
                          [array[currentIndex], array[randomIndex]] = [
                            array[randomIndex], array[currentIndex]];
                        }
                      
                        return array;
                      }

                      function dragDrop(ev){    //seperate ondrop function for the origin boxes
                          if(ev.target.id == beingDragged + "U"){
                        ev.preventDefault();
                        var data = ev.dataTransfer.getData("text");
                        ev.target.appendChild(document.getElementById(data));
                          }
                          else{
                            dndError()
                          }
                          
                      }
                      //This function will make sure that the dragDiv boxes turn back to white even if the user dosent drag the box anywhere//
                      //You can see dragEnd being called in an event listener in the drag function//
                      function dragEnd(e) 
                      {
                        for(let i = 0; i<document.getElementsByClassName("dragDiv").length;i++){
                            if(document.getElementsByClassName("dragDiv")[i].id !== beingDragged + "U"){
                                document.getElementsByClassName("dragDiv")[i].style.backgroundColor = "white"
                                document.getElementsByClassName("dragDiv")[i].removeEventListener('dragenter', dragEnter, false);
                                document.getElementsByClassName("dragDiv")[i].removeEventListener('dragleave', dragLeave, false);


                            }
                        }                    
                      };  
                      function dragEnter(e) 
{
   console.log("dragEnter")
};
function dragLeave(e)
{
    console.log("dragLeave")
}

function dndError() {
    // Get the snackbar DIV
    var bar = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    bar.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ bar.className = bar.className.replace("show", ""); }, 3000);
  }

                      //for future drag and drop api use, try using the dragStart and dragEnd event listeners//
                      