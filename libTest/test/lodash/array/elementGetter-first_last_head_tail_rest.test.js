var _    = require("lodash");
var expect    = require("chai").expect;

describe("ARRAY", () => {
  let sampleArray;

  beforeEach(function() {
    sampleArray = ["first", "middle", "last"];
  });

  describe("Getting elements from array", () => {
    it("HEAD - get first element", () => {
      const result = _.head(sampleArray);

      expect(result).to.equal("first");
    });

    it("FIRST - get first element", () => {
      const result = _.first(sampleArray);

      expect(result).to.equal("first");
    });

    it("LAST - get last element", () => {
      const result = _.last(sampleArray);

      expect(result).to.equal("last");
    });

    it("TAIL - get all elements without first", () => {
      const result = _.tail(sampleArray);

      expect(result).to.deep.equal(["middle", "last"]);
    });

    it("REST - get all elements without first", () => {
      const result = _.rest(sampleArray);

      expect(result).to.deep.equal(["middle", "last"]);
    });
  });
});
