const btn = document.querySelector('.btn');
let input = document.querySelector('.txt-input');
const output = document.querySelector('.output');

btn.addEventListener('click', (e) => {
  console.log(input.value);

  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      console.log(err);
      alert(`Error: ${err}`);
    });
});
