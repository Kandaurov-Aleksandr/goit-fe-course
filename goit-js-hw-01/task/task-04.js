let credits = 23580;
const pricePerDroid = 3000;

const orderQuantity = prompt("Введите желаемое количество дроидов:");

if (orderQuantity === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = orderQuantity * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  }

  if (totalPrice <= credits) {
    alert(
      `Вы купили ${orderQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
    );
  }
}