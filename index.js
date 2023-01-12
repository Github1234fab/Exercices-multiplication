//récupération..........................................................................................................................................
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
let questionFirstPractice = document.getElementById("questionFirstPractice");
let questionPracticeTwo = document.getElementById("questionPracticeTwo");
let questionPracticeThree = document.getElementById("questionPracticeThree");
let questionPracticeFour = document.getElementById("questionPracticeFour");
let FirstPracticeResponseSend = document.getElementById("FirstPracticeResponseSend");
let ResponseFirstPractice = document.getElementById("ResponseFirstPractice");
let responseFirstPractice = document.getElementById("responseFirstPractice");

//Variable pour attribuer numéro au addEventListener..........................................................................................................................................
let numberOne = 1;
let numberTwo = 2;
let numberThree = 3;
let numberFour = 4;
let numberFive = 5;
let numberSix = 6;
let numberSeven = 7;
let numberHeight = 8;
let numberNine = 9;
let numberTen = 10;
// let numberTableChoose;

//Logique pour proposer un chiifre aléatoire qui sera contenu dans l'operation...........................................................................................................................................
let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNumber = arrayNumber[Math.floor(Math.random() * arrayNumber.length)];

//Test entre la réponse et randomNumber..................................
FirstPracticeResponseSend.addEventListener("click", () => {
  if (randomNumber == ResponseFirstPractice.value) {
    responseFirstPractice.innerHTML = "Yeah!! Tu gagnes!";
  } else {
    responseFirstPractice.innerHTML = "Uuuurps! T'es vraiment sûr, là?!!!!!!";
  }
});

//Gestion d'évenement en attribuant le numéro dans la variable, correspondant au numéro du bouton cliqué..........................................................................................................................................
one.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberOne;
  let totalOne = randomNumber * numberOne;
  questionFirstPractice.innerHTML = `? x ${numberOne} = ${totalOne}`;
});
two.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberTwo;
  let totalTwo = randomNumber * numberTwo;
  questionFirstPractice.innerHTML = `? x ${numberTwo} = ${totalTwo}`;
});
three.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberThree;
  let totalThree = randomNumber * numberThree;
  questionFirstPractice.innerHTML = `? x ${numberThree} = ${totalThree}`;
});
four.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberFour;
  let totalFour = randomNumber * numberFour;
  questionFirstPractice.innerHTML = `? x ${numberFour} = ${totalFour}`;
});
five.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberFive;
  let totalFive = randomNumber * numberFive;
  questionFirstPractice.innerHTML = `? x ${numberFive} = ${totalFive}`;
});
six.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberSix;
  let totalSix = randomNumber * numberSix;
  questionFirstPractice.innerHTML = `? x ${numberSix} = ${totalSix}`;
});
seven.addEventListener("click", () => {
  tableChoose.innerHTML = "BOk!!Tu as choisi la table de " + numberSeven;
  let totalSeven = randomNumber * numberSeven;
  questionFirstPractice.innerHTML = `? x ${numberSeven} = ${totalSeven}`;
});
height.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberHeight;
  let totalHeight = randomNumber * numberHeight;
  questionFirstPractice.innerHTML = `? x ${numberHeight} = ${totalHeight}`;
});

nine.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberNine;
  let totalNine = randomNumber * numberNine;
  questionFirstPractice.innerHTML = `? x ${numberNine} = ${totalNine}`;
});
ten.addEventListener("click", () => {
  tableChoose.innerHTML = "Ok!! Tu as choisi la table de " + numberTen;
  let totalTen = randomNumber * numberTen;
  questionFirstPractice.innerHTML = `? x ${numberTen} = ${totalTen}`;
});
