const countryInput = prompt("Введите страну доставки:");
const countryCheck = countryInput.toLowerCase();
let cost;

switch (countryCheck) {
  case "китай":
    cost = 100;
    alert(
      `Доставка в ${
        countryCheck[0].toUpperCase() + countryCheck.slice(1)
      } будет стоить ${cost} кредитов`
    );
    break;

  case "чили":
    cost = 250;
    alert(
      `Доставка в ${
        countryCheck[0].toUpperCase() + countryCheck.slice(1)
      } будет стоить ${cost} кредитов`
    );
    break;

  case "австралия":
    cost = 170;
    alert(
      `Доставка в ${
        countryCheck[0].toUpperCase() + countryCheck.slice(1)
      } будет стоить ${cost} кредитов`
    );
    break;

  case "индия":
    cost = 80;
    alert(
      `Доставка в ${
        countryCheck[0].toUpperCase() + countryCheck.slice(1)
      } будет стоить ${cost} кредитов`
    );
    break;

  case "ямайка":
    cost = 120;
    alert(
      `Доставка в ${
        countryCheck[0].toUpperCase() + countryCheck.slice(1)
      } будет стоить ${cost} кредитов`
    );
    break;

  default:
    alert("В Bашей стране доставка не доступна");
    break;
}