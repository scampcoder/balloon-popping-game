const balloon0 = document.getElementById('balloon0');

const balloon1 = document.getElementById('balloon1');

const balloon2 = document.getElementById('balloon2');

const balloon3 = document.getElementById('balloon3');

const balloon4 = document.getElementById('balloon4');

const balloon5 = document.getElementById('balloon5');

const balloon6 = document.getElementById('balloon6');

const balloon7 = document.getElementById('balloon7');

const balloon8 = document.getElementById('balloon8');

const balloon9 = document.getElementById('balloon9');

const balloon10 = document.getElementById('balloon10');

const balloon11 = document.getElementById('balloon11');

const balloon12 = document.getElementById('balloon12');

const balloon13 = document.getElementById('balloon13');

const balloon14 = document.getElementById('balloon14');

const balloon15 = document.getElementById('balloon15');

const balloon16 = document.getElementById('balloon16');

const balloon17 = document.getElementById('balloon17');

const balloon18 = document.getElementById('balloon18');

const balloon19 = document.getElementById('balloon19');

const balloon20 = document.getElementById('balloon20');

const balloon21 = document.getElementById('balloon21');

const balloon22 = document.getElementById('balloon22');

const balloon23 = document.getElementById('balloon23');

const balloon24 = document.getElementById('balloon24');

const yay = document.getElementById('yay-no-balloons');

function balloonPopper(balloonVariable) {
  balloonVariable.addEventListener('mouseover', popballoon);

  function popballoon() {
    if(balloonVariable.style.background === 'none') {
      balloonVariable.innerText = "";
    }
    else {
      balloonVariable.innerText = "POP!";
      balloonVariable.style.background = "none";
    }
  }

  balloonVariable.addEventListener('mouseout', popIsOver, false);

  function popIsOver() {
    balloonVariable.innerText = "";
  }
}

balloonPopper(balloon0);
balloonPopper(balloon1);
balloonPopper(balloon2);
balloonPopper(balloon3);
balloonPopper(balloon4);
balloonPopper(balloon5);
balloonPopper(balloon6);
balloonPopper(balloon7);
balloonPopper(balloon8);
balloonPopper(balloon9);
balloonPopper(balloon10);
balloonPopper(balloon11);
balloonPopper(balloon12);
balloonPopper(balloon13);
balloonPopper(balloon14);
balloonPopper(balloon15);
balloonPopper(balloon16);
balloonPopper(balloon17);
balloonPopper(balloon18);
balloonPopper(balloon19);
balloonPopper(balloon20);
balloonPopper(balloon21);
balloonPopper(balloon22);
balloonPopper(balloon23);
balloonPopper(balloon24);

document.addEventListener('mouseover', noBalloons, false);

function noBalloons() {
  if (balloon0.style.background === 'none' && balloon1.style.background === 'none' && balloon2.style.background === 'none' && balloon3.style.background === 'none' && balloon4.style.background === 'none' && balloon5.style.background === 'none' && balloon6.style.background === 'none' && balloon7.style.background === 'none' && balloon8.style.background === 'none' && balloon9.style.background === 'none' && balloon10.style.background === 'none' && balloon11.style.background === 'none' && balloon12.style.background === 'none' && balloon13.style.background === 'none' && balloon14.style.background === 'none' && balloon15.style.background === 'none' && balloon16.style.background === 'none' && balloon17.style.background === 'none' && balloon18.style.background === 'none' && balloon19.style.background === 'none' && balloon20.style.background === 'none' && balloon21.style.background === 'none' && balloon22.style.background === 'none' && balloon23.style.background === 'none' && balloon24.style.background === 'none') {
    yay.style.display = 'block';
    window.scrollTo(0, 0);
  }
}
