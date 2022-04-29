let randBtn = document.querySelector(`.button`);
let linkArr = document.querySelectorAll(`.location-link`);

const getRand = (event) => {
    event.preventDefault();

    const rand = Math.floor(Math.random() * linkArr.length);
    console.log(linkArr[rand])

    document.querySelector(`.link-p`).textContent = linkArr[rand].href;
}

randBtn.addEventListener(`click`, getRand);