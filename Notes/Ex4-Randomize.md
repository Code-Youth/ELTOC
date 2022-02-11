# Where I left out 
I just got a random sound for row 2 that won't ever match the first row.
**Next Step**
- My next step is to find the 2nd random sounds positions in the array (once I have that, I can find it's answer in the weekday array)
**Idea**
- Create a object that will have all the important variables for row 2 
ex: let row2Var = {
    randomSound: 
    soundIndex:
    etc
}



# Current issue: Can't randomize new array that removed the answer
- Status: Solved 
**Summary**
I've currently solved an issue where I needed to remove the answer from my array that appends day of the week to the table. I can now randomize and not have to worry about excluding the answer. The issue, my shuffleArray function won't work on the new Array that I've created. It works on arrays that I have directly inputted the values but when I push them from somewhere else, the shuffle won't work. 

**Solution1** 
- Instead of creating a new array and pushing values into it, have an array that has everything directly put into it and do a .remove() to take out the answer
=> Though this worked, I figured out the issue was I was trying to shuffle the row before the loop would run and fil it up. This came down to not understanding synchronous and asynchronous. 

# Issue 2: Getting undefined sometimes for my random sound in row 2