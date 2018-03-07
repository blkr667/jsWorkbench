var _    = require("lodash");
var expect    = require("chai").expect;

describe("ARRAY", () => {
  describe("DROP (Drop first elements from array)", () => {
    it("drop with 1 arg (drop first element)", () => {
      const result = _.drop([1, 2, 3, 4]);

      expect(result).to.deep.equal([2, 3, 4]);
    });

    it("drop with 2 args (drop first n elements)", () => {
      const result = _.drop([1, 2, 3, 4], 2);

      expect(result).to.deep.equal([3, 4]);
    });
  });

  describe("DROPRIGHT (Drop last elements from array)", () => {
    it("dropRight with 1 arg (drop last element)", () => {
      const result = _.dropRight([1, 2, 3, 4]);

      expect(result).to.deep.equal([1, 2, 3]);
    });

    it("dropRight with 2 args (drop last n elements)", () => {
      const result = _.dropRight([1, 2, 3, 4], 2);

      expect(result).to.deep.equal([1, 2]);
    });
  });

  describe("ZIP (Merge arrays by index)", () => {
    it("zip arrays with same length", () => {
      const result = _.zip([1, 2], ["a", "b"]);

      expect(result).to.deep.equal([[1, "a"], [2, "b"]]);
    });

    it("zip arrays with differend length", () => {
      const result = _.zip([1, 2], ["a"]);

      expect(result).to.deep.equal([[1, "a"], [2, undefined]]);
    });
  });

});