const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let arr = login.split("");
  if (arr.length < 4 || arr.length > 16) {
    return false;
  }

  return true;
};

const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i < allLogins.length; i++) {
    while (allLogins[i].includes(login)) {
      return false;
    }
  }

  return true;
};

const addLogin = function (allLogins, login) {
  let message = "Логін успішно доданий!";
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return message;
    } else {
      message = "Такий логін вже використовується!";
      return message;
    }
  } else {
    message = "Помилка! Логін повинен бути від 4 до 16 символів";
    return message;
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'