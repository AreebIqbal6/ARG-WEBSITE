const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      results.push(full);
    }
  }
  return results;
}

const files = walk('src');
const destinationMap = {};
const allButtons = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');

  // Match Next.js Link href="..."
  const linkRegex = /<Link[\s\S]*?href=\{?["']([^"'\}]+)["']\}?[\s\S]*?>([\s\S]*?)<\/Link>/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    // extract inner text
    const text = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!destinationMap[href]) destinationMap[href] = [];
    destinationMap[href].push({ file: rel, text });
  }

  // Match button tags
  const btnRegex = /<button[\s\S]*?>([\s\S]*?)<\/button>/g;
  while ((match = btnRegex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    allButtons.push({ file: rel, text });
  }
});

console.log('=== DESTINATION BREAKDOWN ===');
for (const [dest, items] of Object.entries(destinationMap)) {
  console.log(`\nDestination: "${dest}" (${items.length} occurrences):`);
  items.forEach(it => console.log(`  - [${it.file}] "${it.text}"`));
}
