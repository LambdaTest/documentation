import {compile} from '@mdx-js/mdx';
import fs from 'node:fs';
const f=process.argv[2];
let src=fs.readFileSync(f,'utf8');
src=src.replace(/^---[\s\S]*?\n---\r?\n/,'');
try{ await compile(src,{format:'mdx'}); console.log('compile ok', f);}catch(e){ console.log('FAIL', e.message);}
