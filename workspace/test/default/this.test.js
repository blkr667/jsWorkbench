var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("this", function() {
    it("this in nested object", function() {
    	var human = {
    		name: "John",
    		nickName: "Little " + this.name, // no access from property
    		getNickName: function() {
    			return "Little " + this.name; // access from function
    		},
    		thisCheck: function() {
    			return this === human;
    		},
    		clonedHuman: {
    			name: this.name,
    			parenthisCheck: () => {
	    			return this === human; // no access to this from parent
	    		}
    		}
    	}

    	expect(human.nickName).to.equal("Little undefined");
    	expect(human.thisCheck()).to.be.true;
    	expect(human.getNickName()).to.equal("Little John");
		
		expect(human.clonedHuman.name).to.undefined;
    	expect(human.clonedHuman.parenthisCheck()).to.be.false;
    });
  });


});