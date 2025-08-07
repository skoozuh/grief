// Optional: subtle cursor gem trail
document.addEventListener('pointermove', e => {
  const dot = document.createElement('div');
  dot.className = 'trail';
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 500);
});
