# Towers of Hanoi Code Plan

### Objective of game is to shift the entire stacks of disks from one stack to another stack. Only one disk can be moved at a time and only the uppermost disk can be moved. The uppermost disk is the smallest disk, or disk 1. And larger disks cannot be placed on smaller disks.

#### Layout

##### Code Plan

1. Create a function that will allow user to move game piece.
   movePiece()
   a. Take two parameters, startStack and endStack
   b. Will get the last element from the current stack using .pop() method and store in a variable using the .push() method

2. Create a function that will invoke game rules
   a.Function will take the same two parameters, startStack and endStack
   b. Temporarily store the last element of the first selected row in a variable called startStone
   c. Temporarily store the last element of the second selected row (this is the row that the stone will be dropped) in a variable called endStone
   d. Create another variable, emptyStack. The purpose of the empty stack is to create an "empty" row / array to act as an "undefined" element but this is needed in order to move a stone to an empty stack
   e. Create an if / else function that will check if the variable stored in the startStone is greater than the endStone or if there is an "empty" stack
   f. If function returns true then move is legal, else return false

3. Create a function that will check if game is won and will alert user of winnings
   a. Function will need to determine what a winning board is
   b. A winning board is when all four stones are moved from their starting stack, a to either b or c
   c. Create an if / else statement that will compare stacks b OR stacks c and if one of them equates to having 4 elements then the game is won
   d. if function returns true then game is won and user is prompted, else return false
4. Create a function that pieces all parts of the game logic together
   a. create an if / else statement that checks if move is legal and if yes, then invoke move piece function and if not legal then invoke get prompt function to prompt user for start and end stack
