let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Будь ласка введiть число:");

  if (!input) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(input);
}