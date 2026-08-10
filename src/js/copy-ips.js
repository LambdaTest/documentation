/**
 * copy-ips.js — Docusaurus client module
 *
 * Adds a "Copy all" button to every IP table on the public-IP doc, placed
 * inside the section heading. Values are read from the rendered table at
 * click time, so the markdown never has to be touched and the button can
 * never drift out of sync with the table.
 *
 * Install:
 *   1. Save as src/js/copy-ips.js and copy-ips.css next to it.
 *   2. In docusaurus.config.js:
 *        clientModules: [require.resolve('./src/js/copy-ips.js')],
 */

import './copy-ips.css';

// Limit the feature to the public IP page. Set to null to run site-wide.
const PATH_MATCH = /testmu-public-ip/;

const TICK = '✅';
const clean = (s) => s.replace(/`/g, '').trim();

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

async function writeClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

function makeButton(label, tooltip, getValues) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy-ips';
  btn.textContent = label;
  btn.title = tooltip;
  btn.dataset.label = label;

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const values = getValues();
    if (!values.length) return;
    await writeClipboard(values.join('\n'));
    btn.textContent = `Copied ${values.length}`;
    btn.classList.add('copy-ips--done');
    setTimeout(() => {
      btn.textContent = btn.dataset.label;
      btn.classList.remove('copy-ips--done');
    }, 1600);
  });

  return btn;
}

/** "Real Time (Virtual Device)(Desktop & Mobile - Automation)" -> "Automation" */
function shortLabel(header, index) {
  const tail = header.split('-').pop().replace(/[()]/g, '').trim();
  if (tail && tail.length <= 22 && tail !== header) return tail;
  const head = header.split('(')[0].trim();
  return head || `Column ${index}`;
}

function decorateTable(table) {
  if (table.dataset.copyIps) return;
  table.dataset.copyIps = '1';

  const headers = [...table.querySelectorAll('thead th')].map((th) => th.textContent.trim());
  const rows = tableRows(table);
  if (!rows.length) return;

  // Columns that use ✅ / ❌ flags get their own filtered copy button.
  const flagCols = headers
    .map((_, i) => i)
    .filter((i) => i > 0 && rows.some((r) => /[✅❌]/.test(r.children[i]?.textContent || '')));

  const bar = document.createElement('span');
  bar.className = 'copy-ips-bar';
  bar.appendChild(
    makeButton('Copy all', 'Copy every entry in this table', () => valuesFor(table, -1))
  );
  flagCols.forEach((i) => {
    bar.appendChild(
      makeButton(`Copy ${shortLabel(headers[i], i)}`, headers[i], () => valuesFor(table, i))
    );
  });

  // Prefer the nearest preceding h2/h3 in the same section; else sit above the table.
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

  if (heading && !heading.querySelector('.copy-ips-bar')) heading.appendChild(bar);
  else block.parentNode.insertBefore(bar, block);
}

function decorate() {
  if (PATH_MATCH && !PATH_MATCH.test(window.location.pathname)) return;
  const root = document.querySelector('.markdown');
  if (!root) return;
  root.querySelectorAll('table').forEach(decorateTable);
}

export function onRouteDidUpdate() {
  // Run after hydration paints the markdown body.
  requestAnimationFrame(decorate);
  setTimeout(decorate, 300);
}
