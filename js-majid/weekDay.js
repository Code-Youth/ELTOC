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
       // Random audio for row 2
       let row2RandSound = []
    
       // arraySound without row 1 answer

       let arraySound2 = [mo_sound, tu_sound, we_sound, th_sound, fr_sound, sa_sound, su_sound]

       arraySound2.splice(answer, 1)
       row2RandSound.push(arraySound2[Math.floor(Math.random()*arraySound2.length)])
    
     

       // Finding index of random sound 2 in sound array
       let answer2Index = 0

       for(let i = 0; i < arraySound.length; i++) {
           if (arraySound[i] == row2RandSound) {
                   console.log(i)
                  
                  }
              }

}// End of function




for(let i = 0; i < arraySound.length; i++) {
    if (arraySound[i] == randomSound) {
             answer = i
              randomSound1.push(arraySound[i])
           
           }
       }