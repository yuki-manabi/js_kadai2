document.addEventListener(`DOMContentLoaded`, () => {
  document.getElementById(`btn`).addEventListener(`click`, () => {

    const parentNode = document.getElementById(`display`);
    //parentNode.innerHTML = `<div id=/"display/"></div>`;//display表示初期化
    if (parentNode.getElementsByClassName(`children`).length > 0) {
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      }
    }
  
    const fizz = document.getElementById(`fizz`).value;
    const buzz = document.getElementById(`buzz`).value;
  
    const regex = /^([1-9]\d*)$/;//整数の正規表現
  
    if (!regex.test(fizz) || !regex.test(buzz)) {

      const pElement = document.createElement(`div`);
      pElement.classList.add(`children`);
      pElement.textContent = `整数値を入力してください`;
      parentNode.appendChild(pElement);
      return;

    }
    const fizzNum = parseInt(fizz);
    const buzzNum = parseInt(buzz);

    for (let i = 1; i < 100; i++) {
      const pElement = document.createElement(`div`);
      pElement.classList.add(`children`);

      if ((i % fizzNum === 0) && (i % buzzNum === 0)) {
        pElement.textContent = `FizzBuzz ${i}`;
      } else if (i % fizzNum === 0) {
        pElement.textContent = `Fizz ${i}`;
      } else if (i % buzzNum === 0) {
        pElement.textContent = `Buzz ${i}`;
      }

      parentNode.appendChild(pElement);
    }
  });
});