const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const password = prompt("Введите пароль:");

password
  ? password === ADMIN_PASSWORD
    ? (message = "Добро пожаловать!")
    : (message = "Доступ запрещен, неверный пароль!")
  : (message = "Отменено пользователем!");

alert(message);