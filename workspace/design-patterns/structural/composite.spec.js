var expect    = require("chai").expect;
import { TileComposite } from './composite'

describe("Design Patterns (structural)", function() {
    describe("Composite", function() {
      it("Composite", function() {
        const baseTile = new TileComposite(); 
        const subTile1 = new TileComposite(); 
        const subTile2 = new TileComposite(); 
        const subTile3 = new TileComposite(); 
        subTile2.addChildren(subTile3);
        baseTile.addChildren(subTile2);
        baseTile.addChildren(subTile1);

        baseTile.show();

        expect(baseTile.status).to.equal('visible');
        expect(subTile1.status).to.equal('visible');
        expect(subTile2.status).to.equal('visible');
        expect(subTile3.status).to.equal('visible');
      });
    });
  });