class HarborMediator {
    constructor(harbor) {
        this.topics = {};
        this.harbor = harbor;
    }

    dockShipInHarbor() {
        this.harbor.reduceCapacity();
    }

    addSubscriber(topic, subscriber) {
        if (!this.topics[topic])
            this.topics[topic] = []; 
        this.topics[topic].push(subscriber);
    }

    publish(topic, msg) {
        if(this.topics[topic]) 
            this.topics[topic].forEach(subscriber => subscriber.update(msg));
    }
}

class Harbor {
    constructor() {
        this.shipCapacity = 3;
    }

    reduceCapacity() {
        this.shipCapacity--;
    }
}

class ShipSubscriber {
    constructor(harborMediator) {
        this.harborMediator = harborMediator;
    }

    update(msg) {
        this.dockingStatus = msg;
    }

    dock() {
        this.harborMediator.dockShipInHarbor();
    }
}

export { HarborMediator, ShipSubscriber, Harbor };