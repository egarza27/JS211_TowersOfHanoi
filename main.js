"use strict";

const assert = require("assert");
const { KeyObject } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
// make test to
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?

const movePiece = (startStack, endStack) => {
  const stone = stacks[startStack].pop();
  console.log(stone);
  stacks[endStack].push(stone);
  checkForWin();
  // const stone = stacks[startStack].pop();
  // stacks[endStack].push(stone);
  // get last element from current stack and store in variable use pop and push
};
// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/**
 * Function isLegal
 * Takes in @parameters (startStack, endStack) or (stone, endStack)
 * Description: takes in starting and ending rows and compares stone sizes
 * if smaller stone moving on top of bigger stone allows movement
 * if bigger stone moving on top of smaller stone, move is illegal
 *
 * returns true if legal, false if illegal
 */

const checkStones = () => {
  if (stacks.a.length === 4) return true;
  else return false;
};

const isLegal = (startStack, endStack) => {
  const startStone = startStack[startStack.length - 1];
  console.log(startStone);
  const endStone = endStack[endStack.length - 1];
  let emptyStack = !stacks[endStack].length;
  if (startStone > endStone || emptyStack) return true;
  else return false;
  // conditional statement that checks if start stone is truthy and runs code if true but retrurns false if start stone is not truthy
  //small stone is moving on top of bigger stone then return true
  //big stone moving on top of small stone, return false
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if (stacks["b"].length === 4 || stacks["c"].length === 4) return true;
  else return false;
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // print stack function first
  // check if move legal, and allow move. If move is not legal display error message
  if (isLegal(startStack, endStack)) movePiece(startStack, endStack);
  else getPrompt();

  checkForWin();
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  describe("#printStacks()", () => {
    it("should print out all stacks", () => {
      console.log("a: " + stacks.a);
      console.log("b: " + stacks.d);
      console.log("c: " + stacks.c);
    });
  });
  describe("#checkStones()", () => {
    it("should check that starting array has all four stones", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.deepEqual(checkStones(), true);
    });
  });
  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
// it should print out all stacks
// it should check that stacks.a has all four pieces
// it should check that there are only 3 stacks
