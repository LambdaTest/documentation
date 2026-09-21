// Offline checks only: no real agent calls, account credentials, or credit spending.
// Run: node --test scripts/rook-docs.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const yaml = require('js-yaml');

const root = path.resolve(__dirname, '..');
const examples = path.join(root, 'static/resources/rook');
const read = (name) => fs.readFileSync(path.join(examples, name), 'utf8');
const clients = ['claude-code', 'codex', 'gemini-cli', 'copilot-cli', 'opencode', 'cursor-cli', 'vscode', 'windsurf'];
const pages = [...clients, 'coding-agents', 'github-actions', 'jenkins', 'argocd'].map(x => `rook-${x}`);

test.before(() => {
  // Fresh checkouts do not contain the ignored, generated Markdown exports.
  const generated = spawnSync(process.execPath, [
    path.join(root, 'scripts/generate-static-md.js'),
    ...pages.map(slug => path.join(root, 'docs', `${slug}.md`)),
  ], {cwd: root, encoding: 'utf8'});
  assert.equal(generated.status, 0, generated.stderr);
});

test('all integration pages have valid frontmatter, navigation, images, and local links', () => {
  const sidebar = JSON.stringify(require('../sidebars.js').AgentToAgentSidebar);
  for (const slug of pages) {
    const doc = fs.readFileSync(path.join(root, 'docs', `${slug}.md`), 'utf8');
    const fm = yaml.load(doc.match(/^---\n([\s\S]*?)\n---/)[1]);
    assert.equal(fm.id, slug);
    assert.equal(fm.slug, `${slug}/`);
    assert.ok(sidebar.includes(`"${slug}"`), `${slug} is navigable`);
    for (const [, target] of doc.matchAll(/\]\(\/support\/docs\/([^/#)]+)\/?(?:#[^)]*)?\)/g)) {
      assert.ok(fs.existsSync(path.join(root, 'docs', `${target}.md`)), `${slug}: ${target}`);
    }
    for (const [, resource] of doc.matchAll(/\]\((?:pathname:\/\/)?\/support\/resources\/rook\/([^)]*)\)/g)) {
      assert.ok(fs.existsSync(path.join(examples, resource)), `${slug}: ${resource}`);
    }
    for (const [, image] of doc.matchAll(/require\('([^']+)'\)/g)) {
      assert.ok(fs.existsSync(path.resolve(root, 'docs', image)), `${slug}: ${image}`);
    }
    if (slug !== 'rook-coding-agents') {
      assert.match(doc, /rook-local-/);
      assert.match(doc, /rook-web-/);
      assert.match(doc, /https:\/\/rook\.lambdatest\.com\/projects/);
    }
    assert.doesNotMatch(doc, /stage-rook\.lambdatestinternal/);
  }
});

test('downloadable platform examples match the displayed code exactly', () => {
  for (const [slug, file, language] of [
    ['rook-github-actions', 'github-actions.yml', 'yaml'],
    ['rook-jenkins', 'Jenkinsfile', 'groovy'],
    ['rook-argocd', 'Dockerfile', 'dockerfile'],
    ['rook-argocd', 'argocd-job.yaml', 'yaml'],
  ]) {
    const doc = fs.readFileSync(path.join(root, 'docs', `${slug}.md`), 'utf8');
    assert.ok(doc.includes('```' + language + '\n' + read(file).trim() + '\n```'), file);
  }
});

test('Bash snippets parse and Markdown exports preserve their code fences', () => {
  for (const slug of pages) {
    const doc = fs.readFileSync(path.join(root, 'docs', `${slug}.md`), 'utf8');
    const exported = fs.readFileSync(path.join(root, 'static/docs', `${slug}.md`), 'utf8');
    assert.doesNotMatch(exported, /\]\(pathname:\/\//, 'Markdown download links are portable');
    for (const [, resource] of doc.matchAll(/\]\(pathname:\/\/\/support\/resources\/rook\/([^)]*)\)/g)) {
      assert.ok(exported.includes(`](/support/resources/rook/${resource})`));
    }
    for (const [block, language, content] of doc.matchAll(/```([\w]+)\n([\s\S]*?)\n```/g)) {
      assert.ok(exported.includes(block), `${slug}: ${language} block preserved in Markdown export`);
      if (language === 'bash') {
        const result = spawnSync('/bin/bash', ['-n'], {input: content, encoding: 'utf8'});
        assert.equal(result.status, 0, `${slug}: ${result.stderr}`);
      }
    }
  }
});

