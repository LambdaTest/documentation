/**
 * Generates individual Docusaurus page files for each API endpoint.
 * Output: src/pages/api-doc/{api-slug}/{group-slug}/{endpoint-slug}.jsx
 * These files are gitignored and regenerated on every build.
 *
 * Usage: node scripts/generate-api-pages.js
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'api', 'all-apis.json');
const OUT_DIR = path.join(__dirname, '..', 'src', 'pages', 'api-doc');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\.$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
let count = 0;

data.apis.forEach((api) => {
  const apiSlug = slugify(api.name);

  api.groups.forEach((group) => {
    const groupSlug = slugify(group.noHeading ? api.name : group.name);

    (group.endpoints || []).forEach((ep) => {
      const epSlug = slugify(ep.name);
      const dir = path.join(OUT_DIR, apiSlug, groupSlug);
      const file = path.join(dir, `${epSlug}.jsx`);

      fs.mkdirSync(dir, { recursive: true });

      const content = `// AUTO-GENERATED — do not edit. Run scripts/generate-api-pages.js to regenerate.
import ApiDocPage from '../../_ApiDocPage';
export default function Page() {
  return (
    <ApiDocPage
      apiSlug="${apiSlug}"
      groupSlug="${groupSlug}"
      endpointSlug="${epSlug}"
    />
  );
}
`;
      fs.writeFileSync(file, content, 'utf8');
      count++;
    });
  });
});

console.log(`✅ Generated ${count} API endpoint pages.`);
