let navbar = document.querySelector('.navbar');

document.querySelector('#menubtn').onclick = () => {
    navbar.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cartbtn').onclick = () => {
    cartItem.classList.toggle('active');
}
