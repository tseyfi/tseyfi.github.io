const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.addEventListener('click', () => { const isOpen = mobileNav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(isOpen)); menuButton.textContent = isOpen ? 'Close' : 'Menu'; });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu'; }));
document.querySelectorAll('.filter').forEach(button => { button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); const selected = button.dataset.filter; document.querySelectorAll('.publication').forEach(publication => publication.classList.toggle('hidden', selected !== 'all' && publication.dataset.category !== selected)); }); });
document.getElementById('year').textContent = new Date().getFullYear();
