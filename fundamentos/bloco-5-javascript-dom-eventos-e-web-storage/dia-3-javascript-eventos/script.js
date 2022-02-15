function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

//Exercicio 01

//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
let dias = document.getElementById("days");

for (let index = 0; index < dezDaysList.length; index++) {
  let liElement = document.createElement("li");
  liElement.classList.add("day");
  liElement.innerText = dezDaysList[index];
  dias.appendChild(liElement);
}

//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
let holiday = document.getElementsByClassName("day");
for (let index = 0; index < holiday.length; index += 1) {
  if (
    holiday[index].innerText == 24 ||
    holiday[index].innerText == 25 ||
    holiday[index].innerText == 31
  ) {
    holiday[index].classList.add("holiday");
  }
}

//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
let friday = document.getElementsByClassName("day");
for (let index = 0; index < friday.length; index += 1) {
  if (
    friday[index].innerText == 4 ||
    friday[index].innerText == 11 ||
    friday[index].innerText == 18 ||
    friday[index].innerText == 25
  ) {
    friday[index].classList.add("friday");
  }
}

// Exercício 2:

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonHoliday(string) {
  let btnDivHoliday = document.querySelector(".buttons-container");
  let buttons = document.createElement("button");
  buttons.id = "btn-holiday";
  buttons.innerHTML = string;
  btnDivHoliday.appendChild(buttons);
}
buttonHoliday("Feriados");

// Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeColorHolidys() {
  let btnDivHoliday = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll(".holiday");

  btnDivHoliday.addEventListener("click", function () {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.background == "white") {
        holidays[index].style.background = "rgb(238,238,238)";
      } else {
        holidays[index].style.background = "white";
      }
    }
  });
}
changeColorHolidys();

// Exercício 4:

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonFriday(string) {
  let btnDivFriday = document.querySelector(".buttons-container");
  let btnFriday = document.createElement("button");
  btnFriday.id = "btn-friday";
  btnFriday.innerHTML = string;
  btnDivFriday.appendChild(btnFriday);
}

buttonFriday("Sexta-feira");

// Exercício 5:

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeColorFridays(dezFridays) {
  let btnDivFriday = document.querySelectorAll('.friday');
  let friday = document.getElementById('btn-friday');
  let days = document.querySelectorAll('.friday');
  
  friday.addEventListener('click', function () {
    for (let index = 0; index < btnDivFriday.length; index += 1) {
      if (btnDivFriday[index].innerHTML !== 'SEXTOU o/') {
        btnDivFriday[index].innerHTML = 'SEXTOU o/';
      } else {
        btnDivFriday[index].innerHTML = dezFridays[index];
      }
    }
  });
}
let dezFridays = [ 4, 11, 18, 25 ];
changeColorFridays(dezFridays);
