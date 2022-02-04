let searchform = document.querySelector('.searchFormContainer');

/*funcion para aparecer barra de busqueda*/
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    registerForm.classList.remove('active')
}

/*funcion para aparecer shopping car*/
let cart = document.querySelector('.shoppingCartContainer');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    registerForm.classList.remove('active')
}

/*funcion para aparecer login form*/
let loginForm = document.querySelector('.loginFormContainer');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchform.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    registerForm.classList.remove('active')
}

/*funcion para aparecer el regiser form*/
let registerForm = document.querySelector('.registerFormContainer');

document.querySelector('#regForm').onclick = () =>{
    registerForm.classList.toggle('active')
}




/*funcion para aparecer menu responsive*/

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchform.classList.remove('active');
    cart.classList.remove('active');

}


window.onscroll = () => {
    navbar.classList.remove('active')
}

//effect to section start image

document.querySelector('.home').onmousemove = (e) =>{
    let x = (window.innerWidth - e.pageX * -5) / 90;
    let y = (window.innerHeight - e.pageY * -5) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px)
    translateY(${x}px)`; 
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px)
    translateY(0px)`; 
}


