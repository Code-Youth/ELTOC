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





    // Reference list for each day of the week for appending
let Monday = document.querySelector('#Mo-td')
let Tuesday = document.querySelector('#Tu-td')
let Wednesday = document.querySelector('#We-td')
let Thursday = document.querySelector('#Th-td')
let Friday = document.querySelector('#Fr-td')
let Saturday = document.querySelector('#Sa-td')
let Sunday = document.querySelector('#Su-td')

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

  
    //If I want to get the right answer to always show up, I need to know what index it the sound will be and match that index to index in the weekday array


    
    // Choosing a random audio from arraySound
    var randomAudio = arraySound[Math.floor(Math.random()*arraySound.length)];
    // Place holder for the index of the random audio in the arraySound
    var answer = 0
    var row1Td2 = 0
    var row1Td3 = 0
    var row1Td4 = 0

    console.log("answer")
    console.log(answer)
    console.log("row1Td2")
    console.log(row1Td2)



  
    /* Go through the array and find out the index of the random sound by finding where it matches in it's original array, arraySound*/
    for(let i = 0; i < arraySound.length; i++) {
        if(i == randomAudio) {
            var answer = arraySound.indexOf(i)
        }
    }

      // Random day for second table cell
      for(let i = 0; i < arrayWeek.length; i++ ) {
        if(!i == answer) {
            var row1Td2 = arrayWeek.indexOf(i)
            
        }
    }








    // Append random audio to row
    function random() {

/* All of this is for row 1 */ 

    // Randomize the audio files
        $("#audio1").replaceWith(arraySound[answer])
        console.log(answer)

    // Randomize the days of the week
        // The answer
        $("#wrTu1").replaceWith(arrayWeek[answer])
         $("#wrTh1").replaceWith(arrayWeek[row1Td2])
        $("#riMo1").replaceWith(arrayWeek[row1Td3])
        $("#wrFr1").replaceWith(arrayWeek[row1Td4])




    }

// function random() {
//     audio1.setAttribute('onclick', "daySound('Fr')")
//     audio2.setAttribute('onclick', newArray[0])
//     audio3.setAttribute('onclick', newArray[1])
//     audio4.setAttribute('onclick', newArray[2])
// }





 



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

}
// end of function