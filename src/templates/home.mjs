import { site, hero, activities, rooms, services, pricing, teamFilters } from '../data/site.mjs';
import { therapists } from '../data/therapists.mjs';
import { layout, esc, roomImg, teamImg, telHref } from './layout.mjs';
import { icons, lotus } from './icons.mjs';

const slideLabels = { 'hero-1': 'Gate', 'bliss-1': 'Bliss', 'flow-3': 'Flow', 'hero-4': 'Spațiul comun' };

function heroSection() {
  const slides = hero.slides
    .map(
      (s, i) => `<div class="hero__slide${i === 0 ? ' is-active' : ''}" data-slide style="--origin:${['30% 60%', '70% 40%', '50% 70%', '40% 30%'][i % 4]}">
        ${roomImg('', s, { sizes: '100vw', eager: i === 0, big: true, alt: i === 0 ? 'Cabinetul Gate de la Agape Center' : '' })}
      </div>`
    )
    .join('');
  const dots = hero.slides
    .map(
      (s, i) => `<button type="button" class="hero__dot${i === 0 ? ' is-active' : ''}" data-dot="${i}" aria-label="Fotografia ${i + 1}: ${slideLabels[s]}">
        <span class="hero__dot-bar"><span></span></span><span class="hero__dot-label">${slideLabels[s]}</span>
      </button>`
    )
    .join('');
  return `
<section class="hero" data-hero aria-label="Prezentare">
  <div class="hero__slides" data-hero-media>${slides}</div>
  <div class="hero__veil"></div>
  <div class="hero__content container" data-hero-content>
    <p class="eyebrow eyebrow--light hero__eyebrow" data-reveal>${lotus('eyebrow__lotus')} Agape Center · Terapie de suflet</p>
    <h1 class="hero__title" data-split>Propriul tău cabinet, <em>atunci când ai nevoie de el</em></h1>
    <p class="hero__lead" data-reveal style="--d:.5s">Un spațiu confortabil, modern și relaxant pentru ședințe de psihoterapie, consiliere sau coaching, individuale, în cuplu sau de grup, dezvoltare personală și intervizare.</p>
    <div class="btn-row" data-reveal style="--d:.65s">
      <a class="btn btn--light" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă un cabinet</span>${icons.arrowUpRight}</a>
      <a class="btn btn--ghost-light" href="#terapeuti"><span>Cunoaște terapeuții</span>${icons.arrowDown}</a>
    </div>
  </div>
  <div class="hero__bottom container">
    <div class="hero__dots" role="group" aria-label="Fotografii">${dots}</div>
    <a class="hero__scroll" href="#bine-ai-venit" aria-label="Derulează în jos"><span>Descoperă</span><i></i></a>
  </div>
</section>`;
}

function introSection() {
  const stats = [
    { n: rooms.length, label: 'cabinete primitoare' },
    { n: therapists.length, label: 'terapeuți în echipă' },
    { n: 7, suffix: '/7', label: 'zile pe săptămână' },
    { n: 22, prefix: '8–', label: 'program în timpul săptămânii', raw: true },
  ];
  return `
<section class="intro section" id="bine-ai-venit">
  <div class="blob blob--a" aria-hidden="true"></div>
  <div class="container intro__grid">
    <div class="intro__text">
      <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Bine ai venit</p>
      <p class="intro__statement" data-scrub-words>Un loc cald și liniștit, în inima Bucureștiului, unde terapeuții își găsesc spațiul de lucru, iar oamenii își găsesc liniștea de a vorbi despre ce contează cu adevărat.</p>
    </div>
    <div class="breath" data-reveal aria-hidden="true">
      <div class="breath__rings"><span></span><span></span><span></span></div>
      <div class="breath__orb">${lotus('breath__lotus', { stroke: 2.4 })}</div>
      <div class="breath__words"><span>inspiră</span><span>expiră</span></div>
    </div>
  </div>
  <div class="container">
    <ul class="stats" data-stagger>
      ${stats
        .map(
          (s) => `<li class="stat" data-reveal>
        <span class="stat__num">${s.prefix || ''}${s.raw ? s.n : `<span data-count="${s.n}">${s.n}</span>`}${s.suffix || ''}</span>
        <span class="stat__label">${s.label}</span>
      </li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;
}

function marquee() {
  const items = activities.map((a) => `<span class="marquee__item">${a}</span>${lotus('marquee__lotus', { stroke: 5 })}`).join('');
  return `
<div class="marquee" aria-label="${esc(activities.join(', '))}">
  <div class="marquee__track" aria-hidden="true"><div class="marquee__group">${items}</div><div class="marquee__group">${items}</div></div>
</div>`;
}

