let answer = 0
 


// The array that doesn't have the answer in it
let row1Random = [] 
console.log('row1random')
console.log(row1Random)


let randy5 = shuffleArray(row1Random)
console.log('The shuffled version of the row')
console.log(randy5)



// This get an array that doesn't have the answer in it
for(let i = 0; i < arrayWeek.length; i++) {
      if(i != answer) {
       row1Random.push(arrayWeek[i])
        }
    }


    