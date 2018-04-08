var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("call", function() {
    it("use call to get context of parent object", function() {
    	var human = {
    		name: "John",
    		clonedHuman: {
                getNickName: function(prefix, suffix) {
                    return prefix + " Little " + this.name + suffix;
                }
    		}
    	}

        //when
        let clonedHumanNickName = human.clonedHuman.getNickName.call(human, "Very", "!");

        //then
    	expect(clonedHumanNickName).to.equal("Very Little John!");
    });


    it("use call to invoke method on object without given method", function() {
        var human = {
            name: "John",
            getNickName: function(prefix, suffix) {
                    return prefix + " Little " + this.name + suffix;
                }
        }

        var secondHuman = {
            name: "Edward"
        }

        //when
        let secondHumanNickName = human.getNickName.call(secondHuman, "Very", "!");

        //then
        expect(secondHumanNickName).to.equal("Very Little Edward!");
    });
  });
});