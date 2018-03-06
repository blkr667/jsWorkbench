var _    = require("lodash");
var expect    = require("chai").expect;

describe("ARRAY", function() {
  describe("DROP (Drop first elements from array)", function() {
    it("drop with 1 arg (drop first element)", function() {
      const result = _.drop([1, 2, 3, 4]);

      expect(result).to.deep.equal([2, 3, 4]);
    });

    it("drop with 2 args (drop first n elements)", function() {
      const result = _.drop([1, 2, 3, 4], 2);

      expect(result).to.deep.equal([3, 4]);
    });
  });

  describe("DROPRIGHT (Drop last elements from array)", function() {
    it("dropRight with 1 arg (drop last element)", function() {
      const result = _.dropRight([1, 2, 3, 4]);

      expect(result).to.deep.equal([1, 2, 3]);
    });

    it("dropRight with 2 args (drop last n elements)", function() {
      const result = _.dropRight([1, 2, 3, 4], 2);

      expect(result).to.deep.equal([1, 2]);
    });
  });


});