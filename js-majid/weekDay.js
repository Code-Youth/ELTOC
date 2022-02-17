function row2Randomize() {
    let row1RandSound = []

    // arraySound without row 1 answer
    let arraySound2 = [mo_sound, tu_sound, we_sound, th_sound, fr_sound, sa_sound, su_sound]
    console.log(arraySound2)

    console.log(row1RandSound)
    console.log(randomSound1)
}






// The last bit of working code saved


function row2Randomize() {
    'use strict';

    let row2Info = {
        randomSound: null,
        answerIndex: []
    }



    // arraySound without row 1 answer
    let arraySound2 = [mo_sound, tu_sound, we_sound, th_sound, fr_sound, sa_sound, su_sound]

    arraySound2.splice(answer, 1)
    row2Info.randomSound = (arraySound2[Math.floor(Math.random()*arraySound2.length)])
 
    console.log('Random sound inside object')
    console.log(row2Info.randomSound)

    // Finding the original index of the randomSound
    for(let i = 0; i < arraySound.length; i++) {
        if (arraySound[i] == row2Info.randomSound) {

                console.log(`This is the position of the random sound  ${i}`)
                row2Info.answerIndex.push(i)
                
               }
           }


    console.log('index of random sound in an object')
    console.log(row2Info.answerIndex)

}// End of function
}// End of function

