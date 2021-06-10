const draggable = document.getElementById('draggable');

draggable.addEventListener('mousedown', handleMouseDown);
draggable.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  draggable.style.position = 'absolute';
  document.body.append(draggable);

  moveAt(e.pageX, e.pageY);

  document.addEventListener('mousemove', handleMouseMove);
}

function handleMouseMove(e) {
  moveAt(e.pageX, e.pageY);
}

function handleMouseUp(e) {
  document.removeEventListener('mousemove', handleMouseMove);
  draggable.onmouseup = null;
}

function moveAt(pageX, pageY) {
  draggable.style.left = pageX - draggable.offsetWidth / 2 + 'px';
  draggable.style.top = pageY - draggable.offsetHeight / 2 + 'px';
}
