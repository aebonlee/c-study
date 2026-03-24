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
  <rect x="100" y="220" width="80" height="4" rx="2" fill="url(#accent)"/>

  <!-- Main title -->
  <text x="100" y="290" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="#4FC3F7">C</text>
  <text x="158" y="290" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="white">Master</text>

  <!-- Subtitle -->
  <text x="100" y="340" font-family="Arial, sans-serif" font-size="28" fill="rgba(224,231,239,0.9)">C언어 전문 학습 플랫폼</text>

  <!-- Description -->
  <text x="100" y="400" font-family="Arial, sans-serif" font-size="18" fill="rgba(224,231,239,0.6)">기초 문법부터 포인터, 메모리 관리, 자료구조, 시스템 프로그래밍까지</text>
  <text x="100" y="430" font-family="Arial, sans-serif" font-size="18" fill="rgba(224,231,239,0.6)">체계적인 커리큘럼과 실습으로 C언어를 완벽하게 마스터하세요</text>

  <!-- Feature tags -->
  <rect x="100" y="470" width="100" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="120" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">기초 문법</text>

  <rect x="215" y="470" width="80" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="230" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">포인터</text>

  <rect x="310" y="470" width="110" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="325" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">메모리 관리</text>

  <rect x="435" y="470" width="100" height="32" rx="16" fill="rgba(79,195,247,0.15)"/>
  <text x="450" y="491" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4FC3F7">자료구조</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="620" width="1200" height="10" fill="url(#accent)"/>
</svg>
`

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('OG image generated: public/og-image.png'))
  .catch(err => console.error('Error:', err))
