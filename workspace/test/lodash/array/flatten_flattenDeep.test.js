var _    = require("lodash");
var expect    = require("chai").expect;

describe("ARRAY", () => {
  let sampleArray;

  beforeEach(function() {
    sampleArray = [1, [2], [[3]]];
  });

    it("flatten", () => {
      const result = _.flatten(sampleArray);

      expect(result).to.deep.equal([1, 2, [3]]);
    });

    it("flattenDeep", () => {
      const result = _.flattenDeep(sampleArray);

      expect(result).to.deep.equal([1, 2, 3]);
    });

});
