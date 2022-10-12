
let nameSong = null


fetch('./source/js/map.json').then(function (response) {
    return response.json()
}).then(function (data) {
    var data_json = data
    nameSong = data_json.name
    
    console.log(nameSong)
});


// import data from './map.json'  assert { type: 'JSON' };
// console.log(data)


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
