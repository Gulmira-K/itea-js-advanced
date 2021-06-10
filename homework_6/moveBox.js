const movable = document.querySelector('.movable');
const btn = document.querySelector('input');

const maxDistance = document.body.clientWidth - 60; // max left distance
let position = 0; //box left position
let moveInterval; //interval variable

movable.addEventListener('click', move);
btn.addEventListener('click', stopMove);

function stopMove() {
  clearInterval(moveInterval);
}

function move() {
  moveInterval = setInterval(toRight, 10);

  function toRight() {
    if (parseInt(movable.style.left) == maxDistance) {
      clearInterval(moveInterval);
      movable.style.left = `0px`;
    } else {
      position += 1;
      movable.style.left = `${position}px`;
    }
  }
}