function roomsSection() {
  const cards = rooms
    .map((room, i) => {
      const thumbs = room.photos
        .slice(0, 3)
        .map(
          (p, j) =>
            `<a class="room__thumb" href="assets/img/rooms/${p}-1600.webp" data-lb="${room.id}" data-caption="${room.name} · ${j + 1}/${room.photos.length}">${roomImg('', p, { sizes: '120px', alt: `Cabinetul ${room.name}, fotografia ${j + 1}` })}</a>`
        )
        .join('');
      const hidden = room.photos
        .slice(3)
        .map(
          (p, j) =>
            `<a hidden href="assets/img/rooms/${p}-1600.webp" data-lb="${room.id}" data-caption="${room.name} · ${j + 4}/${room.photos.length}" aria-label="Fotografia ${j + 4}"></a>`
        )
        .join('');
      const more = room.photos.length - 3;
      return `
    <article class="room room--${room.id}" data-room style="--i:${i}">
      <div class="room__card">
        <button class="room__media" type="button" data-lb-open="${room.id}" aria-label="Deschide galeria cabinetului ${room.name}">
          ${roomImg('', room.cover, { sizes: '(min-width: 900px) 60vw, 100vw', alt: `Cabinetul ${room.name}`, cls: 'room__img' })}
          <span class="room__badge">${icons.images}<span>${room.photos.length} fotografii</span></span>
        </button>
        <div class="room__body">
          <span class="room__num">0${i + 1}</span>
          <p class="room__mood">${room.mood}</p>
          <h3 class="room__name">${room.name}</h3>
          <p class="room__text">${room.text}</p>
          <div class="room__thumbs">${thumbs}${hidden}${more > 0 ? `<button type="button" class="room__more" data-lb-open="${room.id}" data-lb-start="3">+${more}</button>` : ''}</div>
          <div class="btn-row">
            <button class="btn btn--primary" type="button" data-lb-open="${room.id}"><span>Vezi galeria</span>${icons.arrow}</button>
            <a class="btn btn--text" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă ${room.name}</span>${icons.arrowUpRight}</a>
          </div>
        </div>
      </div>
    </article>`;
    })
    .join('');
  return `
<section class="rooms section" id="cabinete">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Cabinete</p>
      <h2 class="section-title" data-split>Trei cabinete, <em>trei stări</em></h2>
      <p class="section-lead" data-reveal>Fiecare cabinet are personalitatea lui. Alege-l pe cel care se potrivește cel mai bine ședinței tale.</p>
    </div>
    <div class="room-stack">${cards}</div>
  </div>
</section>`;
}

function servicesSection() {
  return `
<section class="services section" id="servicii">
  <div class="container services__grid">
    <div class="services__visual">
      <div class="services__arch" data-reveal="clip">
        <div class="services__arch-inner" data-parallax="-0.08">${roomImg('', 'hero-4', { sizes: '(min-width: 900px) 40vw, 90vw', alt: 'Spațiul comun de la Agape Center' })}</div>
      </div>
      <div class="services__note" data-reveal style="--d:.3s">
        ${icons.train}
        <span><strong>Lângă metrou Muncii</strong><br>la intersecția Călărași cu Mihai Bravu</span>
      </div>
      ${lotus('services__lotus', { stroke: 1 })}
    </div>
    <div class="services__content">
      <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Servicii</p>
      <h2 class="section-title" data-split>Tot ce ai nevoie, <em>ca să te poți concentra pe oameni</em></h2>
      <ul class="service-list" data-stagger>
        ${services
          .map(
            (s) => `<li class="service" data-reveal>
          <span class="service__icon">${icons[s.icon]}</span>
          <div>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
            ${s.chips ? `<ul class="chips">${s.chips.map((c) => `<li>${c}</li>`).join('')}</ul>` : ''}
          </div>
        </li>`
          )
          .join('')}
      </ul>
    </div>
  </div>
</section>`;
}

function pricingSection() {
  return `
<section class="pricing section section--dark" id="tarife">
  <div class="pricing__glow" aria-hidden="true"><span></span><span></span></div>
  <div class="container">
    <div class="section-head section-head--center">
      <p class="eyebrow eyebrow--light" data-reveal>${lotus('eyebrow__lotus')} Tarife</p>
      <h2 class="section-title" data-split>Tarife clare, <em>cu toate serviciile incluse</em></h2>
      <p class="section-lead" data-reveal>Plătești doar timpul de care ai nevoie. Curățenia, WiFi-ul, aerul condiționat, apa, ceaiul și cafeaua sunt incluse.</p>
    </div>
    <div class="price-grid" data-stagger>
      ${pricing
        .map(
          (p) => `<article class="price${p.featured ? ' price--featured' : ''}" data-reveal data-spotlight>
        ${p.featured ? '<span class="price__badge">Cel mai avantajos</span>' : ''}
        <h3 class="price__title">${p.title}</h3>
        <p class="price__amount"><span class="price__num">${p.price}</span><span class="price__unit">${p.unit}</span></p>
        <p class="price__note">${p.note}</p>
        <a class="price__link" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă acum</span>${icons.arrowUpRight}</a>
      </article>`
        )
        .join('')}
    </div>
    <div class="price-group" data-reveal data-spotlight>
      <span class="price-group__icon">${icons.users}</span>
      <div class="price-group__text">
        <h3>Activități de grup</h3>
        <p>Workshop-uri, grupuri de dezvoltare personală sau intervizare? Pentru activitățile de grup facem o ofertă personalizată.</p>
      </div>
      <div class="btn-row">
        <a class="btn btn--light" href="mailto:${site.email}?subject=${encodeURIComponent('Ofertă activități de grup')}"><span>Cere o ofertă</span>${icons.arrow}</a>
        <a class="btn btn--ghost-light" href="${telHref(site.phone)}">${icons.phone}<span>Sună-ne</span></a>
      </div>
    </div>
  </div>
</section>`;
}

