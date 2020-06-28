const total = 100;
const ordered = 50;

const order = prompt("Введите желаемое количество товаров:");
if (Number(prompt) !== NaN) {
  if (Number(order) <= total) {
    alert("Заказ оформлен, с Вами свяжется менеджер");
  }

  if (Number(order) > total) {
    alert("На складе недостаточно товаров!");
  }
}