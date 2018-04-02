var _    = require("lodash");
var expect    = require("chai").expect;

describe("LANG", () => {

  describe("type check", () => {
    it("isUndefined", () => {
      expect(_.isUndefined('')).to.be.false;
      expect(_.isUndefined({})).to.be.false;
      expect(_.isUndefined(null)).to.be.false;

      expect(_.isUndefined()).to.be.true;
      expect(_.isUndefined(undefined)).to.be.true;
    });

    it("isNull", () => {
      expect(_.isNull('')).to.be.false;
      expect(_.isNull({})).to.be.false;
      expect(_.isNull()).to.be.false;
      expect(_.isNull(undefined)).to.be.false;

      expect(_.isNull(null)).to.be.true;
    });

    it("isObject", () => {
      expect(_.isObject('')).to.be.false;
      expect(_.isObject()).to.be.false;
      expect(_.isObject(undefined)).to.be.false;
      expect(_.isObject(null)).to.be.false;

      expect(_.isObject({})).to.be.true;
      expect(_.isObject([])).to.be.true;
    });

    it("isEmpty (length greater than 0)", () => {
      expect(_.isEmpty('5')).to.be.false;
      expect(_.isEmpty([5])).to.be.false;

      expect(_.isEmpty(5)).to.be.true;
      expect(_.isEmpty('')).to.be.true;
      expect(_.isEmpty()).to.be.true;
      expect(_.isEmpty(undefined)).to.be.true;
      expect(_.isEmpty(null)).to.be.true;
      expect(_.isEmpty({})).to.be.true;
      expect(_.isEmpty([])).to.be.true;
    });
  });
});
