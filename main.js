/* Vigolo Web Studio — main.js
   Arma el portfolio y los precios desde proyectos.js. */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// "https://vigolomarketing-tech.github.io/Metales-sur/" → "vigolomarketing-tech.github.io/Metales-sur"
const dominio = url => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const clientes = PROYECTOS.filter(p => p.tipo === 'cliente');
const demos    = PROYECTOS.filter(p => p.tipo === 'demo');

function card(p, grande) {
  const esCliente = p.tipo === 'cliente';
  return `
    <a class="card fade-up${grande ? ' card--grande' : ''}" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" data-rubro="${esc(p.rubro)}">
      <span class="card__media">
        <img src="${esc(p.img)}" alt="${esc(p.nombre)}" loading="lazy" width="800" height="600" />
      </span>
      <span class="card__body">
        <span class="card__top">
          <span class="badge">${esc(p.rubro)}</span>
          ${esCliente ? '<span class="live">En línea</span>' : ''}
        </span>
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.descripcion)}</p>
        <span class="card__link">${esCliente ? esc(dominio(p.url)) + ' ↗' : 'Ver demo →'}</span>
      </span>
    </a>`;
}

// ── Clientes ───────────────────────────────────────────────
document.getElementById('clientes-destacados').innerHTML =
  clientes.filter(p => p.destacado).map(p => card(p, true)).join('');
document.getElementById('clientes-grid').innerHTML =
  clientes.filter(p => !p.destacado).map(p => card(p, false)).join('');

document.getElementById('clients-strip').innerHTML =
  clientes.map(p => `<li>${esc(p.nombre)}</li>`).join('');

// ── Estadísticas del hero ──────────────────────────────────
document.getElementById('stat-clientes').textContent = clientes.length;
document.getElementById('stat-rubros').textContent = new Set(PROYECTOS.map(p => p.rubro)).size;

// ── Celular del hero: primer cliente destacado ─────────────
const heroCliente = clientes.find(p => p.destacado);
if (heroCliente) {
  const phone = document.getElementById('hero-phone');
  phone.href = heroCliente.url;
  phone.setAttribute('aria-label', 'Ver web de ' + heroCliente.nombre);
  document.getElementById('hero-phone-img').src = heroCliente.img;
  document.getElementById('hero-phone-img').alt = heroCliente.nombre;
  document.getElementById('hero-phone-name').textContent = heroCliente.nombre;
  document.getElementById('hero-phone-domain').textContent = dominio(heroCliente.url);
}

// ── Demos con filtro por rubro ─────────────────────────────
const demosGrid = document.getElementById('demos-grid');
const chips = document.getElementById('demos-chips');
demosGrid.innerHTML = demos.map(p => card(p, false)).join('');

const rubros = ['Todos', ...new Set(demos.map(p => p.rubro))];
chips.innerHTML = rubros.map((r, i) =>
  `<button type="button" class="chip" aria-pressed="${i === 0}" data-rubro="${esc(r)}">${esc(r)}</button>`
).join('');

chips.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  const rubro = chip.dataset.rubro;
  chips.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c === chip));
  demosGrid.querySelectorAll('.card').forEach(c => {
    c.hidden = rubro !== 'Todos' && c.dataset.rubro !== rubro;
  });
});

// ── Precios ────────────────────────────────────────────────
const pesos = n => '$ ' + n.toLocaleString('es-AR');

document.getElementById('precios-grid').innerHTML = PRECIOS.planes.map(plan => `
  <article class="plan fade-up${plan.destacado ? ' plan--destacado' : ''}">
    <h3>${esc(plan.nombre)}</h3>
    <p class="plan__precio"><small>desde</small> ${pesos(plan.desde)}</p>
    <p class="plan__modalidad">${esc(plan.modalidad)}</p>
    <ul>${plan.incluye.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
    <a class="btn ${plan.destacado ? 'btn--primary' : 'btn--secondary'}" target="_blank" rel="noopener noreferrer"
       href="https://wa.me/5491128074105?text=${encodeURIComponent('Hola, me interesa el plan "' + plan.nombre + '". ¿Me pasás info?')}">Quiero este plan</a>
  </article>`).join('');
document.getElementById('precios-nota').textContent = PRECIOS.nota;

// ── Año en footer ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Menú mobile ────────────────────────────────────────────
const toggle = document.querySelector('.nav__toggle');
const menu   = document.querySelector('.nav__menu');

function closeMenu() {
  menu.classList.remove('nav__menu--open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
}

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('nav__menu--open');
  toggle.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });

// ── Fade-up al entrar en pantalla ──────────────────────────
// El CSS solo oculta .fade-up si el usuario no pidió reducir movimiento.
const fades = document.querySelectorAll('.fade-up');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fades.forEach(el => io.observe(el));
} else {
  fades.forEach(el => el.classList.add('visible'));
}
