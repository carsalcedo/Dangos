import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

//form regiser validation

const formulario = document.getElementById('formulario');
const formuLogin = document.getElementById('formuLogin')
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":

			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .input-error`).classList.remove('active');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .input-error`).classList.add('active');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .input-error`).classList.add('active');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('incorrecto');
		document.getElementById(`grupo__password2`).classList.add('correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .input-error`).classList.remove('active');
		campos['password'] = true;
	}
}

//funcion registrar
function register(){
	let email = document.getElementById('correo').value;
	let password = document.getElementById('password').value;
	const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}

//Button submit validation
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');

	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		register();
		formulario.reset();

		document.getElementById('mensaje-exito').classList.add('active');
        document.getElementById('mensaje').classList.remove('active');
		setTimeout(() => {
			document.getElementById('mensaje-exito').classList.remove('active');
            loginForm.classList.remove('active');
            registerForm.classList.remove('active')
		}, 2000);

		document.querySelectorAll('.correcto').forEach((icono) => {
			icono.classList.remove('correcto');
		});
	} else {
		document.getElementById('mensaje').classList.add('active');
	}
});

//funciion login

function login(){
	let emailR = document.getElementById('email').value;
	let passwordR = document.getElementById('pass').value;
	const auth = getAuth();
	signInWithEmailAndPassword(auth, emailR, passwordR)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		console.log(user)
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage)
	});
	}

	formuLogin.addEventListener('submit', (e) => {
		login();
		loginForm.classList.remove('active');
	})





