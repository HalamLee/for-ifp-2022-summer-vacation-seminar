const preview = document.querySelector('#preview');
const li = document.querySelectorAll('li');
const span = document.querySelector('#span');

li.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    preview.style.backgroundImage = `url('./img/${el.id}.png')`;
    console.log(el.id);
  });
});
