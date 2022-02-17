class Colors{
    ColorR:number;
    ColorG:number;
    ColorB:number;
    RGB:string;
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

const Color:Colors = new Colors()

Color.getRandomColor()
console.log(Color.RGB)
console.log(Color.ColorR)
