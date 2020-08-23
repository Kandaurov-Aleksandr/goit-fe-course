const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const insertItems = function (list) {
  const newList = [];
  list.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    newList.push(li);
  });
  listRef.append(...newList);
};
insertItems(ingredients);