function therapistsSection() {
  const filters = teamFilters.map((tag) => [tag, therapists.filter((t) => t.tags.includes(tag)).length]);
  const cards = therapists
    .map(
      (t, i) => `<li class="t-item" data-tags="${esc(t.tags.join('|'))}" data-reveal style="--d:${(i % 5) * 0.08}s">
      <a class="t-card" href="${t.slug}/">
        <div class="t-card__media">
          ${teamImg('', t, { small: true, cls: 't-card__img' })}
          <div class="t-card__hover"><p>„${esc(t.pull.text.length > 130 ? t.pull.text.slice(0, t.pull.text.lastIndexOf(' ', 125)) + '…' : t.pull.text)}”</p></div>
        </div>
        <div class="t-card__body">
          <h3 class="t-card__name">${t.name}</h3>
          <p class="t-card__role">${t.role}</p>
          <span class="t-card__more">Citește mai mult ${icons.arrow}</span>
        </div>
      </a>
    </li>`
    )
    .join('');
  return `
<section class="team section" id="terapeuti">
  <div class="blob blob--b" aria-hidden="true"></div>
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Terapeuți</p>
        <h2 class="section-title" data-split>Oamenii care <em>te ascultă</em></h2>
      </div>
      <p class="section-lead" data-reveal>Psihologi și psihoterapeuți cu formări și abordări diferite, uniți de aceeași grijă pentru om. Alege-l pe cel alături de care simți că poți porni la drum.</p>
    </div>
    <div class="filters" role="group" aria-label="Filtrează terapeuții" data-reveal>
      <button type="button" class="filter is-active" data-filter="*" aria-pressed="true">Toți <span>${therapists.length}</span></button>
      ${filters.map(([tag, n]) => `<button type="button" class="filter" data-filter="${esc(tag)}" aria-pressed="false">${tag} <span>${n}</span></button>`).join('')}
    </div>
    <ul class="t-grid" data-team-grid>${cards}</ul>
  </div>
</section>`;
}

function contactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&z=16&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;
  return `
<section class="contact section" id="contact">
  <div class="container contact__grid">
    <div class="contact__info">
      <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Contact</p>
      <h2 class="section-title" data-split>Vino să <em>ne cunoști</em></h2>
      <p class="section-lead" data-reveal>${site.location}</p>
      <ul class="contact__list" data-stagger>
        <li data-reveal><span class="contact__icon">${icons.pin}</span><div><strong>Adresă</strong><span>${site.address.street}, ${site.address.city}</span></div></li>
        <li data-reveal><span class="contact__icon">${icons.mail}</span><div><strong>Email</strong><a href="mailto:${site.email}">${site.email}</a></div></li>
        <li data-reveal><span class="contact__icon">${icons.phone}</span><div><strong>Telefon</strong><a href="${telHref(site.phone)}">${site.phoneDisplay}</a></div></li>
        <li data-reveal><span class="contact__icon">${icons.clock}</span><div><strong>Program</strong>${site.hours.map((h) => `<span>${h.days}: ${h.time}</span>`).join('')}</div></li>
      </ul>
      <div class="btn-row" data-reveal>
        <a class="btn btn--primary" href="${site.bookingUrl}" target="_blank" rel="noopener"><span>Rezervă un cabinet</span>${icons.arrowUpRight}</a>
        <a class="btn btn--outline" href="${site.whatsapp}" target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>
      </div>
    </div>
    <div class="contact__map" data-reveal="clip">
      <iframe title="Harta: Agape Center, ${esc(site.address.mapsQuery)}" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <a class="contact__map-card" href="${mapLink}" target="_blank" rel="noopener">
        ${lotus('contact__map-lotus')}
        <span><strong>Agape Center</strong><small>Bloc 204, Scara B, Etaj 1, Ap. 35</small></span>
        ${icons.arrowUpRight}
      </a>
    </div>
  </div>
</section>`;
}

export function renderHome({ assetsVersion }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: 'București',
      addressRegion: 'Sector 2',
      addressCountry: 'RO',
    },
    openingHours: ['Mo-Fr 08:00-22:00', 'Sa-Su 09:00-18:00'],
  };
  return layout({
    r: '',
    title: 'Agape Center · Terapie de Suflet · Cabinete de psihoterapie în București',
    overHero: true,
    bodyClass: 'page-home',
    assetsVersion,
    jsonLd,
    body: [heroSection(), introSection(), marquee(), roomsSection(), servicesSection(), pricingSection(), therapistsSection(), contactSection()].join('\n'),
  });
}
