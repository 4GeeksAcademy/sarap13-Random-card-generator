/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Creamos la variable que cogerá la clase y al cargar la web ejercerá la función.
  let typeOfCards = document.querySelectorAll(".type-of-card");
  let randomType = generateRandomType();
  // For each para que los elementos de la misma clase cambien a la vez y tengan lo mismo.
  // Para cada caracter se le aplica una clase con un color predeterminado. Si es este char aplicale ésta clase.
  typeOfCards.forEach(function(typeOfCard) {
    typeOfCard.innerHTML = randomType;
    if (randomType === "♥") {
      typeOfCard.classList.add("heart-class");
    }
    if (randomType === "♦") {
      typeOfCard.classList.add("diamond-class");
    }
    if (randomType === "♠") {
      typeOfCard.classList.add("spade-class");
    }
    if (randomType === "♣") {
      typeOfCard.classList.add("club-class");
    }
  });

  // Selecciona el id number y le aplica la función de generar Random number.
  document.querySelector("#number").innerHTML = generateRandomNumber();
};

// Función para generar un simbolo Random
function generateRandomType() {
  let symbolTypeOfCard = ["♦", "♥", "♠", "♣"];
  let randomTypeOfCard = Math.floor(Math.random() * symbolTypeOfCard.length);
  return symbolTypeOfCard[randomTypeOfCard];
}

// Función para generar un número de carta Random
function generateRandomNumber() {
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let randomnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[randomnumbers];
}
