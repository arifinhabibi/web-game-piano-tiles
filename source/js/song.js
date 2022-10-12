const chooseSong = document.getElementById('chooseSongs')
const dispayChooseSong = document.querySelector('.choose-song')
const cancel = document.querySelector('.cancel')

chooseSong.addEventListener('click', () => {
    dispayChooseSong.style.display = 'block'
})

cancel.addEventListener('click', () => {
    dispayChooseSong.style.display = 'none'
})