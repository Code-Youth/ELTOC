// This function plays the audio
function daySound(sound){ //The parameter 'sound' refers to the argument put into the daySound function in the html (ex: 'Fr')
    // and that argument is an ID of an audio tag with a recording of a month
    let noise = document.getElementById(sound)//Variable 'noise' will reference the argument 'sound'
    // console.log(sound)
    // console.log(noise)
    noise.play() //Noise is essentially an audio tag and we are telling it to play with the .play method
}





// Function for exercise 4 quiz table (days of the week)

// The fa icons at the bottom of the sec 4 table (for the purpose of referencing them)
let icon1 = document.querySelector('#ic1')

let icon2 = document.querySelector('#ic2')

let icon3 = document.querySelector('#ic3')

let icon4 = document.querySelector('#ic4')


/*Randomize exercise 4 table on page load*/

    // Reference to entire table
let table = document.querySelector('#table-4')

let row1 = document.querySelector('#row1')
let row2 = document.querySelector('#row2')
let row3 = document.querySelector('#row3')
let row4 = document.querySelector('#row4')

    // Reference to audio of each row
let audio1 = document.querySelector('#audio1')
let audio2 = document.querySelector('#audio2')
let audio3 = document.querySelector('#audio3')
let audio4 = document.querySelector('#audio4')


    // Reference to every table cell 
let Mon = document.querySelector("#Mon1")
let Tue = document.querySelector("#Tue1")
let Wed = document.querySelector("#Wed1")
let Thu = document.querySelector("#Thu1")
let Fri = document.querySelector("#Fri1")
let Sat = document.querySelector("#Sat1")
let Sun = document.querySelector("#Sun1")



// Randomize audio

    // Reference to all the sounds     
let mo_sound = document.querySelector('#mo_sound1')
let tu_sound = document.querySelector('#tu_sound1')
let we_sound = document.querySelector('#we_sound1')
let th_sound = document.querySelector('#th_sound1')
let fr_sound = document.querySelector('#fr_sound1')
let sa_sound = document.querySelector('#sa_sound1')
let su_sound = document.querySelector('#su_sound1')





    // Shuffle array for all the sound buttongs
let arraySound = [mo_sound, tu_sound, we_sound, th_sound, fr_sound, sa_sound, su_sound]

function shuffleArray(arr) {
        let newPos;
        let temp;
        
        for (let i = arr.length - 1; i > 0; i--) {
          newPos = Math.floor(Math.random() * (i + 1))
          temp = arr[i];
          arr[i] = arr[newPos];
          arr[newPos] = temp;
        }//End of loop
        return arr

}

    // Shuffle array for all the weekday table cells
let arrayWeek = [Mon, Tue, Wed, Thu, Fri, Sat, Sun]

function shuffleArray(arr) {
        let newPos;
        let temp;
        
        for (let i = arr.length - 1; i > 0; i--) {
          newPos = Math.floor(Math.random() * (i + 1))
          temp = arr[i];
          arr[i] = arr[newPos];
          arr[newPos] = temp;
        }//End of loop
        return arr
    }


    // Get random audio that will be appended random audio to row 1

    let randomSound = arraySound[Math.floor(Math.random()*arraySound.length)];
    let randomWeek = arrayWeek[Math.floor(Math.random()*arraySound.length)]

 
// Answer for the first row
 let answer = 0
 

// The array that doesn't have the answer in it
let row1Random = [] 


// The random sound of the first row
let randomSound1 = []


// This finds the original index of the audio in the array

for(let i = 0; i < arraySound.length; i++) {
 if (arraySound[i] == randomSound) {
          answer = i
           randomSound1.push(arraySound[i])
        
        }
    }


    // A weekday array that doesn't have the answer in it
let row1Rand = [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
row1Rand.splice(answer, 1)



    // Randomized version of array that doesn't have answer in it
let row1Rand1 = shuffleArray(row1Rand)


    // Slice array until there are only 3 weekdays in it
let row1Rand2 = row1Rand1.slice(0, 3)


    // Add the answer back into the array
    row1Rand2.push(arrayWeek[answer])

    // Randomized version of final array
    let row1Rand3 = shuffleArray(row1Rand2)



    // This get an array that doesn't have the answer in it
    for(let i = 0; i < arrayWeek.length; i++) {
        if(i != answer) {
        row1Random.push(arrayWeek[i])
        break
        }

        let randy5 = shuffleArray(row1Random)
    
    }


    function row2Randomize() {
        
        // arraySound without row 1 answer

        let arraySound2 = [mo_sound, tu_sound, we_sound, th_sound, fr_sound, sa_sound, su_sound]

        arraySound2.splice(answer, 1)
        let row2RandSound = (arraySound2[Math.floor(Math.random()*arraySound2.length)])
     
        console.log(row2RandSound)

        // Finding index of random sound 2 in sound array
        let answer2Index = 0

        for(let i = 0; i < arraySound.length; i++) {
            if (arraySound[i] == row2RandSound) {
                    console.log(i)
                   
                   }
               }

        console.log('Testing2')


    }// End of function



row2Randomize()


function random() {
    /* All of this is for row 1 */ 

    // Randomize the audio files
    $("#audio1").replaceWith(randomSound)


// Randomize the days of the week


    $("#wrTu1").replaceWith(row1Rand3[0])
    $("#wrTh1").replaceWith(row1Rand3[1])
    $("#riMo1").replaceWith(row1Rand3[2])
    $("#wrFr1").replaceWith(row1Rand3[3])

     
     }

    // End of function 

let row1Answer = arrayWeek[answer]

    

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
    if (item == row1Answer) {
        item.className = 'noclick backGreen' , icon1.className = 'fa fa-check-circle fa-3x green' 
    }
    else {
        item.className = 'noclick backRed'
    }
    // else if (item.id == 'wrTh1') {
    //     item.className = 'noclick backRed' , riMo1.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrFr1.className = 'noclick'
    // }
    // else if (item.id == 'riMo1') {
    //     item.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrTh1.className = 'noclick' ,  wrFr1.className = 'noclick'
    // }
    // else if (item.id == 'wrFr1') {
    //     item.className = 'noclick backRed' , riMo1.className = 'noclick backGreen' , wrTu1.className = 'noclick' , wrTh1.className = 'noclick'
    // }
  
        //Making the second row unclickable after first attempt and show wrong choice and right answer
    if (item.id == 'wrSu2') {
        item.className = 'noclick backRed' , riSa2.className = 'noclick backGreen' , wrTu2.className = 'noclick' , wrMo2.className = 'noclick'
    }
    else if (item.id == 'riSa2') {
        item.className = 'noclick backGreen' , wrTu2.className = 'noclick' , wrMo2.className = 'noclick' , wrSu2.className = 'noclick'
    }
    else if (item.id == 'wrTu2') {
        item.className = 'noclick backRed' , wrMo2.className = 'noclick' , riSa2.className = 'noclick backGreen' , wrSu2.className = 'noclick'
    }
    else if (item.id == 'wrMo2') {
        item.className = 'noclick backRed' , riSa2.className = 'noclick backGreen' , wrSu2.className = 'noclick' , wrTu2.className = 'noclick'
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
    if (item == row1Answer) {  
        icon1.className = 'fa fa-check-circle fa-3x green'   // 1: Black circle changes to a red (X) 2: the color will be red 
    }
    else if (item !== row1Answer) {
        icon1.className = 'fa fa-times-circle fa-3x red' // 1: X changes to check mark 2: the color will be green
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