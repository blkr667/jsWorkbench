var expect    = require("chai").expect;
import { CastleBuilder, Castle } from './builder'

describe("Design Patterns (creational)", function() {
    describe("Builder", function() {
      it("Builder", function() {
        const builder = new CastleBuilder('casrassone'); 
        builder.addTower({tower: 'west tower'});
        builder.addTower({tower: 'east tower'});
        builder.withGates(4);

        const castle = builder.build();

        expect(castle.name).to.equal('casrassone');
        expect(castle.towers.length).to.equal(2);
        expect(castle.gatesNumber).to.equal(4);
      });
    });
  });