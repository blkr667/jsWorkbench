var _    = require("lodash");
var expect    = require("chai").expect;

describe("UTILITY", () => {
  let sampleArray;

  beforeEach(function() {
    sampleArray = [1, [2], [[3]]];
  });

    it("noop (no args)", () => {
      const result = _.noop();

      expect(result).to.be.undefined;
    });

    it("noop (with arg)", () => {
      const result = _.noop("hello");

      expect(result).to.be.undefined;
    });

});
