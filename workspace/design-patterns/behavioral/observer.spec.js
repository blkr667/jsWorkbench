var expect    = require("chai").expect;
import { LighthousePublisher, ShipSubscriber } from './observer'

describe("Design Patterns (behavioral)", function() {
    describe("Observer", function() {
      it("observer", function() {
        const publisher = new LighthousePublisher(); 
        const ship1 = new ShipSubscriber(); 
        const ship2 = new ShipSubscriber(); 
        publisher.addSubscriber(ship1);
        publisher.addSubscriber(ship2);

        publisher.notify("go north");

        expect(ship1.direction).to.equal('go north');
        expect(ship2.direction).to.equal('go north');
      });
    });
  });