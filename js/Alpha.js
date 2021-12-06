var beta = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
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
    document.getElementsByClassName("s2NumA")[wpwA].innerHTML = beta[numboidA]
    document.getElementsByClassName("s2NumA")[wpwA].id = "an" + beta[numboidA]
        wpwA+=1
    }

    else{
        s2i -= 1
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
checkNumA.length = 0;
}
else if(checkNumA.length >3){
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
}
function s2playsoundN(numSound){
    document.getElementById(numSoundBank[numSound]).play()
}