const categoriesUl = document.querySelector('#categories');
const itemLi = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesUl.children.length}`);

itemLi.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

// itemLi.forEach(
//   el => console.log(`Category: ${el.querySelector('h2').textContent}`),
//   el => console.log(`Elements: ${el.querySelector('ul').children.length}`)
// );
