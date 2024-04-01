const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
  randomNumber = Math.floor(Math.random() * x + 1);
  iteration++;
  console.log(randomNumber);
}
console.log("////////");
console.log(iteration);
console.log(randomNumber);
