var _    = require("lodash");
var expect    = require("chai").expect;

describe("OBJECT CREATION", () => {
  let baseObject;

  beforeEach(function() {
    baseObject = { 
      mandatoryProperty: "BullSheet",
      redundantNumber: 666 
    };
  });

  describe("PICK (Create new object from picked property)", () => {
    it("pick by property name", () => {
      const result = _.pick(baseObject, "mandatoryProperty");

      expect(result).to.deep.equal({ mandatoryProperty: "BullSheet" });
    });

    it("pick by function checking property value", () => {
      let isMandatoryValue = (propertyValue) => propertyValue==="BullSheet";

      const result = _.pick(baseObject, isMandatoryValue);

      expect(result).to.deep.equal({ mandatoryProperty: "BullSheet" });
    });
  });

  describe("OMIT (Create new object without omitted property)", () => {
    it("omit by property name", () => {
      const result = _.omit(baseObject, "redundantNumber");

      expect(result).to.deep.equal({ mandatoryProperty: "BullSheet" });
    });

    it("omit by function checking property value", () => {
      let isRedundantValue = (propertyValue) => propertyValue===666;

      const result = _.omit(baseObject, isRedundantValue);

      expect(result).to.deep.equal({ mandatoryProperty: "BullSheet" });
    });
  });
});