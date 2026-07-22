/**
 * Generates the Mintlify-style skills discovery index at
 * /static/.well-known/skills/index.json from static/docs/SKILL.md.
 *
 * Served URL (baseUrl /support/):
 *   /support/.well-known/skills/index.json
 *   /support/docs/SKILL.md  (canonical skill, tracked)
 *
 * See: https://www.mintlify.com/docs/ai/skillmd
 * Regenerated on every build via prestart/prebuild.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKILL_SRC = path.join(ROOT, 'static', 'docs', 'SKILL.md');
const SKILLS_DIR = path.join(ROOT, 'static', '.well-known', 'skills');

/** Parse `name` and `description` from the SKILL.md YAML frontmatter. */
function parseSkillMeta(raw) {
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const block = fm ? fm[1] : '';
  const name = (block.match(/^name:\s*(.+)$/m) || [])[1];

  let description = '';
  const descLine = block.match(/^description:\s*(.*)$/m);
  if (descLine) {
    const marker = descLine[1].trim();
    if (['>', '|', '>-', '|-'].includes(marker)) {
      const after = block.slice(block.indexOf(descLine[0]) + descLine[0].length);
      const lines = [];
      for (const line of after.split(/\r?\n/)) {
        if (/^\s+\S/.test(line) || line.trim() === '') lines.push(line.trim());
        else break;
      }
      description = lines.join(' ').trim();
    } else {
      description = marker.replace(/^["']|["']$/g, '');
    }
  }
  return { name: (name || 'skill').trim(), description };
}

function main() {
  if (!fs.existsSync(SKILL_SRC)) {
    console.warn(`⚠️  ${SKILL_SRC} not found; skipping skills index.`);
    return;
  }

  const { name, description } = parseSkillMeta(fs.readFileSync(SKILL_SRC, 'utf8'));

  fs.mkdirSync(SKILLS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(SKILLS_DIR, 'index.json'),
    JSON.stringify({ skills: [{ name, description, files: ['SKILL.md'] }] }) + '\n',
    'utf8'
  );

  console.log(`✅ Generated /support/.well-known/skills/index.json for "${name}"`);
}

main();
