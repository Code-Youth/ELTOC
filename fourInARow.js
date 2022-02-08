	// var aBank = {

	// }
	// var dispBank = []
	// function rng4Majid(){
  	// 		let randomPos =  Math.floor(Math.random() * (22 - 0) + 0);
	// 		  aBank["0"] = alphaBank[randomPos]
	// 		  aBank["1"] = alphaBank[randomPos + 1]
	// 		  aBank["2"] = alphaBank[randomPos + 2]
	// 		  aBank["3"] = alphaBank[randomPos + 3]
	// 		  console.log(ansBank)
	// 		dispBank = Object.values(aBank)
    //         for(let i = 0; i < 2; i++){
    //         console.log(dispBank)
    //         shuffle(dispBank)
    //         console.log(dispBank)
    //         let countoid = 0
    //             for(let g = 0; g < 4; g++){
    //         if(dispBank[g] == aBank[g]){
    //             console.log("FOUROURFOUR")
    //             countoid += 1
    //         }
    //     }
    //     console.log(countoid)
    //     if(countoid > 2){
    //         i = 0
    //     }else{
    //         break
    //     }
    //         }
    //         for(let i = 0; i < 4; i++){
    //             let fy = $("<p></p>").text(dispBank[i])
    //             console.log(dispBank[i])
    //             $(fy).attr({"onclick":"playSound2("+ dispBank[i] +")","style":"display:inline; margin-right: 1em"})
    //             $(fy).hover(()=>{
    //                 console.log()
    //                 $(fy).css({"color":"greenyellow","cursor":"pointer"})
    //             },()=>{
    //                 $(fy).css({"color":"black","cursor":"initial"})
    //             })
    //             $(".fourLetters").append(fy)
    //         }
    //     }
    // rng4Majid()
 	// function checkLet(thisLetter){
	// 	if($(thisLetter).val() !== ""){
	// 		checkTheAnswer(thisLetter)
	// 		if($(thisLetter).attr("id") !== "ac4"){
	// 		$("#ac" + (parseInt($(thisLetter).attr("id").slice(2,3)) + 1)).focus()
	// 	} else{
	// 		thisLetter.blur()
	// 	}
	// }
	// }
	// function checkTheAnswer(checkThis){
	// 	console.log($(checkThis).val() + " : " +  aBank[$(checkThis).attr("id").slice(2,3) - 1])
    //     console.log(aBank)
    //     if($(checkThis).val() == aBank[$(checkThis).attr("id").slice(2,3) - 1]){

    //     }
	// }
    
    // document.addEventListener("keydown",(keyEvent)=>{
    //     if($(".acInput").is(":focus") == true && keyEvent.code == "Backspace"){
    //         event.preventDefault()
    //         $("#ac" + (document.activeElement.id.slice(2,3) - 1)).focus()
    //     }
    // })