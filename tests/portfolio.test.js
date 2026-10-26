/**
 * Portfolio Template Integrity Test
 * Validates core files, semantic elements, and color palette declarations.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS: ${message}`);
  }
}

console.log('--- Running Portfolio Template Tests ---');

// 1. Verify core structure
const expectedFiles = [
  'index.html',
  'README.md',
  'CONTRIBUTING.md',
  '.gitignore',
  '.env.example',
  path.join('src', 'css', 'style.css'),
  path.join('src', 'js', 'main.js')
];

expectedFiles.forEach(file => {
  const fullPath = path.join(ROOT_DIR, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
});

// 2. Verify HTML semantics & essential IDs
if (fs.existsSync(path.join(ROOT_DIR, 'index.html'))) {
  const html = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
  assert(/<header[\s>]/i.test(html), 'Semantic <header> present');
  assert(/<nav[\s>]/i.test(html), 'Semantic <nav> present');
  assert(/id=["']about["']/i.test(html), 'Section #about present');
  assert(/id=["']works["']/i.test(html), 'Section #works present');
  assert(/id=["']skills["']/i.test(html), 'Section #skills present');
  assert(/id=["']contact["']/i.test(html), 'Section #contact present');
  assert(/<footer[\s>]/i.test(html), 'Semantic <footer> present');
}

// 3. Verify CSS custom properties for required color palette
if (fs.existsSync(path.join(ROOT_DIR, 'src', 'css', 'style.css'))) {
  const css = fs.readFileSync(path.join(ROOT_DIR, 'src', 'css', 'style.css'), 'utf8');
  assert(css.includes('#4C2365') || css.includes('#4c2365'), 'CSS contains primary color #4C2365');
  assert(css.includes('#7F5D99') || css.includes('#7f5d99'), 'CSS contains secondary color #7F5D99');
  assert(css.includes('#9E7EB5') || css.includes('#9e7eb5'), 'CSS contains accent color #9E7EB5');
  assert(css.includes('#C4A4DA') || css.includes('#c4a4da'), 'CSS contains light color #C4A4DA');
}

console.log('--- Tests Completed ---');
