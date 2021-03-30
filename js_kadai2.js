document.addEventListener(`DOMContentLoaded`, () => {
  document.getElementById(`btn`).addEventListener(`click`, () => {

    const parentNode = document.getElementById(`display`);
    //parentNode.innerHTML = `<div id=/"display/"></div>`;//display表示初期化
    if(parentNode.getElementsByClassName(`children`).length > 0){
      while (parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
      }
    }
  
    const fizz = document.getElementById(`fizz`).value;
    const buzz = document.getElementById(`buzz`).value;
  
    const regex = /^([1-9]\d*)$/;//整数の正規表現
  
    if(!regex.test(fizz) || !regex.test(buzz)){

      const pElement = document.createElement(`div`);
      pElement.classList.add("children");
      pElement.textContent = "整数値を入力してください";
      parentNode.appendChild(pElement);
      return;

    }else{
      const fizzNum = parseInt(fizz);
      const buzzNum = parseInt(buzz);
  
      for(let i=1,j=1; i<100,j<100;){
        const pElement = document.createElement(`div`);
        pElement.classList.add("children");
  
        const _fizzNum = fizzNum*i;
        const _buzzNum = buzzNum*j;
  
        if(_fizzNum>=100 && _buzzNum>=100){
          break;
        }
        if(_fizzNum < _buzzNum){
          pElement.textContent = "Fizz " + _fizzNum;
          i++;
        }else if(_fizzNum > _buzzNum){
          pElement.textContent = "Buzz " + _buzzNum;
          j++;
        }else{
          pElement.textContent = "FizzBuzz " + _fizzNum;
          i++;
          j++;
        }
  
        parentNode.appendChild(pElement);
      }
    }
  });
});