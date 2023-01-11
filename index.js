//récupération
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let height = document.getElementById("height");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let liste = document.getElementsByClassName("ListeElements");
let button = document.getElementById("button");
let input = document.getElementById("input");
let tableChoose = document.getElementById("tableChoose");

//Variable pour attribuer numéro au addEventListener
let numberOne;
let numberTwo;
let numberThree;
let numberFour;
let numberFive;
let numberSix;
let numberSeven;
let numberHeight;
let numberNine;
let numberTen;

//Gestion d'évenement en attribuant le numéro dans la variable, correspondant au numéro du bouton cliqué
one.addEventListener("click", () => {
  numberOne = 1;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberOne;
});
two.addEventListener("click", () => {
  numberTwo = 2;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberTwo;
});
three.addEventListener("click", () => {
  numberThree = 3;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberThree;
});
four.addEventListener("click", () => {
  numberFour = 4;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberFour;
});
five.addEventListener("click", () => {
  numberFive = 5;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberFive;
});
six.addEventListener("click", () => {
  numberSix = 6;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberSix;
});
seven.addEventListener("click", () => {
  numberSeven = 7;
  tableChoose.innerHTML = "BOk!!Tu as choisi la table de " + numberSeven;
});
height.addEventListener("click", () => {
  numberHeight = 8;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberHeight;
});

nine.addEventListener("click", () => {
  numberNine = 9;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberNine;
});
ten.addEventListener("click", () => {
  numberTen = 10;
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberTen;
});

//*************************************************************************************************
