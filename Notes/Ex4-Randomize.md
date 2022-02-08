# Current issue: Can't randomize new array that removed the answer
- Status: Solved 
**Summary**
I've currently solved an issue where I needed to remove the answer from my array that appends day of the week to the table. I can now randomize and not have to worry about excluding the answer. The issue, my shuffleArray function won't work on the new Array that I've created. It works on arrays that I have directly inputted the values but when I push them from somewhere else, the shuffle won't work. 

**Solution1** 
- Instead of creating a new array and pushing values into it, have an array that has everything directly put into it and do a .remove() to take out the answer
=> Though this worked, I figured out the issue was I was trying to shuffle the row before the loop would run and fil it up. This came down to not understanding synchronous and asynchronous. 

