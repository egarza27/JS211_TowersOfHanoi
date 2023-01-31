"use strict";

const assert = require("assert");
const { KeyObject } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  const stone = stacks[startStack].pop();
  console.log(stone);
  stacks[endStack].push(stone);
  checkForWin();
};

const checkStones = () => {
  if (stacks.a.length === 4) return true;
  else return false;
};

const isLegal = (startStack, endStack) => {
  const startStone = stacks[startStack].at(-1);
  const endStone = stacks[endStack].at(-1);
  if (!startStack) {
    return false;
  } else if (startStone < endStone || !endStone) {
    return true;
  } else {
    return false;
  }
};

const checkForWin = () => {
  if (stacks["b"].length === 4 || stacks["c"].length === 4) return true;
  else return false;
};

const towersOfHanoi = (startStack, endStack) => {
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
