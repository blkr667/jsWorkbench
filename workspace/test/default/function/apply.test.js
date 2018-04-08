var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("apply", function() {
    it("use apply to get context of parent object", function() {
        var human = {
            name: "John",
            clonedHuman: {
                getNickName: function(prefix, suffix) {
                    return prefix + " Little " + this.name + suffix;
                }
            }
        }

        //when
        let clonedHumanNickName = human.clonedHuman.getNickName.apply(human, ["Very", "!"]);

        //then
        expect(clonedHumanNickName).to.equal("Very Little John!");
    });


    it("use apply to invoke method on object without given method", function() {
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
        let secondHumanNickName = human.getNickName.apply(secondHuman, ["Very", "!"]);

        //then
        expect(secondHumanNickName).to.equal("Very Little Edward!");
    });
  });
});