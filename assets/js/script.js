  const menu = document.getElementById('hiddenMenu');
  const openBtn = document.getElementById('navMenuIcon');
  const closeBtn = document.getElementById('hiddenNavMenuIcon');

  // باز کردن منو
  openBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });

  // بستن منو
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });

