import { site } from '../data/site.mjs';
import { icons, lotus } from './icons.mjs';

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const telHref = (n) => `tel:${n.replace(/[^+\d]/g, '')}`;

// Imagine de cabinet responsivă (toate fotografiile sunt 4:3).
export function roomImg(r, name, { sizes = '100vw', cls = '', alt = '', eager = false, big = false } = {}) {
  const base = `${r}assets/img/rooms/${name}`;
  const srcset = [`${base}-800.webp 800w`, `${base}-1600.webp 1600w`];
  if (big) srcset.push(`${base}-2400.webp 2400w`);
  return `<img class="${cls}" src="${base}-1600.webp" srcset="${srcset.join(', ')}" sizes="${sizes}" width="1600" height="1200" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

export function teamImg(r, t, { small = false, cls = '', eager = false } = {}) {
  const src = `${r}assets/img/team/${t.photo}${small ? '-480' : ''}.webp`;
  return `<img class="${cls}" src="${src}" alt="${esc(t.name)}" style="object-position:${t.focus}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

const nav = [
  ['cabinete', 'Cabinete'],
  ['servicii', 'Servicii'],
  ['tarife', 'Tarife'],
  ['terapeuti', 'Terapeuți'],
  ['contact', 'Contact'],
];

function header(r, { overHero }) {
  // Pe prima pagină ancorele sunt locale; pe celelalte duc înapoi acasă.
  const home = r === '' ? '' : `${r}`;
  const links = nav.map(([id, label]) => `<a href="${home}#${id}" data-nav="${id}">${label}</a>`).join('');
  return `
<a class="skip" href="#main">Sari la conținut</a>
<header class="header${overHero ? ' header--over-hero' : ''}" data-header>
  <div class="header__inner">
    <a class="brand" href="${r || './'}" aria-label="${site.name}, pagina principală">
      ${lotus('brand__mark')}
      <span class="brand__text"><span class="brand__name">Agape Center</span><span class="brand__tag">Terapie de suflet</span></span>
    </a>
    <nav class="nav" aria-label="Navigare principală">${links}</nav>
    <a class="btn btn--small btn--primary header__cta" href="${site.bookingUrl}" target="_blank" rel="noopener">
      <span>Rezervă</span>${icons.arrowUpRight}
    </a>
    <button class="burger" type="button" aria-label="Deschide meniul" aria-expanded="false" aria-controls="menu" data-burger>
      <span></span><span></span>
    </button>
  </div>
</header>
<div class="menu" id="menu" data-menu aria-hidden="true">
  <div class="menu__bg">${lotus('menu__lotus', { stroke: 1.2 })}</div>
  <nav class="menu__nav" aria-label="Meniu mobil">
    <a href="${r || './'}" style="--i:0">Acasă</a>
    ${nav.map(([id, label], i) => `<a href="${home}#${id}" style="--i:${i + 1}">${label}</a>`).join('')}
  </nav>
  <div class="menu__foot" style="--i:7">
    <a class="btn btn--primary" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă un cabinet</span>${icons.arrowUpRight}</a>
    <a href="${telHref(site.phone)}">${site.phoneDisplay}</a>
    <a href="mailto:${site.email}">${site.email}</a>
  </div>
</div>`;
}

function footer(r, { cta = true } = {}) {
  const home = r === '' ? '' : r;
  return `
<footer class="footer" id="footer">
  <div class="footer__lotus" aria-hidden="true">${lotus('', { stroke: 0.8 })}</div>
  <div class="container">
    ${cta ? `<div class="footer__cta" data-reveal>
      <p class="eyebrow eyebrow--light">Agape Center</p>
      <h2 class="footer__title">Un loc liniștit,<br><em>pentru munca ta cu oamenii.</em></h2>
      <div class="btn-row">
        <a class="btn btn--light" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă un cabinet</span>${icons.arrowUpRight}</a>
        <a class="btn btn--ghost-light" href="${site.whatsapp}" target="_blank" rel="noopener">${icons.whatsapp}<span>Scrie-ne pe WhatsApp</span></a>
      </div>
    </div>` : ''}
    <div class="footer__grid">
      <div class="footer__col footer__about">
        <a class="brand brand--light" href="${r || './'}">
          ${lotus('brand__mark')}
          <span class="brand__text"><span class="brand__name">Agape Center</span><span class="brand__tag">Terapie de suflet</span></span>
        </a>
        <p>${site.location}</p>
      </div>
      <div class="footer__col">
        <h3>Navigare</h3>
        <ul>${nav.map(([id, label]) => `<li><a href="${home}#${id}">${label}</a></li>`).join('')}</ul>
      </div>
      <div class="footer__col">
        <h3>Contact</h3>
        <ul>
          <li>${site.address.street},<br>${site.address.city}</li>
          <li><a href="mailto:${site.email}">${site.email}</a></li>
          <li><a href="${telHref(site.phone)}">${site.phoneDisplay}</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3>Program</h3>
        <ul>${site.hours.map((h) => `<li><span class="muted-light">${h.days}</span><br>${h.time}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} Agape Center · Terapie de suflet</span>
      <span>Rezervări online prin <a href="${site.bookingUrl}" target="_blank" rel="noopener">RoomTick</a></span>
    </div>
  </div>
</footer>`;
}

export function layout({
  r = '',
  title,
  description = site.description,
  body,
  overHero = false,
  bodyClass = '',
  footerCta = true,
  ogPath = 'assets/img/brand/og.jpg',
  jsonLd,
  assetsVersion = '',
  absoluteBase,
}) {
  // 404.html e servit din orice adresă, așa că acolo folosim căi absolute.
  const a = absoluteBase ?? r;
  const v = assetsVersion ? `?v=${assetsVersion}` : '';
  const siteUrl = (process.env.SITE_URL || '').replace(/\/?$/, '/');
  const og = process.env.SITE_URL ? siteUrl + ogPath : a + ogPath;
  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#f6efe7">
<meta property="og:type" content="website">
<meta property="og:locale" content="ro_RO">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${a}assets/img/brand/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${a}assets/img/brand/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&display=swap">
<link rel="stylesheet" href="${a}assets/css/styles.css${v}">
<script>document.documentElement.classList.add('js')</script>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>
<body class="${bodyClass}">
${header(a, { overHero })}
<main id="main">
${body}
</main>
${footer(a, { cta: footerCta })}
<div class="grain" aria-hidden="true"></div>
<script src="${a}assets/js/vendor/lenis.min.js${v}" defer></script>
<script src="${a}assets/js/main.js${v}" defer></script>
</body>
</html>
`;
}
