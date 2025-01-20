//Lab-3 Simple TDD test cases
//imports
const { describe, it } = require("node:test");
const assert = require("node:assert");
const {
  add,
  subtract,
  multiply,
  divide,
  square,
  power,
  floor,
  ceiling,
  modulas,
} = require("../lab-3-starter.js");

//test cases
describe("Lab-3", () => {
  describe("add", () => {
    it("should return 5 when adding 2 and 3", () => {
      assert.strictEqual(add(2, 3), 5);
    });
    it("should return 0 when adding -2 and 2", () => {
      assert.strictEqual(add(-2, 2), 0);
    });
  });

  describe("subtract", () => {
    it("should return 1 when subtracting 3 from 4", () => {
      assert.strictEqual(subtract(4, 3), 1);
    });
    it("should return 0 when subtracting 2 from 2", () => {
      assert.strictEqual(subtract(2, 2), 0);
    });
  });

  describe("multiply", () => {
    it("should return 6 when multiplying 2 by 3", () => {
      assert.strictEqual(multiply(2, 3), 6);
    });
    it("should return 0 when multiplying 0 by 2", () => {
      assert.strictEqual(multiply(0, 2), 0);
    });
  });

  describe("divide", () => {
    it("should return 2 when dividing 6 by 3", () => {
      assert.strictEqual(divide(6, 3), 2);
    });
    it("should return 0 when dividing 0 by 2", () => {
      assert.strictEqual(divide(0, 2), 0);
    });
  });

  describe("modulas", () => {
    it("should return 1 when modulas 7 by 3", () => {
      assert.strictEqual(modulas(7, 3), 1);
    });
    it("should return 0 when modulas 0 by 2", () => {
      assert.strictEqual(modulas(0, 2), 0);
    });
  });

  describe("power", () => {
    it("should return 8 when 2 to the power of 3", () => {
      assert.strictEqual(power(2, 3), 8);
    });
    it("should return 1 when 2 to the power of 0", () => {
      assert.strictEqual(power(2, 0), 1);
    });
  });

  describe("square", () => {
    it("should return 4 when square of 2", () => {
      assert.strictEqual(square(2), 4);
    });
    it("should return 1 when square of 1", () => {
      assert.strictEqual(square(1), 1);
    });
  });

  describe("floor", () => {
    it("should return 2 when floor of 2.7", () => {
      assert.strictEqual(floor(2.7), 2);
    });
    it("should return 2 when floor of 2.1", () => {
      assert.strictEqual(floor(2.1), 2);
    });
  });

  describe("ceiling", () => {
    it("should return 3 when ceiling of 2.7", () => {
      assert.strictEqual(ceiling(2.7), 3);
    });
    it("should return 3 when ceiling of 2.1", () => {
      assert.strictEqual(ceiling(2.1), 3);
    });
  });
});
