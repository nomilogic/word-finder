const fs = require('fs');
const path=require('path');
//const words = ['zootomically', 'zootomies', 'zootomist', 'zoototemism', 'zootoxin', 'zootrophy', 'zootrophic', 'zooxanthella', 'zooxanthellae', 'zooxanthin', 'zoozoo', 'zophophori', 'zophori', 'zophorus', 'zopilote', 'zoque', 'zoquean', 'zoraptera', 'zorgite', 'zori', 'zoril', 'zorilla', 'zorillas', 'zorille', 'zorilles', 'zorillinae', 'zorillo', 'zorillos', 'zorils', 'zoris', 'zoroaster', 'zoroastra', 'zoroastrian', 'zoroastrianism', 'zoroastrians', 'zoroastrism', 'zorotypus', 'zorrillo', 'zorro', 'zortzico', 'zosma', 'zoster', 'zostera', 'zosteraceae', 'zosteriform', 'zosteropinae', 'zosterops', 'zosters', 'zouave', 'zouaves', 'zounds', 'zowie', 'zs', 'zubeneschamali', 'zubr', 'zuccarino', 'zucchetti', 'zucchetto', 'zucchettos', 'zucchini', 'zucchinis', 'zucco', 'zuchetto', 'zudda', 'zuffolo', 'zufolo', 'zugtierlast', 'zugtierlaster', 'zugzwang', 'zuisin', 'zuleika', 'zulhijjah', 'zulinde', 'zulkadah', 'zulu', 'zuludom', 'zuluize', 'zulus', 'zumatic', 'zumbooruk', 'zuni', 'zunian', 'zunyite', 'zunis', 'zupanate', 'zurich', 'zurlite', 'zutugil', 'zuurveldt', 'zuza', 'zwanziger', 'zwieback', 'zwiebacks', 'zwieselite', 'zwinglian', 'zwinglianism', 'zwinglianist', 'zwitter', 'zwitterion', 'zwitterionic'];

const {words}=require('./words');
// Group words by their length
const wordsByLength = words.reduce((acc, word) => {
  const length = word.length;
  if (!acc[length]) {
    acc[length] = [];
  }
  acc[length].push(word);
  return acc;
}, {});

const outputDir = path.join(__dirname, '../src/app/wordFiles');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate and write TypeScript files
Object.keys(wordsByLength).forEach(length => {
  const words = wordsByLength[length];
  const content = `export const wordsL${length} = ${JSON.stringify(words, null, 2)};\n`;
  fs.writeFileSync(path.join(outputDir, `words-l${length}.ts`), content);
});

console.log('TypeScript files have been generated.');
