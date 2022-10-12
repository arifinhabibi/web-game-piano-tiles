class Tuts {
    constructor({x, keys}){
        this.x = x
        this.keys = keys
    }

    draw(){
        if (this.x == 0 || this.x == 150) {
            context.fillStyle = 'purple'
        } else {
            context.fillStyle = 'aqua'
        }

        context.fillRect(this.x, 20, 75, 80)

        context.fillStyle = 'white'
        context.font = '20px serif'
        context.fillText(this.keys, this.x + 30, 70)
    }
}