const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsLi = document.querySelector(`#ingredients`)

const makeLiFromIngridients = option => {
  return option.map(option => {
  const liEl = document.createElement(`li`);
  liEl.textContent = option;
  return liEl;
  });
}

const productsLi = makeLiFromIngridients(ingredients);
ingredientsLi.append(...productsLi);