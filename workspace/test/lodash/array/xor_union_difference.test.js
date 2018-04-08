var _    = require("lodash");
var expect    = require("chai").expect;

describe("ARRAY", () => {
  let firstArray, secondArray;

  beforeEach(function() {
    firstArray = [1, 2];
    secondArray = [2, 3];
  });

    it("xor", () => {
      const result = _.xor(firstArray, secondArray);

      expect(result).to.deep.equal([1, 3]);
    });

    it("union", () => {      
      const result = _.union(firstArray, secondArray);
      
      expect(result).to.deep.equal([1, 2, 3]);
    });

    it("difference", () => {      
      const result = _.difference(firstArray, secondArray);
      
      expect(result).to.deep.equal([1]);
    });

});