test('GitHub and Argo YAML preserve credential, artifact, and hook safeguards', () => {
  const workflow = yaml.load(read('github-actions.yml'));
  assert.deepEqual(Object.keys(workflow.on), ['workflow_dispatch']);
  assert.equal(workflow.permissions.contents, 'read');
  const job = workflow.jobs.assurance;
  assert.equal(job.environment, 'rook-assurance');
  assert.match(job.if, /refs\/heads\/main/);
  assert.equal(job.steps.find(s => s.uses?.startsWith('actions/checkout')).with['persist-credentials'], false);
  assert.equal(job.steps.find(s => s.uses?.startsWith('actions/upload-artifact')).if, 'always()');
  assert.equal(job.steps.find(s => s.uses?.startsWith('actions/upload-artifact')).with.path, 'rook-results/');
  const argo = yaml.load(read('argocd-job.yaml'));
  assert.equal(argo.metadata.annotations['argocd.argoproj.io/hook'], 'PostSync');
  assert.equal(argo.spec.backoffLimit, 0);
  assert.equal(argo.spec.template.spec.automountServiceAccountToken, false);
  assert.ok(argo.spec.template.spec.volumes.some(v => v.persistentVolumeClaim));
  const environment = argo.spec.template.spec.containers[0].env;
  for (const name of ['LT_USERNAME', 'LT_ACCESS_KEY', 'AGENT_TOKEN']) {
    assert.ok(environment.find(v => v.name === name).valueFrom.secretKeyRef);
  }
});

const goodReport = () => ({run_id: 'run-1', dir: '.testmuai/rook/projects/project-1/agents/agent-1/runs/run-1', report: {
  run_id: 'run-1', totals: {planned: 3, executed: 3, passed: 3, failed: 0, unverifiable: 0, unjudged: 0, not_run: 0, unrunnable: 0}, clusters: [],
}});
const goodRun = () => ({ok: true, halted: false, run_id: 'run-1', report: {totals: goodReport().report.totals}});

function runGate(t, {run = goodRun(), report = goodReport(), runExit = 0, env = {}, rawRun, syncExit = 0} = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rook-gate-test-'));
  t.after(() => fs.rmSync(dir, {recursive: true, force: true}));
  const bin = path.join(dir, 'bin');
  fs.mkdirSync(bin);
  const runDir = path.join(dir, '.testmuai/rook/projects/project-1/agents/agent-1/runs/run-1');
  fs.mkdirSync(runDir, {recursive: true});
  fs.writeFileSync(path.join(runDir, 'verdict.yaml'), 'fixture: true\n');
  fs.writeFileSync(path.join(dir, 'mock-run.json'), rawRun ?? JSON.stringify(run));
  fs.writeFileSync(path.join(dir, 'mock-report.json'), JSON.stringify(report));
  fs.writeFileSync(path.join(bin, 'rook'), `#!/bin/bash
printf '%s\\n' "$*" >> "$MOCK_DIR/calls.txt"
case "$1" in
  run) cat "$MOCK_DIR/mock-run.json"; exit "$MOCK_RUN_EXIT" ;;
  report) cat "$MOCK_DIR/mock-report.json" ;;
  sync) exit "$MOCK_SYNC_EXIT" ;;
  *) exit 0 ;;
esac
`, {mode: 0o700});
  const result = spawnSync('/bin/bash', [path.join(examples, 'rook-ci.sh')], {
    cwd: dir, encoding: 'utf8', timeout: 10000,
    env: {PATH: `${bin}:${process.env.PATH}`, LT_USERNAME: 'test-only', LT_ACCESS_KEY: 'test-only',
      ROOK_HOME: path.join(dir, 'isolated-home'), ROOK_PROJECT_ID: 'project-1', ROOK_AGENT_ID: 'agent-1',
      ROOK_PROFILE: 'staging', ROOK_SCENARIO_IDS: 'SC-001,SC-004,SC-014',
      MOCK_DIR: dir, MOCK_RUN_EXIT: String(runExit), MOCK_SYNC_EXIT: String(syncExit), ...env},
  });
  assert.equal(result.error, undefined);
  return {...result, dir};
}

