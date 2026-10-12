// Iconițe SVG inline, desenate cu linie (stroke = currentColor).

const svg = (body, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 'icon--arrow'),
  arrowLeft: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  arrowUpRight: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
  close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  chevronLeft: svg('<path d="m15 5-7 7 7 7"/>'),
  chevronRight: svg('<path d="m9 5 7 7-7 7"/>'),
  phone: svg(
    '<path d="M5.5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z"/>'
  ),
  whatsapp: svg(
    '<path d="M3.6 20.4l1.2-4.1a8.6 8.6 0 1 1 3.1 3z"/><path d="M9.2 8.2c-.4 2.6 2.6 6.3 5.6 6.4.5 0 1.1-.6 1.2-1.2l-1.8-.9-.9.8a4.6 4.6 0 0 1-2.4-2.4l.7-.9-.8-1.8c-.7 0-1.5.5-1.6 1z"/>'
  ),
  facebook: svg(
    '<path d="M14.2 8.2H16.5V4.6h-2.6a3.8 3.8 0 0 0-3.8 3.8v2.2H7.9v3.5h2.2v6.4h3.6v-6.4h2.4l.5-3.5h-2.9V8.7c0-.3.2-.5.5-.5z"/>'
  ),
  linkedin: svg(
    '<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/><path d="M8 10.5V16.5M8 7.6v.1M11.6 16.5v-6M11.6 13.2a2.6 2.6 0 0 1 5.2 0v3.3"/>'
  ),
  mail: svg('<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/>'),
  pin: svg('<path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>'),
  clock: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  train: svg(
    '<rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 11h12M9.5 14h.01M14.5 14h.01M8.5 20.5l1.5-2.5M15.5 20.5 14 18"/>'
  ),
  leaf: svg(
    '<path d="M5 19c0-8 5-13.5 14-14-.3 9-5.7 14-14 14z"/><path d="M5 19c3-4 6-6.5 9.5-8.5"/>'
  ),
  sparkle: svg(
    '<path d="M12 3.5c.6 4.3 2.2 6 6.5 6.5-4.3.6-5.9 2.2-6.5 6.5-.6-4.3-2.2-5.9-6.5-6.5 4.3-.5 5.9-2.2 6.5-6.5z"/><path d="M18.5 15.5c.3 1.8 1 2.5 2.5 2.7-1.5.3-2.2 1-2.5 2.8-.3-1.8-1-2.5-2.5-2.8 1.5-.2 2.2-.9 2.5-2.7z"/>'
  ),
  heart: svg(
    '<path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/>'
  ),
  calendar: svg(
    '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4M8.5 14.5l2 2 4-4"/>'
  ),
  users: svg(
    '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15.5 14.4a4.3 4.3 0 0 1 5 4.3"/>'
  ),
  images: svg(
    '<rect x="3.5" y="5.5" width="14" height="13" rx="2.5"/><path d="M7 3.5h11a2.5 2.5 0 0 1 2.5 2.5v10"/><path d="m3.5 15 4-3.5 4 3 2.5-2 3.5 3"/><circle cx="13.5" cy="9.5" r="1.2"/>'
  ),
  check: svg('<path d="m5 12.5 4.2 4.2L19 7"/>'),
  quote:
    '<svg class="icon icon--quote" viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M20.4 10.5c-7.8 3-12.9 9.6-12.9 18 0 5.4 3.3 9 7.8 9 4 0 7-3 7-6.8 0-3.7-2.7-6.4-6.2-6.4-.6 0-1.3.1-1.7.3.9-4.5 4.6-8.6 7.6-10.2zm19.5 0c-7.8 3-12.9 9.6-12.9 18 0 5.4 3.3 9 7.8 9 4 0 7-3 7-6.8 0-3.7-2.7-6.4-6.2-6.4-.6 0-1.3.1-1.7.3.9-4.5 4.6-8.6 7.6-10.2z"/></svg>',
};

// Lotusul Agape, redesenat vectorial după logo-ul original.
export function lotus(cls = '', { stroke = 3.6 } = {}) {
  let paths = '';
  for (let i = 0; i < 12; i++) {
    const a = i * 30;
    paths += `<path transform="rotate(${a})" d="M-16,-60 C-25,-78 -9,-86 0,-96 C9,-86 25,-78 16,-60"/>`;
    paths += `<path transform="rotate(${a + 15})" d="M0,-22 C-12,-38 -16,-66 0,-84 C16,-66 12,-38 0,-22 Z"/>`;
  }
  return `<svg class="lotus ${cls}" viewBox="-100 -100 200 200" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linejoin="round" stroke-linecap="round">${paths}</g><circle class="lotus__core" r="24" fill="currentColor"/></svg>`;
}
