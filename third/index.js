const clickedHandler = (e) => {
  const cardTitle = [];
  const titles = e.target.parentNode.parentNode.querySelectorAll('h1');
  titles.forEach((title) => cardTitle.push(title.innerText));
  alert(cardTitle.join(' '));
};

const clickList = document.querySelectorAll('.back h2');

clickList.forEach((el) => {
  el.addEventListener('click', clickedHandler);
});
