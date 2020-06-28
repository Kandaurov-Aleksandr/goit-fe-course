let input;
let total = 0;

while (input !== null) {
  input = prompt("Введите число:");
  if (Number(input) === "" || isNaN(input)) {
    alert("Было введено не число!");
  } else {
    total += Number(input);
  }
}

alert(`Общая сумма чисел равна ${total}`);
console.log(total);