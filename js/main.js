// Al tocar una foto se abre completa; al tocar de nuevo (o Esc) se cierra.
const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
const close = () => lb.classList.remove('on');
document.querySelectorAll('.panel').forEach(p => {
  const open = () => { lb.querySelector('img').src = p.querySelector('img').src; lb.classList.add('on'); };
  p.addEventListener('click', open);
  p.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
});
lb.addEventListener('click', close);
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
