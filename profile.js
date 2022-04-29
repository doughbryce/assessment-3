let colorBtn = document.querySelector(`#color`);
let placeBtn = document.querySelector(`#place`);
let ritualBtn = document.querySelector(`#ritual`);
let arrBtns = document.querySelectorAll(`.profile-button`)

// console.log(arrBtns)

let profArr = [`blue!`, `new york city 🤓`, `driving fast alone and singing poorly`]

for (let i = 0; i < arrBtns.length; i++) {
    arrBtns[i].addEventListener(`click`, () => alert(profArr[i]))
}