var _    = require("lodash");
var expect    = require("chai").expect;

describe("CHAIN", () => {

  describe("chained function invocation", () => {
    it("chain (sortBy, last)", () => {
      const users = [
        { 'user': 'barney',  'age': 36 },
        { 'user': 'fred',    'age': 40 },
        { 'user': 'pebbles', 'age': 1 }
      ];

      const oldest = _.chain(users).sortBy('age').last().value();

      expect(oldest).to.have.property('age', 40);
    });

    it("chain (flatten, sortBy, first)", () => {
      const users = [
        { 'user': 'barney',  'age': 36 },
        { 'user': 'fred',    'age': 40 },
        [
          { 'user': 'pebbles', 'age': 1 },
          { 'user': 'tom', 'age': 3 }
        ]
      ];

      const youngest = _.chain(users).flatten().sortBy('age').first().value();

      expect(youngest).to.have.property('age', 1);
    });

    it("chain (map)", () => {
      const users = [
        { 'user': 'barney',  'age': 36 },
        { 'user': 'fred',    'age': 40 },
        { 'user': 'pebbles', 'age': 1 }
      ];

      const labels = _.chain(users).map((element)=>element.user +" " +element.age ).value();

      expect(labels).to.include("barney 36");
      expect(labels).to.include("fred 40");
      expect(labels).to.include("pebbles 1");
    });
  });
});
