const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Pastikan dist/assets ada (jika belum, jalankan build terlebih dahulu)
if (!fs.existsSync('dist/assets')) {
  console.log('[INFO] dist/assets belum ditemukan. Menjalankan vite build terlebih dahulu...');
  execSync('npm.cmd run build', { stdio: 'inherit' });
}

// 1. Bundle JS into IIFE (Self-executing, no ES module, no CORS issues on file://)
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

// 2. Read compiled CSS from dist/assets/
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
if (!cssFile) {
  throw new Error('File CSS di dist/assets tidak ditemukan.');
}
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

// 3. Create standalone.html (works 100% on file:// double click and offline!)
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#0c4a6e" />

    <title>AquaLumina - Destinasi Rekreasi Air & Kolam Renang Palangka Raya</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="AquaLumina - Destinasi Rekreasi Air & Kolam Renang Palangka Raya" />
    <meta name="description" content="Destinasi rekreasi air terbaik untuk keluarga Anda. Nikmati kolam renang berstandar internasional, area bermain anak, dan air sebening kristal dengan teknologi filtrasi terkini." />
    <meta name="keywords" content="AquaLumina, Kolam Renang Palangka Raya, Waterpark Palangka Raya, Tiket Renang Palangka Raya, Kolam Olympic, Jacuzzi Palangka Raya" />
    <meta name="author" content="AquaLumina" />
    <meta name="robots" content="index, follow" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./logo-aqualumina.png" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AquaLumina" />
    <meta property="og:url" content="https://solusilokal.github.io/AquaLumina/" />
    <meta property="og:title" content="AquaLumina - Destinasi Rekreasi Air & Kolam Renang Palangka Raya" />
    <meta property="og:description" content="Destinasi rekreasi air terbaik untuk keluarga Anda. Nikmati kolam renang berstandar internasional, area bermain anak, dan air sebening kristal dengan teknologi filtrasi terkini." />
    <meta property="og:image" content="https://solusilokal.github.io/AquaLumina/logo-aqualumina.png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/AquaLumina/" />
    <meta name="twitter:title" content="AquaLumina - Destinasi Rekreasi Air & Kolam Renang Palangka Raya" />
    <meta name="twitter:description" content="Destinasi rekreasi air terbaik untuk keluarga Anda. Nikmati kolam renang berstandar internasional, area bermain anak, dan air sebening kristal dengan teknologi filtrasi terkini." />
    <meta name="twitter:image" content="https://solusilokal.github.io/AquaLumina/logo-aqualumina.png" />

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#f0f7f4] min-h-screen text-[#0c4a6e]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('standalone.html written successfully! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
