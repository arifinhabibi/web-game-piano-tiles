const chooseSong = document.getElementById('chooseSongs')
const dispayChooseSong = document.querySelector('.choose-song')
const cancel = document.querySelector('.cancel')

console.log(chooseSong)

let songs = []


chooseSong.addEventListener('click', () => {
    dispayChooseSong.style.display = 'block'
})

cancel.addEventListener('click', () => {
    dispayChooseSong.style.display = 'none'
})