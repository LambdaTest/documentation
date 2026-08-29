#!/usr/bin/env python3
"""Structure/tier pass for one product sidebar (Option 2, step 1).

Reads a named sidebar from sidebars.js, resolves each doc id -> slug, joins
6-month clicks from _docs-ia/gsc-pages.csv, and buckets pages into tiers so you
know which are SURVIVORS (do real merge/polish) vs the 0-click LONG TAIL
(script bulk-redirect, no LLM).

Usage:
  python scripts/tier-product.py AccessibilityTestingSidebar
"""
import csv, glob, os, re, sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
DOCS = os.path.join(ROOT, "docs")
GSC = os.path.join(ROOT, "_docs-ia", "gsc-pages.csv")


def sidebar_ids(key):
    lines = open(os.path.join(ROOT, "sidebars.js"), encoding="utf-8", errors="surrogateescape").read().splitlines()
    start = next((i for i, l in enumerate(lines) if re.search(rf"\b{re.escape(key)}\s*:", l)), None)
    if start is None:
        sys.exit(f"Sidebar '{key}' not found in sidebars.js")
    end = next((i for i in range(start + 1, len(lines)) if re.match(r"^\s{2}[A-Za-z0-9_]+Sidebar\s*:", lines[i])), len(lines))
    section = "\n".join(lines[start:end])
    ids = set(re.findall(r'id:\s*"([^"]+)"', section))                     # object form
    ids |= set(re.findall(r'^\s*"([a-z0-9][a-z0-9-]+)",?\s*$', section, re.M))  # string shorthand
    return ids


def id_to_slug():
    m = {}
    for f in glob.glob(os.path.join(DOCS, "*.md")):
        head = open(f, encoding="utf-8", errors="surrogateescape").read(600)
        i = re.search(r"^id:\s*(\S+)\s*$", head, re.M)
        s = re.search(r"^slug:\s*(\S+)\s*$", head, re.M)
        if i:
            m[i.group(1)] = (s.group(1).strip("/") if s else i.group(1))
    return m


def clicks_by_slug():
    c = {}
    if not os.path.exists(GSC):
        return c
    with open(GSC, encoding="utf-8-sig", newline="") as fh:
        r = csv.reader(fh); next(r, None)
        for row in r:
            if len(row) < 2 or "#" in row[0] or "?" in row[0]:
                continue
            mm = re.search(r"/support/docs/([^/]+)/", row[0])
            if mm:
                try:
                    c[mm.group(1)] = int(str(row[1]).replace(",", "").strip())
                except ValueError:
                    pass
    return c


def main(key):
    ids = sidebar_ids(key)
    i2s = id_to_slug()
    clk = clicks_by_slug()
    rows, missing = [], []
    for i in sorted(ids):
        if i not in i2s:
            missing.append(i); continue
        slug = i2s[i]
        rows.append((clk.get(slug, 0), i, slug))
    rows.sort(reverse=True)
    t1 = [r for r in rows if r[0] >= 101]
    t2 = [r for r in rows if 1 <= r[0] <= 100]
    t3 = [r for r in rows if r[0] == 0]
    print(f"=== {key}: {len(rows)} docs resolved ({len(missing)} unresolved) ===")
    print(f"Tier 1 (101+ clicks, deep-merge/keep): {len(t1)}")
    print(f"Tier 2 (1-100, summary-merge):        {len(t2)}")
    print(f"Tier 3 (0 clicks, script bulk-redirect): {len(t3)}")
    print(f"\n--- SURVIVORS to give real LLM work (Tier 1 + Tier 2 = {len(t1)+len(t2)}) ---")
    for c, i, s in t1 + t2:
        print(f"  {c:>4}  {s}")
    print(f"\n--- LONG TAIL (Tier 3, {len(t3)} pages) -> bulk redirect, no LLM ---")
    print("  " + ", ".join(s for _, _, s in t3[:40]) + (" ..." if len(t3) > 40 else ""))
    if missing:
        print(f"\n--- unresolved ids ({len(missing)}) ---")
        print("  " + ", ".join(missing[:40]) + (" ..." if len(missing) > 40 else ""))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "AccessibilityTestingSidebar")
