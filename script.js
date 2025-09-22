// Gera corações flutuantes
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.textContent = '💗';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Cria vários corações continuamente
setInterval(createFloatingHeart, 300);
