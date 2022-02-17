module.exports = class Colors{
    
    constructor(){
        this.ColorR = 0
        this.ColorG = 0
        this.ColorB = 0
        this.RGB = 'rgb(0, 0, 0)'
    }

    getRandomColor(){
        this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
        this.ColorG = Math.floor(Math.random() * (255 - 0) + 0);
        this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
        this.RGB = `rgb(${this.ColorR}, ${this.ColorG}, ${this.ColorB})`
    }
}
