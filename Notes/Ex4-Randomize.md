# Where I left out 
I've created an object that will store all the info for randomizing row 2 and I've added the random sound in it, now I've added the index of the answer
**Next Step**
- See if I can replace the second row with the random audio
**Idea**




# Current issue: Can't randomize new array that removed the answer
- Status: Solved 
**Summary**
I've currently solved an issue where I needed to remove the answer from my array that appends day of the week to the table. I can now randomize and not have to worry about excluding the answer. The issue, my shuffleArray function won't work on the new Array that I've created. It works on arrays that I have directly inputted the values but when I push them from somewhere else, the shuffle won't work. 

**Solution1** 
- Instead of creating a new array and pushing values into it, have an array that has everything directly put into it and do a .remove() to take out the answer
=> Though this worked, I figured out the issue was I was trying to shuffle the row before the loop would run and fil it up. This came down to not understanding synchronous and asynchronous. 

# Issue 2: Getting undefined sometimes for my random sound in row 2
**Solution**
- Little mistake, in the array randomiser I used the first array and not the second one that had one item spliced out. So I would get 'undefined' because it would search for a 7th item sometimes when there wasn't one in there