let textElement = document.querySelector('.focus');

let divElement = document.querySelector('.divEl');


textElement.addEventListener('focus', divAppear);

textElement.addEventListener('focusout', divDisappear);

function divAppear() {
    divElement.classList.add('active');
};

function divDisappear() {
    divElement.classList.remove('active');
};
