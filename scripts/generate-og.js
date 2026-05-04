import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir  = resolve(__dirname, '../public');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>

    <!-- Dot grid pattern (28px, mirrors Hero CSS) -->
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="14" cy="14" r="1" fill="white" fill-opacity="0.09"/>
    </pattern>

    <!-- Accent glow (ellipse top-right, mirrors Hero ::before) -->
    <radialGradient id="glow" cx="72%" cy="28%" r="55%" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="#4f8ef7" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#4f8ef7" stop-opacity="0"/>
    </radialGradient>

    <!-- Fade mask: visible top → transparent bottom (mirrors Hero mask-image) -->
    <linearGradient id="fadeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="55%"  stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    <mask id="fadeMask">
      <rect width="1200" height="630" fill="url(#fadeGrad)"/>
    </mask>

  </defs>

  <!-- Base background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>

  <!-- Background decoration (dot grid + glow), faded downward -->
  <g mask="url(#fadeMask)">
    <rect width="1200" height="630" fill="url(#dots)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
  </g>

  <!-- Inset border -->
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="#1e1e1e" stroke-width="1"/>

  <!-- Left accent line -->
  <rect x="80" y="190" width="2" height="250" fill="#4f8ef7" opacity="0.5"/>

  <!-- Logo: lc -->
  <text
    x="112" y="385"
    font-family="Menlo, Monaco, 'Courier New', monospace"
    font-size="190"
    font-weight="500"
    fill="#e8e8e8"
  >lc</text>

  <!-- Logo: accent dot -->
  <circle cx="360" cy="368" r="13" fill="#4f8ef7"/>

  <!-- Divider -->
  <rect x="112" y="408" width="280" height="1" fill="#222222"/>

  <!-- Name -->
  <text
    x="112" y="455"
    font-family="Helvetica Neue, Arial, sans-serif"
    font-size="30"
    font-weight="600"
    fill="#e8e8e8"
  >Luigi Cavalli</text>

  <!-- Role -->
  <text
    x="112" y="495"
    font-family="Menlo, Monaco, 'Courier New', monospace"
    font-size="15"
    fill="#888888"
    letter-spacing="3"
  >FULL STACK DEVELOPER</text>

</svg>
`;

const result = await sharp(Buffer.from(svg))
  .png()
  .toFile(`${publicDir}/og-image.png`);

console.log(`✓ og-image.png — ${(result.size / 1024).toFixed(1)} KB — ${result.width}×${result.height}px`);
