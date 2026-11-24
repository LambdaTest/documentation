/**
 * Shared utilities for the API Reference components.
 */

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\.$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
