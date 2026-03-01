const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'public/about-us';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const files = [
    'aboutBg.69c79dab.png',
    'deliveringLuxuryBg.6bf306e4.png',
    '1.e6f15730.png',
    '2.7122f95c.png',
    '3.855f4be2.png',
    '4.40812383.png',
    'ankur-sir-chairman2.e182f787.jpg',
    'ankur-sir-chairmanmob.43050f5c.jpg',
    'developments.e52e11b0.jpg',
    'mortgages.a3644c00.jpg',
    'vacationHomes.2fd40465.jpg',
    'entertainment.da339c73.jpg',
    'left.fcfa48c1.png'
];

let pending = files.length;
files.forEach(file => {
    const url = `https://bnw.ae/_next/static/media/${file}`;
    const dest = path.join(targetDir, file);
    https.get(url, (res) => {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded ${file}`);
            if (--pending === 0) console.log('All downloads finished.');
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${file}: ${err.message}`);
        if (--pending === 0) console.log('All downloads finished.');
    });
});
