import { site } from '../data/site.mjs';
import { therapists } from '../data/therapists.mjs';
import { layout, esc, teamImg, roomImg, telHref } from './layout.mjs';
import { icons, lotus } from './icons.mjs';

const R = '../';

function contactButtons(t, { compact = false } = {}) {
  const items = [];
  items.push(
    `<a class="btn btn--primary" href="${telHref(t.phone)}">${icons.phone}<span>${compact ? 'Sună' : 'Sună acum'}</span></a>`
  );
  if (t.whatsapp)
    items.push(`<a class="btn btn--outline" href="${t.whatsapp}" target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>`);
  if (t.facebook)
    items.push(`<a class="icon-btn" href="${t.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook}</a>`);
  if (t.linkedin)
    items.push(`<a class="icon-btn" href="${t.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>`);
  return `<div class="btn-row">${items.join('')}</div>`;
}

function block(b, t) {
  switch (b.type) {
    case 'lead':
      return `<p class="bio__lead" data-reveal>${b.html}</p>`;
    case 'p':
      return `<p data-reveal>${b.html}</p>`;
    case 'quote':
      return `<figure class="bio__quote" data-reveal>
        ${icons.quote}
        <blockquote><p>${b.text}</p></blockquote>
        ${b.author ? `<figcaption>${b.author}</figcaption>` : ''}
      </figure>`;
    case 'values':
      return `<div class="bio__values" data-reveal>
        <p class="bio__label">${b.title}</p>
        <ul data-stagger>${b.items.map((v, i) => `<li data-reveal>${lotus('bio__values-lotus', { stroke: 3 })}<span>${v}</span></li>`).join('')}</ul>
      </div>`;
    case 'list':
      return `<div class="bio__list" data-reveal>
        <p class="bio__label">${b.title}</p>
        <ul data-stagger>${b.items.map((v) => `<li data-reveal><span class="bio__check">${icons.leaf}</span>${v}</li>`).join('')}</ul>
      </div>`;
    case 'services':
      return `<div class="bio__services" data-reveal>
        <p class="bio__label">${b.title}</p>
        <ul class="${b.items.some((s) => s.text) ? 'has-text' : ''}" data-stagger>
          ${b.items
            .map(
              (s, i) => `<li class="svc" data-reveal>
            <span class="svc__num">${String(i + 1).padStart(2, '0')}</span>
            <h3>${s.title}</h3>
            ${s.text ? `<p>${s.text}</p>` : ''}
          </li>`
            )
            .join('')}
        </ul>
      </div>`;
    default:
      return '';
  }
}

function gallery(t) {
  if (!t.diplomas && !t.extraPhoto) return '';
  const photo = t.extraPhoto
    ? `<figure class="t-photo">
        <a data-reveal="clip" href="${R}assets/img/rooms/${t.extraPhoto.src}-1600.webp" data-lb="photo" data-caption="${esc(t.extraPhoto.alt)}">
          <div data-parallax="-0.06">${roomImg(R, t.extraPhoto.src, { sizes: '(min-width: 1000px) 1000px, 100vw', alt: t.extraPhoto.alt })}</div>
        </a>
        <figcaption>${t.extraPhoto.alt}</figcaption>
      </figure>`
    : '';
  const diplomas = t.diplomas
    ? `<div class="diplomas">
        <div class="section-head section-head--split">
          <div>
            <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Formare</p>
            <h2 class="section-title section-title--sm" data-split>Diplome <em>și certificări</em></h2>
          </div>
          <p class="section-lead" data-reveal>Un parcurs de învățare continuă. Atinge sau apasă pe oricare dintre ele pentru a o vedea în detaliu.</p>
        </div>
        <ul class="diplomas__grid" data-stagger>
          ${t.diplomas
            .map(
              (d) => `<li data-reveal><a href="${R}assets/img/diplomas/d${d.n}.webp" data-lb="diplomas" data-caption="${esc(d.alt)}">
                <img src="${R}assets/img/diplomas/d${d.n}-thumb.webp" alt="${esc(d.alt)}" loading="lazy" decoding="async" width="520" height="370">
                <span>${d.alt}</span>
              </a></li>`
            )
            .join('')}
        </ul>
      </div>`
    : '';
  return `<section class="t-gallery section"><div class="container">${photo}${diplomas}</div></section>`;
}

