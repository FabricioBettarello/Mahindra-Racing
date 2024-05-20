function NavBar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function LoGin() {
    window.location.href = "login/login.html";
}

function LoGin2() {
    window.location.href = "login.html";
}

function LoGin3() {
    window.location.href = "../login/login.html";
}

function criar() {
    window.location.href = "registro.html";
}

function entrar() {
    window.location.href = "login.html";
}

function Fontes3() {
    window.location.href = "https://motorsport.uol.com.br/formula-e/drivers/";
}

function comprar() {
    let userInput = prompt('Quantos ingressos deseja comprar:');
    if (userInput !== null) {
        alert('Você comprou: ' + userInput + ' ingressos');
    }
}

var mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

const cars = ['../assets/images/carro1.png', '../assets/images/carro2.png', '../assets/images/carro3.png', '../assets/images/carro4.png'];
let currentCarIndex = 0;

function updateCarImage() {
    const carImage = document.getElementById('carImage');
    carImage.style.opacity = 0;
    setTimeout(() => {
        carImage.src = cars[currentCarIndex];
        carImage.onload = () => {
            carImage.style.opacity = 1;
        };
    }, 500);
}

updateCarImage();

function nextCar() {
    currentCarIndex = (currentCarIndex + 1) % cars.length;
    updateCarImage();
}

function previousCar() {
    currentCarIndex = (currentCarIndex - 1 + cars.length) % cars.length;
    updateCarImage();
}

function selectCar() {
    alert('Você selecionou: ' + cars[currentCarIndex]);
}