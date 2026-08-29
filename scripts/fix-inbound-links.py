#!/usr/bin/env python3
"""Repoint inbound internal links after pages are merged/redirected (Option 2).

Reads every _docs-ia/*-redirect-map.csv, builds {old-slug -> target-path}, then
rewrites all inbound `/support/docs/<old-slug>/` and `/docs/<old-slug>/` links
(with or without a trailing #anchor) across docs/*.md to the redirect target.
This is the repo-wide pass that prevents the broken-link CI failure class.

Usage:
  python scripts/fix-inbound-links.py           # dry-run: list what would change
  python scripts/fix-inbound-links.py --apply   # write the changes
"""
import csv, glob, os, re, sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
IA = os.path.join(ROOT, "_docs-ia")
DOCS = os.path.join(ROOT, "docs")


def slug_of(url):
    u = url.split("#")[0].split("?")[0]
    m = re.search(r"/support/docs/([^/]+)/?", u)
    return m.group(1) if m else None


def target_path(url):
    m = re.search(r"/support/docs/.*$", url)
    return m.group(0) if m else url


def load_map():
    mp = {}
    for f in glob.glob(os.path.join(IA, "*-redirect-map.csv")):
        with open(f, encoding="utf-8-sig", newline="") as fh:
            for d in csv.DictReader(fh):
                src = (d.get("Source URL") or d.get("Source URL (old)") or "").strip()
                tgt = (d.get("Target URL") or d.get("Target URL (301)") or "").strip()
                s = slug_of(src)
                if s and tgt:
                    mp[s] = target_path(tgt)
    return mp


def main(apply=False):
    mp = load_map()
    if not mp:
        print("No redirect maps found.")
        return
    total_hits = 0
    changed = []
    for f in glob.glob(os.path.join(DOCS, "*.md")):
        self_slug = os.path.basename(f)[:-3]
        txt = open(f, encoding="utf-8", errors="surrogateescape").read()
        new = txt
        hits = 0
        for slug, tgt in mp.items():
            if slug == self_slug:
                continue  # never rewrite a page's own self-references
            pat = re.compile(r"/(?:support/)?docs/" + re.escape(slug) + r"/(?:#[\w-]+)?")
            new, n = pat.subn(tgt, new)
            hits += n
        if new != txt:
            changed.append((os.path.relpath(f, ROOT), hits))
            total_hits += hits
            if apply:
                open(f, "w", encoding="utf-8", errors="surrogateescape", newline="").write(new)
    if not changed:
        print("Clean - no inbound links to merged/redirected pages.")
        return
    for rel, hits in sorted(changed, key=lambda x: -x[1]):
        print(("APPLIED " if apply else "WOULD FIX ") + f"{rel}  ({hits} link(s))")
    print(f"\n{'Applied' if apply else 'Dry-run'}: {len(changed)} file(s), {total_hits} link(s).")
    if not apply:
        print("Re-run with --apply to write.")


if __name__ == "__main__":
    main(apply="--apply" in sys.argv)
