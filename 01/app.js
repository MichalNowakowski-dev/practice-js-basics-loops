const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

function isMoreThanFive(number) {
  if (number > 5) {
    for (let i = 5; i <= number; i++) {
      console.log(i);
    }
  }
  console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}

isMoreThanFive(randomNumber);
