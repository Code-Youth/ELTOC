var wordBank = {
    "level0" : {
        "0" : "And",
        "1" : "The",
        "2" : "Red",
        "3" : "Her",
        "4" : "Him",
        "5" : "Ink",
        "6" : "Sad",
        "7" : "Ban",
        "8" : "Aid",
        "9" : "Hum",
        "10" : "Ten",
        "11" : "Zen",
        "12" : "Bin",
        "13" : "Use",
        "14" : "One",
        "15" : "Ran",
        "16" : "Run",
        "17" : "Sun",
        "18" : "Win",
        "19" : "Not"
    },
    "level1" : {
        "0" : "Wink",
        "1" : "Evil",
        "2" : "Fair",
        "3" : "When",
        "5" : "Ruse",
        "6" : "Fort",
        "7" : "This",
        "8" : "Link",
        "9" : "Hunt",
        "10" : "Four",
        "11" : "Used",
        "12" : "Moon",
        "13" : "Rind",
        "14" : "June",
        "15" : "July",
        "16" : "Life",
        "17" : "Song",
        "18" : "Said",
        "19" : "Wait"
    },
    "level2" : {
        "0" : "Think",
        "1" : "Yours",
        "2" : "Frost",
        "3" : "Weald",
        "4" : "Weild",
        "5" : "Reach",
        "6" : "Grand",
        "7" : "Piece",
        "8" : "Apart",
        "9" : "Enter",
        "10" : "Whisk",
        "11" : "Misty",
        "12" : "Sleep",
        "13" : "Mouse",
        "14" : "Goose",
        "15" : "Again",
        "16" : "Drink",
        "17" : "Hello",
        "18" : "Today",
        "19" : "Exact"
    },
    "level3" : {
        "0" : "Muster",
        "1" : "Export",
        "2" : "Untill",
        "3" : "Forest",
        "4" : "Dragon",
        "5" : "Hungry",
        "6" : "Foster",
        "7" : "Number",
        "8" : "Recall",
        "9" : "Friday",
        "10" : "Undone",
        "11" : "Forget",
        "12" : "Listen",
        "13" : "Mingle",
        "14" : "Folder",
        "15" : "Mantle",
        "16" : "Window",
        "17" : "Hunter",
        "18" : "Astral",
        "19" : "Sandle"
    },
    "level4" : {
        "0" : "Station",
        "1" : "Because",
        "2" : "Hostile",
        "3" : "Buzzard",
        "4" : "Mineral",
        "5" : "Speaker",
        "6" : "Warning",
        "7" : "Organic",
        "8" : "Library",
        "9" : "Highway",
        "10" : "Interim",
        "11" : "Caution",
        "12" : "Anxiety",
        "13" : "Passive",
        "14" : "Teacher",
        "15" : "Virtual",
        "16" : "Welcome",
        "17" : "Protest",
        "18" : "Gallery",
        "19" : "Machine"
    }
}
console.log('|||||||||||||||||THIS STUFF||||||||||||||||||')
var keyBoardWord = ""
wordPos = []
var keyboardPos = 0
let level = 0
var correct = 0
function newWord(){
    let wordRNG = Math.floor(Math.random()*20)
    let thisLevel = wordBank["level" + level]
    keyBoardWord = thisLevel[wordRNG]
    console.log(keyBoardWord)
    wordPos = keyBoardWord.split("")
    for(let i = 0; i < wordPos.length; i++){
        let kLetter = $("<span></span>").text(wordPos[i]).attr("id",`letter${i}`)
    $(".kBW").append(kLetter)
    }
}
newWord()
function keyboard(pressedKey){
    console.log($(pressedKey).children()[0].innerHTML)
    if($(pressedKey).children()[0].innerHTML == wordPos[keyboardPos]){
        $(`#letter${keyboardPos}`).attr("style","color: green")
        correct += 1
    }else{
        $(`#letter${keyboardPos}`).attr("style","color: red")
    }
    keyboardPos+=1
    if(keyboardPos > 0){
        for(let i = 0; i<26;i++){
        let changeKey = $(".keys").children()[i].innerHTML
        let to = changeKey.toLowerCase()
        $(".keys").children()[i].innerHTML = to
        }
    }
    if(keyboardPos == wordPos.length){
        level+=1
        $(".kBW").empty()
        keyboardPos = 0
        for(let i = 0; i<26;i++){
            let changeKey = $(".keys").children()[i].innerHTML
            let to = changeKey.toUpperCase()
            $(".keys").children()[i].innerHTML = to
            }
            console.log(correct + ' ' + wordPos.length)
            console.log(sessionStorage.getItem("usedWords"))
            if(correct == wordPos.length){
                $("#keyboardScore").text(parseInt($("#keyboardScore").text()) + 1)
                if(sessionStorage.getItem("usedWords") == null){
                    let kObj = {
                        "0" : keyBoardWord
                    }
                sessionStorage.setItem("usedWords",JSON.stringify(kObj))
                }else{
                    console.log(Object.keys(JSON.parse(sessionStorage.getItem("usedWords"))).length)
                    let arrObj = Object.values(JSON.parse(sessionStorage.getItem("usedWords")))
                    arrObj.push(keyBoardWord)
                    console.log(arrObj)
                    let newArrObj = {}
                    for(let i = 0; i<arrObj.length; i++){
                        newArrObj[i] = arrObj[i] 
                    }
                    sessionStorage.removeItem("usedWords")
                    sessionStorage.setItem("usedWords",JSON.stringify(newArrObj))
                }
            }
            correct = 0
        newWord()
    }
}
console.log('|||||||||||||||||THIS STUFF||||||||||||||||||')
