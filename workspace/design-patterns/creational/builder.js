class CastleBuilder {
    constructor(castleName) {
        this.castleName = castleName;
        this.towers = [];
    }

    withGates(gatesNumber) {
        this.gatesNumber = gatesNumber;
    }

    addTower(tower) {
        this.towers.push(tower);
    }

    build() {
        return new Castle(this.castleName, this.towers, this.gatesNumber);
    }
}

class Castle {
    constructor(name, towers, gatesNumber) {
        this.name = name;
        this.towers = towers;
        this.gatesNumber = gatesNumber;
    }

    getCastleInfo() {
        return {
            name: this.name,
            towers: this.towers,
            gatesNumber: this.gatesNumber
        }
    }
}

export { CastleBuilder, Castle };