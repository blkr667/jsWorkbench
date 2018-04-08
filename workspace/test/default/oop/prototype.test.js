var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("OOP", function() {
    it("prototype - acceess from instance to prototype via __proto__", function() {
    	function Human(name) {
            this.name = name;
    	}

        let john = new Human("John");

    	expect(john.__proto__).to.equal(Human.prototype);
        expect(Human.prototype.constructor).to.equal(Human);
    });

    it("prototype - aadding property to prototype and access from instance", function() {
        function Human(name) {
            this.name = name;
        }
        let john = new Human("John");

        Human.prototype.newProp = "Hello";

        expect(john.newProp).to.equal("Hello");
        expect(john.hasOwnProperty("newProp")).to.be.false;
    });

    it("prototype - aadding function to prototype and access from instance", function() {
        function Human(name) {
            this.name = name;
        }
        let john = new Human("John");

        Human.prototype.getName = function() {
            return this.name;
        }

        expect(john.getName()).to.equal("John");
    });
  });


});