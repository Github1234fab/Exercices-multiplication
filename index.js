//récupération..........................................................................................................................................
let tableButtons = document.getElementById("tableButtons");
// let liste = document.getElementsByClassName("ListeElements");
// let button = document.getElementById("button");
let input = document.getElementById("input");
let tableChoose = document.getElementById("tableChoose");
let questionFirstPractice = document.getElementById("questionFirstPractice");
// let questionPracticeTwo = document.getElementById("questionPracticeTwo");
// let questionPracticeThree = document.getElementById("questionPracticeThree");
// let questionPracticeFour = document.getElementById("questionPracticeFour");
let FirstPracticeResponseSend = document.getElementById("FirstPracticeResponseSend");
// let ResponseFirstPractice = document.getElementById("ResponseFirstPractice");
let responseFirstPractice = document.getElementById("responseFirstPractice");

//Logique pour proposer un chiifre aléatoire ..........................................................................................................................................

let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNumber = arrayNumber[Math.floor(Math.random() * arrayNumber.length)];

// Choix de table et inner.html choix sur tableChoose-------------------------------------------------------------------------------------------

tableButtons.addEventListener("click", (e) => {
  let tableValue = e.target.value;
  tableChoose.innerHTML = "Tu as choisi la table de " + tableValue;
  let totalFirstPractice = randomNumber * tableValue;
  questionFirstPractice.innerHTML = `? x ${tableValue} = ${totalFirstPractice}`;
});

//Test entre la réponse et randomNumber..................................
FirstPracticeResponseSend.addEventListener("click", () => {
  if (randomNumber == ResponseFirstPractice.value) {
    responseFirstPractice.innerHTML = "Yeah!! Tu gagnes!";
  } else {
    responseFirstPractice.innerHTML = "Uuuurps! T'es vraiment sûr, là?!!!!!!";
  }
});
