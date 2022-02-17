var Colors = /** @class */ (function () {
    function Colors() {
        this.ColorR = 0;
        this.ColorG = 0;
        this.ColorB = 0;
        this.RGB = 'rgb(0, 0, 0)';
    }
    Colors.prototype.getRandomColor = function () {
        this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
        this.ColorG = Math.floor(Math.random() * (255 - 0) + 0);
        this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
        this.RGB = "rgb(".concat(this.ColorR, ", ").concat(this.ColorG, ", ").concat(this.ColorB, ")");
    };
    return Colors;
}());
var Color = new Colors();
Color.getRandomColor();
console.log(Color.RGB);
console.log(Color.ColorR);
