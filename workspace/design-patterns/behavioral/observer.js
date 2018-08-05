class LighthousePublisher {
    constructor() {
        this.subscribers = [];
    }

    addSubscriber(ship) {
        this.subscribers.push(ship);
    }

    removeSubscriver(ship) {

    }

    notify(msg) {
        this.subscribers.forEach(ship => ship.setDirection(msg));
    }
}

class ShipSubscriber {
    setDirection(msg) {
        this.direction = msg;
    }
}

export { LighthousePublisher, ShipSubscriber };