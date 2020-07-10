const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length < 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) return true;
  return false;
};

const addLogin = function (allLogins, login) {
  
  if (!isLoginUnique(logins, login)) return "Такий логін вже використовується!"; // check for unique

  if (!isLoginValid(login)) return "Помилка! Логін повинен бути від 4 до 16 символів"; // check for length

  allLogins.push(login); // Adding the Login to the array

  return "Логін успішно доданий!";
};

console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'