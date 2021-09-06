const item = document.querySelectorAll("h2");
item.forEach(item => {
    console.log(`Категория: ${item.textContent}, 
    Количество елементов: ${item.nextElementSibling.children.length}`)
});
