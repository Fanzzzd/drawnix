const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'dist', 'drawnix');
const target = path.join(root, 'packages', 'drawnix', 'dist');

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
fs.rmSync(path.join(target, 'package.json'));

for (const entry of fs.readdirSync(target, { recursive: true })) {
  if (!entry.endsWith('.d.ts')) continue;
  const file = path.join(target, entry);
  const declarations = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(
    file,
    declarations.replaceAll('../../react-board/src/index.ts', '@plait-board/react-board')
  );
}
