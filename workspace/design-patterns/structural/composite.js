var TileComposite = function () {
    this.childrens = [];
    this.status = 'hidden';
}

TileComposite.prototype = {
    show: function () {
        this.status = 'visible';
        this.childrens.forEach(subTile => subTile.show());
    },

    addChildren: function (subTile) {
        this.childrens.push(subTile);
    }
}

export { TileComposite };