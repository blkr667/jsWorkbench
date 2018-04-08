var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("OOP", function() {
    it("new - multiple constructors", function() {
    	function Car (year, color){
            this.year = year;
            this.color = color;
            this.wheelsNumber = 4;
    	}

        function Motorcycle (year, color){
            Car.call(this, year, color);
            this.wheelsNumber = 2;
        }

        let instance = new Motorcycle(1999, "red");


    	expect(instance.year).to.equal(1999);
        expect(instance.color).to.equal("red");
        expect(instance.wheelsNumber).to.equal(2);
    });
  });


});