function others(t) {
  const i = therapists.indexOf(t);
  const prev = therapists[(i - 1 + therapists.length) % therapists.length];
  const next = therapists[(i + 1) % therapists.length];
  // Ceilalți terapeuți, începând cu următorul, ca să nu apară mereu aceleași fețe primele.
  const rest = [...therapists.slice(i + 1), ...therapists.slice(0, i)];
  return `
<section class="others section">
  <div class="container">
    <div class="others__head">
      <div>
        <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Echipa Agape</p>
        <h2 class="section-title section-title--sm" data-split>Cunoaște și <em>alți terapeuți</em></h2>
      </div>
      <div class="others__arrows" data-reveal>
        <button type="button" class="icon-btn" data-scroller-prev aria-label="Înapoi">${icons.chevronLeft}</button>
        <button type="button" class="icon-btn" data-scroller-next aria-label="Înainte">${icons.chevronRight}</button>
      </div>
    </div>
  </div>
  <div class="scroller" data-scroller data-lenis-prevent-horizontal>
    <ul class="scroller__track">
      ${rest
        .map(
          (o) => `<li><a class="mini" href="${R}${o.slug}/">
            <div class="mini__media">${teamImg(R, o, { small: true })}</div>
            <h3>${o.name}</h3>
            <p>${o.role}</p>
          </a></li>`
        )
        .join('')}
    </ul>
  </div>
  <div class="container">
    <nav class="pager" aria-label="Terapeutul anterior și următor">
      <a class="pager__link" href="${R}${prev.slug}/" rel="prev">
        <span class="pager__dir">${icons.arrowLeft} Anterior</span>
        <span class="pager__name">${prev.name}</span>
      </a>
      <a class="pager__all" href="${R}#terapeuti">Toți terapeuții</a>
      <a class="pager__link pager__link--next" href="${R}${next.slug}/" rel="next">
        <span class="pager__dir">Următor ${icons.arrow}</span>
        <span class="pager__name">${next.name}</span>
      </a>
    </nav>
  </div>
</section>`;
}

export function renderTherapist(t, { assetsVersion }) {
  const firstName = t.name.split(' ')[0];
  const body = t.body.filter((b) => !(b.type === 'quote' && b.text === t.pull.text));
  const html = `
<div class="progress" aria-hidden="true"><span data-progress></span></div>
<section class="t-hero">
  <div class="blob blob--c" aria-hidden="true"></div>
  <div class="container t-hero__grid">
    <div class="t-hero__visual">
      ${lotus('t-hero__lotus', { stroke: 0.9 })}
      <div class="t-hero__blob" aria-hidden="true"></div>
      <div class="t-hero__portrait" data-reveal="clip">
        <div data-parallax="0.05">${teamImg(R, t, { eager: true })}</div>
      </div>
    </div>
    <div class="t-hero__text">
      <nav class="crumbs" aria-label="Breadcrumb" data-reveal>
        <a href="${R}">Acasă</a><span>/</span><a href="${R}#terapeuti">Terapeuți</a><span>/</span><span aria-current="page">${t.name}</span>
      </nav>
      <h1 class="t-hero__name" data-split>${t.name}</h1>
      <p class="t-hero__role" data-reveal style="--d:.35s">${t.roleLong || t.role}</p>
      <ul class="tags" data-reveal style="--d:.45s">${t.tags.map((x) => `<li>${x}</li>`).join('')}</ul>
      <figure class="t-hero__pull" data-reveal style="--d:.55s">
        <blockquote><p>${t.pull.text}</p></blockquote>
        ${t.pull.author ? `<figcaption>${t.pull.author}</figcaption>` : ''}
      </figure>
      <div data-reveal style="--d:.65s">${contactButtons(t)}</div>
    </div>
  </div>
</section>

<section class="bio section">
  <div class="container bio__grid">
    <aside class="bio__aside">
      <div class="aside-card" data-reveal>
        <div class="aside-card__top">
          <div class="aside-card__img">${teamImg(R, t, { small: true })}</div>
          <div><strong>${t.name}</strong><span>${t.role}</span></div>
        </div>
        <a class="aside-card__phone" href="${telHref(t.phone)}">${icons.phone}<span>${formatPhone(t.phone)}</span></a>
        ${contactButtons(t, { compact: true })}
      </div>
    </aside>
    <article class="bio__content">
      <p class="eyebrow" data-reveal>${lotus('eyebrow__lotus')} Despre mine</p>
      ${body.map((b) => block(b, t)).join('\n')}
    </article>
  </div>
</section>

${gallery(t)}

<section class="t-cta section">
  <div class="container">
    <div class="t-cta__card" data-reveal>
      <div class="t-cta__glow" aria-hidden="true"></div>
      ${lotus('t-cta__lotus', { stroke: 1 })}
      <p class="eyebrow">Primul pas</p>
      <h2 class="section-title" data-split>Uneori, cel mai greu e <em>să începi conversația</em></h2>
      <p class="section-lead">Ia legătura cu ${firstName} pentru o primă discuție, telefonic sau pe WhatsApp.</p>
      ${contactButtons(t)}
    </div>
  </div>
</section>

${others(t)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.name,
    jobTitle: t.roleLong || t.role,
    telephone: t.phone,
    workLocation: { '@type': 'Place', name: site.name, address: `${site.address.street}, ${site.address.city}` },
    sameAs: [t.facebook, t.linkedin].filter(Boolean),
  };

  return layout({
    r: R,
    title: `${t.name} · ${t.role} · Agape Center`,
    description: `${t.name}, ${t.roleLong || t.role}. ${t.pull.text}`.slice(0, 300),
    body: html,
    bodyClass: 'page-therapist',
    footerCta: false,
    ogPath: `assets/img/team/${t.photo}.webp`,
    assetsVersion,
    jsonLd,
  });
}

function formatPhone(p) {
  const d = p.replace(/\D/g, '');
  // +40 7xx xxx xxx
  return `+${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
}
