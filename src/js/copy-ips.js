/**
 * copy-ips.js — Docusaurus client module
 *
 * Adds a copy button that is visually identical to the built-in code-block
 * copy button (same Material icon paths, same clean-btn class, same
 * scale-crossfade to a green tick, same 1000ms reset) next to IP tables.
 *
 * Placement:
 *   - Tables with ✅ / ❌ product columns: one button per column header,
 *     copying only that column's ticked rows, plus a copy-all on the first cell.
 *   - Every other table: one button inline after the section heading.
 *
 * Values are read from the rendered table at click time, so the markdown never
 * changes and the buttons can't drift out of sync.
 *
 * Install:
 *   1. Save as src/js/copy-ips.js with copy-ips.css beside it.
 *   2. In docusaurus.config.js:
 *        clientModules: [
 *          require.resolve('./custom.js'),
 *          require.resolve('./src/js/copy-ips.js'),
 *        ],
 */

import './copy-ips.css';

// Limit to the public IP page. Set to null to run site-wide.
const PATH_MATCH = /testmu-public-ip/;

const TICK = '✅';
const clean = (s) => s.replace(/`/g, '').trim();

// Icon paths lifted verbatim from @theme/Icon/Copy and @theme/Icon/Success.
const ICONS = `
<span class="copy-ips__icons" aria-hidden="true">
  <svg class="copy-ips__icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>
  <svg class="copy-ips__icon-success" viewBox="0 0 24 24"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>
</span>`;

function tableRows(table) {
  return [...table.querySelectorAll('tbody tr')];
}

/** First-column values. colIndex > 0 keeps only rows ticked in that column. */
function valuesFor(table, colIndex) {
  const out = [];
  for (const tr of tableRows(table)) {
    const cells = tr.children;
    if (colIndex > 0 && !(cells[colIndex]?.textContent || '').includes(TICK)) continue;
    const value = clean(cells[0]?.textContent || '');
    if (value && !out.includes(value)) out.push(value); // dedupe repeated ranges
  }
  return out;
}

async function copyToClipboard(text) {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  ta.remove();
  return undefined;
}

/** "Real Time (Virtual Device)(Desktop & Mobile - Automation)" -> "Automation" */
function shortLabel(header, index) {
  const tail = header.split('-').pop().replace(/[()]/g, '').trim();
  if (tail && tail.length <= 24 && tail !== header) return tail;
  const head = header.split('(')[0].trim();
  return head || `column ${index}`;
}

function makeButton(table, colIndex, label) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'clean-btn copy-ips';
  btn.title = label;
  btn.setAttribute('aria-label', label);
  btn.innerHTML = ICONS;

  let timer;
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const values = valuesFor(table, colIndex);
    if (!values.length) return;
    await copyToClipboard(values.join('\n'));
    btn.classList.add('copy-ips--copied');
    btn.setAttribute('aria-label', `Copied ${values.length}`);
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('copy-ips--copied');
      btn.setAttribute('aria-label', label);
    }, 1000);
  });

  return btn;
}

function decorateTable(table) {
  if (table.dataset.copyIps) return;
  table.dataset.copyIps = '1';

  const ths = [...table.querySelectorAll('thead th')];
  const headers = ths.map((th) => th.textContent.trim());
  const rows = tableRows(table);
  if (!rows.length || !ths.length) return;

  // Columns using ✅ / ❌ flags each get their own filtered button.
  const flagCols = headers
      .map((_, i) => i)
      .filter((i) => i > 0 && rows.some((r) => /[✅❌]/.test(r.children[i]?.textContent || '')));

  if (flagCols.length) {
    ths[0].appendChild(makeButton(table, -1, 'Copy all IPs'));
    flagCols.forEach((i) => {
      ths[i].appendChild(makeButton(table, i, `Copy ${shortLabel(headers[i], i)} IPs`));
    });
    return;
  }

  // Plain table: prefer the nearest preceding h2/h3, else the first header cell.
  const block = table.closest('.markdown > *') || table;
  let prev = block.previousElementSibling;
  let heading = null;
  while (prev) {
    if (/^H[1-3]$/.test(prev.tagName)) {
      heading = prev;
      break;
    }
    if (prev.tagName === 'TABLE' || prev.querySelector?.('table')) break; // section already has a table
    prev = prev.previousElementSibling;
  }

  const btn = makeButton(table, -1, 'Copy all IPs');
  if (heading && !heading.querySelector('.copy-ips')) heading.appendChild(btn);
  else ths[0].appendChild(btn);
}

function decorate() {
  if (PATH_MATCH && !PATH_MATCH.test(window.location.pathname)) return;
  const root = document.querySelector('.markdown');
  if (!root) return;
  root.querySelectorAll('table').forEach(decorateTable);
}

export function onRouteDidUpdate() {
  requestAnimationFrame(decorate);
  setTimeout(decorate, 300);
}