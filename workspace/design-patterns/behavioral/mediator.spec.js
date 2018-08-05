var expect    = require("chai").expect;
import { HarborMediator, ShipSubscriber, Harbor } from './mediator'

describe("Design Patterns (behavioral)", function() {
    describe("Mediator", function() {
      it("mediator - broadcasting to subscribers with topics", function() {
        const harbor = new Harbor(); 
        const mediator = new HarborMediator(harbor); 
        const ship1 = new ShipSubscriber(mediator); 
        const ship2 = new ShipSubscriber(mediator); 
        const ship3 = new ShipSubscriber(mediator); 
        mediator.addSubscriber("military", ship1);
        mediator.addSubscriber("civilian", ship2);
        mediator.addSubscriber("military", ship3);

        mediator.publish("military", "ready to dock");

        expect(ship1.dockingStatus).to.equal('ready to dock');
        expect(ship2.dockingStatus).to.be.undefined;
        expect(ship3.dockingStatus).to.equal('ready to dock');
      });

      it("mediator - communication between harbor and ship via mediator", function() {
        const harbor = new Harbor(); 
        const mediator = new HarborMediator(harbor); 
        const ship1 = new ShipSubscriber(mediator); 
        mediator.addSubscriber("military", ship1);

        ship1.dock();

        expect(harbor.shipCapacity).to.equal(2);
      });
    });
  });