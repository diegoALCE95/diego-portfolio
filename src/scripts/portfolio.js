// ---------------------------------------------------------------------------
// Client-side behavior (vanilla JS, no framework):
//   • EN/ES language switch (persisted)   • projects pagination
//   • scroll-reveal (IntersectionObserver) • cursor-reactive hero orbs
//   • mobile nav toggle
// ---------------------------------------------------------------------------
import { T, PER_PAGE } from '../data/content.js';

const STORAGE_KEY = 'da-portfolio-lang';

/* --- Language ------------------------------------------------------------ */
function applyLang(lang) {
  const dict = T[lang] || T.en;
  document.documentElement.lang = lang;

  // Simple UI strings keyed by the dictionary.
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = dict[el.dataset.i18n];
    if (val != null) el.textContent = val;
  });

  // Skill-group titles (indexed array in the dictionary).
  document.querySelectorAll('[data-i18n-skilltitle]').forEach((el) => {
    const i = Number(el.dataset.i18nSkilltitle);
    if (dict.skillTitles && dict.skillTitles[i] != null) el.textContent = dict.skillTitles[i];
  });

  // Elements carrying their own EN/ES text via data-en-*/data-es-* attributes.
  const fields = ['desc', 'shot', 'role', 'company'];
  fields.forEach((f) => {
    document.querySelectorAll(`[data-en-${f}]`).forEach((el) => {
      const val = el.dataset[lang + f.charAt(0).toUpperCase() + f.slice(1)];
      if (val != null) el.textContent = val;
    });
  });

  // Active state on the switch.
  document.querySelectorAll('.lang__btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
}

function initLang() {
  let lang = 'en';
  try { lang = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { /* ignore */ }
  if (lang !== 'en') applyLang(lang);
  else applyLang('en');

  document.querySelectorAll('.lang__btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* --- Filtering + pagination ---------------------------------------------- */
function initPagination() {
  const grid = document.getElementById('projects-grid');
  const pager = document.getElementById('pagination');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.card'));
  const label = document.getElementById('page-label');
  const countNum = document.getElementById('count-num');
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const pad = (n) => String(n).padStart(2, '0');

  let filter = 'All';
  let page = 0;
  let filtered = cards;                 // cards matching the active filter

  const pageCount = () => Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  function render() {
    const totalPages = pageCount();
    if (page >= totalPages) page = totalPages - 1;

    // Hide everything, then reveal only the current page of the filtered set.
    cards.forEach((card) => { card.hidden = true; });
    filtered.forEach((card, i) => {
      const onPage = i >= page * PER_PAGE && i < page * PER_PAGE + PER_PAGE;
      card.hidden = !onPage;
      if (onPage) card.classList.add('is-visible');
    });

    if (countNum) countNum.textContent = String(filtered.length);
    if (label) label.textContent = `${pad(page + 1)} / ${pad(totalPages)}`;
    if (pager) pager.hidden = filtered.length <= PER_PAGE;
  }

  function applyFilter(next) {
    filter = next;
    filtered = filter === 'All' ? cards : cards.filter((c) => c.dataset.tag === filter);
    page = 0;
    render();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      applyFilter(btn.dataset.filter);
    });
  });

  if (pager) {
    const prev = document.getElementById('prev-page');
    const next = document.getElementById('next-page');
    prev && prev.addEventListener('click', () => { const tp = pageCount(); page = (page - 1 + tp) % tp; render(); scrollToWork(); });
    next && next.addEventListener('click', () => { const tp = pageCount(); page = (page + 1) % tp; render(); scrollToWork(); });
  }

  function scrollToWork() {
    const work = document.getElementById('work');
    if (work) work.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render();

  // Prevent in-development ('#') cards from jumping to the top of the page.
  cards.forEach((card) => {
    if (card.hasAttribute('data-wip')) {
      card.addEventListener('click', (e) => e.preventDefault());
    }
  });
}

/* --- Scroll reveal ------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const revealAll = () => els.forEach((el) => el.classList.add('is-visible'));

  if (!('IntersectionObserver' in window)) { revealAll(); return; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  els.forEach((el) => { if (!el.hidden) io.observe(el); });

  // Safety net: reveal everything after a short delay.
  setTimeout(revealAll, 2600);
}

/* --- Hero orbs -------------------------------------------------------------
   orb1 (top-right) is centered exactly on the cursor while it's over the hero,
   easing toward it each frame (rAF lerp) for smooth trailing; on leave it
   glides back to its rest position. orb2 (bottom-left) drifts on its own
   (see the `driftX` keyframes in global.css) and is left untouched here.
   -------------------------------------------------------------------------- */
function initOrbs() {
  const hero = document.getElementById('hero');
  const orb1 = document.getElementById('orb1');
  if (!hero || !orb1) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none)').matches) return; // skip on touch devices

  const EASE = 0.12;              // lower = smoother/slower trailing
  let targetX = 0, targetY = 0;   // desired translate to sit centered on cursor
  let curX = 0, curY = 0;         // current (eased) translate
  let raf = null;

  function tick() {
    curX += (targetX - curX) * EASE;
    curY += (targetY - curY) * EASE;
    if (Math.abs(targetX - curX) < 0.2 && Math.abs(targetY - curY) < 0.2) {
      curX = targetX; curY = targetY;                 // settle
      orb1.style.transform = (curX === 0 && curY === 0) ? '' : `translate(${curX}px, ${curY}px)`;
      raf = null;
      return;
    }
    orb1.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`;
    raf = requestAnimationFrame(tick);
  }
  function start() { if (raf == null) raf = requestAnimationFrame(tick); }

  hero.addEventListener('mousemove', (ev) => {
    const r = hero.getBoundingClientRect();
    // Rest center of the orb, relative to the hero (offset* ignores transforms).
    const restCX = orb1.offsetLeft + orb1.offsetWidth / 2;
    const restCY = orb1.offsetTop + orb1.offsetHeight / 2;
    // Translate needed so the orb's center lands on the cursor.
    targetX = (ev.clientX - r.left) - restCX;
    targetY = (ev.clientY - r.top) - restCY;
    start();
  });
  hero.addEventListener('mouseleave', () => {
    targetX = 0; targetY = 0;    // glide back to rest
    start();
  });
}

/* --- Mobile nav ---------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  const setOpen = (open) => {
    links.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!links.classList.contains('is-open')));
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

/* --- Boot ---------------------------------------------------------------- */
function init() {
  initLang();
  initPagination();
  initReveal();
  initOrbs();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
