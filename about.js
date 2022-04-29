console.log("hello world");

let form = document.querySelector('form#contact');
let image = document.querySelector(`.image`);


const handleSubmit = evt => {
	evt.preventDefault();
	
	alert('form submitted successfully');
}

const imageAlert = evt => {
	evt.preventDefault();

	alert(`wow, you look good in those pants`)
}


form.addEventListener('submit', handleSubmit);
image.addEventListener(`mouseover`, imageAlert)