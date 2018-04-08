var _    = require("lodash");
var expect    = require("chai").expect;

describe("DEFAULT", function() {
  describe("bind", function() {
    it("use bind to get context of parent object", function() {
        var human = {
            name: "John",
            clonedHuman: {
                getNickName: function(prefix, suffix) {
                    return prefix + " Little " + this.name + suffix;
                }
            }
        }

        //when
        let clonedHumanNickNameFunction = human.clonedHuman.getNickName.bind(human, "Very", "!");

        //then
        expect(clonedHumanNickNameFunction()).to.equal("Very Little John!");
    });


    it("use bind to invoke method on object without given method", function() {
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
        let secondHumanNickNameFunction = human.getNickName.bind(secondHuman, "Very", "!");

        //then
        expect(secondHumanNickNameFunction()).to.equal("Very Little Edward!");
    });
  });
});