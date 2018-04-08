var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("CLOSURE", function() {
    it("closure example - inner function can access var from outer, after return of inner function", function() {
    	function outerFunc() {
            var outerData = "outer";
            return function innerFunc() {
                var innerData = " inner";
                return outerData + innerData;
            }
    	}

        let result = outerFunc()();

    	expect(result).to.equal("outer inner");
    });

    it("closure example - inner function can access argument from outer function", function() {
        function outerFunc(first) {
            return function innerFunc(second) {
                return first + second;
            }
        }

        let result = outerFunc("outer")(" inner");

        expect(result).to.equal("outer inner");
    });

    it("closure example - private property", function() {
        function counter() {
            var count = 0;
            return function () {
                return ++count;
            }
        }

        let counterInstance = counter();

        expect(counterInstance()).to.equal(1);
    });

    it("closure example - object with private variable", function() {
        function human() {
            var name = "john";
            return {
                getName: function() {
                    return name;
                }
            }
        }
        let humanInstance = human();

        expect(humanInstance.getName()).to.equal("john");
        expect(humanInstance.name).to.be.undefined;
    });


  });


});