test('gate passes a complete suite, fetches its exact report, and archives evidence', t => {
  const result = runGate(t);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Rook release gate passed/);
  assert.ok(fs.existsSync(path.join(result.dir, 'rook-results/evidence.tar.gz')));
  const calls = fs.readFileSync(path.join(result.dir, 'calls.txt'), 'utf8');
  assert.match(calls, /report run-1 --json/);
  assert.doesNotMatch(calls, /explore|generate|--yes|--test/);
});

for (const [name, change] of [
  ['failed verdict', r => {r.report.totals.failed = 1; r.report.totals.passed = 2;}],
  ['unable to verify', r => {r.report.totals.unverifiable = 1; r.report.totals.passed = 2;}],
  ['unjudged scenario', r => {r.report.totals.unjudged = 1; r.report.totals.passed = 2;}],
  ['not run', r => {r.report.totals.not_run = 1; r.report.totals.executed = 2; r.report.totals.passed = 2;}],
  ['unrunnable gap', r => {r.report.totals.unrunnable = 1;}],
  ['missing counts', r => {delete r.report.totals.failed;}],
  ['string counts', r => {r.report.totals.passed = '3';}],
  ['wrong run ID', r => {r.run_id = 'older-run';}],
  ['wrong nested run ID', r => {r.report.run_id = 'older-run';}],
  ['unexpected suite size', r => {r.report.totals.planned = 2; r.report.totals.executed = 2; r.report.totals.passed = 2;}],
  ['compromised evidence', r => {r.report.clusters = [{kind: 'compromised'}];}],
]) {
  test(`gate blocks ${name} despite process exit zero`, t => {
    const report = goodReport(); change(report);
    const result = runGate(t, {report});
    assert.notEqual(result.status, 0, result.stdout);
    assert.ok(fs.existsSync(path.join(result.dir, 'rook-results/evidence.tar.gz')));
  });
}

for (const [name, options] of [
  ['halted run', {run: {...goodRun(), halted: true}}],
  ['declined run', {run: {...goodRun(), discarded: 'declined'}}],
  ['refused run', {run: {...goodRun(), discarded: 'refused'}, runExit: 1}],
  ['missing run ID', {run: {ok: true, halted: false, report: {}}}],
  ['empty JSON', {rawRun: ''}],
  ['malformed JSON', {rawRun: 'not json'}],
  ['nonzero run exit', {runExit: 2}],
  ['sync failure', {syncExit: 1}],
  ['duplicate scenario IDs', {env: {ROOK_SCENARIO_IDS: 'SC-001,SC-001'}}],
  ['missing credentials', {env: {LT_ACCESS_KEY: ''}}],
]) {
  test(`gate rejects ${name}`, t => {
    const result = runGate(t, options);
    assert.notEqual(result.status, 0);
    const calls = fs.existsSync(path.join(result.dir, 'calls.txt')) ? fs.readFileSync(path.join(result.dir, 'calls.txt'), 'utf8') : '';
    assert.doesNotMatch(calls, /report /, 'must not fall back to an old/default report');
  });
}

test('newline-separated grants remain literal tool rules', t => {
  const result = runGate(t, {env: {ROOK_ALLOW_RULES: 'bash(npm test)\nhttp(https://test.example/api)'}});
  assert.equal(result.status, 0, result.stderr);
  assert.match(fs.readFileSync(path.join(result.dir, 'calls.txt'), 'utf8'), /--allow bash\(npm test\) --allow http\(https:\/\/test.example\/api\)/);
});

test('reusing an output directory fails before executing a second run', t => {
  const result = runGate(t);
  assert.equal(result.status, 0);
  const repeated = runGate(t, {env: {ROOK_RESULTS_DIR: path.join(result.dir, 'rook-results')}});
  assert.notEqual(repeated.status, 0);
  assert.equal(fs.existsSync(path.join(repeated.dir, 'calls.txt')), false);
});
