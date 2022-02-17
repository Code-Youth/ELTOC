# How this code works
**Randomizing**
Setting up everything
- Created a copy of the audio days of the week table and the table quiz and made them invisible, this is what I'll be using to replace 
- Referrence all the tables in JS
- Create arrays for the weekdays, both table cells and audio 
- Create an object that will have all the info needed to randomize a row
Steps I took to randomize
1. Choose 1 random sound from the sound array
2. Find the orginal index of the random sound
3. Remove the answer (week day that matches the audio) from the weekDay array
4. Randomize the weekday array
5. Splice the array until there is only 3 items in it
6. Add the answer back into the weekDay array
7. Randomize the weekDay array one one last time
8. Start appending the random weekdays into the table :)








# Splice vs slice
In randomizing the exercise, I had to use both splice and slice to get the index of the answer and create an array without the answer
**Splice**
- Cuts out items from an array
- This will change the actual array (IMPORTANT)
- Used it to get an array without the answer (in order to make sure random sounds would be different for each row
**Slice**
- Also cuts out items from an array
- This will not change the actual array and will create a new array
- Used it to get the original index of the random sound so I would know the answer