var _    = require("lodash");
var {expect, assert}    = require("chai");

describe("OBJECT PROPERTIES", () => {
  let baseObject;

  before(function() {
    baseObject = { 
        baseProperty: {
          deepProperty: "deepValue",
          nestedArray: [
            "arrayValue"
          ]
        }
    };
  });

  describe("GET (get property from object)", () => {
    it("get property", () => {
      const result = _.get(baseObject, "baseProperty.deepProperty");

      expect(result).to.equal("deepValue");
    });

    it("get default value when property not exists", () => {
      const result = _.get(baseObject, "baseProperty.notExistingProperty", "default");

      expect(result).to.equal("default");
    });

    it("get array property", () => {
      const result = _.get(baseObject, "baseProperty.nestedArray[0]");

      expect(result).to.equal("arrayValue");
    });

    it("get array property by property names in array", () => {
      const result = _.get(baseObject, ["baseProperty", "nestedArray", "0"]);

      expect(result).to.equal("arrayValue");
    });
  });

  describe("HAS (check object has property)", () => {
    it("has property", () => {
      const result = _.has(baseObject, "baseProperty.deepProperty");

     assert.isTrue(result);
    });

    it("has array property", () => {
      const result = _.has(baseObject, "baseProperty.nestedArray[0]");

     assert.isTrue(result);
    });

    it("has array property by property names in array", () => {
      const result = _.has(baseObject, ["baseProperty", "nestedArray", "0"]);

      assert.isTrue(result);
    });
  });
});
