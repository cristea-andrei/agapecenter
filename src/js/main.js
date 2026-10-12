/* Agape Center · interacțiuni și animații.
   Fără framework-uri; singura dependență e Lenis, pentru derularea lină. */

(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---------- Derulare lină ---------- */
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  const headerOffset = () => -(parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 84) - 8;

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = url.hash === '#' ? null : document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    if (lenis) lenis.scrollTo(target, { offset: headerOffset(), duration: 1.6 });
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', url.hash);
  });

  // Venind de pe altă pagină cu ancoră (ex. ../#terapeuti), ajustăm după header.
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      requestAnimationFrame(() => {
        if (lenis) lenis.scrollTo(target, { offset: headerOffset(), immediate: true });
      });
    }
  }

  /* ---------- Header ---------- */
  const header = $('[data-header]');
  const hero = $('[data-hero]');
  let lastY = scrollY;
  const onHeader = () => {
    const y = scrollY;
    const threshold = hero ? hero.offsetHeight - 120 : 20;
    header.classList.toggle('is-scrolled', y > threshold);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (goingDown && y > 400 && !document.body.classList.contains('menu-open')) header.classList.add('is-hidden');
    else if (goingUp || y < 400) header.classList.remove('is-hidden');
    lastY = y;
  };

  // Evidențiem secțiunea curentă în meniu.
  const navLinks = $$('[data-nav]');
  if (navLinks.length && hero) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((l) => l.classList.toggle('is-current', l.dataset.nav === en.target.id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach((l) => {
      const s = document.getElementById(l.dataset.nav);
      if (s) io.observe(s);
    });
  }

  /* ---------- Meniul mobil ---------- */
  const burger = $('[data-burger]');
  const menu = $('[data-menu]');
  function closeMenu() {
    if (!document.body.classList.contains('menu-open')) return;
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Deschide meniul');
    menu.setAttribute('aria-hidden', 'true');
    lenis?.start();
  }
  burger?.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    if (!open) return closeMenu();
    document.body.classList.add('menu-open');
    header.classList.remove('is-hidden');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Închide meniul');
    menu.setAttribute('aria-hidden', 'false');
    lenis?.stop();
  });
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());

  /* ---------- Titluri împărțite pe cuvinte ---------- */
  let wordIndex = 0;
  const splitWords = (node, wrap) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.append(document.createTextNode(' '));
          else frag.append(wrap(part));
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        splitWords(child, wrap);
      }
    });
  };
  $$('[data-split]').forEach((el) => {
    wordIndex = 0;
    el.setAttribute('aria-label', el.textContent.trim());
    splitWords(el, (word) => {
      const w = document.createElement('span');
      w.className = 'w';
      w.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.textContent = word;
      inner.style.setProperty('--wi', wordIndex++);
      w.append(inner);
      return w;
    });
    el.classList.add('is-split');
  });

  /* ---------- Apariții la derulare ---------- */
  $$('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, i) => {
      if (!child.style.getPropertyValue('--d')) child.style.setProperty('--d', `${i * 0.09}s`);
    });
  });
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          revealIO.unobserve(en.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  $$('[data-reveal], [data-split]').forEach((el) => revealIO.observe(el));

  /* ---------- Fraza care se „aprinde” pe măsură ce derulezi ---------- */
  const scrub = $$('[data-scrub-words]').map((el) => {
    const words = [];
    splitWords(el, (word) => {
      const s = document.createElement('span');
      s.className = 'sw';
      s.textContent = word;
      words.push(s);
      return s;
    });
    return { el, words };
  });
  const onScrub = () => {
    const vh = innerHeight;
    scrub.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect();
      const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('is-on', i < n));
    });
  };

  /* ---------- Numere care cresc ---------- */
  const countIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        const el = en.target;
        const end = +el.dataset.count;
        if (reduced) return;
        const t0 = performance.now();
        const dur = 1800;
        const tick = (t) => {
          const k = clamp((t - t0) / dur, 0, 1);
          el.textContent = Math.round(end * (1 - Math.pow(2, -10 * k)));
          if (k < 1) requestAnimationFrame(tick);
          else el.textContent = end;
        };
        el.textContent = '0';
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 }
  );
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- Parallax ---------- */
  const parallax = $$('[data-parallax]').map((el) => ({ el, speed: parseFloat(el.dataset.parallax) || 0.1 }));
  const onParallax = () => {
    if (reduced) return;
    const vh = innerHeight;
    parallax.forEach(({ el, speed }) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const offset = (r.top + r.height / 2 - vh / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  };

  /* ---------- Hero: slideshow cu Ken Burns ---------- */
  const heroSlides = $$('[data-slide]');
  const heroDots = $$('[data-dot]');
  const heroContent = $('[data-hero-content]');
  const heroMedia = $('[data-hero-media]');
  let slide = 0;
  let slideTimer = null;
  const SLIDE_MS = 7000;
  root.style.setProperty('--slide-dur', `${SLIDE_MS}ms`);
  const goTo = (i) => {
    heroSlides[slide]?.classList.remove('is-active');
    heroDots.forEach((d, j) => {
      d.classList.remove('is-active');
      d.classList.toggle('is-done', j < i);
    });
    slide = (i + heroSlides.length) % heroSlides.length;
    heroSlides[slide].classList.add('is-active');
    const dot = heroDots[slide];
    void dot.offsetWidth; // repornește animația barei de progres
    dot.classList.add('is-active');
    clearTimeout(slideTimer);
    if (!reduced) slideTimer = setTimeout(() => goTo(slide + 1), SLIDE_MS);
  };
  if (heroSlides.length > 1) {
    // Încărcăm restul imaginilor după prima, ca să nu întârzie afișarea.
    heroSlides.slice(1).forEach((s) => s.querySelector('img')?.setAttribute('loading', 'eager'));
    heroDots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    goTo(0);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearTimeout(slideTimer);
      else goTo(slide);
    });
  }
  const onHero = () => {
    if (!hero || reduced) return;
    const h = hero.offsetHeight;
    const p = clamp(scrollY / h, 0, 1);
    if (heroContent) {
      heroContent.style.transform = `translate3d(0, ${p * -90}px, 0)`;
      heroContent.style.opacity = String(1 - p * 1.4);
    }
    if (heroMedia) heroMedia.style.transform = `translate3d(0, ${p * h * 0.3}px, 0) scale(${1 + p * 0.08})`;
  };

  /* ---------- Cabinete: cardurile se așază unul peste altul ---------- */
  const rooms = $$('[data-room]');
  const stickyMQ = matchMedia('(min-width: 900px)');
  const onRooms = () => {
    if (!stickyMQ.matches || reduced) {
      rooms.forEach((r) => r.style.setProperty('--p', 0));
      return;
    }
    rooms.forEach((room, i) => {
      const next = rooms[i + 1];
      if (!next) return;
      const a = room.getBoundingClientRect();
      const b = next.getBoundingClientRect();
      const p = clamp(1 - (b.top - a.top) / a.height, 0, 1);
      room.style.setProperty('--p', p.toFixed(3));
    });
  };

  /* ---------- Bara de progres la citire ---------- */
  const progress = $('[data-progress]');
  const onProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${clamp(scrollY / max, 0, 1)})`;
  };

  /* ---------- O singură buclă de derulare ---------- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onHeader();
      onScrub();
      onParallax();
      onHero();
      onRooms();
      onProgress();
      ticking = false;
    });
  };
  if (lenis) lenis.on('scroll', onScroll);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Lumina care urmărește cursorul pe carduri ---------- */
  $$('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Filtrarea terapeuților ---------- */
  const grid = $('[data-team-grid]');
  if (grid) {
    const items = $$('.t-item', grid);
    const buttons = $$('[data-filter]');
    let filterTimer;
    buttons.forEach((btn) =>
      btn.addEventListener('click', () => {
        const f = btn.dataset.filter;
        buttons.forEach((b) => {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', String(b === btn));
        });
        items.forEach((it) => it.classList.add('is-out'));
        clearTimeout(filterTimer);
        filterTimer = setTimeout(() => {
          grid.classList.toggle('is-filtered', f !== '*');
          let k = 0;
          items.forEach((it) => {
            const show = f === '*' || it.dataset.tags.split('|').includes(f);
            it.hidden = !show;
            if (show) {
              it.style.setProperty('--d', `${k++ * 0.06}s`);
              it.classList.add('is-in');
              requestAnimationFrame(() => requestAnimationFrame(() => it.classList.remove('is-out')));
            }
          });
          onScroll();
        }, reduced ? 0 : 380);
      })
    );
  }

  /* ---------- Derulare orizontală (alți terapeuți) ---------- */
  const scroller = $('[data-scroller]');
  if (scroller) {
    const step = () => (scroller.querySelector('li')?.offsetWidth || 260) + 22;
    $('[data-scroller-prev]')?.addEventListener('click', () => scroller.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
    $('[data-scroller-next]')?.addEventListener('click', () => scroller.scrollBy({ left: step() * 2, behavior: 'smooth' }));
  }

  /* ---------- Lightbox ---------- */
  const groups = {};
  $$('[data-lb]').forEach((a) => {
    (groups[a.dataset.lb] ||= []).push(a);
  });
  if (Object.keys(groups).length) {
    const dlg = document.createElement('dialog');
    dlg.className = 'lb';
    dlg.setAttribute('aria-label', 'Galerie foto');
    dlg.innerHTML = `
      <div class="lb__top"><span class="lb__count" aria-live="polite"></span>
        <button class="lb__btn" type="button" data-lb-close aria-label="Închide">${icon('M6 6l12 12M18 6 6 18')}</button></div>
      <div class="lb__stage"><img class="lb__img" alt=""></div>
      <button class="lb__btn lb__nav lb__nav--prev" type="button" aria-label="Fotografia anterioară">${icon('m15 5-7 7 7 7')}</button>
      <button class="lb__btn lb__nav lb__nav--next" type="button" aria-label="Fotografia următoare">${icon('m9 5 7 7-7 7')}</button>
      <div class="lb__bottom"><span class="lb__caption"></span></div>`;
    document.body.append(dlg);
    const img = $('.lb__img', dlg);
    const caption = $('.lb__caption', dlg);
    const count = $('.lb__count', dlg);
    let list = [];
    let idx = 0;

    const show = (i) => {
      idx = (i + list.length) % list.length;
      const a = list[idx];
      img.classList.remove('is-loaded');
      const src = a.getAttribute('href');
      const pre = new Image();
      pre.onload = () => {
        img.src = src;
        img.alt = a.dataset.caption || '';
        requestAnimationFrame(() => img.classList.add('is-loaded'));
      };
      pre.src = src;
      caption.textContent = a.dataset.caption || '';
      count.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
      // Preîncărcăm vecinii.
      [idx + 1, idx - 1].forEach((j) => {
        const n = list[(j + list.length) % list.length];
        if (n) new Image().src = n.getAttribute('href');
      });
    };
    const open = (group, start = 0) => {
      list = groups[group] || [];
      if (!list.length) return;
      dlg.toggleAttribute('data-single', list.length < 2);
      dlg.showModal();
      lenis?.stop();
      requestAnimationFrame(() => dlg.classList.add('is-open'));
      show(start);
    };
    const close = () => {
      dlg.classList.remove('is-open');
      setTimeout(() => {
        dlg.close();
        lenis?.start();
      }, reduced ? 0 : 350);
    };

    document.addEventListener('click', (e) => {
      const a = e.target.closest('[data-lb]');
      const opener = e.target.closest('[data-lb-open]');
      if (a) {
        e.preventDefault();
        open(a.dataset.lb, groups[a.dataset.lb].indexOf(a));
      } else if (opener) {
        e.preventDefault();
        open(opener.dataset.lbOpen, +(opener.dataset.lbStart || 0));
      }
    });
    $('[data-lb-close]', dlg).addEventListener('click', close);
    $('.lb__nav--prev', dlg).addEventListener('click', () => show(idx - 1));
    $('.lb__nav--next', dlg).addEventListener('click', () => show(idx + 1));
    dlg.addEventListener('cancel', (e) => {
      e.preventDefault();
      close();
    });
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg || e.target.classList.contains('lb__stage')) close();
    });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
    let x0 = null;
    dlg.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
    dlg.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  function icon(d) {
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  }
})();
