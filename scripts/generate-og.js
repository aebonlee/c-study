import sharp from 'sharp'

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A1628"/>
      <stop offset="50%" style="stop-color:#1B3A5C"/>
      <stop offset="100%" style="stop-color:#2A5078"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4FC3F7"/>
      <stop offset="100%" style="stop-color:#26C6DA"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="200" fill="rgba(79,195,247,0.05)"/>
  <circle cx="1100" cy="530" r="250" fill="rgba(38,198,218,0.05)"/>
  <circle cx="600" cy="50" r="150" fill="rgba(255,213,79,0.03)"/>

  <!-- Grid pattern -->
  <g opacity="0.03">
    <line x1="0" y1="100" x2="1200" y2="100" stroke="white" stroke-width="1"/>
    <line x1="0" y1="200" x2="1200" y2="200" stroke="white" stroke-width="1"/>
    <line x1="0" y1="300" x2="1200" y2="300" stroke="white" stroke-width="1"/>
    <line x1="0" y1="400" x2="1200" y2="400" stroke="white" stroke-width="1"/>
    <line x1="0" y1="500" x2="1200" y2="500" stroke="white" stroke-width="1"/>
    <line x1="200" y1="0" x2="200" y2="630" stroke="white" stroke-width="1"/>
    <line x1="400" y1="0" x2="400" y2="630" stroke="white" stroke-width="1"/>
    <line x1="600" y1="0" x2="600" y2="630" stroke="white" stroke-width="1"/>
    <line x1="800" y1="0" x2="800" y2="630" stroke="white" stroke-width="1"/>
    <line x1="1000" y1="0" x2="1000" y2="630" stroke="white" stroke-width="1"/>
  </g>

  <!-- Code snippets decoration -->
  <text x="50" y="80" font-family="monospace" font-size="14" fill="rgba(79,195,247,0.15)">#include &lt;stdio.h&gt;</text>
  <text x="900" y="120" font-family="monospace" font-size="14" fill="rgba(79,195,247,0.12)">int *ptr = &amp;x;</text>
  <text x="80" y="550" font-family="monospace" font-size="14" fill="rgba(79,195,247,0.12)">malloc(sizeof(int))</text>
  <text x="850" y="580" font-family="monospace" font-size="14" fill="rgba(79,195,247,0.15)">printf("Hello, C!");</text>

  <!-- Accent line -->
  <rect x="100" y="200" width="80" height="4" rx="2" fill="url(#accent)"/>

  <!-- Main title -->
  <text x="100" y="270" font-family="Arial, sans-serif" font-size="64" font-weight="900" fill="#4FC3F7">C</text>
  <text x="152" y="270" font-family="Arial, sans-serif" font-size="64" font-weight="900" fill="white"> Programming</text>

  <!-- Subtitle -->
  <text x="100" y="320" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="rgba(79,195,247,0.8)">Tutorial</text>

  <!-- Description -->
  <text x="100" y="380" font-family="Arial, sans-serif" font-size="20" fill="rgba(224,231,239,0.7)">C언어 기초부터 고급 시스템 프로그래밍까지</text>
  <text x="100" y="415" font-family="Arial, sans-serif" font-size="20" fill="rgba(224,231,239,0.7)">체계적인 커리큘럼과 브라우저 실습으로 학습하세요</text>

  <!-- Feature tags -->
  <rect x="100" y="470" width="100" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="120" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">32+ 레슨</text>

  <rect x="225" y="470" width="110" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="244" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">100+ 실습</text>

  <rect x="350" y="470" width="120" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="365" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">브라우저 실행</text>

  <rect x="485" y="470" width="100" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="499" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">한/영 지원</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="620" width="1200" height="10" fill="url(#accent)"/>
</svg>
`

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('OG image generated: public/og-image.png'))
  .catch(err => console.error('Error:', err))
