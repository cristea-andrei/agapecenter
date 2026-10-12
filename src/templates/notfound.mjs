import { layout } from './layout.mjs';
import { icons, lotus } from './icons.mjs';

export function renderNotFound({ assetsVersion, basePath }) {
  const body = `
<section class="nf">
  <div class="blob blob--a" aria-hidden="true"></div>
  <div class="container nf__inner">
    <div class="breath breath--small" aria-hidden="true">
      <div class="breath__rings"><span></span><span></span><span></span></div>
      <div class="breath__orb">${lotus('breath__lotus', { stroke: 2.4 })}</div>
    </div>
    <p class="eyebrow">Eroare 404</p>
    <h1 class="section-title" data-split>Pagina aceasta <em>nu există</em></h1>
    <p class="section-lead">Respiră adânc. Te ajutăm să găsești drumul înapoi.</p>
    <div class="btn-row">
      <a class="btn btn--primary" href="${basePath}"><span>Înapoi acasă</span>${icons.arrow}</a>
      <a class="btn btn--outline" href="${basePath}#terapeuti"><span>Vezi terapeuții</span></a>
    </div>
  </div>
</section>`;
  return layout({
    title: 'Pagina nu a fost găsită · Agape Center',
    body,
    bodyClass: 'page-404',
    assetsVersion,
    absoluteBase: basePath,
  });
}
