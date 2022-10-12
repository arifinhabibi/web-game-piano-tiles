const tutsD = new Tuts({x: 0, keys: 'D'})
const tutsF = new Tuts({x: 75, keys: 'F'})
const tutsJ = new Tuts({x: 150, keys: 'J'})
const tutsK = new Tuts({x: 225, keys: 'K'})

function update(){

    tutsD.draw()
    tutsF.draw()
    tutsJ.draw()
    tutsK.draw()

}

update()