const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const packageNames = ['react-text', 'react-board', 'drawnix'];

for (const packageName of packageNames) {
  const source = path.join(root, 'dist', packageName);
  const target = path.join(root, 'packages', packageName, 'dist');

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
  fs.rmSync(path.join(target, 'package.json'));

  for (const entry of fs.readdirSync(target, { recursive: true })) {
    if (!entry.endsWith('.d.ts')) continue;
    const file = path.join(target, entry);
    const declarations = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(
      file,
      declarations
        .replaceAll('../../react-board/src/index.ts', '@plait-board/react-board')
        .replaceAll('../../react-text/src/index.ts', '@plait-board/react-text')
    );
  }
}

// Drawnix's documented single CSS import must also carry the two externalized
// React view packages' base styles.
const drawnixCss = packageNames.map((packageName) =>
  fs.readFileSync(path.join(root, 'dist', packageName, 'index.css'), 'utf8')
);
fs.writeFileSync(
  path.join(root, 'packages', 'drawnix', 'dist', 'index.css'),
  drawnixCss.join('\n')
);
